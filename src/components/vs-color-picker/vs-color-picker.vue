<script setup lang="ts">
import { type ColorPickerInstance } from 'element-plus'
import config from '../config'

withDefaults(
  defineProps<{
    showAlpha?: boolean
    placeholder?: string
  }>(),
  {
    placeholder: '请选择'
  }
)
const model = defineModel<string>()
const colorPickerRef = ref<ColorPickerInstance>()

function clickInput() {
  colorPickerRef.value?.show()
}
</script>

<template>
  <el-config-provider :locale="config.locale">
    <dvi class="vs-color-picker">
      <el-input v-model="model" :placeholder="placeholder" readonly @click="clickInput">
        <template #append>
          <el-color-picker ref="colorPickerRef" v-model="model" :show-alpha="showAlpha" />
        </template>
      </el-input>
    </dvi>
  </el-config-provider>
</template>

<style lang="scss" scoped>
.vs-color-picker {
  :deep(.el-input-group__append) {
    padding: 0;
  }
  :deep(.el-color-picker__trigger) {
    border: 0 none;
  }
}
</style>
