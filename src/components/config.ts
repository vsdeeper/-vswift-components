import type { Language } from 'element-plus/es/locales.mjs'
import zhCn from 'element-plus/es/locale/lang/zh-cn'

export interface VsComponentConfig {
  namespace?: string // 命名空间
  locale?: Language // 组件语言
}

const config = ref<VsComponentConfig>({
  namespace: 'vs',
  locale: zhCn
})

export function vsComponentConfig(customConfig?: VsComponentConfig) {
  config.value = {
    ...config.value,
    ...customConfig
  }
}

export default config
