<script setup lang="ts">
import type { VsTableProps, VsTableColumnItem, VsTableRowOperateItem } from '.'
import TableColumn from './table-column.vue'
import config from '../config'
import { getSlots } from './util'
import type { LoadingBinding } from 'element-plus/es/components/loading/src/directive.mjs'
import type { PaginationProps } from 'element-plus'

withDefaults(
  defineProps<{
    data?: Record<string, any>[]
    loading?: LoadingBinding
    showIndex?: boolean
    showSelection?: boolean
    showPagination?: boolean
    paginationAlign?: 'left' | 'right'
    tableOperateAlign?: 'left' | 'right'
    columns?: VsTableColumnItem[]
    rowOperateItems?: VsTableRowOperateItem[]
    tableProps?: VsTableProps
    paginationProps?: Partial<PaginationProps>
  }>(),
  {
    loading: false,
    paginationAlign: 'right',
    tableOperateAlign: 'right'
  }
)

const slots = computed(() => useSlots())

function displayOperateItem(row: Record<string, any>, item: VsTableRowOperateItem) {
  const { show, showFieldName = 'status', code /** 权限标识符 */ } = item
  if (!show) return true
  return show(row, showFieldName, code)
}
</script>

<template>
  <el-config-provider :locale="config.locale">
    <div v-loading="loading" class="vs-table">
      <div v-if="slots['table-operate']" :class="['operate', tableOperateAlign]">
        <slot name="table-operate" />
      </div>
      <el-table v-bind="tableProps" :data="data">
        <el-table-column v-if="showSelection" type="selection" width="55" />
        <el-table-column v-if="showIndex" type="index" width="50" :index="(index) => index + 1" />
        <TableColumn v-for="(col, index) in columns" :key="`${col.label}${col.prop}${index}`" :col>
          <template v-for="slot in getSlots(columns)" #[slot]="scope">
            <slot :name="slot" v-bind="scope" />
          </template>
        </TableColumn>
        <el-table-column v-if="rowOperateItems?.length">
          <template #default="{ row }">
            <template v-for="item in rowOperateItems" :key="item.value">
              <el-button
                v-if="displayOperateItem(row, item)"
                v-bind="item.props"
                :type="item.type"
                :color="item.color"
                link
              ></el-button>
            </template>
          </template>
        </el-table-column>
      </el-table>
      <div :class="['pagination', paginationAlign]">
        <el-pagination
          v-bind="paginationProps"
          background
          layout="prev, pager, next"
          :total="1000"
        />
      </div>
    </div>
  </el-config-provider>
</template>

<style lang="scss" scoped>
.vs-table {
  .operate {
    display: flex;
    margin: 10px 0;
    &.right {
      justify-content: flex-end;
    }
    &.left {
      justify-content: flex-start;
    }
  }
  .pagination {
    display: flex;
    margin: 15px 0;
    &.right {
      justify-content: flex-end;
    }
    &.left {
      justify-content: flex-start;
    }
  }
  :deep(.el-button + .el-button) {
    margin-left: 5px;
  }
}
</style>
