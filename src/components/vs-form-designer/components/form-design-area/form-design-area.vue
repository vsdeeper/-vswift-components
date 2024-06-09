<script setup lang="ts">
import { useFormDesignerStore } from '@/stores'

const model = ref<Record<string, any>>({})
const formSetting = computed(() => useFormDesignerStore().formDesignData.form)
const widgetList = computed(() => useFormDesignerStore().formDesignData.widgetList)
</script>

<template>
  <el-form class="form-design-area" v-bind="formSetting" :model disabled @submit.prevent>
    <DraggableWidget v-model="widgetList" :model />
  </el-form>
</template>
