<template>

  <div id="topbar">
    <div id="tabbarbg">
        <div id="blueblock"></div>
        <div id="redblock"></div>
    </div>
    <div id="shadow">
      <div id="topbarleftbox">

        <div id="userbar">
          <div id="userbox">{{ username }}</div>
        </div>
        <div id="whiteline1"></div>

        <router-link to="/FRANXX/hole">
          <div id="enterfranxx">
            <div class="textbox1">进入论坛</div>
          </div>
        </router-link>

        <router-link to="/FRANXX/about">
          <div id="whiteline2"></div>
          <div id="about">
            <div class="textbox2">关于</div>
          </div>
        </router-link>


      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: "indexPage_topbar",
  data: () => {
    return {
      username: "cfdxkkcfdxkkcf",
      barGone: false
    }
  },
  methods: {
    topbarTitleGone() {
      let winWidht = 0
      if (window.innerWidth) {     // 获取页面高度
        winWidht = window.innerWidth
      }else if ((document.body) && (document.body.clientWidth)){
        winWidht = document.body.clientWidth;
      }
      if( this.barGone == false){
        if (winWidht<540){


          console.log("(tb)窗口太小了");


          document.getElementById("whiteline1").animate(
              [
                {
                  left: "185px"

                },
                {
                  left: "-205px"

                }
              ],
              {
                duration: 200,
                fill: "both",
                easing: "ease-in-out"
              }
          )


          document.getElementById("enterfranxx").animate(
              [
                {
                  left: "190px"

                },
                {
                  left: "-190px"

                }
              ],
              {
                duration: 200,
                fill: "both",
                easing: "ease-in-out"
              }
          )


          document.getElementById("about").animate(
              [
                {
                  left: "325px"

                },
                {
                  left: "-420px"

                }
              ],
              {
                duration: 200,
                fill: "both",
                easing: "ease-in-out"
              }
          )


          document.getElementById("whiteline2").animate(
              [
                {
                  left: "320px"

                },
                {
                  left: "-340px"

                }
              ],
              {
                duration: 200,
                fill: "both",
                easing: "ease-in-out"
              }
          )

          document.getElementById("topbarleftbox").animate(
              [
                {
                  width: "420px"

                },
                {
                  width: "200px"

                }
              ],
              {
                duration: 0,
                fill: "both",
                easing: "ease-in-out"
              }
          )


          this.barGone = true
        }
      }

    },
    topbarenter: () => {

      console.log("topbar出来啦！");

      document.getElementById("tabbarbg").animate(
          [
            {
              top: "-13px"
            },
            {
              top: "0px"
            }
          ],
          {
            delay: 900,
            duration: 200,
            fill: "both",
            easing: "ease-in"
          }
      )

      document.getElementById("shadow").animate(
          [
            {
              left: "-420px"
            },
            {
              left: "0px"
            }
          ],
          {
            delay: 900,
            duration: 500,
            fill: "both",
            easing: "ease-in-out"
          }
      )


      document.getElementById("redblock").animate(
          [
            {
              width: "0px"
            },
            {
              width: "20px"
            }
          ],
          {
            delay: 900+200,
            duration: 300,
            fill: "both",
            easing: "ease-in-out"
          }
      )


      document.getElementById("blueblock").animate(
          [
            {
              width: "0px",
              bottom: "0"
            },
            {
              width: "70px",
              bottom: "0"
            }
          ],
          {
            delay: 900+200,
            duration: 400,
            fill: "both",
            easing: "ease-in-out"
          }
      )

      document.getElementById("userbar").addEventListener('mouseenter',function () {
        // console.log("鼠标碰到user啦");
        document.getElementById("userbar").animate(
            [
              {
                backgroundColor: "black",
                color: "white"

              },
              {
                backgroundColor: "white",
                color: "black"

              }
            ],
            {
              duration: 200,
              fill: "both",
              easing: "ease-in-out"
            }
        )

      })

      document.getElementById("userbar").addEventListener('mouseleave',function () {
        // console.log("鼠标离开user啦");
        document.getElementById("userbar").animate(
            [
              {
                backgroundColor: "white",
                color: "black"

              },
              {
                backgroundColor: "black",
                color: "white"

              }
            ],
            {
              duration: 300,
              fill: "both",
              easing: "ease-in-out"
            }
        )

      })













      document.getElementById("enterfranxx").addEventListener('mouseenter',function () {
        // console.log("鼠标碰到inthefranxx啦");
        document.getElementById("enterfranxx").animate(
            [
              {
                backgroundColor: "black",
                color: "white"

              },
              {
                backgroundColor: "white",
                color: "black"

              }
            ],
            {
              duration: 200,
              fill: "both",
              easing: "ease-in-out"
            }
        )

      })

      document.getElementById("enterfranxx").addEventListener('mouseleave',function () {
        // console.log("鼠标离开inthefranxx啦");
        document.getElementById("enterfranxx").animate(
            [
              {
                backgroundColor: "white",
                color: "black"

              },
              {
                backgroundColor: "black",
                color: "white"

              }
            ],
            {
              duration: 300,
              fill: "both",
              easing: "ease-in-out"
            }
        )

      })










      document.getElementById("about").addEventListener('mouseenter',function () {
        // console.log("鼠标碰到about啦");
        document.getElementById("about").animate(
            [
              {
                backgroundColor: "black",
                color: "white"

              },
              {
                backgroundColor: "white",
                color: "black"

              }
            ],
            {
              duration: 200,
              fill: "both",
              easing: "ease-in-out"
            }
        )

      })

      document.getElementById("about").addEventListener('mouseleave',function () {
        // console.log("鼠标离开about啦");
        document.getElementById("about").animate(
            [
              {
                backgroundColor: "white",
                color: "black"

              },
              {
                backgroundColor: "black",
                color: "white"

              }
            ],
            {
              duration: 300,
              fill: "both",
              easing: "ease-in-out"
            }
        )

      })


      let isGone = false



      let winWidht = 0
      if (window.innerWidth) {     // 获取页面高度
        winWidht = window.innerWidth
      }else if ((document.body) && (document.body.clientWidth)){
        winWidht = document.body.clientWidth;
      }
      if( isGone == false){
        if (winWidht<540){


          console.log("(tb)窗口太小了");


          document.getElementById("whiteline1").style.opacity = "0"


          document.getElementById("enterfranxx").style.opacity = "0"


          document.getElementById("about").style.opacity = "0"


          document.getElementById("whiteline2").style.opacity = "0"

          document.getElementById("topbarleftbox").style.width = "200px"

          isGone = true
        }
      }









    }
  },
  mounted() {
    window.addEventListener('resize', this.topbarTitleGone)
    // this.topbarenter()
  },
  unmounted() {
    window.removeEventListener("resize",this.topbarTitleGone)
  }
}
</script>

