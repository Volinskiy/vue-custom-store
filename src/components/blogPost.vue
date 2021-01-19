<template>
  <div>
    <p>{{ postData.text }}</p>
    <buttonCounter 
      @incrize-font-size="incrizeFontSize()"/>
  </div>
</template>

<script>
import buttonCounter from './buttonCounter';

export default {
  name: 'blogPost',
  props: [
    'postData',
  ],
  components: {
    buttonCounter
  },
  methods: {
    incrizeFontSize(){
      console.log('incrizeFontSize');
    }
  }
}
</script>