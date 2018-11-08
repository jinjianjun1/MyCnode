<template>
    <div>
        <button @click="changeBtn">首页</button>
        <button v-if="ischange" >......</button>
        <button @click="changeBtn">上一页</button>
        <button @click="changeBtn(btn)"
         :class="[{currentPage:btn==currentPage},'pagebtn']" v-for="(btn,index) in  pagebtns" :key="index">{{btn}}</button>
        <button @click="changeBtn">下一页</button>
    </div>
</template>

<script>
    import $ from 'jquery'
    export default {
        name:'Pagination',
        data(){
            return {
                pagebtns:[1,2,3,4,5,'......'],
                currentPage:1,
                ischange:false
            }
        },
        methods:{
            changeBtn(page){

                if(typeof page !=='number'){
                    switch (page.target.innerText) {
                        case '上一页':
                            $('button.currentPage').prev().click()
                            break;
                        case '下一页':
                            $('button.currentPage').next().click()
                            break;
                        case '首页':
                            this.pagebtns=[1,2,3,4,5,'......']
                            this.changeBtn(1);
                            break;
                        default:
                            break;
                    }
                    return ;
                }
                if(page>4){
                    this.ischange=true
                }else{
                    this.ischange=false
                }
                this.currentPage=page
                if(page==this.pagebtns[4]){
                    this.pagebtns.shift()
                    this.pagebtns.splice(4,0,this.pagebtns[3]+1)
                }else if(page==this.pagebtns[0] &&page!==1){
                    this.pagebtns.splice(4,1)
                    this.pagebtns.unshift(this.pagebtns[0]-1)
                }
                this.$emit('handle', this.currentPage)
               
            },
            
        }
    }
</script>

<style scoped>
.currentPage{
    background-color: #f0f0f0;
}
.pagebtn{
    /* background-color: red; */
}
</style>