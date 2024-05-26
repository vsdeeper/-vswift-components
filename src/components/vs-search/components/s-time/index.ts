import type { TimePickerDefaultProps } from 'element-plus'
import STime from './s-time.vue'

export type STimeInstance = InstanceType<typeof STime>
export type STimeProps = Partial<TimePickerDefaultProps>
export type STimeValue = Date | [Date, Date] | [number, number] | [string, string]
export { STime }
