<script setup lang="ts">
import type { WidgetDesignData } from '@/components/vs-form-designer'
import DraggableWidget from '../../draggable-widget.vue'

const widgetList = defineModel<WidgetDesignData[]>('widgetList', { default: () => [] })
const formData = defineModel<Record<string, any>[]>('formData', { default: () => [] })
</script>

<template>
  <div class="d-data-table">
    <DraggableWidget
      v-model:widget-list="widgetList"
      v-model:form-data="formData"
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
    padding: 12px;
  }
}
</style>
