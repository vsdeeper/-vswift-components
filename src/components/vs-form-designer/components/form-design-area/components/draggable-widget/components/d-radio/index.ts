import type { RadioButtonProps, RadioGroupProps, RadioProps } from 'element-plus'
import DRadio from './d-radio.vue'

export type DRadioInstance = InstanceType<typeof DRadio>
export type DRadioOptions = Partial<RadioGroupProps> & {
  label?: string
  optionData?: Record<string, any>[]
  itemLabel?: string
  itemValue?: string
  radioType?: 'button'
  radioProps?: Partial<RadioProps>
  radioButtonProps?: Partial<RadioButtonProps>
}
export { DRadio }
