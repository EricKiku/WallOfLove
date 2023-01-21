<template>
 <div class="homepage">
  <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
    <van-list
      v-model="loading"
      :finished="finished"
      @load="onLoad"
    >
      <div class="item">
        <div class="head">
          <div class="touxiang">
            <van-image
              round
              src="https://img01.yzcdn.cn/vant/cat.jpeg"
            />
          </div>
          <div class="userNick">
            <span>用户名</span>
          </div>
          <div class="option">
            <van-icon name="arrow-down" />
          </div>
        </div>
        <div class="center">
          <p>1这是一个帖子，这是一个帖子，这是一个帖子，</p>
        </div>
        <div class="msg">
          <span>0 点赞</span>
          <span>0 关注</span>
        </div>
      </div>
       
    </van-list>
  </van-pull-refresh>
 </div>
</template>

<script>
export default {
  name:'HomePage',
  data () {
      return {
        list: ['1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1',],
        loading: false,
        finished: false,
        refreshing: false,
      }
  },
  methods: {
    onLoad() {
      setTimeout(() => {
        if (this.refreshing) {
          this.list = [];
          this.refreshing = false;
        }

        for (let i = 0; i < 10; i++) {
          this.list.push(this.list.length + 1);
        }
        this.loading = false;

        if (this.list.length >= 40) {
          this.finished = true;
        }
      }, 1000);
    },
    onRefresh() {
      // 清空列表数据
      this.finished = false;

      // 重新加载数据
      // 将 loading 设置为 true，表示处于加载状态
      this.loading = true;
      this.onLoad();
    },
  },
  components: {

  }
}
</script>

<style scoped>
.homepage{
  position: relative;
  top: 60px;
  margin-bottom: 60px;
  background-color: #e5e7eb;
  padding-bottom: 50px;
}
.item{
  font-size: 14px;
  width: 90%;
  border-radius: 10px;
  box-shadow: 0 8px 12px #ebedf0;
  padding: 12px;
  margin: 0 auto;
  margin-top: 12px;
  background-color: #fff;;
}
.head{
  margin-bottom: 10px;
  height: 30px;
  display: flex;
  justify-content: space-around;
}
.touxiang{
  width:15%;
  text-align: left;
}
.touxiang .van-image{
  width:28px;
  height:28px;
}
.userNick{
  width: 45%;
  height: 30px;
  line-height: 30px;
  text-align: left;
}
.option{
  width: 30%;
  text-align: right;
}
.center{
  margin-bottom: 10px;
}
</style>
