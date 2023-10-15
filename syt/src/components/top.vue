<template>
  <div>
    我是头部
    {{  dataUser?.datahosp.content}}
    <!-- <div v-for="(item, index) in resArr" :key="index"><span>{{ item.id}}</span></div> -->
  </div>
</template>
   

   
<script lang='ts'  setup>
import { reqHospital } from '@/api/home'
import { onMounted, ref } from "vue";
import type {RootObject,HospContent} from '@/api/home/type'
import {useDefineStore} from '@/store/module/hosptial'

let page = ref<number>(1);
let pageNo = ref<number>(10);
let resArr = ref<HospContent>([]);
let dataUser =useDefineStore();

onMounted(() => {
  res()

});

const res = async () => {
  const resData:RootObject = await reqHospital(page.value, pageNo.value);
  console.log(resData);
  resArr.value = resData.data.content
}
</script>
   
<style lang='scss' scoped></style>