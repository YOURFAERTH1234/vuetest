<template>
  <el-empty :image-size="200" />

  <el-pagination background layout="prev, pager, next" :total="1000" />
  <el-tag v-for="tag in tags" :key="tag.name" class="mx-1" closable :type="tag.type">
    {{ tag.name }}
  </el-tag>
  <el-affix :offset="120">
    <el-button type="primary">Offset top 120px</el-button>
  </el-affix>
  <el-backtop :right="100" :bottom="100" />
  <el-breadcrumb separator="/">
    <el-breadcrumb-item :to="{ path: '/' }">homepage</el-breadcrumb-item>
    <el-breadcrumb-item><a href="/">promotion management</a></el-breadcrumb-item>
    <el-breadcrumb-item>promotion list</el-breadcrumb-item>
    <el-breadcrumb-item>promotion detail</el-breadcrumb-item>
  </el-breadcrumb>
  <el-alert title="success alert" type="success" /> <el-divider />
  <el-alert title="info alert" type="info" /> <el-divider />
  <el-alert title="warning alert" type="warning" /> <el-divider />
  <el-alert title="error alert" type="error" /> <el-divider />
  <el-popconfirm title="Are you sure to delete this?">
    <template #reference>
      <el-button>Delete</el-button>
    </template>
  </el-popconfirm>
</template>
<script setup lang="ts">
  import { ref } from 'vue'

  const tags = ref([
    { name: 'Tag 1', type: '' },
    { name: 'Tag 2', type: 'success' },
    { name: 'Tag 3', type: 'info' },
    { name: 'Tag 4', type: 'warning' },
    { name: 'Tag 5', type: 'danger' },
  ])
</script>
