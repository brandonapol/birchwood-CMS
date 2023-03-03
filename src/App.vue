<template>
  <form>
    <label>
      Title:
      <input v-model="title" type="text" />
    </label>
    <label>
      Author:
      <input v-model="author" type="text" />
    </label>
    <label>
      Content:
      <textarea v-model="content"></textarea>
    </label>
    <button @click.prevent="handleSubmit">Submit</button>
    <button @click.prevent="getData">Get data</button>
  </form>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { calls } from './server_calls/calls'
const title = ref('');
const author = ref('');
const content = ref('');

const getData: () => void = async () => console.log(await calls.get())

function handleSubmit() {
  const formData = {
    title: title.value,
    author: author.value,
    content: content.value,
  };
  console.log(formData); 
  calls.post(formData);
  }

</script>

