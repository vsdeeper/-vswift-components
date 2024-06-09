<script setup lang="ts">
import draggable from 'vuedraggable'
import type { WidgetDesignData, WidgetType } from '@/components/vs-form-designer'
import { useFormDesignerStore } from '@/stores'

const props = defineProps<{
  where?: WidgetType // 标明被哪个widget-field组件引用，做逻辑区分
}>()

const emit = defineEmits<{
  (e: 'added', added: any): void
}>()

const widgetList = defineModel<WidgetDesignData[]>({
  get: (val) => val ?? []
})
const canDrag = ref(false)

function onDragChange(...args: any[]) {
  console.log('onDragChange', args)
  const { added }: { added: { element: WidgetDesignData; newIndex: number } } = args[0]
  if (added) {
    // 新增操作
    const { formDesignData } = useFormDesignerStore()
    if (
      interceptSomeWidgetPutInAnotherWidget(added.element, formDesignData.widgetList, props.where)
    )
      return
    toggleSelected(added.element, formDesignData.widgetList, true)
    emit('added', added)
  }
}

/**
 * 拦截某些控件放进其他控件的行为
 * @param addItem
 * @param widgetList
 * @param where
 */
function interceptSomeWidgetPutInAnotherWidget(
  addedItem: WidgetDesignData,
  widgetList: WidgetDesignData[],
  where?: WidgetType
) {
  switch (where) {
    case 'table': {
      return false
    }
    default: {
      return false
    }
  }
}

function toggleSelected(
  widget: WidgetDesignData,
  widgetList: WidgetDesignData[],
  isAdded?: boolean
) {
  if (widget.__selected) return
  // 清除旧selected
  //   removeSelected(item, data)

  if (isAdded /** 新增加的组件 */) {
    // setShareActiveFieldSettingData(addSelected(item, data))
  } else {
    widget.__selected = true
    // setShareActiveFieldSettingData(item)
  }
}
</script>

<template>
  <div v-if="!widgetList?.length" class="note">
    <template v-if="where === 'table'">请从左侧列表中拖动组件放置于此处</template>
    <template v-else-if="where === 'recursive-area'">请从左侧列表中拖动组件放置于此处</template>
    <template v-else>请从左侧列表中拖动组件放置于此处</template>
  </div>
  <draggable
    class="draggable-items"
    :list="widgetList"
    group="draggable-widget-option"
    :animation="300"
    :component-data="{ type: 'transition-group' }"
    item-key="id"
    @start="canDrag = true"
    @end="canDrag = false"
    @change="onDragChange"
  >
    <template #item="{ element: item }">
      <div class="item">
        {{ item.options.label }}
      </div>
    </template>
  </draggable>
</template>

<style lang="scss" scoped>
.note {
  position: absolute;
  top: 30px;
  left: 30px;
  right: 30px;
  font-size: 20px;
  line-height: 1.5;
  color: #ccc;
  text-align: center;
  pointer-events: none;
}
</style>
