<template>
  <div id="app">
    <blogPost
      v-for="post in posts"
      :key="post.id"
      postData="post"/>
  </div>
</template>

<script>
import blogPost from './components/blogPost.vue'

export default {
  name: 'App',
  data(){
    return {
      posts: [
        {text: 'Управление состоянием приложения', id: 1},
        {text: 'Роутинг', id: 2},
        {text: 'Стор', id: 3},
      ]
    }
  },
  components: {
    blogPost
  },
}
</script>
