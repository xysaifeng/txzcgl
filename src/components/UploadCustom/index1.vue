<template>
	<div class="upload-wrap-custom">
    <el-upload
      class="upload-demo"
      :action="uploadUrl"
      :on-preview="handlePictureCardPreview"
      :on-remove="handleRemove"
      :before-remove="beforeRemove"
      :before-upload="beforeAvatarUpload"
      multiple
      :limit="3"
      :on-exceed="handleExceed"
      :file-list="fileList"
      :accept="accept">
      <el-button size="small" type="primary">点击上传</el-button>
    </el-upload>

    <!-- 预览图片 -->
		<el-dialog :visible.sync="dialogVisible">
			<img width="100%" :src="dialogImageUrl" />
		</el-dialog>

    <!-- 预览pdf -->
    <el-dialog :visible.sync="showPdfDialog" class="dialog-pdf-custom">
			<embed width="100%" height="100%" type="application/pdf" :src="pdfUrl" />
		</el-dialog>

    <!-- 预览word -->
    <el-dialog :visible.sync="showDocDialog" class="dialog-pdf-custom">
			<embed width="100%" height="100%" type="application/msword" :src="docUrl" />
		</el-dialog>

      <!-- doc -->
      <!-- <embed width="100%" type="application/msword" :src="docUrl" v-if="showDoc" /> -->
      <!-- docx -->
      <!-- <embed width="100%" type="application/vnd.openxmlformats-officedocument.wordprocessingml.document" :src="docxUrl" v-if="showDocx" /> -->
	</div>
</template>

<script>
  import {getToken} from '@/utils/auth'

	export default {
		name: "UploadImageCustom",
		props: ['isUpdate', 'formImgs'],
		watch: {
			isUpdate: {
				handler() {
          this.update()
				}
			}
		},
		data() {
			return {
        //uploadUrl: process.env.VUE_APP_BASE_API + '/admin/agency/file/upload',
        uploadUrl :'https://httpbin.org/post', // 假地址
				headers: { Authorization: 'Bearer ' + getToken() },// 设置上传的请求头部
				fileList: [], // 编辑时用于展示的数据
				dialogImageUrl: '', // 显示大图的图片路径
				dialogVisible: false,
				isShow: false, // 查看是不显示上传
        pics: [], // 用于提交表单的数据
        accept:'.docx,.doc,.pdf,.jpg,.jpeg',// 要上传的文件类型
        pdfUrl:'' ,// pdf url
        docUrl:'' ,// doc url
        docxUrl:'' ,// docx url
        showPdfDialog: false,// 是否显示pdf
        showDocDialog: false,// 是否显示doc
        showDocxDialog: false,// 是否显示docx
      }
		},
		mounted() {
			if (this.$route.query.modelType === 'look') {
				this.isShow = true
      }
      this.update()
		},
		methods: {
      // 更新图片上传组件
      update() {
        // this.pics = []
        // this.fileList = []
        // this.formImgs.forEach((item,index) => {
        //   //data.url = `${process.env.VUE_APP_API_IMGURL}${item.url}`
        //   let data = {
        //     index:`${item.index}`,
        //     name:`${item.name}`,
        //     url:`${item.url}`
        //   }
        //   let dataArr = [data]
        //   this.fileList.push(dataArr)
        //   let formData = {
        //     index:index,
        //     name:item.name,
        //     url:item.url
        //   }
        //   this.pics.push(formData)
        //   this.$emit('pics', this.pics)
        // })
      },
      // 文件超出个数限制时的钩子
			handleExceed(files, fileList) {
				this.$message.warning(`当前限制选择 6 个文件`)
      },
      // 上传文件之前的钩子，参数为上传的文件，若返回 false 或者返回 Promise 且被 reject，则停止上传。
			beforeAvatarUpload(file) {
        // 如果上传的是jpeg、jpg，判断其大小
				const isJPG = file.type === 'image/jpeg' || file.type === 'image/jpg'
				const isLt2M = file.size / 1024 / 1024 < 5
				if (isJPG) {
					if (!isLt2M) {
            this.$message.error('上传图片大小不能超过 5MB!')
          }
        }
        // 如果上传的是doc,docx,pdf文件类型，判断其大小
        const isWordPdf = file.type === 'application/msword' || file.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' || file.type === 'application/pdf'
        const isWordPdf20M = file.size / 1024 / 1024 < 20
        if(isWordPdf){
          if (!isWordPdf20M) {
            this.$message.error('word/pdf大小不能超过 20MB!')
          }
        }
				return (isJPG && isLt2M) || (isWordPdf && isWordPdf20M)
			},
			// 上传成功后
			handleAvatarSuccess(response, file, fileList) {
        // if (response.code === 0) {
				// 	const data = {}
				// 	data.url = response.data.fullPath
        //   data.uid = file.uid
        //   console.log('上传成功后-------data==',data)
				// 	this.pics.push(data)
				// 	this.$emit('pics', this.pics)
        // }
        // this.fileList[this.currentIndex] =

        // let obj = {
        //   index: this.currentIndex,
        //   name: file.name,
        //   status: "success",
        //   uid: file.uid,
        //   url: file.url
        // }
        // this.$set(this.fileList, this.currentIndex, [obj])

        // let formData = {
        //   index: this.currentIndex,
        //   name: file.name,
        //   url: file.url
        // }
        // this.$set(this.pics, this.currentIndex, formData)
        // this.$emit('pics', this.pics)
      },
      // 文件上传失败时的钩子
      handleError(res) {
        this.$message.error(res.message.msg)
      },
      // 点击文件列表中已上传的文件时的钩子
			handlePictureCardPreview(file) {

        // 查看图片
        const isJPG = file.raw.type === ('image/jpeg' || 'image/jpg')
        if(isJPG){
          this.dialogImageUrl = file.response.files.file
          this.dialogVisible = true
        }
        // doc
        if(file.raw.type === 'application/msword'){
          this.docUrl = file.response.files.file
          this.showDocDialog = true
        }
        // docx
        if(file.raw.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'){
          this.docxUrl = file.response.files.file
          this.showDocxDialog = true
        }
        // pdf
        if(file.raw.type === 'application/pdf'){
          this.pdfUrl = file.response.files.file
          this.showPdfDialog = true
        }
      },
      // 文件删除之前的钩子
      beforeRemove(file, fileList) {
        return this.$confirm(`确定移除 ${ file.name }？`)
      },
      // 文件列表移除文件时的钩子
			handleRemove(file, fileList) {
        // let formData
        // if(fileList && fileList.length !== 0){
        //   formData = {
        //     index: fileList[0].index,
        //     name: fileList[0].name,
        //     url: fileList[0].url
        //   }
        // }
        // else{
        //   formData = {
        //     index:this.currentIndex,
        //     name:this.default_png,
        //     url:defaultImgUrl
        //   }
        // }
        // this.$set(this.pics, this.currentIndex, formData)
        // this.$emit('pics', this.pics)
			}
		}
	}
</script>

<style scoprd lang="scss">
  .dialog-pdf-custom{
    & > .el-dialog{
      margin-top: 0 !important;
      width: 100%;
      height: 100%;
      & .el-dialog__body{
        height: calc(100% - 30px);
      }
    }
  }
</style>
