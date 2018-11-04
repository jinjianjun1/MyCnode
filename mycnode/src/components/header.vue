<template>
    <div class="header">
        <div class="navbar">
            <img src="../assets/cnodejs_light.svg" alt="">
            <ul>
                <li><a href="#">首页</a></li>
                <li><a href="#">新手入门</a></li>
                <li><a href="#">API</a></li>
                <li><a href="#">关于</a></li>
                <li><a href="#">登录</a></li>
                <li><a href="#">注册</a></li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name:'Header'
    }
</script>

<style scoped>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
 .header{
    background-color: #5a5555;
    height: 50px;
  }

.navbar{
    width: 80%;
    margin: auto;
}
ul{
    list-style: none;
    float: right;
    font-size: 13px;
    margin: 4px;
}
ul li {
    display: inline-block;
    padding: 15px;
}
ul li>a{
    text-decoration: none;
    color: #ccc
}
  img{
      max-width: 120px;
      margin:10px 0 0 20px;
  }
  .navbar ul li :hover{
      color: #fff;
  }
  .navbar input{
      margin-left: 10px;
  }
</style>