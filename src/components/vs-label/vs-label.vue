<script setup lang="ts">
import { InfoFilled } from '@element-plus/icons-vue'
import config from '../config'

withDefaults(
  defineProps<{
    label: string
    tooltipEffect?: 'dark' | 'light'
    tooltipPlacement?:
      | 'top'
      | 'top-start'
      | 'top-end'
      | 'bottom'
      | 'bottom-start'
      | 'bottom-end'
      | 'left'
      | 'left-start'
      | 'left-end'
      | 'right'
      | 'right-start'
      | 'right-end'
    tooltipIcon?: any
    tooltipContent?: string
  }>(),
  {
    tooltipEffect: undefined,
    tooltipPlacement: 'top',
    tooltipIcon: () => InfoFilled,
    tooltipContent: undefined
  }
)

const emit = defineEmits<{
  (e: 'click-tooltip-icon'): void
}>()
</script>

<template>
  <el-config-provider :namespace="config.namespace" :locale="config.locale">
    <div class="vs-label">
      {{ label }}
      <el-tooltip v-if="tooltipContent" :effect="tooltipEffect" :placement="tooltipPlacement">
        <template #content>{{ tooltipContent }}</template>
        <el-icon @click="emit('click-tooltip-icon')">
          <component :is="tooltipIcon"></component>
        </el-icon>
      </el-tooltip>
    </div>
  </el-config-provider>
</template>

<style lang="scss" scoped>
.vs-label {
  display: inline-flex;
  align-items: center;
  .vs-icon {
    margin-left: 3px;
  }
}
</style>
