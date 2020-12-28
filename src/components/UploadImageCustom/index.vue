<template>
	<div class="upload-wrap-custom">
    <!-- 新增，编辑 -->
    <template v-if="this.isEditForm">
      <div class="upload-item-custom" v-for="(item,index) in fileList" :class="hoverDiv[index] === true ? 'hoverDiv' : ''" @mouseenter="handelMouseenter(index)" @mouseleave="handelMouseleave(index)">
        <div class="showTipsDiv" >{{showTipsArr[index]}}</div>
        <el-upload
          v-loading="loading[index]"
          :action="uploadUrl"
          :file-list="item"
          :headers="headers"
          list-type="picture-card"
          :on-preview="handlePictureCardPreview"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload"
          :on-error="handleError"
          :on-remove="handleRemove"
          :accept="accept"
          :class="{'pic-is-show' : isShow}">
          <i slot="trigger" class="add-img-btn-custom" @click="handleAddImg(index)">{{item[0].url !== defaultUrl ? '替换图片' : '上传图片'}}</i>
          <div slot="file" slot-scope="{file}">
            <img class="el-upload-list__item-thumbnail" :src="file.url" alt="" >
            <span v-if="file.url !== defaultUrl" class="el-upload-list__item-actions">
              <span class="el-upload-list__item-preview" @click="handlePictureCardPreview(file)" >
                <i class="el-icon-zoom-in" title="查看缩略图"></i>
              </span>
              <span class="el-upload-list__item-delete" @click="handleRemove(file,index)" >
                <i class="el-icon-delete" title="删除"></i>
              </span>
            </span>
          </div>
        </el-upload>
      </div>
    </template>
    <!-- 查看 -->
    <template v-else>
      <div class="upload-item-custom look" v-for="(item,index) in fileList" :class="hoverDiv[index] === true ? 'hoverDiv' : ''" @mouseenter="handelMouseenter(index)" @mouseleave="handelMouseleave(index)">
        <div class="showTipsDiv" >{{showTipsArr[index]}}</div>
        <el-upload
          v-loading="loading[index]"
          :action="uploadUrl"
          :file-list="item"
          list-type="picture-card"
          :on-preview="handlePictureCardPreview"
          :class="{'pic-is-show' : isShow}">
          <div slot="file" slot-scope="{file}">
            <img class="el-upload-list__item-thumbnail" :src="file.url" alt="" >
            <span v-if="file.url !== defaultUrl" class="el-upload-list__item-actions">
              <span class="el-upload-list__item-preview" @click="handlePictureCardPreview(file)" >
                <i class="el-icon-zoom-in" title="查看缩略图"></i>
              </span>
            </span>
          </div>
        </el-upload>
      </div>
    </template>

    <el-dialog :visible.sync="dialogVisible" class="img-show-dialog-custom">
			<!-- <img width="100%" :src="dialogImageUrl" alt=""> -->
      <div class="img-url-div-custom" :style="'background-image: url('+dialogImageUrl+');'"></div>
		</el-dialog>

	</div>
</template>

