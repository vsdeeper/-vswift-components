import type { UploadProps } from 'element-plus'
import DUpload from './d-upload.vue'

export type DUploadInstance = InstanceType<typeof DUpload>
export type DUploadOptions = Partial<UploadProps>
export { DUpload }