<style scoped>




#shadow{


  position: absolute;
  /*left: 0;*/
  /*与动画冲突*/
  left: -420px;
  top: 0;

  /*不规则形状投影*/
  filter: drop-shadow(2px 3px 3px rgba(50, 50, 0, 0.5));
}


#topbarleftbox{

  /* background-color: aqua; */

  width: 420px;
  height: 32px;

  position:absolute;
  left: 0;
  top: 7px;

  /*clip-path: polygon(0 0, 100% 0%, 400px 100%, 0 100%);*/

  /* box-shadow: 10px 5px 5px black ; */



}

#tabbarbg{
  width: 100vw;
  height: 13px;

  position: absolute;
  top: -13px;
  left: 0px;

  background-color: white;

  opacity: 0.75;
}

#userbar{
  width: 200px;
  height: 32px;

  position:absolute;
  left: 0;

  background-color: black;
  color: white;

  clip-path: polygon(0 0, 100% 0%, 185px 100%, 0 100%);

}

#userbox{

  /*width: 100%;*/
  height: 100%;
  /* background-color: orange; */

  position: absolute;
  right: 27px;
  top: 1px;


  line-height: 28px;

  font-size: 1.5em;

  font-style:italic;

}

.textbox1{

  width: 100%;
  height: 100%;
  /* background-color: orange; */

  position: absolute;
  left: 25px;


  line-height: 30px;

  font-size: 1.4em;

  font-style:italic;

}

.textbox2{

  width: 100%;
  height: 100%;
  /* background-color: orange; */

  position: absolute;
  left: 22px;


  line-height: 30px;

  font-size: 1.4em;

  font-style:italic;

}

#whiteline1{
  width: 20px;
  height: 32px;

  position:absolute;
  /* left: 180px; */
  left: 185px;

  background-color: white;
  opacity: 0.75;

  clip-path: polygon(15px 0, 100% 0%, 5px 100%, 0 100%);
}

#enterfranxx{
  width: 145px;
  height: 32px;

  position:absolute;
  /* left: 180px; */
  left: 190px;

  /* padding-left: 15px;
  padding算在整个div宽度里了 */

  background-color: black;
  color: white;

  clip-path: polygon(15px 0, 100% 0%, 130px 100%, 0 100%);
}


#whiteline2{
  width: 20px;
  height: 32px;

  position:absolute;
  /* left: 180px; */
  left: 320px;

  background-color: white;
  opacity: 0.75;

  clip-path: polygon(15px 0, 100% 0%, 5px 100%, 0 100%);
}

#about{
  width: 95px;
  height: 32px;

  position:absolute;
  left: 325px;

  background-color: black;
  color: white;

  clip-path: polygon(15px 0, 100% 0%, 80px 100%, 0 100%);
}

#topbarrightblock{
  position: absolute;
}

#redblock{

  width: 0px;
  height: 13px;

  position: absolute;

  right: 0px;

  background-color: #ff3f1a;
  clip-path: polygon(5px 0, 100% 0%, 100% 100%, 0 100%);

}

#blueblock{

  width: 0px;
  height: 5px;

  position: absolute;

  right: 0px;
  bottom: 0px;

  background-color: #00a7e0;
  clip-path: polygon(3px 0, 100% 0%, 100% 100%, 0 100%);

}




</style>