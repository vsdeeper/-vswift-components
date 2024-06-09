import type { FormDesignData, WidgetDesignData } from '@/components'
import { defineStore } from 'pinia'

export default defineStore('form-designer', () => {
  const formDesignData = ref<FormDesignData>({
    form: {},
    widgetList: []
  })
  const activeWidgetDesignData = ref<WidgetDesignData>()

  return {
    formDesignData,
    activeWidgetDesignData
  }
})
