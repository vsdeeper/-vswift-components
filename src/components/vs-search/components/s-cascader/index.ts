import type { cascaderProps } from 'element-plus'
import SCascader from './s-cascader.vue'
import type { ExtractPropTypes } from 'vue'

export type SCascaderInstance = InstanceType<typeof SCascader>
export type SCascaderProps = Partial<ExtractPropTypes<typeof cascaderProps>>
export { SCascader }
