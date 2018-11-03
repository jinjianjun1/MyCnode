<template>
    <div class="Postlist">
        <div class="loading" v-if="isloading">          
        </div>
        <div class="PageContainer">
        <div class="Page">
            <ul>
                <li v-for="post in posts">
                    <a href=""><img :src="post.author.avatar_url" ></a>
                    <span class="visit_count">
                        <span class="reply_count">{{post.reply_count}}{{'/'}}</span>
                    {{post.visit_count}}
                    </span>
                    <span :class="[{post_good:(post.good==true)},{post_top:(post.top=f=alse)},
                    {post_tag:(post.top!=true &&post.good!=true)}]"></span>
                    <span>
                        {{post |setTag }}
                    </span>
                   <a href=""><span> {{post.title}}</span> </a>
                   <span class="time">{{post.last_reply_at |setDate }}</span>

                </li>
            </ul>
        </div>    
        </div>
        
    </div>
</template>

<script>
    export default {
        name:'Postlist',
        data(){
            return{
                isloading:false,
                posts:[]
            }
        },
        methods:{
            getData(){
                this.$http.get('https://cnodejs.org/api/v1/topics',{
                    page:1,
                    limit:20
                    
                }).then(res=>{
                    this.isloading=false
                    console.log(res)
                    this.posts=res.data.data
                }).catch(err=>{
                    console.log(err)
                })
            }
        },
        beforeMount() {
            this.isloading=true 
            this.getData()
            this.isloading=false
        },
    }
</script>

<style scoped>
a{text-decoration: none}
    ul,li{list-style: none}
    img{
        width: 30px;
        height: 30px;
        padding-top:10px;
        padding-bottom: 10px;
        display: inline-block;
        vertical-align: middle;   
    }
    .Postlist{
        background-color: #e1e1e1;
        border: 1px solid rgb(116, 113, 113);
    }
    .Page{
        background-color: #fff;
    }
    .Page .visit_count{
        color: #b4b4b4;
        font-size: 10px;
    }
    .Page .reply_count{
        color: #9e78c0;
        font-size: 14px;
    }
    .Page .time{
        float: right;
        padding: right;
        margin: 17px 10px 0 0;
        font-size: 11px;
        color: #778087;
    }
    .Page ul li {
        border-bottom: 1px solid #f0f0f0;
    }
    .Page ul li::after{
        content: '';
        display: block;
        clear: both;
    }
    .Page >ul>li>a {
        font-size: 14px;
        line-height: 2em;
        display: inline-block;
        vertical-align: middle;   
        color: black;       
    }
   
    .PageContainer{
        width: 1100px;
        margin: 0 auto
    }
</style>