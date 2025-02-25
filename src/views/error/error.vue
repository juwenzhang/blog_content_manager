<template>
  <div class="error">
    <h2 class="error-title">
      {{ errorTitle }}
    </h2>
    <span class="error-action"
        @click="BackHome()"
    >
      {{ errorAction }}
    </span>
  </div>
</template>

<script setup lang="ts">
  import { useRouter } from "vue-router"
  import type {Router} from "vue-router"

  const errorTitle: string = '404 Not Found-你输入的地址不正确，请联系管理员'
  const errorAction: string = '返回首页Home'
  const router:Router = useRouter()

  function BackHome(): void {
    router.push('/home')
  }
</script>

<style scoped lang="less">
  .error {
    border: 1px solid black;
    margin: 200px auto;
    text-align: center;
    width: 600px;
    padding: 20px;

    .error-title, .error-action {
      margin: 20px;
      color: red;
    }

    .error-action {
      cursor: pointer;
      border-bottom: 1px solid red;
    }
  }
</style>
