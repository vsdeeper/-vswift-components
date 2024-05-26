import { last, pascal } from 'radash'
import type { SInputInstance, SSelectInstance, SCascaderInstance, SDateInstance } from '.'
import type { AsyncComponentLoader } from 'vue'

export * from './s-input'
export * from './s-select'
export * from './s-cascader'
export * from './s-date'

// 生成动态组件对象
export type SComponentMap = {
  Input?: SInputInstance
  Select?: SSelectInstance
  Cascader?: SCascaderInstance
  Date?: SDateInstance
}
export type SComponentKey = keyof SComponentMap

const matchFiles = import.meta.glob('./**/s-*.vue')
const SComponent: SComponentMap = {}

for (const filePath in matchFiles) {
  const filePathArr = filePath.split('/')
  const key = pascal(
    last(filePathArr)?.replace('s-', '').replace('.vue', '') ?? 'Unknown'
  ) as SComponentKey
  SComponent[key] = defineAsyncComponent({
    loader: matchFiles[filePath] as AsyncComponentLoader
  })
}

export { SComponent }
