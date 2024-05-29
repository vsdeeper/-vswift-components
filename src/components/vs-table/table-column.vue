<script setup lang="ts">
import type { VsTableColumnItem } from '.'

defineProps<{
  col: VsTableColumnItem
}>()
</script>

<template>
  <el-table-column :prop="col.prop" :label="col.label" :width="col.width" v-bind="col.columnProps">
    <template #default="scope">
      <slot :name="col.prop" v-bind="scope" />
    </template>
  </el-table-column>
</template>
