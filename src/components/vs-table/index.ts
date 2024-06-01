import type { ButtonProps, TableColumnCtx, TableProps } from 'element-plus'
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
export interface VsTableRowOperateItem {
  label: string
  value: string
  code?: string // 权限标识符
  type?: 'primary' | 'success' | 'warning' | 'danger' | 'info'
  color?: string
  show?: (row: Record<string, any>, fieldName?: string, code?: string) => boolean
  showFieldName?: string
  props?: Partial<ButtonProps>
}
export { VsTable }
