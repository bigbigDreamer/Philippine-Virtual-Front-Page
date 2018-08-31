<template>
  <el-row>
    <el-col :xs="24" :sm="24" :md="24">
      <el-card class="box-card">
        <div v-for="(item,index) in Persons" :key="index" class="text item">
           <span>{{item.name}}说：</span><br>
          &nbsp;&nbsp;{{item.msg}}
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
    export default {
        name: "Panel",
      data(){
          return {
           Persons:[]
          }
      },
      mounted(){
          this.$pub.subscribe('persons',(msg,data)=>{
            this.Persons = data
          })
      }
    }
</script>

<style scoped>

</style>
