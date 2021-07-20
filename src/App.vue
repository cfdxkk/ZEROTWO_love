<template>
<!--  <h2>hello world</h2>-->
<!--  <index></index>-->

  <router-view name="indexPage"></router-view>

<!--  <router-view v-slot="{ Component }" name="indexPage">-->
<!--    <keep-alive>-->
<!--      <component :is="Component" />-->
<!--    </keep-alive>-->
<!--  </router-view>-->

  <router-view></router-view>



</template>

<script>

// import StartAnimation from "@/components/StartAnimation";
// import * as spritejs from 'spritejs';
// import indexPage from "@/views/main/indexPage";

export default {
  name: "App",
  components: {
    // index: indexPage
  }

}

</script>

<style lang="scss">
  body{
    padding: 0;
    margin: 0;
  }



</style>
