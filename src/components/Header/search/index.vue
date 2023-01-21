<template>
 <div>
  <div class="searchInput">
    <van-icon @click="back" name="arrow-left" />
    <van-search
      v-model="searchInput"
      placeholder="请输入搜索关键词"
      @search="onSearch"
      clearable
      left-icon=""
    />
  </div>
  <div class="historySearch">
    <div class="title">历史记录</div>
    <p
       v-for="(historyItem,index) in historySearch" :key="index"
       @click="fromHistorySearch(historyItem)"
    >
      <van-icon name="clock-o" />&nbsp;&nbsp;
      {{ historyItem }}
    </p>
    <p v-if="historySearch.length!=0" class="clear" @click="clear"><van-icon name="delete-o" />清除全部搜索记录</p>
  </div>
 </div>
</template>

<script>
export default {
  name:'SearchPage',
  data () {
      return {
        searchInput:'',
        historySearch:[]
      }
  },
  methods: {
    // 退回到上一页
    back(){
      this.$router.go(-1);
    },
    // 读取本地存储历史搜索，再添本次的
    onSearch(){
      let history = JSON.parse(localStorage.getItem('historySearch'));
      if (!history) {
        history = []
      }
      localStorage.setItem('historySearch',JSON.stringify([...new Set([...history,this.searchInput])]))
      this.loadHistory()
    },
    // 从历史记录搜索
    fromHistorySearch(historyItem){
      console.log(historyItem);
    },
    // 清除所有搜索
    clear(){
      localStorage.removeItem('historySearch')
      this.loadHistory()
    },
    // 读取历史记录
    loadHistory(){
      let history = localStorage.getItem('historySearch');
      if (history) {
        this.historySearch = JSON.parse(history);
      }else{
        this.historySearch = []
      }
      
    }
  },
  mounted() {
    this.loadHistory()
  },
  components: {

  }
}
</script>

<style scoped>
.searchInput{
  display: flex;
  justify-content: space-around;
}
.van-icon-arrow-left{
  line-height: 50px;
  width:10%;
  text-align: center;
}
.van-search{
  width:90%
}
.van-search__content{
  background-color: #F4F4F4;
  border-radius: 5px;
}
.historySearch .title{
  font-size: 18px;
  margin-left: 20px;
  margin-top: 20px;
}
.historySearch p {
  font-size: 14px;
  margin-left: 20px;
  margin-top: 10px;
}
.clear{
  margin-top: 10px;
  text-align: center;
  font-size: 16px;
  color: rgb(169, 169, 169);
}
</style>
