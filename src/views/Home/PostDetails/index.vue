<template>
  <div>
    <!-- 粘滞组件 -->
    <van-sticky>
        <van-nav-bar
            :title="'@'+postDetails.postNick"
            left-text="返回"
            left-arrow
            @click-left="onClickLeft"
            style="border-bottom:0.5px solid rgb(203, 203, 203)"
        >
        <template #right>
            <div class="attention">
                <button>关注</button>
            </div>
        </template>
        </van-nav-bar>
    </van-sticky>
        <div ref="postDetailsTop" class="post">
            <div class="userDetails">
                <div class="touxiang">
                    <van-image round src="https://img01.yzcdn.cn/vant/cat.jpeg" />
                </div>
                <div class="info">
                    <p>{{ postDetails.postNick }}</p>
                    <p class="little">{{ postDetails.postDate }}&nbsp;·&nbsp;{{ postDetails.postReadCount }}次浏览</p>
                </div>
                <div>
                    …
                </div>
            </div>
            <div class="content">
                {{ postDetails.postContent }}
            </div>
        </div>
    
    <div class="postComment">
        <p style="text-align:left;padding:10px 0px 10px 10px;">评论</p>
        <!-- {{ postDetails.postComment }} -->
        <div class="commentItem">
            <div class="touxiang">
                <van-image round src="https://img01.yzcdn.cn/vant/cat.jpeg" />
            </div>
            <div class="comment">
                <div class="info">
                    林中鸟&nbsp;&nbsp;·&nbsp;&nbsp;2022-01-20
                </div>
                <div class="txt">
                    我觉得你说的很对，好兄弟。
                </div>
            </div>
        </div>
        <div class="commentItem">
            <div class="touxiang">
                <van-image round src="https://img01.yzcdn.cn/vant/cat.jpeg" />
            </div>
            <div class="comment">
                <div class="info">
                    林中鸟&nbsp;·&nbsp;2022-01-20
                </div>
                <div class="txt">
                    我觉得你说的很对，好兄弟。
                </div>
            </div>
        </div>
        <div class="commentItem">
            <div class="touxiang">
                <van-image round src="https://img01.yzcdn.cn/vant/cat.jpeg" />
            </div>
            <div class="comment">
                <div class="info">
                    林中鸟&nbsp;·&nbsp;2022-01-20
                </div>
                <div class="txt">
                    我觉得你说的很对，好兄弟。
                </div>
            </div>
        </div>
        <div class="commentItem">
            <div class="touxiang">
                <van-image round src="https://img01.yzcdn.cn/vant/cat.jpeg" />
            </div>
            <div class="comment">
                <div class="info">
                    林中鸟&nbsp;·&nbsp;2022-01-20
                </div>
                <div class="txt">
                    我觉得你说的很对，好兄弟。我觉得你说的很对，好兄弟。
                    我觉得你说的很对，好兄弟。我觉得你说的很对，好兄弟。
                    我觉得你说的很对，好兄弟。我觉得你说的很对，好兄弟。
                </div>
            </div>
        </div>
        <div class="commentItem">
            <div class="touxiang">
                <van-image round src="https://img01.yzcdn.cn/vant/cat.jpeg" />
            </div>
            <div class="comment">
                <div class="info">
                    林中鸟&nbsp;·&nbsp;2022-01-20
                </div>
                <div class="txt">
                    我觉得你说的很对，好兄弟。
                </div>
            </div>
        </div>
        <div class="commentItem">
            <div class="touxiang">
                <van-image round src="https://img01.yzcdn.cn/vant/cat.jpeg" />
            </div>
            <div class="comment">
                <div class="info">
                    林中鸟&nbsp;·&nbsp;2022-01-20
                </div>
                <div class="txt">
                    我觉得你说的很对，好兄弟。
                </div>
            </div>
        </div>
        <div class="commentItem">
            <div class="touxiang">
                <van-image round src="https://img01.yzcdn.cn/vant/cat.jpeg" />
            </div>
            <div class="comment">
                <div class="info">
                    林中鸟&nbsp;·&nbsp;2022-01-20
                </div>
                <div class="txt">
                    我觉得你说的很对，好兄弟。
                </div>
            </div>
        </div>
        <div class="commentItem">
            <div class="touxiang">
                <van-image round src="https://img01.yzcdn.cn/vant/cat.jpeg" />
            </div>
            <div class="comment">
                <div class="info">
                    林中鸟&nbsp;·&nbsp;2022-01-20
                </div>
                <div class="txt">
                    我觉得你说的很对，好兄弟。
                </div>
            </div>
        </div>
        <div class="commentItem">
            <div class="touxiang">
                <van-image round src="https://img01.yzcdn.cn/vant/cat.jpeg" />
            </div>
            <div class="comment">
                <div class="info">
                    林中鸟&nbsp;·&nbsp;2022-01-20
                </div>
                <div class="txt">
                    我觉得你说的很对，好兄弟。
                </div>
            </div>
        </div>
        <div class="commentItem">
            <div class="touxiang">
                <van-image round src="https://img01.yzcdn.cn/vant/cat.jpeg" />
            </div>
            <div class="comment">
                <div class="info">
                    林中鸟&nbsp;·&nbsp;2022-01-20
                </div>
                <div class="txt">
                    我觉得你说的很对，好兄弟。
                </div>
            </div>
        </div>
        <div class="commentItem">
            <div class="touxiang">
                <van-image round src="https://img01.yzcdn.cn/vant/cat.jpeg" />
            </div>
            <div class="comment">
                <div class="info">
                    林中鸟&nbsp;·&nbsp;2022-01-20
                </div>
                <div class="txt">
                    我觉得你说的很对，好兄弟。
                </div>
            </div>
        </div>
        <div class="commentItem">
            <div class="touxiang">
                <van-image round src="https://img01.yzcdn.cn/vant/cat.jpeg" />
            </div>
            <div class="comment">
                <div class="info">
                    林中鸟&nbsp;·&nbsp;2022-01-20
                </div>
                <div class="txt">
                    我觉得你说的很对，好兄弟。
                </div>
            </div>
        </div>
        <div class="writeComment">
            <input type="text"/>
            <span class="put">发布</span>
            <span class="userLike">
                <van-icon name="thumb-circle-o" /> &nbsp;{{ postDetails.postLike }}
            </span>
        </div>
    </div>

  </div>
