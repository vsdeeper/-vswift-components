<script setup lang="ts">
import { useFormDesignerStore } from '@/stores'
import { DraggableWidgetField } from './components'

const model = ref<Record<string, any>>({})
const formSetting = computed(() => useFormDesignerStore().formDesignData.form)
</script>

<template>
  <el-form ref="formRef" class="form-area" v-bind="formSetting" :model @submit.prevent>
    <DraggableWidgetField />
  </el-form>
</template>
