<script setup lang="ts">
</script>

<template>
  <div>
   
   <top />
   
   
   <router-view />
  
   <bottom />
  </div>
</template>

<script lang="ts" setup>
//引入全局组件--顶部、底部都是全局组件
import top from '@/components/top.vue'
import bottom from '@/components/bottom.vue'
</script>