</template>

<script>
import { queryPostByPostId } from "@/api";
export default {
  name: "PostDetails",
  data() {
    return {
      postDetails: "",
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    onClickRight() {
      console.log("关注");
    },
  },
  mounted() {
    // 根据帖子id查询该帖子
    let postId = this.$route.query.postId;
    queryPostByPostId(postId).then((res) => {
      this.postDetails = res;
    });
  },
  components: {},
};
</script>

<style>
.post {
  width: 100%;
  background-color: #fff;
  font-size: 16px;
}
.post .userDetails {
  padding: 10px 0px;
  display: flex;
  justify-content: space-around;
}
.post .userDetails .touxiang {
  width: 10px;
}
.post .userDetails .van-image {
  width: 32px;
  height: 32px;
}
.post .userDetails .info {
  width: 50%;
}
.post .userDetails .info .little {
  font-size: 12px;
  color: rgb(173, 173, 173);
}
.attention {
  width: 30%;
}
.attention button {
  width: 60px;
  height: 30px;
  border: 0px;
  border-radius: 5px;
  margin-top: 5px;
  background-color: #2bb3ed;
  transition: all 0.2s ease-in-out;
  color: #fff;
}
.post .content {
  padding: 0px 0px 10px 20px;
}
.postComment {
  font-size: 16px;
  margin-top: 10px;
  width: 100%;
  background-color: #fff;
}
.postComment .commentItem {
  display: flex;
  justify-content: space-around;
  padding: 15px 10px;
}
.postComment .commentItem .touxiang {
  width: 10%;
}
.postComment .commentItem .touxiang .van-image {
  width: 28px;
  height: 28px;
}
.postComment .commentItem .comment {
  width: 90%;
}
.postComment .commentItem .comment .info {
  font-size: 14px;
  color: rgb(187, 187, 187);
}
.postComment .commentItem .comment .txt {
  margin-top: 5px;
}
.postComment .writeComment{
    position:fixed;
    width: 100%;
    height: 50px;
    bottom:0;
    background-color: #fff;
    border-top: 0.5px solid rgb(203, 203, 203);
}
.postComment .writeComment input{
    width: 50%;
    height: 20px;
    font-size: 14px;
    border: 0px;
    background-color: rgb(231, 231, 231);
    border-radius: 5px;
    margin-left: 10px;
    padding:5px 10px 5px 10px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);

}
.postComment .writeComment .put{
    position: absolute;
    top: 50%;
    left:70%;
    transform: translateX(-70%) translateY(-50%);
}
.postComment .writeComment .userLike{
    width: 50px;
    position: absolute;
    top: 50%;
    left:90%;
    transform: translateX(-90%) translateY(-50%);
}
</style>
