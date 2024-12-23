<script setup lang="ts">
import { QuestionFilled } from '@element-plus/icons-vue'
import type { DInputOptions, DRadioOptions } from '../../../form-design-area'
import { INPUT_TYPE_OPTIONS, PATTERN_OPTIONS } from '../constants'
import type { WidgetDesignData } from '@/components/vs-form-designer'
import { useFormDesignerStore } from '@/stores'

const model = defineModel<WidgetDesignData<DRadioOptions>>({ default: () => ({}) })

const showColumnWidth = (id: string) => {
  const { formDesignData } = useFormDesignerStore()
  const filterTable = formDesignData.widgetList.filter(e => e.type === 'data-table')
  return filterTable.some(e => e.widgetList?.some(a => a.id === id))
}
</script>

<template>
  <el-form :model ref="formRef" label-width="100px">
    <el-form-item label="唯一标识" prop="id" :rules="[{ required: true, message: '必填项' }]">
      <el-input :model-value="model.id" placeholder="请输入" disabled />
    </el-form-item>
    <el-form-item prop="idAlias">
      <template #label>
        ID别名
        <el-tooltip
          content="表单的 value 值对应的 key，默认为唯一标识"
          placement="top"
          effect="dark"
        >
          <el-icon><QuestionFilled /></el-icon>
        </el-tooltip>
      </template>
      <el-input v-model="model.idAlias" placeholder="请输入" />
    </el-form-item>
    <el-form-item label="标签名称" prop="options.label">
      <el-input v-model="model.options.label" placeholder="请输入" />
    </el-form-item>
    <el-form-item label="选项配置" prop="options.optionData">
      <!-- <el-input v-model="model.options.optionData" placeholder="请输入" /> -->
    </el-form-item>
  </el-form>
</template>
