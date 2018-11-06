<template>
  <div id="app">
    <Header></Header>
    <div class="main">
      
      <router-view name="main" class="article"></router-view>
      <router-view name="side" class="slide"></router-view>
    </div>
    
  </div>
</template>

<script>
import Header from './components/Header'
import Postlist from './components/Postlist'
export default {
  name: 'App',
  components:{
    Header,
    Postlist
  }
}
</script>

<style scoped>
*{
  margin: 0;
  padding: 0;
}
#app{
  background-color: #e1e1e1
}
 .main{
   width: 80%;
   margin: 0 auto;
   display: flex;
   justify-content: space-around;
 }
 .article{
   width: 80vw;
 }
 .slidebar{
   width: 20vw;
 }
  
</style>
