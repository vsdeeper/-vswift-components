<script setup lang="ts">
import { useFormDesignerStore } from '@/stores'

const model = ref<Record<string, any>>({})
const formDesignData = computed(() => useFormDesignerStore().formDesignData)
</script>

<template>
  <el-form class="form-design-area" v-bind="formDesignData.form" :model @submit.prevent>
    <DraggableWidget v-model:widgetList="formDesignData.widgetList" :form-data="model" />
  </el-form>
</template>

<style lang="scss" scoped>
.form-design-area {
  :deep(.widget-field) {
    & > div:not(div[class*='-row']) {
      pointer-events: none;
    }
  }
}
</style>
