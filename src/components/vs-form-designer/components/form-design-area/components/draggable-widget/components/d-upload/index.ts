import type { ImageProps, UploadProps } from 'element-plus'
import DUpload from './d-upload.vue'

export type DUploadInstance = InstanceType<typeof DUpload>
export type DUploadOptions = Partial<UploadProps> & {
  imagePreviewProps?: ImageProps
}
export { DUpload }
