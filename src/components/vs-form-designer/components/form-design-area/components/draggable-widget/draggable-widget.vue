<script setup lang="ts">
import draggable from 'vuedraggable'
import type { FormDesignData, WidgetDesignData, WidgetType } from '@/components/vs-form-designer'
import { DComponent } from './components'
import { pascal } from 'radash'
import { useFormDesignerStore } from '@/stores'

const props = defineProps<{
  where?: WidgetType // 标明被哪个widget-field组件引用，做逻辑区分
}>()

const widgetList = defineModel<WidgetDesignData[]>('widgetList', { default: () => [] })
const formData = defineModel<any>('formData')
const canDrag = ref(false)
const { setActiveWidgetDesignData } = useFormDesignerStore()

function onDragChange(...args: any[]) {
  console.log('onDragChange', args, widgetList.value)
  const { added }: { added: { element: WidgetDesignData } } = args[0]
  if (added) {
    // 新增操作
    const { formDesignData } = useFormDesignerStore()
    if (interceptSomeWidgetPutInAnotherWidget(added.element, formDesignData, props.where)) return
    setActiveWidgetDesignData(widgetList.value.find(e => e.id === added.element.id)!)
  }
}

function onOperate(key: string, val: any) {
  switch (key) {
    case 'click-widget-field': {
      setActiveWidgetDesignData(val)
      break
    }
  }
}

/**
 * 拦截某些控件放进其他控件的行为
 * @param addItem
 * @param formDesignData
 * @param where
 */
function interceptSomeWidgetPutInAnotherWidget(
  addedItem: WidgetDesignData,
  formDesignData: FormDesignData,
  where?: WidgetType,
) {
  switch (where) {
    case 'data-table': {
      return false
    }
    default: {
      return false
    }
  }
}

function toggleSelected(widgetList: WidgetDesignData[], isAdded?: boolean) {
  // 如果当前控件已经是选中的，则无视
  // if (widget.__selected) return

  // 清除旧selected
  // removeSelected(item, data)

  if (isAdded /** 新增加的组件 */) {
    // setShareActiveFieldSettingData(addSelected(item, data))
  } else {
    // widget.__selected = true
    // setShareActiveFieldSettingData(item)
  }
}

// 清除旧selected
// function removeSelected(item: WidgetDesignData, data: FieldSetting[]) {
//   const find = data.find(e => !!e.__selected)
//   const findIndex = data.findIndex(e => !!e.__selected)
//   const handler: Handler<FieldSetting[]> = (find, findIndex, data) => {
//     find.__selected = false
//   }
//   if (find) {
//     handler(find, findIndex, data)
//   } else {
//     gridColLooper('remove_selected', item, data, handler)
//     selfincrementTableLooper('remove_selected', item, data, handler)
//     selfincrementAreaLooper('remove_selected', item, data, handler)
//   }
// }
</script>

<template>
  <div v-if="!widgetList?.length" class="note">请从左侧列表中拖动组件放置于此处</div>
  <draggable
    class="draggable-widget"
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
      <div
        class="widget-field"
        :class="{ selected: item.__selected }"
        @click.stop="onOperate('click-widget-field', item)"
      >
        <el-form-item v-if="item.type === 'data-table'" :label="item.options?.label">
          <component
            :is="DComponent[pascal(item.type)]"
            v-model:widget-list="item.widgetList"
            v-model:form-data="formData![item.id]"
          />
        </el-form-item>
        <component
          v-else-if="item.type === 'text'"
          :is="DComponent[pascal(item.type)]"
          v-model="formData![item.id]"
          :design-data="item"
        />
        <el-form-item v-else :label="item.options?.label">
          <component
            :is="DComponent[pascal(item.type)]"
            v-model="formData![item.id]"
            :design-data="item"
          />
        </el-form-item>
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
.draggable-widget {
  height: 100%;
  box-sizing: border-box;
  .widget-field {
    position: relative;
    border: 3px solid #fff;
    background-color: #fff;
    padding: 8px;
    div[class*='-cascader '],
    div[class*='-date-editor '],
    div[class*='-input-number'] {
      width: 100%;
    }
    &.selected {
      border-color: var(--vs-color-primary);
    }
  }
  :deep(.item.sortable-chosen) {
    height: 0;
    overflow: hidden;
    border-width: 3px 0 0 0;
    border-style: solid;
    border-color: var(--vs-color-primary);
    box-sizing: border-box;
  }
}
</style>
