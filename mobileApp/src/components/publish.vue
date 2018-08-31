<template>
  <div>
    <div>
      <el-input
        type="textarea"
        :autosize="{ minRows: 2, maxRows: 8}"
        placeholder="请输入内容"
        v-model="textarea">
      </el-input>
    </div>
    <br>
     <el-col :offset="18">
       <el-button type="primary" @click="handleClick">发布</el-button>
     </el-col>

  </div>
</template>

<script>
    export default {
        name: "publish",
      data(){
          return {
            textarea:"",
            Persons:[
              {
                name:"张三",
                msg:"这个论坛太棒了"
              },{
                name:'李四',
                msg:"还行吧"
              }
            ]
          }
      },
      methods:{
          handleClick(){
            this.Persons.push({name:'测试',msg:this.textarea})
            this.$pub.publish("persons",this.Persons)
          }
      }

    }
</script>

<style>
textarea{
  width: 100%;
  height: 200px!important;
}

.el-textarea__inner{

}
</style>
