<template>
  <div id="FRANXX">
    <h2>this is FRANXX index</h2>
    <router-link to="/FRANXX/picture">相簿 </router-link>
    <router-link to="/FRANXX/hole">寄语 </router-link>
    <router-view name="FRANXXpicture"></router-view>
    <router-view name="FRANXXhole"></router-view>
    <router-link to="/">返回首页 </router-link>
  </div>

</template>

<script>
export default {
name: "FRANXXindex",
  data: () => {
    return {
      "userID": "1",
      "username": "cfdxkk",
      "anothername": "冲锋的小卡卡",
      "router": "/user/cfdxkk",
      "profile": "这个人很神必，没有简介",
      "hobby": [
        "DARLING in the FRANXX",
        "EVA",
        "CLANNAD",
        "星际公民",
        "埃隆 · 马斯克",
        "流浪地球",
        "荒野大镖客",
        "二次元",
        "原神",
        "Vue.js",
        "关于我转生成为史莱姆这件事 转生史莱姆日记"
      ],
      "preparePosts": [
        {
          "postTitle": "B战昨晚服务器炸了，十年难得一见啊",
          "postContent": "叔叔服务器炸了，将近一个半小时啥也干不了\n还好是晚上，不然叔叔就要骂死了，还给我推送了史莱姆的更新，笑死，根本上不去；\n据说是B站服务器崩了，然后大家都挤着去A，A战服务器顶不住也崩了，然后知乎微博上了三个热搜，这一波下来，B站，A站，知乎微博的程序员都得半夜加班，卷起来了",
          "postImg": [
            "/img/img1",
            "/img/img2",
            "/img/img3",
            "/img/img4"
          ]
        },{
          "postTitle": "B战昨晚服务器炸了，百年难得一见啊",
          "postContent": "叔叔服务器炸了，将近一个半小时啥也干不了\n还好是晚上，不然叔叔就要骂死了，还给我推送了史莱姆的更新，笑死，根本上不去；\n据说是B站服务器崩了，然后大家都挤着去A，A战服务器顶不住也崩了，然后知乎微博上了三个热搜，这一波下来，B站，A站，知乎微博的程序员都得半夜加班，卷起来了",
          "postImg": [
            "/img/img1",
            "/img/img2",
            "/img/img3",
            "/img/img4"
          ]
        },{
          "postTitle": "B战昨晚服务器炸了，千年难得一见啊",
          "postContent": "叔叔服务器炸了，将近一个半小时啥也干不了\n还好是晚上，不然叔叔就要骂死了，还给我推送了史莱姆的更新，笑死，根本上不去；\n据说是B站服务器崩了，然后大家都挤着去A，A战服务器顶不住也崩了，然后知乎微博上了三个热搜，这一波下来，B站，A站，知乎微博的程序员都得半夜加班，卷起来了",
          "postImg": [
            "/img/img1",
            "/img/img2",
            "/img/img3",
            "/img/img4"
          ]
        }
      ]
    }
  }
}
</script>

<style scoped>

#FRANXX{
  width: 100vw;
  height: 100vh;

  padding: 0;
  margin: 0;

  position: absolute;
  top: 0;
  left: 0;

  background-color: pink;


}

</style>