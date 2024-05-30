<script setup lang="ts">
import type { VsTableColumnItem } from '.'

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
    />
  </el-table-column>
  <el-table-column
    v-else
    :prop="col.prop"
    :label="col.label"
    :width="col.width"
    :min-width="col.minWidth"
    v-bind="col.columnProps"
  >
    <template #default="scope">
      <slot :name="col.prop" v-bind="scope">{{ scope.row[col.prop!] }}</slot>
    </template>
  </el-table-column>
</template>
