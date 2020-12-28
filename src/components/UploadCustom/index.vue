<template>
  <div style="margin-bottom:15px;">
    <div class="title-wrap" v-if="this.isEditForm">
      <p class="input-zone">
        <!--  -->
        <el-button type="primary" :disabled="disabled" @click="handelBtnClick" title="请添加附件/上传图片">
          <span>上传文件</span>
        </el-button>
      </p>
      <!-- multiple="multiple" 多文件上传 -->
      <input ref="fileInput" type="file" name="file" :accept="accept" value="" class="fileInput" placeholder="请选择文件" @change="upload" />
    </div>
    <span class="tips" v-if="this.isEditForm">(您可以选择添加附件或者上传图片，附件支持word/pdf格式，单个文件最大20M，最多可上传6个附件；图片支持jpg/jpeg/png格式，单张图片最大5M，最多可上传6张图片。)</span>
    <!-- 已上传的文件列表 -->
    <template v-if="this.isEditForm">
      <template v-if="trustAgreementArr.length !== 0" v-for="(item,index) in trustAgreementArr">
        <div class="progress-wrap-custom progress-wrap-custom-2">
          <span class="file-name file-name-2" :title="item.subName">{{item.subName}}&nbsp;{{item.size}}</span>
          <div class="btn-wrap">
            <span @click="handelDownloadFile(item.name,item.fileType)">预览</span>
            <span @click="handelRemoveFile(item.name,item.fileType)">删除</span>
          </div>
        </div>
      </template>
    </template>
    <template v-else>
      <div style="padding-top: 3px;">
        <template v-if="trustAgreementArr.length !== 0" v-for="(item,index) in trustAgreementArr">
          <div class="progress-wrap-custom progress-wrap-custom-2">
            <span class="file-name file-name-2" :title="item.subName">{{item.subName}}&nbsp;{{item.size}}</span>
            <div class="btn-wrap">
              <span @click="handelDownloadFile(item.name,item.fileType)">预览</span>
            </div>
          </div>
        </template>
      </div>
    </template>

    <!-- 正在上传的文件动画 -->
    <div class="progress-wrap-custom" v-if="isUploadingStatus">
      <span class="file-name" :title="currentFile.name">{{currentFile.name}}</span>
      <div class="progress-wrapper">
        <div class="progress-progress" :style="uploadStyle"></div>
        <div class="progress-rate">{{(uploadRate*100).toFixed(0)}}%</div>
        <span class="status-uploading" v-if="uploadRate < 1">上传中</span>
        <span class="status-success" v-else>成功</span>
      </div>
    </div>

  </div>
</template>

