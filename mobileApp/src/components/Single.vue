<template>
  <el-col :span="14" :offset="5">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>{{this.topic}}</span>
      </div>
      <div class="text item">
        <ul>
          <li>
            {{this.content1}}
          </li>
        </ul>
      </div>
    </el-card>
  </el-col>
</template>

<script>
    export default {
       name: "Single",
       data(){
          return {
            content1:'',
            topic:''
          }
       },
      mounted(){
         this.content1 = this.$route.params.content
         this.topic = this.$route.params.topic
        console.log(this.$route.params.topic)
        this.$pub.subscribe('data',(msg,content)=>{
          console.log('bug通过了')
          this.content1 = content
        })
      }
    }
</script>

<style>
  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 100%;
    height: 500px;
    background-color: #434343;
    color: #C7C7C7;
    border: none;
  }
</style>
