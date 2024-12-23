import type { InputProps } from 'element-plus'
import DInput from './d-input.vue'

export type DInputInstance = InstanceType<typeof DInput>
export type DInputOptions = Partial<InputProps> & {
  label?: string
  pattern?: string
  patternMessage?: string
  columnWidth?: number
  columnMinWidth?: number
}
export { DInput }
