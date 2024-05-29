import type { TableColumnCtx, TableProps } from 'element-plus'
import VsTable from './vs-table.vue'

export type VsTableProps = Partial<TableProps<Record<string, any>>>
export type VsTableColumnProps = Partial<TableColumnCtx<any>>
export type VsTableInstance = InstanceType<typeof VsTable>
export interface VsTableColumnItem {
  label: string
  prop?: string
  width?: number | string
  minWidth?: number | string
  fixed?: boolean | 'left' | 'right'
  highlightCurrentRow?: boolean
  children?: VsTableColumnItem[]
  columnProps?: VsTableColumnProps
}
export { VsTable }
