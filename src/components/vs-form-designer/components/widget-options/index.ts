export { default as WidgetOptions } from './widget-options.vue'

export interface WidgetOptionItem {
  label: string
  value: string
  children?: WidgetOptionItem[]
}
