<template>
  <div>
    <h1>{{msg}}</h1>
    <!-- <h1>这是A页面通过路由传递过来的值{{$route.query.name}}</h1> -->
        <h1>这是A页面通过路由传递过来的值{{$route.params.price}}</h1>

  </div>
</template>

<script>
export default {
  mounted(){
    console.log(this.$route);
  },
  data(){
    return{
      msg:'B页面'
    }
  }
  
}
</script>

<style>

</style>
