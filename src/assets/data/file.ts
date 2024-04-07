/**
 * File type
 * *********************************/
type TFiles = 'image' | 'video' | 'excel' | 'word' | 'pdf'
type FilesOptionType = {
  extensions: string[]
  icon?: string
}
const files: Record<TFiles, FilesOptionType> = {
  image: {
    extensions: ['jpg', 'png', 'jpeg']
  },
  video: {
    extensions: ['m4v', 'avi', 'mpg', 'mp4', 'mkv', 'mov', 'mpeg']
  },
  excel: {
    extensions: ['csv', 'xls', 'xlsx']
  },
  word: {
    extensions: ['doc', 'docx']
  },
  pdf: {
    extensions: ['pdf']
  }
}

export default files
