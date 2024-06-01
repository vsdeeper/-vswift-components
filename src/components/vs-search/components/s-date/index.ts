import SDate from './s-date.vue'

export type SDateInstance = InstanceType<typeof SDate>
export type SDateValue = Date | [Date, Date] | [number, number] | [string, string]
export { SDate }
