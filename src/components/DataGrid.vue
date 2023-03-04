<template>
    <div v-for="post in finalData" :key="post._id" class="flex flex-col">
      <div class="flex flex-row text-blue-600">
          <input type="checkbox" :value="post._id" v-model="selectedIds" @click="printIds"/>
          <h2>{{ post.title }}</h2>
      </div>
      <p>{{ post.author }}</p>
      <p>{{ post.content }}</p>
      <p>Created At: {{ post.createdAt }}</p>
      <p>Updated At: {{ post.updatedAt }}</p>
      <button>Update</button>
      <button>Delete</button>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { calls } from '../server_calls/calls';
const apiData: object = await calls.get()
const finalData: apiPost[] = Object.values(apiData)


interface apiPost {
    _id: string,
    title: string,
    author: string,
    content: string,
    createdAt: string,
    updatedAt: string,
}

const selectedIds = ref([])
const printIds = () => {
    console.log(selectedIds)
}

// const updateData = () => {
//     calls.update
// }



</script>

