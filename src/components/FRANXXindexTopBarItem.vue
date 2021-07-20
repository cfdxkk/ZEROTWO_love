<template>
  <div id="FRANXXindexTopBarItem" @click="itemClick">

    <div class="topbartext" v-if="isActive" :style="getCssStyle"><slot name="FRANXXindexTopBarText"></slot></div>
    <div class="topbartext" v-else :style="activestyle"><slot name="FRANXXindexTopBarText_Active"></slot></div>
  </div>
</template>

<script>
export default {
  name: "FRANXXindexTopBarItem",
  props: {
    path: String,
    activetextcolor: {
      type: String,
      default: "gray"
    },
    positionabsleft: {
      type: String,
      default: "0px"
    }
  },
  computed: {
    isActive() {
      return !(this.$route.path == this.path)
    },
    activestyle() {
      return (this.isActive) ?  {}: {color: this.activetextcolor,left: this.positionabsleft}
    },
    getCssStyle() {
      return {left: this.positionabsleft, cursor: "pointer"}
    }
  },
  methods: {
    itemClick() {
      this.$router.replace  (this.path)
    }
  }
}
</script>

<style scoped>

.topbartext{
  position: absolute;

  top: 16px;

  font-size: 24px;
  /*font-style: oblique 40deg;*/
  font-style: italic;
  /*斜体*/
  font-weight: 550;  /*字体宽度*/
}

</style>