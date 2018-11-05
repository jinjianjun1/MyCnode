import Vue from 'vue'
import Router from 'vue-router'
import Article from '../components/Article'
import Postlist from '../components/Postlist'
Vue.use(Router)

export default new Router({
  routes: [
    {
      name:'root',
      path:'/',
      components:{
        main:Postlist
      }
    },
   {
     name:'post_content',
     path:'/topic/:id',
     components:{
       main:Article
     }
   },
   {
    name:'information',
    path:'/information/:id',
    components:{
      main:Article
    }
  }
  ]
})
