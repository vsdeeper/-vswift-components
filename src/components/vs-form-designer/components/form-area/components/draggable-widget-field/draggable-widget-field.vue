<script setup lang="ts">
import draggable from 'vuedraggable'
import type { WidgetDesignData, WidgetType } from '@/components/vs-form-designer'

defineProps<{
  where?: WidgetType // 标明被哪个widget-field组件引用，做逻辑区分
}>()

const widgetList = defineModel<WidgetDesignData[]>({
  get: (val) => val ?? []
})
const canDrag = ref(false)

function onDragChange(...args: any[]) {
  console.log('onDragChange', args)
  //     if (e.added) {
  //     // 新增操作
  //     const item: FieldSetting = e.added?.element || {}
  //     if (interceptSomeWidgetPutInAnotherWidget(item, props.where, getWidgetList())) return
  //     if (uniquenessCheckOfWidgetGroup(item, getWidgetList())) return
  //     if (uniquenessCheckOfWidget(item, getWidgetList())) return
  //     toggleSelect(item, getWidgetList(), true)
  //     emit('added', e.added)
  //   }
}
</script>

<template>
  <div v-if="!widgetList?.length" class="note">
    <template v-if="where === 'table'">请从左侧列表中拖动组件放置于此处</template>
    <template v-else-if="where === 'recursive-area'">请从左侧列表中拖动组件放置于此处</template>
    <template v-else>请从左侧列表中拖动组件放置于此处</template>
  </div>

  <draggable
    class="draggable"
    :list="widgetList"
    group="draggable-widget-option"
    :animation="300"
    :component-data="{ type: 'transition-group' }"
    item-key="id"
    @start="canDrag = true"
    @end="canDrag = false"
    @change="onDragChange"
  >
    <template #item="{ element }">
      {{ element.label }}
    </template>
  </draggable>
</template>
