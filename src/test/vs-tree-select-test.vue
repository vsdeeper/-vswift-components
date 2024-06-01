<script setup lang="ts">
import { VsTreeSelect } from '@/components'
import type { TreeKey } from 'element-plus/es/components/tree/src/tree.type'
import { sleep } from 'radash'

const options = ref<Record<string, any>[]>([])
const model = ref<TreeKey[]>([])

async function getData() {
  await sleep(1000)
  return [
    { id: 1, name: 'node-1' },
    { id: 2, name: 'node-2' }
  ]
}

onMounted(() => {
  getData().then((res) => (options.value = res))
})
</script>

<template>
  <VsTreeSelect v-model="model" :options item-label="name" />
</template>
