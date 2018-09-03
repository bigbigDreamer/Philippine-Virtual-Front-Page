<template>
    <el-col :span="14" :offset="5">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>热帖榜</span>
        </div>
        <div class="text item">
          <ul>
            <li v-for="index in 5" :key="index" @click="handleClick" ref="li">
              热血风云榜{{index}}
            </li>
          </ul>
        </div>
      </el-card>
    </el-col>
</template>

<script>
    export default {
        name: "Panel",
      methods:{
        handleClick(event){
          console.log(this.$refs.li.innerText)
        }
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
