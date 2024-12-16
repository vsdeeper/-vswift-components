import type { ISelectProps } from 'element-plus'
import DSelect from './d-select.vue'

export type DSelectInstance = InstanceType<typeof DSelect>
export type DSelectOptions = Partial<ISelectProps> & {
  label?: string
  optionItems?: Record<string, any>[]
  itemLabel?: string
  itemValue?: string
}
export { DSelect }
