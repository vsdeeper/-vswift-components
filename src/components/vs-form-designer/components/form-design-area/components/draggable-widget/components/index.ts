import { last, pascal } from 'radash'
import type { DTextInstance } from '.'
import type { AsyncComponentLoader } from 'vue'

export * from './d-text'
export * from './d-input'
export * from './d-input-number'
export * from './d-radio'
export * from './d-checkbox'

// 生成动态组件对象
export type DComponentMap = {
  Text?: DTextInstance
}
export type DComponentKey = keyof DComponentMap

const matchFiles = import.meta.glob('./**/d-*.vue')
const DComponent: DComponentMap = {}

for (const filePath in matchFiles) {
  const filePathArr = filePath.split('/')
  const key = pascal(
    last(filePathArr)?.replace('d-', '').replace('.vue', '') ?? 'Unknown'
  ) as DComponentKey
  DComponent[key] = defineAsyncComponent({
    loader: matchFiles[filePath] as AsyncComponentLoader
  })
}

export { DComponent }
