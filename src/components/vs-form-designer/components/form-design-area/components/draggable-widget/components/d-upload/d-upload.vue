<script setup lang="ts">
import type { WidgetDesignData } from '@/components/vs-form-designer'
import type { DUploadOptions } from '.'
import type {
  UploadFile,
  UploadInstance,
  UploadRawFile,
  UploadStatus,
  UploadUserFile
} from 'element-plus'
import { Plus } from '@element-plus/icons-vue'

const props = defineProps<{
  designData: WidgetDesignData
}>()

const uploadRef = ref<UploadInstance>()
const model = defineModel<UploadUserFile[]>()
const options = computed<DUploadOptions>(() => props.designData.options)
const slots = useSlots()
const previewSrcList = ref<string[]>([])
const showImagePreview = ref(false)

function onPreview(uploadFile: UploadFile) {
  previewSrcList.value = [uploadFile.url!]
  showImagePreview.value = true
}

// 以下expose
function abort(file: UploadFile) {
  uploadRef.value?.abort(file)
}

function submit() {
  uploadRef.value?.submit()
}

function clearFiles(status?: UploadStatus[]) {
  uploadRef.value?.clearFiles(status)
}

function handleStart(rawFile: UploadRawFile) {
  uploadRef.value?.handleStart(rawFile)
}

function handleRemove(file: UploadFile | UploadRawFile) {
  uploadRef.value?.handleRemove(file)
}

defineExpose({
  abort,
  submit,
  clearFiles,
  handleStart,
  handleRemove
})
</script>

<template>
  <el-upload ref="uploadRef" v-bind="options" v-model:file-list="model" :on-preview="onPreview">
    <template #default>
      <el-icon v-if="options.listType === 'picture-card'"><Plus /></el-icon>
      <el-button v-else type="primary">上传</el-button>
    </template>
    <template v-if="slots.trigger" #trigger>
      <slot name="trigger"></slot>
    </template>
    <template v-if="slots.tip" #tip>
      <slot name="tip"></slot>
    </template>
    <template v-if="slots.file" #file>
      <slot name="file"></slot>
    </template>
  </el-upload>
  <el-image v-if="showImagePreview" v-bind="options.imagePreviewProps" :preview-src-list />
</template>
