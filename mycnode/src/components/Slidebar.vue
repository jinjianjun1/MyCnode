<template>
    <div class="sidebar">
        <div v-if="dataarrive==false" class="author-infor">
            <p class="side-title">CNode:Node.js专业中文社区</p>
            <p class="side-tip">您可以<span> 登录 </span>或 <span>注册</span>，也可以</p>
            <span class="side-login">通过GitHub登录</span>
            
        </div> 
        <div v-else class="author-information">
            <div class="author">个人信息</div>
            <div class="author-infor">
                <router-link :to="{name:'information',params:{name:userinfor.loginname}}">
                    <img :src="userinfor.avatar_url" >
                </router-link>
               <span class="name">{{userinfor.loginname}}</span>
               <p>积分:{{userinfor.score}}</p>
               <p>“ 这家伙很懒，什么个性签名都没有留下。 ”</p>
            </div>
        </div>
        <div class="art">
            <img src="../assets/art1.jpg" >
            <img src="../assets/art2.jpg" >
            <img src="../assets/art3.jpg" >
            <img src="../assets/art4.jpg" >
        </div>
        <div class="recent-topic">
            <div class="othertopic">作者其他话题</div>
            <ul class="frame">
                <li v-for="(list,index) in concerCount" :key="index" >
                    <router-link class="font" :to="{name:'post_content',
                    params:{id:list.id,name:list.author.loginname}}">
                       {{list.title}} 
                    </router-link>
                    
                </li>
            </ul>
        </div>
        <div class="recent-reply">
            <div class="noreply">无人回复的话题</div>
            <ul class="frame">
                <li v-for="(list,index) in replyCount" :key="index" >
                    <router-link class="font" :to="{name:'post_content',
                    params:{id:list.id,name:list.author.loginname}}">
                        {{list.title}}  
                    </router-link>
                    
                </li>
            </ul>
        </div>
        
    </div>
</template>

<script>
    export default {
        name:'Slidebar',
        data(){
            return {
                userinfor:{},
                dataarrive:false
            }
        },
        computed: {
          concerCount(){
             if(this.userinfor.recent_topics){
                 return this.userinfor.recent_topics.slice(0,5)
             }
          },
          replyCount(){
             if(this.userinfor.recent_replies){
                 return this.userinfor.recent_replies.slice(0,5)
             }
          }  
        },
        methods: {
            getData(){
                this.$http.get(`https://cnodejs.org/api/v1/user/${this.$route.params.name}`).then(res=>{
                    this.userinfor=res.data.data
                    this.dataarrive=true
                }).catch(err=>{
                    console.log(err)
                    this.dataarrive=false
                })
            }
        },
        beforeMount() {
            this.getData()   
        },
        watch: {
            '$route'(to,from){
                this.getData()
            }
        }
        
    }
</script>

<style scoped>
.author-information img{
    width: 48px;
    height: 48px;
    padding: 4px;
}
.noreply,
.othertopic,
.author-information .author{
    font-size: 14px;
    background-color: #f6f6f6;
    border-radius: 4px;
    padding: 10px;
    color: #444;
}
.author-infor{
    background-color: #fff;
    position: relative;
    padding: 10px;
}
.recent-topic,.recent-reply{
    background-color: #fff;
    border-radius: 4px
}
ul,li{
    list-style: none;
}
.font{
    color: #444;
    margin-top: 5px;
    text-decoration: none;
    font-size: 13px;
    
}
.name{
  position: absolute;
  top: 20px;
  padding-left: 10px;
}
.art {
    padding: 10px;
    background-color: #fff;
    margin-top: 20px;
}
.art img{
    width: 95%;
    padding: 4px;
    
}
.sidebar{
margin: 15px;
margin-top: 9px;
width: 20vw;
float: right;

}
.frame{
    padding-left: 14px;
    padding-bottom: 5px;
}
.side-title{
    font-size:14px;
}
.side-tip{
    font-size: 13px
}
.side-login{
    background-color: #5bc0de;
    color: #fff;
    font-size: 14px;
    padding: 6px
}
</style>