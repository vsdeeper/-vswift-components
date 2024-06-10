<script setup lang="ts">
import type { WidgetDesignData } from '@/components/vs-form-designer'
import type { DUploadOptions } from '.'
import type { UploadFile, UploadFiles } from 'element-plus'

const props = defineProps<{
  designData: WidgetDesignData
}>()

const emit = defineEmits<{
  (e: 'change', uploadFile: UploadFile, uploadFiles: UploadFiles): void
}>()

const model = defineModel<string>()
const options = computed<DUploadOptions>(() => props.designData.options)
const slots = useSlots()

function onChange(uploadFile: UploadFile, uploadFiles: UploadFiles) {
  emit('change', uploadFile, uploadFiles)
}
</script>

<template>
  <el-upload v-bind="options" :on-change="onChange">
    <template v-if="slots.trigger" #trigger>
      <slot name="trigger"></slot>
    </template>
    <template v-if="slots.default" #default>
      <slot></slot>
    </template>
    <template v-if="slots.tip" #tip>
      <slot name="tip"></slot>
    </template>
  </el-upload>
</template>
