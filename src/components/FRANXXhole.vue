<template>
  <div id="FRANXXhole">
    <h2>this is hole page</h2>
    <p>anyone can talk to the hole, and the hole will always listen</p>

    <div v-for="(posttitle,index) in postData" :key="index">{{posttitle.postTitle}}</div>

    <div v-for="a in 10" :key="a">{{ a }} this is a div </div>
    <div v-for="b in 10" :key="b">{{b}} this is another div</div>

  </div>


</template>

<script>
export default {
  name: "FRANXXhole",
  computed: {
    postData() {
      return this.$store.state.firstData.preparePosts
    }
  },
  methods: {
  },
  mounted() {

    // console.log(this.$store.state.firstData);
    console.log(this.$store.state.firstData.preparePosts);

  }
}
</script>

<style scoped>

#FRANXXhole{
  background-color: aqua;
  border: 1px solid red;
}

</style>