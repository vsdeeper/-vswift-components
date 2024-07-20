<script setup lang="ts">
import config from '../config'

defineProps<{
  label: string
  suffixIcon?: any
}>()

const emit = defineEmits<{
  (e: 'click-suffix-icon'): void
}>()
</script>

<template>
  <el-config-provider :namespace="config.namespace" :locale="config.locale">
    <div class="vs-divider-title">
      <el-divider content-position="left" border-style="dashed">
        {{ label }}
      </el-divider>
      <el-button
        v-if="suffixIcon"
        type="primary"
        size="small"
        :icon="suffixIcon"
        plain
        circle
        @click="emit('click-suffix-icon')"
      >
      </el-button>
    </div>
  </el-config-provider>
</template>

<style lang="scss" scoped>
.vs-divider-title {
  display: flex;
  align-items: center;
  line-height: 1;
  :deep(.vs-divider__text.is-left) {
    left: 0;
    padding: 0 5px 0 0;
    color: var(--vs-text-color-regular);
    font-weight: normal;
  }
}
</style>
