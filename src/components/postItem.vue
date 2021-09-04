<template>
<!--  <template v-for="post in postData" :key="post.postID">-->
<!--    <div id="postitem">-->
<!--      <div>{{post.postTitle}}</div>-->
<!--      <div>{{post.postContent}}</div>-->
<!--      <div>{{post.postImg}}</div>-->
<!--    </div>-->
<!--  </template>-->

  <p>this is post items</p>
  <template v-for="n in testNumber" :key="n">
    <div style="padding-left: 40px">这是第 {{ n }} 行</div>
  </template>
  <div id="loading" style="position: fixed;left: 50vw; bottom: 200px; font-size: 40px; display: none;">加载中...</div>



  <!--&lt;!&ndash;        <template v-for="post in postData" :key="post.postID">&ndash;&gt;-->
  <!--&lt;!&ndash;          <div id="postitem">&ndash;&gt;-->
  <!--&lt;!&ndash;            <div>{{post.postTitle}}</div>&ndash;&gt;-->
  <!--&lt;!&ndash;            <div>{{post.postContent}}</div>&ndash;&gt;-->
  <!--&lt;!&ndash;            <div>{{post.postImg}}</div>&ndash;&gt;-->
  <!--&lt;!&ndash;          </div>&ndash;&gt;-->
  <!--&lt;!&ndash;        </template>&ndash;&gt;-->

<!--        <div v-for="(post,index) in posts" :key="index">-->
<!--          {{post}}-->
<!--          <p>this is post item</p>-->
<!--        </div>-->
<!--      </div>-->

<!--    <div style="width: 100px; height: 100%; background-color: green; position: absolute; top: 0px; overflow-y: auto;"-->
<!--         v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="10">-->



<!--            <div style="width: 80px; height: 500px;background-color: orange" v-for="post in posts" :key="post.name">{{post.name}}</div>-->


<!--    </div>-->

</template>

<script>

// import axios from "axios";

export default {
name: "postItem",
  data() {
    return {
      posts: [],
      testNumber: 70,
      busy: false
    }
  },
  computed: {
    postData() {
      return this.$store.state.firstData.prepareHotPosts
    }
  },
  methods: {
    loadMore: function() {

      console.log("loadMore被触发");

      this.busy = true
      setTimeout(() => {
        for (let i = 0, j = 10; i < j; i++) {
          this.posts.push({name: "test" })
        }
        console.log(this.posts)
        this.busy = false
      }, 1000)
    },
    checkLandingOnBottom: function () {

      //滚动条在Y轴上的滚动距离
      let scrollLength = 0, bodyScrollTop = 0, documentScrollTop = 0;
      if(document.body){
        bodyScrollTop = document.body.scrollTop;
      }
      if(document.documentElement){
        documentScrollTop = document.documentElement.scrollTop;
      }
      scrollLength = (bodyScrollTop - documentScrollTop > 0) ? bodyScrollTop : documentScrollTop;

      //获取网页的总高度
      var scrollHeight = 0, bodyScrollHeight = 0, documentScrollHeight = 0;
      if(document.body){
        bodyScrollHeight = document.body.scrollHeight;
      }
      if(document.documentElement){
        documentScrollHeight = document.documentElement.scrollHeight;
      }
      scrollHeight = (bodyScrollHeight - documentScrollHeight > 0) ? bodyScrollHeight : documentScrollHeight;

      //获取浏览器窗口的高度
      var windowHeight = 0;
      if(document.compatMode == "CSS1Compat"){
        windowHeight = document.documentElement.clientHeight;
      }else{
        windowHeight = document.body.clientHeight;
      }

      if(scrollLength + windowHeight == scrollHeight){
        console.log("you are landing on the bottom!");
        console.log("old testNumber is: " + this.testNumber)
        let that = this
        document.getElementById("loading").style.display = "block" //到达底部，显示加载动画
        setTimeout(() => {
          let oldHeight = document.getElementById("FRANXXhole").clientHeight
          console.log(oldHeight);
          document.getElementById("FRANXXhole").style.height = oldHeight+1070+"px"
          // let newHeight = oldHeight + ""
          that.testNumber += 50
          document.getElementById("loading").style.display = "none" //数据加载完成，隐藏加载动画
          console.log("new testNumber is: " + this.testNumber);
        },2000)


      }
    }
  },
  mounted() {

    addEventListener('scroll', this.checkLandingOnBottom)//监听窗口滚动事件

    // console.log(this.$store.state.firstData);
    // console.log(this.postData);




    // netPost: function(data) {
    //   axios
    //       .get('/ipa/testAPI.html')
    //       .then((response) => {
    //         console.log(response);
    //         this.posts.push(response)
    //         // this.posts = response;
    //       })
    //       .catch((error) => {
    //         console.log(error);
    //       });
    // }


  }
}
</script>

<style scoped>

</style>