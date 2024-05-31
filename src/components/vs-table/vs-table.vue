<script setup lang="ts">
import type { VsTableProps, VsTableColumnItem } from '.'
import TableColumn from './table-column.vue'
import config from '../config'
import { getSlots } from './util'

defineProps<{
  data?: Record<string, any>[]
  showIndex?: boolean
  showSelection?: boolean
  columns?: VsTableColumnItem[]
  tableProps?: VsTableProps
}>()
</script>

<template>
  <el-config-provider :locale="config.locale">
    <div class="vs-table">
      <el-table :data="data" v-bind="tableProps">
        <el-table-column v-if="showSelection" type="selection" width="55" />
        <el-table-column v-if="showIndex" type="index" width="50" :index="(index) => index + 1" />
        <TableColumn v-for="(col, index) in columns" :key="`${col.label}${col.prop}${index}`" :col>
          <template v-for="slot in getSlots(columns)" #[slot]="scope">
            <slot :name="slot" v-bind="scope" />
          </template>
        </TableColumn>
      </el-table>
    </div>
  </el-config-provider>
</template>
