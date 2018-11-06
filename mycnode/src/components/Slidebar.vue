<template>
    <div class="sidebar"> 
        <div class="author-information">
            <div class="author">作者</div>
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
            <ul>
                <li v-for="(list,index) in concerCount" :key="index" >
                    <router-link :to="{name:'post_content',params:{id:list.id,name:list.author.loginname}}">
                       <p class="font">{{list.title}}</p>   
                    </router-link>
                    
                </li>
            </ul>
        </div>
        <div class="recent-reply">
            <div class="noreply">无人回复的话题</div>
            <ul>
                <li v-for="(list,index) in replyCount" :key="index" >
                    <router-link :to="{name:'post_content',params:{id:list.id,name:list.author.loginname}}">
                        <p class="font">{{list.title}}</p>  
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
                userinfor:{}
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
                    console.log(this.userinfor)
                }).catch(err=>{
                    console.log(err)
                })
            }
        },
        beforeMount() {
            this.getData()
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
    padding-left: -10px
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
width: 30vw;
float: right;

}

</style>