<script setup lang="ts">
import type { WidgetDesignData } from '@/components/vs-form-designer'
import type { DSelectOptions } from '.'

const props = defineProps<{
  designData: WidgetDesignData
}>()

const emit = defineEmits<{
  (e: 'change', val?: any): void
}>()

const model = defineModel<string>()
const options = computed<DSelectOptions>(() => props.designData.options)
const slots = useSlots()

function onChange(val?: any) {
  emit('change', val)
}
</script>

<template>
  <el-select
    v-bind="options"
    v-model="model"
    :clearable="options.clearable ?? true"
    :filterable="options.filterable ?? true"
    @change="onChange"
  >
    <el-option
      v-for="item in options.options"
      :key="item[options.itemValue ?? 'value']"
      :label="item[options.itemLabel ?? 'label']"
      :value="item[options.itemValue ?? 'value']"
    />
    <template v-if="slots.header" #header>
      <slot name="header"></slot>
    </template>
    <template v-if="slots.footer" #footer>
      <slot name="footer"></slot>
    </template>
    <template v-if="slots.prefix" #prefix>
      <slot name="prefix"></slot>
    </template>
    <template v-if="slots.empty" #empty>
      <slot name="empty"></slot>
    </template>
    <template v-if="slots.tag" #tag>
      <slot name="tag"></slot>
    </template>
    <template v-if="slots.loading" #loading>
      <slot name="loading"></slot>
    </template>
    <template v-if="slots.label" #label>
      <slot name="label"></slot>
    </template>
  </el-select>
</template>
