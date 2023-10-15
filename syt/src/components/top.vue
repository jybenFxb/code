<template>
  <div>44444</div>
</template>
   

   
<script setup lang='ts'>
import request from "@/utils/request";
import { onMounted } from "vue";
onMounted(() => {
  console.log('3333');
  
  request.get("/hosp/hospital/1/10").then((res) => {
    console.log(res, "res");
  });
});
</script>
   
   <style lang='scss' scoped>
</style>