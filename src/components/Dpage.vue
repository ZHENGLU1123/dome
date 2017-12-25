<template>
  <div>
    <h1 :style="{color:color}" @click="foo">{{msg}}</h1>
    <button @click="$store.commit('change','red')">一键换肤</button>
  </div>
</template>

<script>
export default {
  created(){
    console.log(this.$store.state.color)
      // console.log('订阅')
      EventBus.$on('pengcheng',(obj)=>{
          // this.color = obj;
          console.log(this);
      })
  },
  data(){
    return{
      msg:'D页面',
    }
  },
  computed:{
    color(){
      return this.$store.state.color
    }
  },
  methods:{
      foo(){
          // console.log(this.msg)
          // this.$store.state.color = 'red'
      }
  }
  
}
</script>

<style>

</style>
