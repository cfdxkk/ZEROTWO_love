<template>
  <div id="xx">
    <div id="xxlogo">

      <div class="glitch" >
        <div :style="glitchStyleV" class="glitch__item" ></div>
        <div :style="glitchStyleV" class="glitch__item"></div>
        <div :style="glitchStyleV" class="glitch__item"></div>
        <div :style="glitchStyleV" class="glitch__item"></div>
        <div :style="glitchStyleV" class="glitch__item"></div>
      </div>

    </div>
  </div>

</template>

<script>
export default {
  name: "xx",
  data() {
    return {
      glitchStyleV: {
        "--gap-horizontal": "10px",
        "--gap-vertical": "5px",
        "--time-anim": "4s",
        "--delay-anim": "2s",
        "--blend-mode-1": "none",
        "--blend-mode-2": "none",
        "--blend-mode-3": "none",
        "--blend-mode-4": "none",
        "--blend-mode-5": "overlay",
        "--blend-color-1": "transparent",
        "--blend-color-2": "transparent",
        "--blend-color-3": "transparent",
        "--blend-color-4": "transparent",
        "--blend-color-5": "transparent"

      },
      winWidth: null,
      winHeight: null
    }
  },
  computed: {
  },
  methods: {


    setLogoLeft: function () {



      if (window.innerWidth) {     // 获取页面高度
        this.winWidth = window.innerWidth
      }else if ((document.body) && (document.body.clientWidth)){
        this.winWidth = document.body.clientWidth;
      }

      if (window.innerHeight){     // 获取页面宽度
        this.winHeight = window.innerHeight
      }else if ((document.body) && (document.body.clientHeight)){
        this.winHeight = document.body.clientHeight
      }

      let italyLine_LeftTopX = this.winWidth * 0.368489,
          italyLine_LeftBottomX = italyLine_LeftTopX - (1/(Math.tan((65*(Math.PI/180))))) * this.winHeight
      console.log("(XX)italyLine_LeftBottomX:" + italyLine_LeftBottomX);


      if( (this.winWidth/this.winHeight) > 2.5 ){
        // console.log(this.winwidth);

        console.log("我的屏幕实在是太tm宽了，比例大于2.5啦");
        let logoLeft = ""
        logoLeft =      ((italyLine_LeftTopX + italyLine_LeftBottomX)/2) - (this.winWidth * 0.02)      +      "px"

        // console.log("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX");
        // console.log("(XX)topPoint:" + italyLine_LeftTopX);
        // console.log("(XX)bottomPoint:" + italyLine_LeftBottomX);
        // console.log("(XX)logoLeft:"+logoLeft);
        document.getElementById("xxlogo").style.left = logoLeft

      } else if( 2.5 >= (this.winWidth/this.winHeight) && ((this.winWidth/this.winHeight) >= 0.8701298 && italyLine_LeftBottomX > 0 )){

        // console.log(this.winwidth);

        console.log("我的屏幕刚刚好");
        let logoLeft = ""
        console.log("(XX)winWidht" + this.winWidth);
        logoLeft =      ((italyLine_LeftTopX + italyLine_LeftBottomX)/2) - 80     +      "px"

        // console.log("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX");
        // console.log("(XX)topPoint:" + italyLine_LeftTopX);
        // console.log("(XX)bottomPoint:" + italyLine_LeftBottomX);
        // console.log("(XX)logoLeft:"+logoLeft);
        document.getElementById("xxlogo").style.left = logoLeft

      } else if ( italyLine_LeftBottomX <= 0 ) {
        if ((this.winWidth/this.winHeight) < 0.25) {
          console.log("你用的是苹果30吗？");
          document.getElementById("xxlogo").style.left = "5vw"
        } else {
          // console.log(this.winwidth);
          console.log("我的屏幕是竖着放的");
          let logoLeft = ""
          logoLeft =      "50px"

          // console.log("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX");
          // console.log("(XX)topPoint:" + italyLine_LeftTopX);
          // console.log("(XX)bottomPoint:" + italyLine_LeftBottomX);
          // console.log("(XX)logoLeft:"+logoLeft);
          document.getElementById("xxlogo").style.left = logoLeft
        }


      } else {
        console.log("特殊形状的屏幕，此项用于兜底");
        document.getElementById("xxlogo").style.left = "5vw"
      }







      // 监听窗口尺寸改变
      window.addEventListener('resize', this.listenAndSetXXpozation)




    },
    XXattend: () => {
      console.log("XXattend");
      document.getElementById("xx").animate(
          [
            {
              opacity: 0
            },
            {
              opacity: 0.6
            }
          ],
          {
            delay: 200,
            duration: 500,
            fill: "forwards",
            easing: "ease-in"
          }
      )

    },
    listenAndSetXXpozation () {


      if (window.innerWidth) {     // 获取页面高度
        this.winWidth = window.innerWidth
      }else if ((document.body) && (document.body.clientWidth)){
        this.winWidth = document.body.clientWidth;
      }

      if (window.innerHeight){     // 获取页面宽度
        this.winHeight = window.innerHeight
      }else if ((document.body) && (document.body.clientHeight)){
        this.winHeight = document.body.clientHeight
      }

      let italyLine_LeftTopX = this.winWidth * 0.368489,
          italyLine_LeftBottomX = italyLine_LeftTopX - (1/(Math.tan((65*(Math.PI/180))))) * this.winHeight
      console.log("(XX)italyLine_LeftBottomX:" + italyLine_LeftBottomX);


      if( (this.winWidth/this.winHeight) > 2.5 ){
        // console.log(this.winwidth);

        console.log("我的屏幕实在是太tm宽了，比例大于2.5啦");
        let logoLeft = ""
        logoLeft =      ((italyLine_LeftTopX + italyLine_LeftBottomX)/2) - (this.winWidth * 0.02)      +      "px"

        // console.log("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX");
        // console.log("(XX)topPoint:" + italyLine_LeftTopX);
        // console.log("(XX)bottomPoint:" + italyLine_LeftBottomX);
        // console.log("(XX)logoLeft:"+logoLeft);
        document.getElementById("xxlogo").style.left = logoLeft

      } else if( 2.5 >= (this.winWidth/this.winHeight) && ((this.winWidth/this.winHeight) >= 0.8701298 && italyLine_LeftBottomX > 0 )){

        // console.log(this.winwidth);

        console.log("我的屏幕刚刚好");
        let logoLeft = ""
        console.log("(XX)winWidht" + this.winWidth);
        logoLeft =      ((italyLine_LeftTopX + italyLine_LeftBottomX)/2) - 80     +      "px"

        // console.log("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX");
        // console.log("(XX)topPoint:" + italyLine_LeftTopX);
        // console.log("(XX)bottomPoint:" + italyLine_LeftBottomX);
        // console.log("(XX)logoLeft:"+logoLeft);
        document.getElementById("xxlogo").style.left = logoLeft

      } else if ( italyLine_LeftBottomX <= 0 ) {
        if ((this.winWidth/this.winHeight) < 0.25) {
          console.log("你用的是苹果30吗？");
          document.getElementById("xxlogo").style.left = "5vw"
        } else {
          // console.log(this.winwidth);
          console.log("我的屏幕是竖着放的");
          let logoLeft = ""
          logoLeft =      "50px"

          // console.log("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX");
          // console.log("(XX)topPoint:" + italyLine_LeftTopX);
          // console.log("(XX)bottomPoint:" + italyLine_LeftBottomX);
          // console.log("(XX)logoLeft:"+logoLeft);
          document.getElementById("xxlogo").style.left = logoLeft
        }


      } else {
        console.log("特殊形状的屏幕，此项用于兜底");
        document.getElementById("xxlogo").style.left = "5vw"
      }


    }
  },
  mounted() {
    this.setLogoLeft()
  },
  unmounted() {
    window.removeEventListener("resize",this.listenAndSetXXpozation)
  }
}
</script>

