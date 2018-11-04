<template>
    <div class="Postlist">
        <!-- <div class="loading" v-if="isloading">          
        </div>
        <div class="PageContainer"> -->
        <div class="Page">
            <ul>
                <li>
                    <div class="firstli">
                    <a href=""><span class="firstchild">全部</span></a>
                    <a href=""><span>精华</span></a>
                    <a href=""><span>分享</span></a>
                    <a href=""><span>问答</span></a>
                    <a href=""><span>招聘</span></a>
                    </div>
                </li>
                <li v-for="post in posts">
                    <router-link :to="{name:'post_content',params:{id:post.id}}">
                        <img :src="post.author.avatar_url" >
                    </router-link>
                   <div class="countcontainer">
                        <span class="visit_count">
                            <span class="reply_count">{{post.reply_count}}{{'/'}}</span>
                        {{post.visit_count}}
                        </span>
                   </div>
                    
                    <div class="titlecontainer">
                        <span :class="[{post_good:(post.good==true)},{post_top:(post.top==true)},
                        {post_tag:(post.top!=true &&post.good!=true)}]">{{post | setTag }}</span>   
                    </div>
                    <router-link :to="{name:'post_content',params:{id:post.id}}">
                        
                       <span> {{post.title}}</span>
                    
                    </router-link>                  
                    <div class="timePic">
                        <a href="" class="righta">                       
                        <img :src="post.author.avatar_url" >
                        <span class="time">{{post.last_reply_at | setDate }}</span>                             
                    </a>
                    </div>                   
                </li>
            </ul>
        </div>            
        
    </div>
</template>

<script>
export default {
  name: "Postlist",
  data() {
    return {
      isloading: false,
      posts: []
    };
  },
  methods: {
    getData() {
      this.$http
        .get("https://cnodejs.org/api/v1/topics", {
          page: 1,
          limit: 20
        })
        .then(res => {
          this.isloading = false;
          this.posts = res.data.data;
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  beforeMount() {
    this.isloading = true;
    this.getData();
    this.isloading = false;
  }
};
</script>

<style scoped>
a {
  text-decoration: none;
}
ul,
li {
  list-style: none;
}
img {
  width: 30px;
  height: 30px;
  padding-top: 10px;
  padding-bottom: 10px;
  display: inline-block;
  vertical-align: middle;
}
ul > li {
  list-style: none;
  margin-left: -39px;
}
.Postlist {
  background-color: #e1e1e1;
}
.Page {
  background-color: #fff;
}
.Page .firstli {
  font-size: 14px;
  background-color: #f6f6f6;
  line-height: 3em;
}
/* .Page .firstli :first-child{
        color: #fff;
        background-color: #80bd01;
        padding: 3px 4px;
        border-radius: 3px;
     
      
    } */
.Page .firstli a {
  color: #80bd01;
  margin-right: 18px;
  margin-left: 5px;
}
.Page .firstli a:hover {
  color: #08c;
}
.countcontainer {
  text-align: center;
  display: inline-block;
  width: 70px;
}
.Page .countcontainer .visit_count {
  color: #b4b4b4;
  font-size: 10px;
}
.Page .countcontainer .reply_count {
  color: #9e78c0;
  font-size: 14px;
}
.Page .titlecontainer {
  display: inline-block;
}
.firstchild {
  margin-left: 15px;
}
.firstchild,
.Page .titlecontainer .post_good,
.Page .titlecontainer .post_top {
  background-color: #80bd01;
  color: #fff;

  font-size: 9px;
  padding: 3px 4px;
  border-radius: 3px;
}
.Page .post_tag {
  background-color: #e5e5e5;
  color: #999;

  font-size: 9px;
  padding: 3px 4px;
  border-radius: 3px;
}

.Page .timePic {
  float: right;
  font-size: 11px;
  width: 150px;
  /* border: 1px solid red; */
  vertical-align: middle;
  text-align: center;
  color: #778087;
}
.Page .timePic a {
  color: #778087;
}
.Page .timePic img {
  margin-right: 2.5em;
  width: 1.5em;
  height: 1.5em;
  border-radius: 3px;
}
.Page ul li {
  border-bottom: 1px solid #f0f0f0;
}
.Page ul li::after {
  content: "";
  display: block;
  clear: both;
}
.Page > ul > li > a {
  font-size: 14px;
  line-height: 2em;
  display: inline-block;
  vertical-align: middle;
  color: black;
}
/*    
    .PageContainer{
        width: 1100px;
        margin: 0 auto
    } */
</style>