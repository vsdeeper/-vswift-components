<script setup lang="ts">
import type { WidgetDesignData } from '@/components/vs-form-designer'
import DraggableWidget from '../../draggable-widget.vue'

const props = defineProps<{
  formData: Record<string, any>[]
  designData: WidgetDesignData
}>()

const _formData = computed(() => props.formData)
</script>

<template>
  <div class="d-recursive-area">
    <DraggableWidget
      v-model:widgetList="designData.widgetList!"
      :form-data="_formData"
      where="recursive-area"
    />
  </div>
</template>

<style lang="scss" scoped>
.d-recursive-area {
  position: relative;
  border: 2px dotted var(--el-border-color);
  box-sizing: border-box;
  :deep(.draggable-widget) {
    min-height: 150px;
  }
}
</style>
