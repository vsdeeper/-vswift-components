<script setup lang="ts">
import { nanoid } from 'nanoid'
import type { VsSearchOptions } from '.'
import { SComponent, type SComponentKey } from './components'
import { pascal } from 'radash'

defineProps<{
  options?: VsSearchOptions
}>()

const id = `mysearch${nanoid(5)}`
const isInquiring = ref(false)
const form = ref<Record<string, any>>({})

defineExpose({
  isInquiring
})
</script>

<template>
  <div :id="id" class="vs-search">
    <el-form :model="form" label-width="80px">
      <el-row>
        <el-col
          v-for="item in options"
          :key="item.id"
          :lg="6"
          :md="8"
          :sm="12"
          :xs="24"
          :offset="0"
        >
          <el-form-item :label="item.label" :prop="item.id">
            <component
              :is="SComponent[pascal(item.type) as SComponentKey]"
              v-model="form[item.id]"
              :source-props="item.sourceProps"
            />
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>
