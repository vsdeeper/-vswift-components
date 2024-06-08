<script setup lang="ts">
import { widgetOptions } from './constants'
</script>

<template>
  <el-collapse class="widget-options" :model-value="widgetOptions.map((e) => e.value)">
    <el-collapse-item
      v-for="item in widgetOptions"
      :key="item.value"
      :title="item.label"
      :name="item.value"
    >
      <el-row :gutter="10">
        <el-col v-for="item1 in item.children" :key="item1.value" :span="12">
          <el-button bg text>{{ item1.label }}</el-button>
        </el-col>
      </el-row>
    </el-collapse-item>
  </el-collapse>
</template>

<style lang="scss" scoped>
.el-button {
  width: 100%;
  font-weight: normal;
  justify-content: flex-start;
  margin-bottom: 10px;
}
</style>
