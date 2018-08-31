<template>
  <div>
  <div v-show="isPlay2">
    <el-row>
      <el-col :xs="20" :sm="20" :md="20">
       <h2>欢迎来到红柳虚拟论坛</h2>
      </el-col>
      <el-col :xs="4" :sm="4" :md="4">
        <el-button type="primary" class="trans" @click="jump">转到</el-button>
      </el-col>
    </el-row>
    <el-row>
      <el-col :xs="24" :sm="24" :md="24">
      <Publish/>
      </el-col>
    </el-row>
  </div>
    <div v-show="isPlay">
    <Panel />
      <el-button type="primary" class="trans" @click="backFrom">转到</el-button>
    </div>
  </div>
</template>

<script>
  import Publish from './components/publish'
  import Panel from './components/Panel'
export default {
  name: 'App',
  data(){
    return {
      value:'',
      tabPosition: 'bottom',
      isPlay:false,
      isPlay2:true
    }
  },
  components:{
    Publish,
    Panel
  },
  methods:{
    jump(){
      this.isPlay2 = false
      this.isPlay = true
    }
    ,backFrom(){
      this.isPlay = false
      this.isPlay2 = true
    }
  }
}
</script>

<style>
.trans{
   
}
</style>
