<script setup lang="ts">
import { nanoid } from 'nanoid'
import type { VsSearchOptions } from '.'
import { SComponent, type SComponentKey } from './components'
import { pascal } from 'radash'
import { ArrowDown, ArrowUp } from '@element-plus/icons-vue'

defineProps<{
  options?: VsSearchOptions
  labelWidth?: string | number
}>()

const id = `mysearch${nanoid(5)}`
const form = ref<Record<string, any>>({})
const loading = ref(false)
const showMore = ref(false)

defineExpose({
  loading
})
</script>

<template>
  <div :id="id" class="vs-search" :class="{ more: showMore }">
    <el-form :model="form" :label-width="labelWidth ?? '100px'">
      <el-row>
        <el-col
          v-for="(item, index) in options"
          :key="item.id"
          :lg="6"
          :md="8"
          :sm="12"
          :xs="24"
          :class="{
            'hidden-sm-and-down': !showMore && index > 0,
            'hidden-md-and-down': !showMore && index > 1,
            'hidden-lg-and-down': !showMore && index > 2,
            'hidden-lg-and-up': !showMore && index > 2
          }"
        >
          <el-form-item :label="item.label" :prop="item.id">
            <slot :name="item.id" :data="form">
              <component
                v-if="item.type"
                :is="SComponent[pascal(item.type) as SComponentKey]"
                v-model="form[item.id]"
                :props="item.props"
              />
            </slot>
          </el-form-item>
        </el-col>
        <el-col :lg="6" :md="8" :sm="12" :xs="24">
          <div class="btns">
            <el-button class="more" type="primary" link @click="showMore = !showMore">
              更多筛选条件
              <el-icon class="el-icon--right">
                <component :is="showMore ? ArrowUp : ArrowDown" />
              </el-icon>
            </el-button>
            <el-button type="primary">查询</el-button>
            <el-button>重置</el-button>
          </div>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>

<style lang="scss" scoped>
.vs-search {
  .btns {
    margin-left: 10px;
    .more {
      font-weight: normal;
    }
    button[class*='-button'] + button[class*='-button'] {
      margin-left: 5px;
    }
  }
}
:deep(div[class*='-cascader ']) {
  flex: 1;
}
:deep(div[class*='-date-editor ']) {
  flex: 1;
}
</style>
