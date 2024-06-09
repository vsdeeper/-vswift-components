import type { FormDesignData } from '@/components'
import { defineStore } from 'pinia'

export default defineStore('form-designer', () => {
  const formDesignData = ref<FormDesignData>({
    form: {},
    widgetList: []
  })

  return {
    formDesignData
  }
})
