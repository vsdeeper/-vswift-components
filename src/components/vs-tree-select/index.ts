import { type TreeKey } from 'element-plus/es/components/tree/src/tree.type'
import VsTreeSelect from './vs-tree-select.vue'

export type VsTreeSelectValueItem = TreeKey | Record<string, any>
export type VsTreeSelectValue = VsTreeSelectValueItem | VsTreeSelectValueItem[]
export type VsTreeSelectInstance = InstanceType<typeof VsTreeSelect>
export { VsTreeSelect }
