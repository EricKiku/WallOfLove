<template>
  <keep-alive>
    <div class="homepage" :class="{cleanTop:this.$route.name === 'selfpage'}">
      <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
        <van-list v-model="loading" :finished="finished" @load="onLoad">
          <!-- 骨架屏 -->
          <div v-if="postList.length==0" class="item" v-for="item in [1,2,3,4]">
            <van-skeleton title avatar :row="3" />
          </div>

          <div class="item" @click="goPostDetails(item.postId)" v-for="(item,index) in postList" :key="item.postId">
            <div class="head">
              <div class="touxiang">
                <van-image round src="https://img01.yzcdn.cn/vant/cat.jpeg" />
              </div>
              <div class="userNick">
                <span>{{ item.postNick }}</span>
              </div>
              <div class="option">
                <van-icon name="arrow-down" />
              </div>
            </div>
            <div class="center">
              <p>{{ item.postContent }}</p>
            </div>
            <div class="msg">
              <span style="margin-right:20px"><van-icon name="thumb-circle-o" /> &nbsp;{{ item.postLike }} </span>
              <span><van-icon name="chat-o" /> &nbsp;{{ item.postComment }} </span>
            </div>
          </div>
        </van-list>
      </van-pull-refresh>
    </div>
  </keep-alive>
</template>

<script>
import { queryAllPost } from "@/api";
export default {
  name: "HomePage",
  data() {
    return {
      list: [],
      postList:[],
      loading: false,
      finished: false,
      refreshing: false,
    };
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
      console.log('refresh');
      // 重新加载数据
      // 将 loading 设置为 true，表示处于加载状态
      this.loading = true;
      this.refreshPost();
    },
    goPostDetails(postId){
      this.$router.push({
        name:'postdetails',
        query:{
          postId
        }
      })
    },
    // 刷新帖子方法
    refreshPost(){
      this.postList = []
      queryAllPost().then((res) => {
        this.postList = res;


        this.loading = false;
      });
    }
  },
  mounted() {
    this.refreshPost();
  },
  components: {},
};
</script>

<style scoped>
.homepage {
  position: relative;
  top: 60px;
  margin-bottom: 60px;
  background-color: #e5e7eb;
  padding-bottom: 50px;
}
.item {
  font-size: 14px;
  width: 90%;
  border-radius: 10px;
  box-shadow: 0 8px 12px #ebedf0;
  padding: 12px;
  margin: 0 auto;
  margin-top: 12px;
  background-color: #fff;
}
.head {
  margin-bottom: 10px;
  height: 30px;
  display: flex;
  justify-content: space-around;
}
.touxiang {
  width: 10%;
  text-align: left;
}
.touxiang .van-image {
  width: 28px;
  height: 28px;
}
.userNick {
  width: 50%;
  height: 30px;
  line-height: 30px;
  text-align: left;
  font-size: 12px;
}
.option {
  width: 30%;
  text-align: right;
}
.center {
  margin-bottom: 10px;
  margin-left: 5px;
}
.cleanTop{
  top:0px;
  margin-bottom: 0px;
}
</style>
