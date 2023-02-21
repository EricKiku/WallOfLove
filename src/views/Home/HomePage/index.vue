<template>
  <keep-alive>
    <div class="homepage" :class="{ cleanTop: this.$route.name === 'selfpage' }">

      <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
        <van-empty v-if="isEmpty" description="还没有帖子哦，快去发布吧!" />
        <van-list v-model="loading" :finished="finished">
          <!-- 骨架屏 -->
          <div v-if="postList.length == 0 && !isEmpty" class="item" v-for="item in [1, 2, 3, 4]">
            <van-skeleton title avatar :row="3" />
          </div>

          <div class="item" @click="goPostDetails(item.postId)" v-for="(item, index) in postList" :key="item.postId">
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
              <span style="margin-right:20px;"><van-icon
                  :class="{ redcolor: user.userLike?.split(',').indexOf('' + item.postId) != -1 }"
                  @click.stop="like(item.postId)" name="good-job-o" /> &nbsp;{{
                    item.postLike }} </span>
              <span><van-icon name="chat-o" /> &nbsp;{{ item.postComment }} </span>
              <span class="postDate">
                <span>{{ item.postDate.substring(0, item.postDate.indexOf(" ")) }}</span>
              </span>
            </div>
          </div>
        </van-list>
      </van-pull-refresh>
    </div>
  </keep-alive>
</template>

<script>
import { queryAllPost, queryPostByUserId, getUserByUserAccount, like } from "@/api";
import { mapState } from "vuex";
export default {
  name: "HomePage",
  props: ['userId'],
  data() {
    return {
      user: {},
      postList: [],
      loading: false,
      finished: false,
      refreshing: false,
      isEmpty: false
    };
  },
  computed: {
    ...mapState(["userAccount"]),
  },
  methods: {
    // 点赞
    like(postId) {
      if (this.user.userLike?.split(',').indexOf('' + postId) != -1) {
        this.$toast.success("您已经赞过了");
      } else {
        // 获取用户id
        let userId = this.user.userId;
        like(postId, userId).then(res => {
          this.getUser();
          this.$toast.success("点赞成功");
          if (this.$route.name === 'homepage') {
            queryAllPost().then((res) => {
              this.postList = res.reverse();
            });
          } else {
            this.queryPostByUserId()
          }
        })
      }

    },
    onRefresh() {
      // 清空列表数据
      this.finished = false;
      // 重新加载数据
      // 将 loading 设置为 true，表示处于加载状态
      this.loading = true;
      this.refreshPost();
    },
    goPostDetails(postId) {
      this.$router.push({
        name: 'postdetails',
        query: {
          postId
        }
      })
    },
    // 刷新帖子方法
    refreshPost() {
      this.postList = []
      if (this.$route.name === 'homepage') {
        queryAllPost().then((res) => {
          this.postList = res.reverse();
          if (res.length === 0) {
            this.isEmpty = true;
          } else {
            this.isEmpty = false;
          }
          this.refreshing = false;
          this.finished = true;
          this.loading = false;
        });
      } else {
        this.queryPostByUserId()
      }
    },
    queryPostByUserId() {
      queryPostByUserId(this.userId).then(res => {
        this.postList = res.reverse();

        if (res.length === 0) {
          this.isEmpty = true;
        } else {
          this.isEmpty = false;
        }
        this.refreshing = false;
        this.finished = true;
        this.loading = false;
      })
    },
    // 获取用户信息方法
    getUser() {
      // 获取用户
      getUserByUserAccount(this.userAccount).then(res => {
        this.user = res;
      })
    }
  },
  created() {
    if (this.$route.name === "selfpage") {
      this.queryPostByUserId();
    }
    this.getUser();
  },
  activated() {
    this.getUser();
    if (this.$route.name === "selfpage") {
      this.queryPostByUserId();
    } else {
      this.refreshPost();
    }

  },
  components: {},
};
</script>

<style scoped>
.redcolor {
  color: red;
}

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

.postDate {
  float: right;
  text-align: right;

  color: #a3a3a3cc;
}

.option {
  width: 30%;
  text-align: right;
}

.center {
  margin-bottom: 10px;
  margin-left: 5px;
}

.cleanTop {
  top: 0px;
  margin-bottom: 0px;
}

.van-icon {
  font-size: 20px;
}
</style>
