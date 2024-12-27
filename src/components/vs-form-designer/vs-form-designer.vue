<script setup lang="ts">
import { useFormDesignerStore } from '@/stores'
import { Delete, View } from '@element-plus/icons-vue'
import { storeToRefs } from 'pinia'
import { aceConfigInit } from './ace-config'
import { ElMessage } from 'element-plus'

defineProps<{
  height?: string
}>()

const AceEditor = defineAsyncComponent({
  loader: async () => (await import('vue3-ace-editor')).VAceEditor,
})

const importJsonRef = ref()
const exportJsonRef = ref()
const showImportJsonDrawer = ref(false)
const showExportJsonDrawer = ref(false)
const importJson = ref('')
const exportJson = ref('')
const { activeWidgetDesignData, formDesignData } = storeToRefs(useFormDesignerStore())

const onClear = () => {
  formDesignData.value.widgetList = []
}

const onImportJson = () => {
  showImportJsonDrawer.value = true
  importJson.value = JSON.stringify(formDesignData.value, null, 2)
}

const onExportJson = () => {
  showExportJsonDrawer.value = true
  exportJson.value = JSON.stringify(formDesignData.value, null, 2)
}

const onConfirm = async (type: string) => {
  switch (type) {
    case 'import_json': {
      const editor = importJsonRef.value._editor
      const annot = editor.session.$annotations
      if (annot.length) {
        ElMessage.error('json数据格式错误')
        return
      }
      formDesignData.value = JSON.parse(importJson.value)
      showImportJsonDrawer.value = false
      ElMessage.success('导入成功')
      break
    }
    case 'export_json': {
      try {
        const editor = exportJsonRef.value._editor
        const annot = editor.session.$annotations
        if (annot.length) {
          ElMessage.error('json数据格式错误')
          return
        }
        navigator.clipboard.writeText(exportJson.value)
        showExportJsonDrawer.value = false
        ElMessage.success('复制成功')
      } catch (error) {
        console.log(error)
      }
      break
    }
  }
}

onMounted(() => {
  aceConfigInit()
})
</script>

<template>
  <el-container class="vs-form-designer" :style="{ height: height ?? '650px' }">
    <el-aside class="left-side" width="320px">
      <el-tabs model-value="widget">
        <el-tab-pane label="组件" name="widget">
          <el-scrollbar>
            <WidgetOptions />
          </el-scrollbar>
        </el-tab-pane>
        <!-- <el-tab-pane label="表单模板" name="form-template">
          <el-scrollbar> 表单模板 </el-scrollbar>
        </el-tab-pane> -->
      </el-tabs>
    </el-aside>
    <el-main>
      <div class="function-bar">
        <el-button type="primary" text :icon="View">预览</el-button>
        <el-button type="primary" text @click="onImportJson">导入JSON</el-button>
        <el-button type="primary" text @click="onExportJson">导出JSON</el-button>
        <el-popconfirm title="确认清空吗？" @confirm="onClear">
          <template #reference>
            <el-button type="danger" text :icon="Delete">清空</el-button>
          </template>
        </el-popconfirm>
      </div>
      <el-scrollbar>
        <FormDesignArea />
      </el-scrollbar>
    </el-main>
    <el-aside class="right-side" width="320px">
      <el-tabs model-value="widget-settings">
        <el-tab-pane label="组件设置" name="widget-settings">
          <el-scrollbar>
            <WidgetDesigner v-model="activeWidgetDesignData" />
          </el-scrollbar>
        </el-tab-pane>
        <el-tab-pane label="表单设置" name="form-settings">
          <el-scrollbar>
            <FormDesigner v-model="formDesignData.form" />
          </el-scrollbar>
        </el-tab-pane>
      </el-tabs>
    </el-aside>

    <el-drawer v-model="showImportJsonDrawer" title="导入JSON" size="calc(100% - 250px)">
      <AceEditor
        ref="importJsonRef"
        v-model:value="importJson"
        class="ace-editor"
        lang="json"
        theme="chrome"
        :options="{
          useWorker: true,
          enableBasicAutocompletion: true,
          enableSnippets: true,
          enableLiveAutocompletion: true,
        }"
      />
      <template #footer>
        <el-button @click="showImportJsonDrawer = false">取消</el-button>
        <el-button type="primary" @click="onConfirm('import_json')">导入</el-button>
      </template>
    </el-drawer>
    <el-drawer v-model="showExportJsonDrawer" title="导出JSON" size="calc(100% - 250px)">
      <AceEditor
        ref="exportJsonRef"
        v-model:value="exportJson"
        class="ace-editor"
        lang="json"
        theme="chrome"
        :options="{
          useWorker: true,
          enableBasicAutocompletion: true,
          enableSnippets: true,
          enableLiveAutocompletion: true,
        }"
      />
      <template #footer>
        <el-button @click="showExportJsonDrawer = false">取消</el-button>
        <el-button type="primary" @click="onConfirm('export_json')">复制JSON</el-button>
      </template>
    </el-drawer>
  </el-container>
</template>

<style lang="scss" scoped>
.vs-form-designer {
  overflow: auto;
  div[class*='-tabs--top'] {
    height: 100%;
  }
  :deep(div[class*='-tabs__content']) {
    height: calc(100% - 55px);
  }
  :deep(div[class*='-tab-pane']) {
    height: 100%;
  }
  .left-side {
    :deep(div[class*='-scrollbar__view']) {
      padding: 0 10px;
    }
    :deep(div[class*='-tabs__content']) {
      padding: 0;
    }
  }
  .right-side {
    :deep(div[class*='-scrollbar__view']) {
      padding: 0 10px;
    }
    :deep(div[class*='-tabs__content']) {
      padding: 0;
    }
  }
  main[class*='-main'] {
    --vs-main-padding: 0;
    display: flex;
    flex-direction: column;
    flex: 1;
    min-width: 400px;
    :deep(.form-design-area) {
      position: relative;
      height: 100%;
      background-color: #fff;
      padding: 8px;
      box-sizing: border-box;
    }
    .function-bar {
      display: flex;
      align-items: flex-end;
      height: 40px;
      button[class*='-button'] + button[class*='-button'] {
        margin-left: 0;
      }
    }
    & > :deep(div[class*='-scrollbar']) {
      box-sizing: border-box;
      border: 3px dotted var(--vs-border-color-light);
      background-color: var(--vs-bg-color-page);
      div[class*='-scrollbar__view'] {
        height: 100%;
        padding: 8px;
        box-sizing: border-box;
      }
    }
  }
}
.ace-editor {
  font-size: 12px;
  width: 100%;
  height: 100%;
}
</style>