<script>
  import _ from "lodash";
  import axios from 'axios'
  import {getToken} from '@/utils/auth'
  import { removeFile,downloadFile } from "@/api/common"

	export default {
		name: "UploadImageCustom",
		props: {
      trustAgreementArr:{
        type: Array,
        default: []
      },
      isOpen:{
        type: Number,
        default: 0, //是否是公开文件 : 0不公开，1公开
      },
    },
		data() {
			return {
        isEditForm: true, // 页面表单是否可编辑操作。查看时：false,编辑-新增时：true
        modelType: "", //查看：look  编辑：edit  新增：add
        disabled:false,//上传按钮禁用
        uploadRate: 0,
        // 当前上传的文件
        currentFile: {
          size:0,//文件大小
          name:'',//文件名称
        },
        uploadStyle: {
          width: '0%'
        },
        // //已经上传的文件数组
        // fileArr:[
        //   // {
        //   //   name:'都没玩联盟翁没问.jpg',//文件名---后台
        //   //   subName: '都没玩联盟翁没问.jpg',//文件名---前台显示
        //   //   size: 3.21,//文件大小
        //   //   fileType:1,//文件类型
        //   // }
        // ],
        isUploadingStatus:false,//上传动画
        accept:'.docx,.doc,.pdf,.jpg,.jpeg,.png',// 要上传的文件类型
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
      // this.$nextTick(() => {
      //   this.$refs['fileInput'].setAttribute('title','请选择文件/图片')
      // })
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
      // this.$nextTick(() => {
      //   this.$refs['fileInput'].setAttribute('title','请选择文件/图片')
      // })
    },
		methods: {
      handelBtnClick(){
        this.$refs['fileInput'].click()
      },
      //上传文件
      upload: function (e) {
        let _file_ = e.target.files[0] || ''

        if(_file_){
          /*--------------------判断数量 start----------------------*/
          let imgTotal = 0 //jpg，jpeg,png的数量
          let fileTotal = 0 //word,pdf的数量

          this.trustAgreementArr.map(item=>{
            let _suffix_ = item.name.substring(item.name.lastIndexOf('.')+1)
            switch(_suffix_){
              case 'jpeg':
              case 'jpg':
              case 'png':
                imgTotal++
                break;
              case 'doc':
              case 'docx':
              case 'pdf':
                fileTotal++
                break;
            }
          })
          /*--------------------判断数量 end----------------------*/

          // 如果上传的是jpeg、jpg，判断其大小
          const isJPG = _file_.type === 'image/jpeg' || _file_.type === 'image/jpg' || _file_.type === 'image/png'
          const isLt2M = _file_.size / 1024 / 1024 < 5
          // 如果上传的是doc,docx,pdf文件类型，判断其大小
          const isWordPdf = _file_.type === 'application/msword' || _file_.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' || _file_.type === 'application/pdf'
          const isWordPdf20M = _file_.size / 1024 / 1024 < 20

          // 获取文件类型后缀名
          let _ft_ = _file_.type.substring(0,_file_.type.indexOf('/')) || ''

          switch(_ft_){
            case 'image':
              if (isJPG) {
                if(imgTotal >= 6){
                  this.$message.error('图片最多上传6张')
                  this.$refs['fileInput'].value = '' //重置文件上传的默认选中值
                }
                if (!isLt2M) {
                  this.$message.error('上传图片大小不能超过 5MB!')
                  this.$refs['fileInput'].value = '' //重置文件上传的默认选中值
                }
              }
              else{
                this.$message.error('只能上传jpg/jpeg/png类型的图片')
                this.$refs['fileInput'].value = '' //重置文件上传的默认选中值
              }
              break;
            case 'application':
              if(isWordPdf){
                if(fileTotal >= 6){
                  this.$message.error('文件最多上传6个')
                  this.$refs['fileInput'].value = '' //重置文件上传的默认选中值
                }
                if (!isWordPdf20M) {
                  this.$message.error('word/pdf大小不能超过 20MB!')
                  this.$refs['fileInput'].value = '' //重置文件上传的默认选中值
                }
              }
              else{
                this.$message.error('只能上传word和pdf类型的文件')
                this.$refs['fileInput'].value = '' //重置文件上传的默认选中值
              }
              break;
            default:
              this.$message.error('只能上传word/pdf/jpg/jpeg/png类型的文件')
              this.$refs['fileInput'].value = '' //重置文件上传的默认选中值
          }

          if((isJPG && isLt2M && imgTotal < 6) || (isWordPdf && isWordPdf20M && fileTotal < 6)){
            this.disabled = true;//禁用按钮
            var that = this;
            that.isUploadingStatus = true;
            var formData = new FormData();
            formData.append("name", "filesUploader");
            formData.append("file", _file_);
            that.currentFile.name = _file_.name;
            that.currentFile.size = that.fomatFloat(_file_.size/1024/1024,2);

            var config = {
              headers: {
                'Content-Type': 'multipart/form-data',
                Authorization: 'Bearer ' + getToken()
              },
              onUploadProgress: function (e) {
                //属性lengthComputable主要表明总共需要完成的工作量和已经完成的工作是否可以被测量
                //如果lengthComputable为false，就获取不到e.total和e.loaded
                if (e.lengthComputable) {
                  var rate = that.uploadRate = (e.loaded / e.total)*0.99; //已上传的比例
                  if (rate < 1) {
                    //这里的进度只能表明文件已经上传到后台，但是后台有没有处理完还不知道
                    //因此不能直接显示为100%，不然用户会误以为已经上传完毕，关掉浏览器的话就可能导致上传失败
                    //等响应回来时，再将进度设为100%
                    that.uploadRate = rate;
                    that.uploadStyle.width = (rate*100).toFixed(0)+ '%';
                  }
                }
              }
            };
            let _url_ = process.env.VUE_APP_BASE_API + '/file/v1/uploadLocation?isOpen='+this.isOpen
            axios.post(_url_, formData, config).then(function (data) {
              var json = data.data; //后台实际返回的结果
              if (json.code === 1 && json.data.uploadState === true) {
                that.uploadRate = 1;
                that.uploadStyle.width = '100.00%';

                let _size_ = json.data.fileName.substring(json.data.fileName.lastIndexOf('('))
                let _subName_ = json.data.fileName.substring(0,json.data.fileName.lastIndexOf('('))
                let _subName_1 = _subName_.substring(0,_subName_.lastIndexOf(".")-20)
                let _subName_2 = _subName_.substring(_subName_.lastIndexOf("."))

                let obj = {
                  name:_subName_,//文件名---后台
                  subName: _subName_1+_subName_2,//文件名---前台显示
                  size: _size_,//文件大小
                  fileType:json.data.fileType,//文件类型
                }
                let _trustAgreementArr_ = _.cloneDeep(that.trustAgreementArr)
                _trustAgreementArr_.push(obj)
                that.isUploadingStatus = false;
                that.disabled = false;//启用按钮
                that.$emit('getFileList',_trustAgreementArr_) //将最新的文件数组传给父组件

                that.$refs['fileInput'].value = '' //重置文件上传的默认选中值
              }
              else {
                that.isUploadingStatus = false;
                that.disabled = false;//启用按钮
                that.$refs['fileInput'].value = '' //重置文件上传的默认选中值
              }
            }).catch(function (err) {
              that.isUploadingStatus = false;
              that.disabled = false;//启用按钮
              that.$refs['fileInput'].value = '' //重置文件上传的默认选中值
            });
          }
        }
      },
      //删除文件
      handelRemoveFile(fileName,fileType){
        let _data_ = {
          fileType:fileType,
          fileName:fileName,
          isOpen:this.isOpen
        }
        let that = this
        removeFile(_data_).then(response => {
          if(response.code === 1 && response.data.deleteState === true){
            let _trustAgreementArr_ = _.cloneDeep(that.trustAgreementArr)
            _trustAgreementArr_ = _trustAgreementArr_.filter(item=>{
              if(item.name !== response.data.fileName){
                return item
              }
            })
            this.$message({
              type: "success",
              message: `删除文件成功`
            });
            that.$emit('getFileList',_trustAgreementArr_) //将最新的文件数组传给父组件
          }
          else{
            this.$message({
              type: "error",
              message: `删除文件失败`
            });
          }
        }).catch((e) => {

        })
      },
      // 下载文件
      handelDownloadFile(fileName,fileType){
        let that = this
        let _mimeType_ = fileName.substring(fileName.lastIndexOf(".")+1)
        let _data_ = {
          mimeType:_mimeType_, //文件的MIME type类型
          fileType:fileType,//文件类型 0图片 1文件
          fileName:fileName,//文件名
          isOpen:this.isOpen //是否公开 0不公开 1公开
        }
        let _url_ = process.env.VUE_APP_BASE_API + '/file/v1/downloadLocation';
        downloadFile(_url_,_data_);
      },
      // 保留n位小数
      fomatFloat(src,pos){
        return Math.round(src*Math.pow(10, pos))/Math.pow(10, pos);
      }
		}
	}
</script>

<style lang="scss" scoped>
  .title-wrap{
    display: flex;
  }
  .tips{
    padding: 10px 0px 10px 0px;
    color: rgb(153, 153, 153);
    line-height: 22px;
    display: block;
  }
  .input-zone {
    position: relative;
    width: 96px;
    height: 36px;
    color: blue;
    font-size: 14px;
    position: relative;
    margin: 0;
    cursor: pointer;
  }
  .fileInput {
    opacity: 0;
    width: 0;
    height: 0;
    position: absolute;
    left: 0;
    top: 0;
    display: block;
    z-index: 2;
    cursor: pointer;
  }
  .progress-wrap-custom{
    display: flex;
    //background-color: rgba(0,0,255,0.3);
    margin-bottom: 5px;
    padding-right: 140px;
  }
  .progress-wrap-custom-2{
    padding: 0;
  }
  .btn-wrap{
    min-width: 104px;
    display: flex;
    margin: 0;
    // padding-left: 70px;
    line-height: 30px;
    & span{
      margin-right: 20px;
      color: #2671DA;
      cursor: pointer;
    }
  }
  .file-name{
    width: 150px;
    height: 30px;
    line-height: 30px;
    font-size: 16px;
    padding-right: 20px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .file-name-2{
    width: calc(60% + 50px);
    max-width: 800px;
    // min-width: 300px;
  }
  .progress-wrapper {
    position: relative;
    width: 60%;
    max-width: 800px;
    // min-width: 300px;
    height: 12px;
    border-radius: 5px;
    background-color: lightgrey;
    margin-top: 8px;
  }
  .progress-wrapper .progress-progress {
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 0%;
    border-radius: 5px;
    background-color: darkturquoise;
    z-index: 1;
  }
  .progress-wrapper .progress-rate {
    position: absolute;
    right: -70px;
    top: -8px;
    text-align: center;
    font-size: 16px;
    width: 70px;
    height: 30px;
    line-height: 30px;
    z-index:2;
  }
  .status-uploading,
  .status-success{
    position: absolute;
    right: -140px;
    top: -8px;
    text-align: left;
    font-size: 16px;
    width: 70px;
    height: 30px;
    line-height: 30px;
    z-index:2;
  }
  .status-uploading{
    color: #2671DA;
  }
  .status-success{
    color: #11b35c;
  }
</style>
