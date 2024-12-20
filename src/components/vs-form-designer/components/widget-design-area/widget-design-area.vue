<script setup lang="ts">
import { useFormDesignerStore } from '@/stores'
import { storeToRefs } from 'pinia'
import { DesignerComponent } from '.'
import { pascal } from 'radash'

const { activeWidgetDesignData } = storeToRefs(useFormDesignerStore())
</script>

<template>
  <div class="widget-design-area">
    <component
      :is="DesignerComponent[pascal(activeWidgetDesignData?.type!)]"
      v-model="activeWidgetDesignData"
    />
  </div>
</template>

<style lang="scss" scoped>
.widget-design-area {
  :deep(.vs-form-item__label) {
    align-items: center;
    & > .vs-icon.vs-tooltip__trigger {
      margin-left: 3px;
    }
  }
}
</style>
