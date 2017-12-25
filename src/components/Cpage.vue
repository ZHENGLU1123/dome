<template>
  <div>
    <h1 :style="{color:color}">{{msg}}</h1>
    <button @click="$router.push('/d')">跳转到D页面</button>
  </div>
</template>

<script>
export default {
  created(){
    console.log(EventBus)
  },
  data(){
    return{
      msg:'C页面',
      count:'100',
      color:this.$store.state.color
    }
  },
  destroyed(){
    console.log('发布')
    EventBus.$emit('pengcheng','red')
  }
  // methods:{
  //   pushD(){
  //     this.$router.push('/d')
  //   }
  // }
  
}
</script>

<style>

</style>
