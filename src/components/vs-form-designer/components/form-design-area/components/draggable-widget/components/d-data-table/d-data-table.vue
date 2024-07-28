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
  <div class="d-data-table">
    <DraggableWidget
      v-model:widgetList="designData.widgetList!"
      :form-data="_formData"
      where="data-table"
    />
  </div>
</template>

<style lang="scss" scoped>
.d-data-table {
  position: relative;
  border: 2px dotted var(--vs-border-color);
  box-sizing: border-box;
  :deep(.draggable-widget) {
    min-height: 150px;
  }
}
</style>
