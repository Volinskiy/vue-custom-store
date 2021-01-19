<template>
  <button @click="emmitIncrizeFontSize()">Увеличить размер шрифта</button>
</template>
<style lang="css">
  button {
    font-size: 11px;
  }
</style>
<script>
export default {
  name: 'buttonCounter',
  data(){
    return {
      increment: 1,
    }
  },
  methods: {
    emmitIncrizeFontSize(){
      console.log(this.$store);
      this.$emit('incrize-font-size', this.increment)
    }
  }
}
</script>