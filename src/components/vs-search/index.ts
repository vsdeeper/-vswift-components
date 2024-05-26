import VsSearch from './vs-search.vue'

export interface VsSearchOptionItem {
  // 唯一标识，与后端交互字段名称
  id: string
  // 组件类型
  type: 'input' | 'select' | 'cascader' | 'date' | 'time' | 'tree-select'
  label?: string
  // 源组件的props
  sourceProps?: Record<string, any>
  // placeholder?: string
  // // 选择范围使用
  // startPlaceholder?: string
  // endPlaceholder?: string
  // // 默认值
  // defaultValue?: unknown
  // // YYYY-MM-DD HH:mm:ss | x(时间戳)
  // valueFormat?: string
  // // 选项数据源，可从接口异步获取
  // options?: Record<string, any>[] | ((data?: unknown) => Promise<Record<string, any>[]>)
  // // 选项数据，label别名，默认label
  // label?: string
  // // 选项数据，value别名，默认value
  // value?: string
  // // 选项数据，children别名，默认children
  // children?: string
  // // 多选
  // multiple?: boolean
  // //多选时是否将选中值按文字的形式展示，默认false
  // collapseTags?: boolean
  // // 当鼠标悬停于折叠标签的文本时，是否显示所有选中的标签。 要使用此属性，collapse-tags属性必须设定为 true
  // collapseTagsTooltip?: boolean
  // // 需要显示的 Tag 的最大数量 只有当 collapse-tags 设置为 true 时才会生效，默认1
  // maxCollapseTags?: number
  // // 是否严格的遵守父子节点不互相关联
  // checkStrictly?: boolean
  // // type="tree-select"时可用，用于过滤选中项
  // filterValue?: (data: Record<string, any>[]) => Record<string, any>[]
  // // 是否启用虚拟渲染
  // virtualized?: boolean
  // // 自定义远程搜索方法
  // remoteMethod?: (query: string, id: string) => void
}
export type VsSearchOptions = VsSearchOptionItem[]
export type VsSearchInstance = InstanceType<typeof VsSearch>
export { VsSearch }
