<script setup lang="ts">
import type { WidgetDesignData } from '@/components/vs-form-designer'
import type { DRadioOptions } from '.'

const props = defineProps<{
  designData: WidgetDesignData
}>()

const emit = defineEmits<{
  (e: 'change', val?: string | number | boolean): void
}>()

const model = defineModel<string>()
const options = computed<DRadioOptions>(() => props.designData.options)

function onChange(val?: string | number | boolean) {
  emit('change', val)
}
</script>

<template>
  <el-radio-group
    v-if="options.options?.length"
    v-bind="options"
    v-model="model"
    @change="onChange"
  >
    <template v-if="options.radioType === 'button'">
      <el-radio-button
        v-for="item in options.options"
        :key="item[options.itemValue ?? 'value']"
        v-bind="options.radioButtonProps"
        :label="item[options.itemLabel ?? 'label']"
        :value="item[options.itemValue ?? 'value']"
      >
        <template #default>{{ item[options.itemLabel ?? 'label'] }}</template>
      </el-radio-button>
    </template>
    <template v-else>
      <el-radio
        v-for="item in options.options"
        :key="item[options.itemValue ?? 'value']"
        v-bind="options.radioProps"
        :label="item[options.itemLabel ?? 'label']"
        :value="item[options.itemValue ?? 'value']"
      >
        <template #default>{{ item[options.itemLabel ?? 'label'] }}</template>
      </el-radio>
    </template>
  </el-radio-group>
  <el-text v-else type="info">暂未配置</el-text>
</template>
