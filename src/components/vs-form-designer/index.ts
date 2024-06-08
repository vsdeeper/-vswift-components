import VsFormDesigner from './vs-form-designer.vue'

export type WidgetType =
  // 以下基础组件
  | 'text'
  // 以下表单组件
  | 'input'
  | 'input-number'
  | 'radio'
  | 'checkbox'
  | 'select'
  | 'cascader'
  | 'date-picker'
  | 'datetime-picker'
  | 'time-picker'
  | 'upload'
  // 以下其他组件
  | 'divider'
export interface WidgetSetting {
  id: string
  type: WidgetType
  options: Record<string, any>
  [key: string]: any
}
export type VsFormDesignerInstance = InstanceType<typeof VsFormDesigner>
export { VsFormDesigner }
