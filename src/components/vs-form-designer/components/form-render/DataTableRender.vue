<script setup lang="ts">
import type { WidgetDesignData } from '@/components/vs-form-designer'
import FormItem from './FormItem.vue'
import { SemiSelect } from '@element-plus/icons-vue'

const props = defineProps<{
  designData: WidgetDesignData
}>()

const model = defineModel<Record<string, any>>({ default: () => ({}) })
const widgetList = computed(() => props.designData.widgetList)
const id = computed(() => props.designData.id)

const onAdd = () => {
  if (!model.value[id.value]) model.value[id.value] = []
  model.value[id.value].push({})
}

const onDelete = (index: number) => {
  model.value[id.value].splice(index, 1)
}
</script>

<template>
  <div class="data-table-render">
    <el-table v-bind="designData.options" :data="model[id]" stripe>
      <el-table-column
        v-for="item in widgetList"
        :key="item.id"
        :width="item.options?.columnWidth"
        :min-width="item.options?.columnMinWidth"
      >
        <template #header>
          <el-text v-if="item.options.required" type="danger">*</el-text>
          {{ item.options?.label }}
        </template>
        <template #default="{ $index }">
          <FormItem
            :design-data="item"
            :form-item-prop="`${id}.${$index}`"
            where="data-table"
            v-model="model[id][$index]"
          />
        </template>
      </el-table-column>
      <el-table-column label="操作" :width="60">
        <template #default="{ $index }">
          <el-button
            type="danger"
            size="small"
            :icon="SemiSelect"
            circle
            @click="onDelete($index)"
          />
        </template>
      </el-table-column>
    </el-table>
    <el-button type="primary" @click="onAdd">+ 新增</el-button>
  </div>
</template>

<style lang="scss" scoped>
.data-table-render {
  width: 100%;
  & > .vs-button {
    width: 100%;
    margin-top: 12px;
  }
}
</style>
