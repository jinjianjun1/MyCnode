<template>
    <div class="user-infor">
        <div v-if="isloading"></div>
        <div v-else>
            <section>
                <div class="topbar-theme">主页 /</div>
                <img :src="userinfor.avatar_url" class="them-pic" >
                <span> {{userinfor.loginname}} </span>
                <p>{{userinfor.score}}积分 </p>
                 github账号:@{{userinfor.githubUsername}}
                <p>注册时间{{userinfor.create_at | setDate}}</p>
            </section>
            
            <div class="createtopic">
                <p class="topbar-create">最近创建的话题</p>
                <ul>
                    <li v-for="(item,index) in userinfor.recent_topics" :key="index">
                        <img :src="item.author.avatar_url" alt="">
                        <router-link :to="{name:'item_content',params:{id:item.id}}">
                            {{item.title}}
                        </router-link>
                    </li>
                </ul>
            </div>
            <div class="replise">
                <p class="topbar-reply">回复主题</p>
                <ul>
                    <li v-for="(item,index) in userinfor.recent_replies " :key="index" >
                        <img :src="item.author.avatar_url" alt="">
                        <router-link :to="{name:'post_content',params:{id:item.id}}">
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
.topbar-theme,
.topbar-create,
.topbar-reply{
    background-color: #f6f6f6;
    margin-top: 10px;
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
</style>