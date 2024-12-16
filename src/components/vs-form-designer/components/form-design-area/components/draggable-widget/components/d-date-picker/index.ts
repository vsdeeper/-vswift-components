import type { DatePickerProps } from 'element-plus'
import DDatePicker from './d-date-picker.vue'

export type DDatePickerInstance = InstanceType<typeof DDatePicker>
export type DDatePickerOptions = Partial<DatePickerProps> & { label?: string }
export { DDatePicker }
