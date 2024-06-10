import type { DatePickerProps } from 'element-plus'
import DDatetimePicker from './d-datetime-picker.vue'

export type DDatetimePickerInstance = InstanceType<typeof DDatetimePicker>
export type DDatetimePickerOptions = Partial<DatePickerProps>
export { DDatetimePicker }