<style scoped>


  #xxlogo{

    position: absolute;

    top: 36vh;
    left: 30vw;


    width: 25vw;
    height: 25vh;

    /*background-color: purple;*/

  }







  .glitch {
    width: 100%;
    height: 100%;
    position: relative;
    /*margin: 40px auto;*/
  }
  .glitch .glitch__item {
    background: url("../staticFile/imgs/xx2_nobg.png") no-repeat 0% 50% ;
    background-size: contain;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    position: absolute;
  }
  .glitch .glitch__item:nth-child(n+2) {
    opacity: 0;
    animation-duration: var(--time-anim);
    animation-delay: var(--delay-anim);
    animation-timing-function: linear;
    animation-iteration-count: infinite;
  }
  .glitch .glitch__item:nth-child(2) {
    background-color: var(--blend-color-2);
    background-blend-mode: var(--blend-mode-2);
    animation-name: glitch-anim-2;
  }
  .glitch .glitch__item:nth-child(2) {
    background-color: var(--blend-color-3);
    background-blend-mode: var(--blend-mode-3);
    animation-name: glitch-anim-3;
  }
  .glitch .glitch__item:nth-child(4) {
    background-color: var(--blend-color-4);
    background-blend-mode: var(--blend-mode-4);
    animation-name: glitch-anim-4;
  }
  .glitch .glitch__item:nth-child(5) {
    background-color: var(--blend-color-5);
    background-blend-mode: var(--blend-mode-5);
    animation-name: glitch-anim-flash;
  }
  @keyframes glitch-anim-flash {
    0%,
    5% {
      opacity: 0.2;
      transform: translate3d(var(--glitch-horizontal), 500px, 0);
    }
    5.5%,
    100% {
      opacity: 0;
      transform: translate3d(0, 0, 0);
    }
  }
  @keyframes glitch-anim-2 {
    0% {
      opacity: 1;
      transform: translate3d(var(--gap-horizontal), 0, 0);
      -webkit-clip-path: polygon(0 2%, 100% 2%, 100% 5%, 0 5%);
      clip-path: polygon(0 2%, 100% 2%, 100% 5%, 0 5%);
    }
    2% {
      -webkit-clip-path: polygon(0 15%, 100% 15%, 100% 15%, 0 15%);
      clip-path: polygon(0 15%, 100% 15%, 100% 15%, 0 15%);
    }
    4% {
      -webkit-clip-path: polygon(0 10%, 100% 10%, 100% 20%, 0 20%);
      clip-path: polygon(0 10%, 100% 10%, 100% 20%, 0 20%);
    }
    6% {
      -webkit-clip-path: polygon(0 1%, 100% 1%, 100% 2%, 0 2%);
      clip-path: polygon(0 1%, 100% 1%, 100% 2%, 0 2%);
    }
    8% {
      -webkit-clip-path: polygon(0 33%, 100% 33%, 100% 33%, 0 33%);
      clip-path: polygon(0 33%, 100% 33%, 100% 33%, 0 33%);
    }
    10% {
      -webkit-clip-path: polygon(0 44%, 100% 44%, 100% 44%, 0 44%);
      clip-path: polygon(0 44%, 100% 44%, 100% 44%, 0 44%);
    }
    12% {
      -webkit-clip-path: polygon(0 50%, 100% 50%, 100% 20%, 0 20%);
      clip-path: polygon(0 50%, 100% 50%, 100% 20%, 0 20%);
    }
    14% {
      -webkit-clip-path: polygon(0 70%, 100% 70%, 100% 70%, 0 70%);
      clip-path: polygon(0 70%, 100% 70%, 100% 70%, 0 70%);
    }
    16% {
      -webkit-clip-path: polygon(0 80%, 100% 80%, 100% 80%, 0 80%);
      clip-path: polygon(0 80%, 100% 80%, 100% 80%, 0 80%);
    }
    18% {
      -webkit-clip-path: polygon(0 50%, 100% 50%, 100% 55%, 0 55%);
      clip-path: polygon(0 50%, 100% 50%, 100% 55%, 0 55%);
    }
    20% {
      -webkit-clip-path: polygon(0 70%, 100% 70%, 100% 80%, 0 80%);
      clip-path: polygon(0 70%, 100% 70%, 100% 80%, 0 80%);
    }
    21.9% {
      opacity: 1;
      transform: translate3d(var(--gap-horizontal), 0, 0);
    }
    22%,
    100% {
      opacity: 0;
      transform: translate3d(0, 0, 0);
      -webkit-clip-path: polygon(0 0, 0 0, 0 0, 0 0);
      clip-path: polygon(0 0, 0 0, 0 0, 0 0);
    }
  }
  @keyframes glitch-anim-3 {
    0% {
      opacity: 1;
      transform: translate3d(calc(-1 * var(--gap-horizontal)), 0, 0);
      -webkit-clip-path: polygon(0 25%, 100% 25%, 100% 30%, 0 30%);
      clip-path: polygon(0 25%, 100% 25%, 100% 30%, 0 30%);
    }
    3% {
      -webkit-clip-path: polygon(0 3%, 100% 3%, 100% 3%, 0 3%);
      clip-path: polygon(0 3%, 100% 3%, 100% 3%, 0 3%);
    }
    5% {
      -webkit-clip-path: polygon(0 5%, 100% 5%, 100% 20%, 0 20%);
      clip-path: polygon(0 5%, 100% 5%, 100% 20%, 0 20%);
    }
    7% {
      -webkit-clip-path: polygon(0 20%, 100% 20%, 100% 20%, 0 20%);
      clip-path: polygon(0 20%, 100% 20%, 100% 20%, 0 20%);
    }
    9% {
      -webkit-clip-path: polygon(0 40%, 100% 40%, 100% 40%, 0 40%);
      clip-path: polygon(0 40%, 100% 40%, 100% 40%, 0 40%);
    }
    11% {
      -webkit-clip-path: polygon(0 52%, 100% 52%, 100% 59%, 0 59%);
      clip-path: polygon(0 52%, 100% 52%, 100% 59%, 0 59%);
    }
    13% {
      -webkit-clip-path: polygon(0 60%, 100% 60%, 100% 60%, 0 60%);
      clip-path: polygon(0 60%, 100% 60%, 100% 60%, 0 60%);
    }
    15% {
      -webkit-clip-path: polygon(0 75%, 100% 75%, 100% 75%, 0 75%);
      clip-path: polygon(0 75%, 100% 75%, 100% 75%, 0 75%);
    }
    17% {
      -webkit-clip-path: polygon(0 65%, 100% 65%, 100% 40%, 0 40%);
      clip-path: polygon(0 65%, 100% 65%, 100% 40%, 0 40%);
    }
    19% {
      -webkit-clip-path: polygon(0 45%, 100% 45%, 100% 50%, 0 50%);
      clip-path: polygon(0 45%, 100% 45%, 100% 50%, 0 50%);
    }
    20% {
      -webkit-clip-path: polygon(0 14%, 100% 14%, 100% 33%, 0 33%);
      clip-path: polygon(0 14%, 100% 14%, 100% 33%, 0 33%);
    }
    21.9% {
      opacity: 1;
      transform: translate3d(calc(-1 * var(--gap-horizontal)), 0, 0);
    }
    22%,
    100% {
      opacity: 0;
      transform: translate3d(0, 0, 0);
      -webkit-clip-path: polygon(0 0, 0 0, 0 0, 0 0);
      clip-path: polygon(0 0, 0 0, 0 0, 0 0);
    }
  }

  /*debug here*/
  @keyframes glitch-anim-4 {
    0% {
      opacity: 1;
      transform: translate3d(-150px, calc(-1 * var(--gap-vertical)), 0) scale3d(-1, -1, 1);
      -webkit-clip-path: polygon(0 1%, 100% 1%, 100% 3%, 0 3%);
      clip-path: polygon(0 1%, 100% 1%, 100% 3%, 0 3%);
    }
    1.5% {
      -webkit-clip-path: polygon(0 10%, 100% 10%, 100% 9%, 0 9%);
      clip-path: polygon(0 10%, 100% 10%, 100% 9%, 0 9%);
    }
    2% {
      -webkit-clip-path: polygon(0 5%, 100% 5%, 100% 6%, 0 6%);
      clip-path: polygon(0 5%, 100% 5%, 100% 6%, 0 6%);
    }
    2.5% {
      -webkit-clip-path: polygon(0 20%, 100% 20%, 100% 20%, 0 20%);
      clip-path: polygon(0 20%, 100% 20%, 100% 20%, 0 20%);
    }
    3% {
      -webkit-clip-path: polygon(0 10%, 100% 10%, 100% 10%, 0 10%);
      clip-path: polygon(0 10%, 100% 10%, 100% 10%, 0 10%);
    }
    5% {
      -webkit-clip-path: polygon(0 30%, 100% 30%, 100% 25%, 0 25%);
      clip-path: polygon(0 30%, 100% 30%, 100% 25%, 0 25%);
    }
    5.5% {
      -webkit-clip-path: polygon(0 15%, 100% 15%, 100% 16%, 0 16%);
      clip-path: polygon(0 15%, 100% 15%, 100% 16%, 0 16%);
    }
    7% {
      -webkit-clip-path: polygon(0 40%, 100% 40%, 100% 39%, 0 39%);
      clip-path: polygon(0 40%, 100% 40%, 100% 39%, 0 39%);
    }
    8% {
      -webkit-clip-path: polygon(0 20%, 100% 20%, 100% 21%, 0 21%);
      clip-path: polygon(0 20%, 100% 20%, 100% 21%, 0 21%);
    }
    9% {
      -webkit-clip-path: polygon(0 60%, 100% 60%, 100% 55%, 0 55%);
      clip-path: polygon(0 60%, 100% 60%, 100% 55%, 0 55%);
    }
    10.5% {
      -webkit-clip-path: polygon(0 30%, 100% 30%, 100% 31%, 0 31%);
      clip-path: polygon(0 30%, 100% 30%, 100% 31%, 0 31%);
    }
    11% {
      transform: translate3d(-120px, calc(-1 * var(--gap-vertical)), 0) scale3d(-0.4, -1, 0.5);
      -webkit-clip-path: polygon(0 70%, 100% 70%, 100% 69%, 0 69%);
      clip-path: polygon(0 70%, 100% 70%, 100% 69%, 0 69%);
    }
    13% {
      -webkit-clip-path: polygon(0 40%, 100% 40%, 100% 41%, 0 41%);
      clip-path: polygon(0 40%, 100% 40%, 100% 41%, 0 41%);
    }
    14% {
      -webkit-clip-path: polygon(0 80%, 100% 80%, 100% 75%, 0 75%);
      clip-path: polygon(0 80%, 100% 80%, 100% 75%, 0 75%);
    }
    14.5% {
      -webkit-clip-path: polygon(0 50%, 100% 50%, 100% 51%, 0 51%);
      clip-path: polygon(0 50%, 100% 50%, 100% 51%, 0 51%);
    }
    15% {
      -webkit-clip-path: polygon(0 90%, 100% 90%, 100% 90%, 0 90%);
      clip-path: polygon(0 90%, 100% 90%, 100% 90%, 0 90%);
    }
    16% {
      -webkit-clip-path: polygon(0 60%, 100% 60%, 100% 60%, 0 60%);
      clip-path: polygon(0 60%, 100% 60%, 100% 60%, 0 60%);
    }
    18% {
      -webkit-clip-path: polygon(0 100%, 100% 100%, 100% 99%, 0 99%);
      clip-path: polygon(0 100%, 100% 100%, 100% 99%, 0 99%);
    }
    20% {
      -webkit-clip-path: polygon(0 70%, 100% 70%, 100% 71%, 0 71%);
      clip-path: polygon(0 70%, 100% 70%, 100% 71%, 0 71%);
    }
    21.9% {
      opacity: 1;
      transform: translate3d(-160px, calc(-1 * var(--gap-vertical)), 0) scale3d(-0.8, -1, 0.5);
    }
    22%,
    100% {
      opacity: 0;
      transform: translate3d(0, 0, 0);
      -webkit-clip-path: polygon(0 0, 0 0, 0 0, 0 0);
      clip-path: polygon(0 0, 0 0, 0 0, 0 0);
    }
  }








</style>