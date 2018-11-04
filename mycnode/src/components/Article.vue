<template>
    <div class="article"> 
        <div class="topic_header">
            <div class="topic_title"> {{post.title}} </div>
            <ul>
                <li>发布于：{{post.create_at | setDate }}</li>
                <li>作者：{{post.author.loginname}}</li>
                <li>{{post.visit_count}}次浏览</li>
                <li>来自 {{post | setTag}}</li>
            </ul>
        </div>
        <div v-html="post.content" class="topic_content"></div>
    </div>
</template>

<script>
export default {
  name: "Article",
  data() {
    return {
      post: {} //当前文章的所有属性
    }
  },
  methods: {
      getArticleData(){
          this.$http.get(`https://cnodejs.org/api/v1/topic/${this.$route.params.id}`)
          .then(res=>{
              if(res.data.success==true){
                this.post=res.data.data
                console.log(post)
               
              }}).catch(err=>{
              console.log(err)
          })
      }
  },
  beforeMount() {
      this.getArticleData()   
  }

};
</script>

<style>
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
</style>