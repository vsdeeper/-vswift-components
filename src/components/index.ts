import { type AsyncComponentLoader } from 'vue'
import { last, pascal } from 'radash'
import type { VsColorPickerInstance, VsDividerTitleInstance, VsLabelInstance } from '.'
import 'element-plus/theme-chalk/display.css'

export * from './config'
export * from './vs-color-picker'
export * from './vs-divider-title'
export * from './vs-label'
export * from './vs-tree-select'
export * from './vs-search'
export * from './vs-table'
export * from './vs-form-designer'

// 生成动态组件对象
export type VsComponentMap = {
  VsColorPicker?: VsColorPickerInstance
  VsDividerTitle?: VsDividerTitleInstance
  VsLabel?: VsLabelInstance
}
export type VsComponentKey = keyof VsComponentMap

const matchFiles = import.meta.glob('./**/my-*.vue')
const VsComponent: VsComponentMap = {}

for (const filePath in matchFiles) {
  const filePathArr = filePath.split('/')
  const key = pascal(last(filePathArr)?.replace('.vue', '') ?? 'Unknown') as VsComponentKey
  VsComponent[key] = defineAsyncComponent({
    loader: matchFiles[filePath] as AsyncComponentLoader
  })
}

export { VsComponent }
