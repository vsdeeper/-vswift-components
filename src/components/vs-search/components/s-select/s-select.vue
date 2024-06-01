<script setup lang="ts">
import config from '@/components/config'
import type { ISelectProps } from 'element-plus'

defineProps<{
  props?: Partial<ISelectProps> & {
    options?: Record<string, any>[] // 选项数据源
    itemLabel?: string // 指定选项标签为选项对象的某个属性值
    itemValue?: string // 指定选项的值为选项对象的某个属性值
  }
}>()

const model = defineModel<string | number | boolean | Record<string, any> | any[]>()
</script>

<template>
  <el-config-provider :locale="config.locale">
    <el-select
      v-model="model"
      v-bind="{
        ...props,
        clearable: props?.clearable ?? true,
        filterable: props?.filterable ?? true
      }"
    >
      <el-option
        v-for="item in props?.options"
        :key="item[props?.itemValue ?? 'id']"
        :label="item[props?.itemLabel ?? 'label']"
        :value="item[props?.itemValue ?? 'id']"
      >
      </el-option>
    </el-select>
  </el-config-provider>
</template>
