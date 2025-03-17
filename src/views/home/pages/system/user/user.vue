<template>
  <div class="system-user">
    <UserSearch @query-click="queryClickHandler"/>
    <UserContent/>
  </div>
</template>

<script setup lang="ts" name="user">
  import UserSearch from '@/views/home/pages/system/user/components/user-search.vue'
  import UserContent from '@/views/home/pages/system/user/components/user-content.vue'

  interface searchForm {
    username: string;
    phone: string;
    email: string;
    status: string;
    date: string;
  }
  const queryClickHandler = (searchForm: Partial<searchForm>) => {
    console.log('queryClickHandler', searchForm)
  }
</script>

<style scoped lang="less">
  .system-user {
    border-radius: 20px;
  }
</style>
