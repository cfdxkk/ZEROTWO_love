<template>
  <div id="FRANXXhole">
    <h2>this is hole page</h2>
    <p>anyone can talk to the hole, and the hole will always listen</p>
    <postitem></postitem>



<!--    <div v-for="a in 10" :key="a">{{ a }} this is a div </div>-->
<!--    <div v-for="b in 10" :key="b">{{b}} this is another div</div>-->

  </div>


</template>

<script>

import postItem from "@/components/postItem";

export default {
  name: "FRANXXhole",
  components: {
    postitem: postItem
  },
  methods: {
  }
}
</script>

<style scoped>

#FRANXXhole{
  background-color: aqua;
  border: 1px solid red;
}

</style>