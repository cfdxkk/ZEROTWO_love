<template>
  <div id="background" >
    <div id="backgroundimg" ></div>
  </div>

</template>

<script>
export default {
  name: "BackgroundImg",
  methods: {
    bgimgexpand() {





      let winWidth = 0
      let winHeight = 0

      if (window.innerWidth) {
        winWidth = window.innerWidth
      }else if ((document.body) && (document.body.clientWidth)){
        winWidth = document.body.clientWidth;
      }

      if (window.innerHeight){
        winHeight = window.innerHeight
      }else if ((document.body) && (document.body.clientHeight)){
        winHeight = document.body.clientHeight
      }

      console.log("（BG）窗口宽度：" + winWidth);
      console.log("（BG）窗口高度：" + winHeight);

      let imgDivWidth = document.getElementById("backgroundimg").offsetWidth
      let imgWratioH = 1.45358   //图片长宽比
      let imgHeight = imgDivWidth / imgWratioH  //图片宽度/图片宽高比 = 图片高度
      let imgEx = winHeight / imgHeight  //图片向外扩展的比例

      console.log("imgEx: "+imgEx)


      console.log("imgWidth"+imgDivWidth);

      let WratioH = winWidth / winHeight
      // let HratioW = winHeight / winWidth


      // console.log("WratioH:"+WratioH);
      //
      // console.log("HratioW:"+HratioW);

      if (WratioH<=imgWratioH){
        // let enlarge = (HratioW + imgWratioH - 1) * 100
        if (1 <= imgEx <= 2){
          document.getElementById('backgroundimg').animate(
              [
                {
                  backgroundSize: (imgEx * 100)+'% auto'
                  // transform: "scale(1)"
                },
                {
                  backgroundSize: 6+(imgEx * 100)+'% auto'
                  // transform: "scale(1.5)"
                  // width: 200+'vw'
                }
              ],
              {
                duration: 1500,
                fill: "forwards",
                easing: "ease-in-out"
              }
          )
        } else {
          document.getElementById('backgroundimg').animate(
              [
                {
                  backgroundSize: (imgEx * 100)+'% auto'
                  // transform: "scale(1)"
                },
                {
                  backgroundSize: 15+(imgEx * 100)+'% auto'
                  // transform: "scale(1.5)"
                  // width: 200+'vw'
                }
              ],
              {
                duration: 1500,
                fill: "forwards",
                easing: "ease-in-out"
              }
          )
        }
      } else {
        document.getElementById('backgroundimg').animate(
            [
              {
                backgroundSize: 100+'% auto'
                // transform: "scale(1)"
              },
              {
                backgroundSize: 100+4+'% auto'
                // transform: "scale(1.5)"
                // width: 200+'vw'
              }
            ],
            {
              duration: 1500,
              fill: "forwards",
              easing: "ease-in-out"
            }
        )
      }




      // 当窗口大小改变时，再次执行缩放动画

      window.addEventListener('resize', this.listenAndExtendBgAnime )












    },
    listenAndExtendBgAnime() {





      let winWidth = 0
      let winHeight = 0

      if (window.innerWidth) {
        winWidth = window.innerWidth
      }else if ((document.body) && (document.body.clientWidth)){
        winWidth = document.body.clientWidth;
      }

      if (window.innerHeight){
        winHeight = window.innerHeight
      }else if ((document.body) && (document.body.clientHeight)){
        winHeight = document.body.clientHeight
      }

      console.log("（BG）窗口宽度：" + winWidth);
      console.log("（BG）窗口高度：" + winHeight);

      let imgDivWidth = document.getElementById("backgroundimg").offsetWidth
      let imgWratioH = 1.45358   //图片长宽比
      let imgHeight = imgDivWidth / imgWratioH  //图片宽度/图片宽高比 = 图片高度
      let imgEx = winHeight / imgHeight  //图片向外扩展的比例

      console.log("imgEx: "+imgEx)


      console.log("imgWidth"+imgDivWidth);

      let WratioH = winWidth / winHeight
      // let HratioW = winHeight / winWidth


      console.log("WratioH:"+WratioH);
      //
      // console.log("HratioW:"+HratioW);

      if (WratioH<=imgWratioH){
        // let enlarge = (HratioW + imgWratioH - 1) * 100
        if (1 <= imgEx <= 2){
          document.getElementById('backgroundimg').animate(
              [
                {
                  backgroundSize: (imgEx * 100)+'% auto'
                  // transform: "scale(1)"
                },
                {
                  backgroundSize: 6+(imgEx * 100)+'% auto'
                  // transform: "scale(1.5)"
                  // width: 200+'vw'
                }
              ],
              {
                duration: 700,
                fill: "forwards",
                easing: "ease-in-out"
              }
          )
        } else {
          document.getElementById('backgroundimg').animate(
              [
                {
                  backgroundSize: (imgEx * 100)+'% auto'
                  // transform: "scale(1)"
                },
                {
                  backgroundSize: 15+(imgEx * 100)+'% auto'
                  // transform: "scale(1.5)"
                  // width: 200+'vw'
                }
              ],
              {
                duration: 700,
                fill: "forwards",
                easing: "ease-in-out"
              }
          )
        }

      } else {
        document.getElementById('backgroundimg').animate(
            [
              {
                backgroundSize: 100+'% auto'
                // transform: "scale(1)"
              },
              {
                backgroundSize: 100+2+'% auto'
                // transform: "scale(1.5)"
                // width: 200+'vw'
              }
            ],
            {
              duration: 700,
              fill: "forwards",
              easing: "ease-in-out"
            }
        )
      }

    }
  },
  unmounted() {










    console.log("正在尝试清除extendBgAnime的resize Listener");



// 当窗口大小改变时，再次执行缩放动画




    window.removeEventListener('resize', this.listenAndExtendBgAnime )
    console.log("extendBgAnime的resize Listener已清除");













  }
}
</script>

<style scoped>

#background{
  width: 100vw;

  height: 100vh;


  /*transform-origin: 1000px 500px;*/
}

#backgroundimg{
  width: 100vw;
  max-width: 100vw;
  height: 100vh;
  max-height: 100vh;

  /*width:expression(this.width > 80 ? "80px" : this.width);*/



  background: url("../staticFile/imgs/bg.jpg") center center no-repeat ;  /*背景图，不重复及居中*/
  background-size: cover;   /*背景图平铺整个div*/
}

</style>