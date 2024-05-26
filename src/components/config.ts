import type { Language } from 'element-plus/es/locales.mjs'
import zhCn from 'element-plus/es/locale/lang/zh-cn'

export interface VsComponentConfig {
  locale?: Language
}

const config = ref<VsComponentConfig>({
  locale: zhCn
})

export function vsComponentConfig(customConfig?: VsComponentConfig): VsComponentConfig {
  return (config.value = {
    ...config.value,
    ...customConfig
  })
}

export default config
