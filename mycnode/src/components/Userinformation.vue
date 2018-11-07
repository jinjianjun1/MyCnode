<template>
    <div class="user-infor">
        <div v-if="isloading"></div>
        <div v-else>
            <section>
                <div class="topbar-theme">主页 /</div>
                <img :src="userinfor.avatar_url" class="them-pic" >
                <span class="topbar-theme-name"> {{userinfor.loginname}} </span>
                <div class="topbar-theme-infor">
                    <p>{{userinfor.score}}积分 </p>
                    github账号:@{{userinfor.githubUsername}}
                    <p>注册时间{{userinfor.create_at | setDate}}</p>
                </div>
                
            </section>
            
            <div class="createtopic">
                <p class="topbar-create">最近创建的话题</p>
                <ul>
                    <li v-for="(item,index) in userinfor.recent_topics" :key="index" class="item"> 
                        <img :src="item.author.avatar_url" alt="">
                        <router-link class="create-title" :to="{name:'post_content',params:{id:item.id}}">
                           {{item.title}} 
                        </router-link>
                    </li>
                </ul>
            </div>
            <div class="replise">
                <p class="topbar-reply">回复主题</p>
                <ul>
                    <li v-for="(item,index) in userinfor.recent_replies " :key="index" class="item">
                        <img :src="item.author.avatar_url" alt="">
                        <router-link class="create-title" :to="{name:'post_content',params:{id:item.id}}">
                             {{item.title}} 
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name:'Userinformation',
        data(){
            return {
                isloading:false,
                userinfor:{}
            }
        },
        methods:{
             getData() {
                this.$http.get(`https://cnodejs.org/api/v1/user/${this.$route.params.name}`)
                .then(res => {
                    this.isloading = false;
                    this.userinfor = res.data.data;
                    console.log(this.userinfor)
                })
                .catch(err => {
                    console.log(err);
                });
            }
            },
            beforeMount() {
                this.isloading = true;
                this.getData();
            }
        
    }
</script>

<style scoped>
section{
    background-color: #fff;
    position: relative;
  
}
.createtopic{
    background-color: #fff;
}
.replise{
    background-color: #fff;
}
.topbar-theme{
    padding: 10px;
    font-size: 15px;
    color: #80bd01;
}
.topbar-theme-name{
    position: absolute;
    top: 65px
}
.topbar-theme-infor{
    padding-left: 10px;
    padding-bottom: 30px;
}
.topbar-theme,
.topbar-create,
.topbar-reply{
    background-color: #f6f6f6;
    margin-top: 10px;
}
.topbar-create,
.topbar-reply{
    padding: 10px;
    font-family: Helvetica;
    font-size: 14px;

}
ul{
    padding-left: 8px;
}
ul>li{
    padding: 10px;
} 
ul,li{
    list-style: none;
}
img{
    width: 30px;
    height: 30px;
}
.them-pic{
    width: 40px;
    height: 40px;
    padding: 10px;
}
.user-infor{
    padding-top: 1px
}
.create-title{
    color: #08c;
    display: inline;
    text-decoration: none;
    padding-left: 5px;
}
.item{
    border-bottom: 1px solid #f0f0f0;
}
</style>