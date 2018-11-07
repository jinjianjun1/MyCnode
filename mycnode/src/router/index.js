import Vue from 'vue'
import Router from 'vue-router'
import Article from '../components/Article'
import Postlist from '../components/Postlist'
import Userinformation from '../components/Userinformation'
import Slidebar from '../components/Slidebar'
Vue.use(Router)

export default new Router({
  routes: [
    {
      name:'root',
      path:'/',
      components:{
        main:Postlist,
        side:Slidebar
      }
    },
   {
     name:'post_content',
     path:'/topic/:id&author=:name',
     components:{
       main:Article,
       side:Slidebar
     }
   },
   {
    name:'information',
    path:'/user-information/:name',
    components:{
      main:Userinformation,
      side:Slidebar
    }
  },
  
  ]
})
