<template>

  <svg width="0" height="0">
    <filter id="inline">
      <feMorphology in="SourceAlpha" result="ERODE" operator="erode" radius="2"></feMorphology>

      <feFlood flood-color="green" flood-opacity="1" result="flood"></feFlood>
      <feComposite in="flood" in2="ERODE" operator="in" result="INLINE"></feComposite>

      <feMerge>
        <feMergeNode in="ERODE" />
        <feMergeNode in="SourceGraphic" />
      </feMerge>
    </filter>
  </svg>


  <div id="FRANXXindexTopBar">

    <div id="FRANXXlogo"></div>

    <slot></slot>

    <div id="FRANXXindexTopBarUserBox">

      <div id="username">
        <div id="usernametext">{{username}}</div>
      </div>

<!--        红色和蓝色的三角形块-->

      <div id="blueT"></div>
      <div id="redT"></div>



      <div id="upload">
        <div id="uploadtext">
          <span>+</span><span id="uploadtextitaly"> 发布新帖</span>
        </div>
      </div>





    </div>

  </div>

</template>

<script>
export default {
name: "FRANXXindexTopBar",
  data: () => {
    return {
      username: "cfdxkkkkkk"
    }
  },
  methods: {
    enterAnime() {
      console.log("enterAnime 被触发");

      document.getElementById("upload").animate(
          [
            {
              clipPath: "polygon(calc(100% + 20px) 0, 100% 0%, 100% 100%, 100% 100%)"
            },
            {
              clipPath: "polygon(20px 0, 100% 0%, 100% 100%, 0 100%)"
            }
          ],
          {
            duration: 500,
                fill: "forwards",
              easing: "ease-in-out"
          }
      )

      // document.getElementById("redandblueT").animate(
      //     [
      //       {
      //         opacity: "0"
      //       },
      //       {
      //         opacity: "1"
      //       }
      //     ],
      //     {
      //       delay: 500,
      //       duration: 0,
      //       fill: "forwards",
      //       easing: "ease-in-out"
      //     }
      // )



      document.getElementById("redT").animate(
          [
            {
              opacity: "0"
            },
            {
              opacity: "1"
            }
          ],
          {
            delay: 200,
            duration: 0,
            fill: "forwards",
            easing: "ease-in-out"
          }
      )

      document.getElementById("redT").animate(
          [
            {
              right: "100px"
            },
            {
              right: "180px"
            }
          ],
          {
            delay: 500,
            duration: 400,
            fill: "forwards",
            easing: "ease-in-out"
          }
      )


      document.getElementById("blueT").animate(
          [
            {
              right: "100px"
            },
            {
              right: "195px"
            }
          ],
          {
            delay: 550,
            duration: 500,
            fill: "forwards",
            easing: "ease-in"
          }
      )

      document.getElementById("username").animate(
          [
            {
              clipPath: "polygon(calc(100% + 20px) 0, 100% 0%, 200px 100%, 200px 100%)",
              backgroundColor: "rgba(255,34,0,0.4)",
            },
            {

              backgroundColor: "rgba(0,195,255,0.2)",
            },
            {
              clipPath: "polygon(20px 0, 100% 0%, 200px 100%, 0% 100%)",
              backgroundColor: "white",
            }
          ],
          {
            delay: 1000,
            duration: 700,
            fill: "forwards",
            easing: "ease-in"
          }
      )



    },
    uploadButtonHoverAnime() {
      const uploadBox = document.getElementById("upload")
      uploadBox.addEventListener("mouseenter",() => {
        uploadBox.animate(
            [
              {
                backgroundColor: "black",
              },
              {
                backgroundColor: "#474747",
              }
            ],
            {
              duration: 200,
              fill: "both",
              easing: "ease-in-out"
            }
        )
      })

      uploadBox.addEventListener("mouseleave",() => {
        uploadBox.animate(
            [
              {
                backgroundColor: "#474747"
              },
              {
                backgroundColor: "black"
              }
            ],
            {
              duration: 200,
              fill: "both",
              easing: "ease-in-out"
            }
        )
      })

      // const uploadBoxText = document.getElementById("uploadtext")
      // uploadBox.addEventListener("mouseenter",() => {
      //   uploadBoxText.animate(
      //       [
      //         {
      //           color: "white"
      //         },
      //         {
      //           color: "black"
      //         }
      //       ],
      //       {
      //         duration: 200,
      //         fill: "both",
      //         easing: "ease-in-out"
      //       }
      //   )
      // })
      //
      //
      // uploadBox.addEventListener("mouseleave",() => {
      //   uploadBoxText.animate(
      //       [
      //         {
      //           color: "black"
      //         },
      //         {
      //
      //           color: "white",
      //
      //         }
      //       ],
      //       {
      //         duration: 200,
      //         fill: "both",
      //         easing: "ease-in-out"
      //       }
      //   )
      // })



    },
    usernameButtonHoverAnime() {


      const usernameBox = document.getElementById("username")
      usernameBox.addEventListener("mouseenter",() => {
        usernameBox.animate(
            [
              {
                backgroundColor: "white",
                filter: ""
              },
              {
                backgroundColor: "black",
                filter: "url(#inline)"
              }
            ],
            {
              duration: 200,
              fill: "both",
              easing: "ease-in-out"
            }
        )
      })

      usernameBox.addEventListener("mouseleave",() => {
          usernameBox.animate(
              [
                {
                  backgroundColor: "black"
                },
                {
                  backgroundColor: "white"
                }
              ],
              {
                duration: 200,
                fill: "both",
                easing: "ease-in-out"
              }
          )
      })

      const usernameBoxText = document.getElementById("usernametext")

      usernameBox.addEventListener("mouseenter",() => {
        usernameBoxText.animate(
            [
              {
                color: "black"
              },
              {
                color: "white"
              }
            ],
            {
              duration: 200,
              fill: "both",
              easing: "ease-in-out"
            }
        )
      })



      usernameBox.addEventListener("mouseleave",() => {
        usernameBoxText.animate(
            [
              {
                color: "white"
              },
              {

                color: "black",

              }
            ],
            {
              duration: 200,
              fill: "both",
              easing: "ease-in-out"
            }
        )
      })











    }
  },
  mounted() {
    this.enterAnime()
    this.uploadButtonHoverAnime()
    this.usernameButtonHoverAnime()
  }
}
</script>

