<template>
  <div>
    <h1>{{msg}}</h1>
    <ul>
      <!-- <li v-for='item in dataList' @click="pushFn">{{item.productNanme}}</li> -->
      <li v-for="(item,index) in dataList" :key="index">
        <router-link :to="/b/+item.price">{{item.productNanme}}</router-link> 
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name:'apage',
  data(){
    return{
      msg:'A页面',
      dataList:[
        {
          productNanme:'三星',
          price:'$999'
        },
        {
          productNanme:'苹果',
          price:'$9299'
        },
        {
          productNanme:'小米',
          price:'$9939'
        },{
          productNanme:'华为',
          price:'$3999'
        },{
          productNanme:'香蕉',
          price:'$1999'
        }
      ]
    }
  },
  methods:{
    pushFn(){
      // this.$router.push({
      //   // 
      //   // name:'bpage',
      //   // params:{
      //   //   name:'123'
      //   // }
      //   path:'/b',
      //   query:{
      //     name:'lishijie'
      //   }
      // })
    }
  }
  
}
</script>

<style>

</style>
