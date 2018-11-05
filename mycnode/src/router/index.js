import Vue from 'vue'
import Router from 'vue-router'
import Article from '../components/Article'
import Postlist from '../components/Postlist'
import Userinformation from '../components/Userinformation'
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
    path:'/user-information/:name',
    components:{
      main:Userinformation
    }
  }
  ]
})