<style scoped>

#FRANXXindexTopBar{
  width: 100%;
  height: 60px;

  position: fixed;
  top: 0;
  left: 0;

  background-color: #ffffff;

  box-shadow: 0px 2px 2px rgba(50, 50, 0, 0.2);

  /*opacity: 0.5;*/
  /*不透明度*/


}

#FRANXXlogo{
  width: 37px;
  height: 60px;

  position: absolute;
  left: 180px;
  top: 0px;

  background: url("../staticFile/imgs/xx2_nobg.png") center center no-repeat;
  background-size: contain;
}

#FRANXXindexTopBarUserBox{
  width: 400px;
  height: 60px;

  position: absolute;
  top: 0px;
  right: 0px;

  background-color: white;

}

#upload{
  width: 200px;
  height: 100%;

  position: absolute;
  top: 0px;
  right: 0px;

  clip-path: polygon(20px 0, 100% 0%, 100% 100%, 0 100%); /*切割*/

  background-color: black;

  cursor: pointer;

}
#uploadtext{

  position: absolute;
  top: 16px;
  left: 45px;

  color: #ffffff;
  font-size: 24px;
  /*font-style: oblique 40deg;*/
  /*font-style: italic;*/
  /*斜体*/
  font-weight: 400;  /*字体宽度*/



}

#uploadtextitaly{
  font-style: italic;
}

#redandblueT{
  width: 100px;
  height: 55%;

  position: absolute;
  top: 0px;
  right: 180px;

  /*background-color: aqua;*/

  opacity: 0
}
#redT{
  width: 65px;
  height: 35px;

  position: absolute;
  top: 0px;
  right: 0px;

  opacity: 0;

  background-color: #ff3f1a;

  clip-path: polygon(0 0, 100% 0%, 100% 100%, 100% 100%); /*切割*/
}

#blueT{
  width: 100px;
  height: 30px;

  position: absolute;
  top: 0px;
  right: -200px;

  background-color: #00a7e0;

  clip-path: polygon(0 0, 100% 0%, 100% 70%, 100% 70%); /*切割*/
}

#username{
  width: 220px;
  height: 100%;

  position: absolute;
  top: 0;
  right: 180px;

  background-color: gray;

  clip-path: polygon(100% 0, 100% 0%, 200px 100%, 200px 100%); /*切割*/

  cursor: pointer; /*鼠标指针变成小手*/

}
#usernametext{
  position: absolute;
  top: 16px;
  right: 30px;

  color: #000000;
  font-size: 24px;
  /*font-style: oblique 40deg;*/
  font-style: italic;
  /*斜体*/
  font-weight: 400;  /*字体宽度*/
}


</style>