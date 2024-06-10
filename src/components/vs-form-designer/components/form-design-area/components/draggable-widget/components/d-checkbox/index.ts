import type { CheckboxGroupProps, CheckboxProps } from 'element-plus'
import DCheckbox from './d-checkbox.vue'

export type DCheckboxInstance = InstanceType<typeof DCheckbox>
export type DCheckboxOptions = Partial<CheckboxGroupProps> & {
  options?: Record<string, any>[]
  itemLabel?: string
  itemValue?: string
  checkboxType?: 'default' | 'button'
  checkboxProps?: Partial<CheckboxProps>
  checkboxButtonProps?: Partial<CheckboxProps>
}
export { DCheckbox }