<script>
  import {getToken} from '@/utils/auth'
  import { removeFile,getDefaultImgUrl } from "@/api/common"

	export default {
		name: "UploadImageCustom",
    props:{
      isUpdate: {
        type: Boolean,
        default: false
      },
      formImgs:{
        type: Array,
        default: []
      },
      isOpen:{
        type: Number,
        default: 1, //是否是公开文件 : 0不公开，1公开
      },
      idEdit:{
        type: Boolean,
        default: true, // 页面表单是否可编辑操作。查看时：false,编辑-新增时：true
      }
    },
		watch: {
			isUpdate: {
				handler() {
          this.update()
				}
      },
      idEdit:{
        handler(a,b) {

        }
      }
		},
		data() {
			return {
        isEditForm: true, // 页面表单是否可编辑操作。查看时：false,编辑-新增时：true
        modelType: "", //查看：look  编辑：edit  新增：add
        uploadUrl: '',
        //uploadUrl :'https://httpbin.org/post', // 假地址
				headers: { Authorization: 'Bearer ' + getToken() },// 设置上传的请求头部
				fileList: [], // 编辑时用于展示的数据
				dialogImageUrl: '', // 显示大图的图片路径
				dialogVisible: false,
				isShow: false, // 查看是不显示上传
        pics: [], // 用于提交表单的数据
        hoverDiv:[false,false,false,false,false,false],//鼠标移入移出
        showTipsArr:['外景或大门','房间','生活服务区域','保健服务区域','公共活动区域','服务保障区域'],// 鼠标移入提示放入图片的类型
        currentIndex: null, // 当前操作的是第几个图片
        loading: [false,false,false,false,false,false], // 加载动画
        defaultUrl:'',//默认图片的路径
        accept:'.jpg,.jpeg,.png',// 要上传的文件类型
      }
		},
		mounted() {
      this.modelType = this.$route.query.modelType;
      if (this.modelType === "edit") {
        this.isEditForm = true;
      } else if (this.modelType === "add") {
        this.isEditForm = true;
      } else if (this.modelType === "look") {
        this.isEditForm = false;
      }
      this.uploadUrl = process.env.VUE_APP_BASE_API + '/file/v1/uploadLocation?isOpen=' + this.isOpen

      // this.$message({
      //   type: "success",
      //   message: 'process.env.VUE_APP_BASE_API===='+process.env.VUE_APP_BASE_API
      // });

			if (this.$route.query.modelType === 'look') {
				this.isShow = true
      }
      //获取默认图片路径
      getDefaultImgUrl().then(response => {
        if(response.code === 1){
          this.defaultUrl = response.data.defaultImgPath
          this.$emit('getDefaultImgUrl',response.data.defaultImgPath)
          this.update()
        }
      }).catch((e) => {
      })
    },
    activated(){
      this.modelType = this.$route.query.modelType;
      if (this.modelType === "edit") {
        this.isEditForm = true;
      } else if (this.modelType === "add") {
        this.isEditForm = true;
      } else if (this.modelType === "look") {
        this.isEditForm = false;
      }
    },
		methods: {
      // 更新图片上传组件
      update() {
        return new Promise((resolve, reject) => {
          this.pics = []
          this.fileList = []
          this.formImgs.forEach((item,index) => {
            //data.url = `${process.env.VUE_APP_API_IMGURL}${item.url}`
            if (this.modelType === "add") {
              if(item.url === ''){
                item.url = this.defaultUrl || require('@/assets/img/default.jpg')
              }
            }
            let data = { url:item.url }
            let dataArr = [data]
            this.fileList.push(dataArr)
            let formData = {
              url:item.url
            }
            this.pics.push(formData)
            this.$nextTick(() => {
              this.$emit('pics', this.pics)
            });
          })
          resolve()
        })
      },
      // 添加图片
      handleAddImg(e) {
        this.currentIndex = e
      },
      // 鼠标移入
      handelMouseenter(e) {
        this.$set(this.hoverDiv, e, true)
      },
      // 鼠标移出
      handelMouseleave(e) {
        this.$set(this.hoverDiv, e, false)
      },
      // 文件超出个数限制时的钩子
			// handleExceed(files, fileList) {
			// 	this.$message.warning(`当前限制选择 6 个文件`);
      // },
      // 上传文件之前的钩子，参数为上传的文件，若返回 false 或者返回 Promise 且被 reject，则停止上传。
			beforeAvatarUpload(file) {
        if(this.currentIndex !== null){
          const isJPG = file.type === 'image/jpeg' || file.type === 'image/jpg' || file.type === 'image/png'
          const isLt2M = file.size / 1024 / 1024 < 5
          if (isJPG) {
            if (!isLt2M) {
              this.$message.error('上传图片大小不能超过 5MB!')
            }
          }
          else{
            this.$message.error('只能上传jpg,jpeg,png类型的图片')
            return false
          }
          if(isJPG && isLt2M){
            this.loading[this.currentIndex] = true
          }
          return isJPG && isLt2M
        }
        else{
          this.$message.error('获取本地文件失败，请重新选择')
          return false
        }
			},
			// 上传成功后
			handleAvatarSuccess(response, file, fileList) {
        let _path_ = response.data.path
        this.loading[this.currentIndex] = false
        let obj = {
          url: _path_
        }
        this.$set(this.fileList, this.currentIndex, [obj])
        let formData = {
          url: _path_
        }
        this.$set(this.pics, this.currentIndex, formData)
        this.$emit('pics', this.pics,true)
        this.$message({
          type: "success",
          message: `上传图片成功`
        });
        this.currentIndex = null
      },
      // 文件上传失败时的钩子
      handleError(res) {
        this.loading[this.currentIndex] = false
        this.$message.error('图片上传失败')
        this.currentIndex = null
      },
      // 点击文件列表中已上传的文件时的钩子
			handlePictureCardPreview(file) {
				this.dialogImageUrl = file.url || ''
				this.dialogVisible = true
      },
      // 文件列表移除文件时的钩子
			handleRemove(file, index) {
        // 删除图片
        let _imgName_ = (file.url || '').substring((file.url || '').lastIndexOf("/")+1)
        let _houzhui_ = _imgName_.substring(_imgName_.lastIndexOf(".")+1)
        const isJPG = _houzhui_ === 'jpeg' || _houzhui_ === 'jpg' || _houzhui_ === 'png'
        if(isJPG){
          let _data_ = {
            fileType:0,
            fileName:_imgName_,
            isOpen:this.isOpen
          }
          removeFile(_data_).then(response => {
            if(response.code === 1 && response.data.deleteState === true){
              let formData = {
                url: response.data.defaultImgPath
              }
              this.$set(this.pics, index, formData)
              this.$emit('pics', this.pics,true)
              this.$message({
                type: "success",
                message: `删除图片成功`
              });
            }
          }).catch((e) => {
          })
        }

			}
		}
	}
