import type { FormProps } from 'element-plus'
import VsFormDesigner from './vs-form-designer.vue'

export type WidgetType =
  // 以下组件分类
  | 'basic'
  | 'form'
  | 'custom'
  // 以下基础组件
  | 'text'
  | 'grid-layout'
  | 'table-layout'
  | 'divider'
  | 'data-table'
  | 'recursive-area'
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
// 以下自定义组件
export interface WidgetDesignData {
  id: string
  type: WidgetType
  options: Record<string, any>
  widgetList?: WidgetDesignData[]
  [key: string]: any
}
export interface FormDesignData {
  form: Partial<FormProps>
  widgetList: WidgetDesignData[]
}
export type VsFormDesignerInstance = InstanceType<typeof VsFormDesigner>
export { VsFormDesigner }
