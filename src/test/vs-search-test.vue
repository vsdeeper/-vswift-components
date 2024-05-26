<script setup lang="ts">
import { VsSearch, type VsSearchOptions } from '@/components'
import type {
  SCascaderProps,
  SDateProps,
  SInputProps,
  SSelectProps
} from '@/components/vs-search/components'

const options = ref<VsSearchOptions>([
  {
    id: 'srk',
    type: 'input',
    label: '输入框',
    props: { placeholder: '请输入' } as SInputProps
  },
  {
    id: 'xzk',
    type: 'select',
    label: '选择框',
    props: {
      placeholder: '请选择',
      options: [
        { id: '1', label: '选项1' },
        { id: '2', label: '选项2' },
        { id: '3', label: '选项3' }
      ],
      itemValue: 'id'
    } as SSelectProps
  },
  {
    id: 'jlxz',
    type: 'cascader',
    label: '级联选择',
    props: {
      placeholder: '请选择',
      options: [
        {
          id: '1',
          label: '选项1',
          children: [
            { id: '1-1', label: '选项1-1' },
            { id: '1-2', label: '选项1-2' }
          ]
        },
        {
          id: '2',
          label: '选项2',
          children: [
            { id: '2-1', label: '选项2-1' },
            { id: '2-2', label: '选项2-2', children: [{ id: '2-2-1', label: '选项2-2-1' }] }
          ]
        },
        {
          id: '3',
          label: '选项3',
          children: [
            { id: '3-1', label: '选项3-1' },
            { id: '3-2', label: '选项3-2', children: [{ id: '3-2-1', label: '选项3-2-1' }] }
          ]
        }
      ],
      props: { value: 'id', checkStrictly: true }
    } as SCascaderProps
  },
  { id: 'rq', type: 'date', label: '日期', props: { placeholder: '请选择' } as SDateProps },
  {
    id: 'rqsj',
    type: 'date',
    label: '日期时间',
    props: { placeholder: '请选择', type: 'datetime' } as SDateProps
  },
  {
    id: 'rqfw',
    type: 'date',
    label: '日期范围',
    props: {
      startPlaceholder: '开始日期',
      endPlaceholder: '结束日期',
      type: 'daterange'
    } as SDateProps
  }
])
</script>

<template>
  <VsSearch :options="options" />
</template>