</script>

<style scoprd lang="scss">
  .btn-wrap{
    display: flex;
    margin-bottom: 15px;
  }
  .btn-wrap > .el-button{
    height: 36px;
  }
  .btn-wrap > .el-upload__tip{
    margin: 0;
    margin-left: 10px;
    font-size: 16px;
    color: #999999;
  }
	.pic-is-show .el-upload {
		display: none;
  }
  .upload-wrap-custom{
    display: flex;
    flex-wrap: wrap;
  }
  .upload-wrap-custom{
    & > .upload-item-custom{
      position: relative;
      & .showTipsDiv{
        position: absolute;
        left: 0;
        top: 0;
        z-index: 1;
        color: #fff;
        width: 210px;
        height: 32px;
        line-height: 32px;
        font-size: 18px;
        text-align: center;
        background-color: rgba(0, 0, 0,0.4);
        display: none;
        border-top-left-radius: 6px;
        border-top-right-radius: 6px;
      }
    }
    & > .upload-item-custom:hover{
      & .showTipsDiv{
        display: block;
      }
    }
    & .el-upload--picture-card{
      position: absolute;
      bottom: 25px;
      left: 15px;
      background-color: #2A75DE;
      border: none;
      border-radius: 0;
      width: 180px;
      height: 30px;
      line-height: 30px;
      display: none;
      transition: all 0.3s;
      cursor: pointer;
      & > .add-img-btn-custom{
        font-size: 16px;
        color: #fff;
        font-style: normal;
      }
    }
    & > .upload-item-custom.look{
      & .el-upload--picture-card{
        display: none;
      }
    }
    & .el-upload-list--picture-card .el-upload-list__item-actions{
      background-color: rgba(0,0,0,0.3);
    }
    & .el-upload-list--picture-card>li{
      display: none;
      transition: none;
      width: 210px;
      height: 160px;
      margin: 0 15px 1px 0;
    }
    & .el-upload-list--picture-card>li:first-child{
      display: inline-block;
    }
  }
  .hoverDiv {
    & .el-upload--picture-card{
      display: block;
    }
  }
  .img-show-dialog-custom > .el-dialog{
    width: 80vw;
    max-width: 1000px;
    margin-top: 0 !important;
    top: 50%;
    transform: translateY(-50%);
  }
  .img-url-div-custom{
    width: 100%;
    height: 80vh;
    max-height: 700px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
  }
  .el-icon-zoom-in,
  .el-icon-delete{
    font-size: 26px !important;
  }
  .el-loading-mask{
    width: 210px;
    height: 160px;
  }
</style>
