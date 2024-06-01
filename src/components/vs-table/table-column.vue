<script setup lang="ts">
import type { VsTableColumnItem } from '.'
import { getSlots } from './util'

defineProps<{
  col: VsTableColumnItem
}>()
</script>

<template>
  <el-table-column
    v-if="col.children?.length"
    :prop="col.prop"
    :label="col.label"
    :width="col.width"
    :min-width="col.minWidth"
    v-bind="col.columnProps"
  >
    <TableColumn
      v-for="(col1, index1) in col.children"
      :key="`${col1.label}${col1.prop}${index1}`"
      :col="col1"
    >
      <template v-for="slot in getSlots(col.children)" #[slot]="scope">
        <slot :name="slot" v-bind="scope" />
      </template>
    </TableColumn>
  </el-table-column>
  <el-table-column
    v-else
    :prop="col.prop"
    :label="col.label"
    :width="col.width"
    :min-width="col.minWidth"
    v-bind="col.columnProps"
  >
    <template v-if="col.prop" #default="scope">
      <slot :name="col.prop" v-bind="scope">
        {{ scope.row[col.prop] }}
      </slot>
    </template>
  </el-table-column>
</template>
