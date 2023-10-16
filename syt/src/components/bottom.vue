<template>
   <div>
      我是底部
   </div>
</template>

<script lang='ts' setup >
import {useDefineStore} from '@/store/module/hosptial'

import { onMounted } from 'vue';

let getdata = useDefineStore();


onMounted(()=>{
   getdata.getHosp(1,10)
})

</script>

<style lang='scss' scoped></style>