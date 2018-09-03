<template>
  <div>
  <el-row>
    <el-col :span="24" class="header"><div class="grid-content">
      <el-row>
      <el-col :span="20" :xs="18">
        <h2>Philippine BBS</h2>
      </el-col>
       <el-col :span="4" :xs="4">
         <el-button round  @click="dialogVisible = true">发帖</el-button>
       </el-col>
      </el-row>
    </div></el-col>
  </el-row>
    <el-row>
      <el-dialog
        title="发布帖子"
        :visible.sync="dialogVisible"
        width="30%"
        :before-close="handleClose">
        <el-input
          placeholder="请输入内容"
          v-model="input10"
          clearable>
        </el-input>
        <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogVisible = false">发布</el-button>
  </span>
      </el-dialog>
    </el-row>
    <el-row class="body">
       <Panel/>
    </el-row>
    <el-row class="footer">
       <Footer/>
    </el-row>
  </div>
</template>

<script>
import Panel from  './components/Panel'
import Footer from  './components/Footer'
export default {
  name: 'App',
  data() {
    return {
      dialogVisible: false,
      input10: ''
    };
  },
  methods: {
    handleClose(done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done();
        })
        .catch(_ => {});
    }
  },
  components:{
    Panel,
    Footer
  }
  }
</script>

<style>
  .header{
    background-color: black;
    padding: 5px;
  }
  .header .grid-content h2{
    text-align: center;
    letter-spacing: 3px;
    color: white;
    font-size: 28px;
    font-family: 'Droid Serif', serif;
    font-style: italic;
  }
  .header .grid-content .el-button{
    margin-top: 10px;
    background-color: black;
    font-size: 15px;
    cursor: pointer;
    border: none;
  }
  .el-dialog{
    background-color: black ;
  }
  .body{
    background-color: #434343;
  }
  .footer{
    background-color: black;
    color: #C7C7C7;
    padding: 20px;
    text-align: center;
  }
</style>
