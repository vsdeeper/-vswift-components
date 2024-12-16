import type { TimePickerDefaultProps } from 'element-plus'
import DTimePicker from './d-time-picker.vue'

export type DTimePickerInstance = InstanceType<typeof DTimePicker>
export type DTimePickerOptions = Partial<TimePickerDefaultProps> & { label?: string }
export { DTimePicker }
