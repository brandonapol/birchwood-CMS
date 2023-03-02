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
  </form>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const title = ref('');
    const author = ref('');
    const content = ref('');

    function handleSubmit() {
      const formData = {
        title: title.value,
        author: author.value,
        content: content.value,
      };
      console.log(formData); 
      // TODO: send to server
    }

    return {
      title,
      author,
      content,
      handleSubmit,
    };
  },
});
</script>

