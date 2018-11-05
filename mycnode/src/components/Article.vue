<template>
    <div class="article markdown-body" > 
        <div class="loading" v-if="isloading">

        </div>
        <div v-else>
            <div class="topic_header" >
                <span :class="[{post_good:(post.good==true)},{post_top:(post.top==true)},
                        {post_tag:(post.top!=true &&post.good!=true)}]">{{post | setTag }}</span>           
                <span class="topic_title"> {{post.title}} </span>
                <div class="topic_bar">
                
                    <span>•发布于：{{post.create_at | setDate }}</span>
                    <span>•作者：{{post.author.loginname}}</span>
                    <span>•{{post.visit_count}}次浏览</span>
                    <span>•来自 {{post | setTag}}</span>
                
                </div>
                <div v-html="post.content" class="topic_content"></div>
            </div>
          
            <div class="container">
            <div class="topbar"> {{post.replies.length}} 回复</div>
                <div class="inner" v-for="(reply,index) in post.replies" :key="index">
                    <router-link :to="{name:'information',params:{name:reply.author.loginname}}">
                        <img :src="reply.author.avatar_url" >
                    </router-link>
                    
                    <div class="comment_infor">
                        <span> {{reply.author.loginname}} </span>
                        <div class="comment_floor">
                            <span>
                            {{index+1}}楼•
                            </span>
                            <span> {{reply.create_at | setDate}} </span>
                        </div>
                        
                    </div>
                    <div class="comment_content">
                        <p v-html="reply.content"></p>
                    </div>
                </div>
            </div>        
        </div>
    </div>
</template>

<script>
export default {
  name: "Article",
  data() {
    return {
      isloading: false,
      post: {} //当前文章的所有属性
    };
  },
  methods: {
    getArticleData() {
      this.$http
        .get(`https://cnodejs.org/api/v1/topic/${this.$route.params.id}`)
        .then(res => {
          if (res.data.success == true) {
            this.isloading = false;
            this.post = res.data.data;
            console.log(this.post.replies);
            console.log(this.post);
            
            
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  beforeMount() {
    this.isloading = true;
    this.getArticleData();
  }
};
</script>

<style>
@import url("../assets/markdown.css");
.markdown-body {
  box-sizing: border-box;
  min-width: 200px;
  max-width: 980px;
  margin: 0 auto;
  padding: 45px;
}

@media (max-width: 767px) {
  .markdown-body {
    padding: 15px;
  }
}
.topic_title{
    font-size: 22px;
    font-weight: bold;
    padding-top: 15px;
    padding-left: 5px;
}
.topic_bar{
    font-size: 12px;
    color: #838383;
}
.topic_content{
    border-top: 1px solid #e5e5e5;
    margin-top: 10px;
    padding: 8px;
}
.topic_header{
    padding: 8px;
}
.topic_header>:first-child{
     background-color: #80bd01;
  color: #fff;

  font-size: 9px;
  padding: 3px 4px;
  border-radius: 3px;
}
.topic_header,
.container{
    background-color: #fff;
}
.container .inner{
    padding-left:10px;
    border-top: 1px solid #f0f0f0; 
    padding-top: 10px;
    padding-bottom: 15px;
}
.container .topbar{
    background-color: #f6f6f6;
    font-size: 14px;
    line-height: 3em;
    padding-left: 10px;
    margin-top: 10px;
}
.container img{
    width: 30px;
    height: 30px;
    float: left;
    margin-right: 10px;
    margin-top: 5px;
}
.container .comment_infor .comment_floor{
    color: #08c;
    display: inline;
    font-size: 12px;
    vertical-align: middle;
    cursor: pointer;
}
.container .comment_infor .comment_floor:hover{
    color: #005580;
}
</style>