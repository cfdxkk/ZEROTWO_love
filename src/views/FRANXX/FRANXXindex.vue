<template>
  <div id="FRANXX">

    <svg width="0" height="0">
      <filter id="outline">
        <feMorphology in="SourceAlpha" result="DILATED" operator="dilate" radius="2"></feMorphology>
        <feMerge>
          <feMergeNode in="DILATED" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </svg>


    <router-view class="infoFlowBox" name="FRANXXpicture"></router-view>
    <router-view class="infoFlowBox" name="FRANXXhole"></router-view>
    <router-view class="infoFlowBox" name="About"></router-view>



    <div id="rightBox">

      <div id="hobby">
        <div class="border">
          <div id="hobbyCut">
            <div id="addHobby">
              <div id="addHobbyText">
                <span>+</span><span id="addHobbyTextItaly"> 添加你喜欢的话题</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="hot">
        <div class="shadow">
          <div id="hotCut">
            <div id="hotnews">
              <div id="hotnewstext">
                <span>时下热门</span>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>





    <franxxindextopbar>





      <franxxindextopbaritem path="/" activetextcolor="gray" positionabsleft="240px">
        <template v-slot:FRANXXindexTopBarText>
          首页
        </template>
        <template v-slot:FRANXXindexTopBarText_Active>
          首页
        </template>
      </franxxindextopbaritem>


      <franxxindextopbaritem path="/FRANXX/hole" activetextcolor="gray" positionabsleft="310px">
        <template v-slot:FRANXXindexTopBarText>
          论坛
        </template>
        <template v-slot:FRANXXindexTopBarText_Active>
          论坛
        </template>
      </franxxindextopbaritem>


      <franxxindextopbaritem path="/FRANXX/picture" activetextcolor="gray" positionabsleft="380px">
        <template v-slot:FRANXXindexTopBarText>
          相册
        </template>
        <template v-slot:FRANXXindexTopBarText_Active>
          相册
        </template>
      </franxxindextopbaritem>


      <franxxindextopbaritem path="/FRANXX/about" activetextcolor="gray" positionabsleft="450px">
        <template v-slot:FRANXXindexTopBarText>
          关于
        </template>
        <template v-slot:FRANXXindexTopBarText_Active>
          关于
        </template>
      </franxxindextopbaritem>



    </franxxindextopbar>




<!--    <h2>this is FRANXX index</h2>-->


<!--    <router-link to="/">返回首页 </router-link>-->
  </div>

</template>


<script>

import FRANXXindexTopBar from "@/components/FRANXXindexTopBar";
import FRANXXindexTopBarItem from "@/components/FRANXXindexTopBarItem";

export default {
name: "FRANXXindex",
  data: () => {
    return {

    }
  },
  components: {
    franxxindextopbar: FRANXXindexTopBar,
    franxxindextopbaritem: FRANXXindexTopBarItem
  },
  methods: {
    flexHotBox() {

      const oDiv = document.getElementById("hot")
      window.onscroll = function(){
        // console.log("js is run")
        var s = document.body.scrollTop || document.documentElement.scrollTop
        if(s>515) {
          // console.log("hotBox浮动事件被激活");
          oDiv.style = "position:fixed;top:75px;left: 1175px;"
        } else {
          oDiv.style = ""
        }
      }
    }
  },
  mounted() {
    this.flexHotBox()
  }
}
</script>

<style scoped>

body{
  padding: 0;
  margin: 0;
}



.infoFlowBox{
  height: 2000px;
  width: 700px;

  position: absolute;
  left: 445px;
  top: 80px;

  /*background-color: aqua;*/
}









#rightBox{
  height: 2000px;
  width: 300px;

  position: absolute;

  /* left => 400 + 700 + 30 */
  left: 1175px;
  top: 80px;

  /*background-color: purple;*/
}



.border{
  /*不规则形状投影*/
  /*filter: drop-shadow(20px 0px 4px #000000);*/

  /*SVG的扩张滤镜*/
  filter: url(#outline);
}
.shadow{
  /*不规则形状投影*/
  filter: drop-shadow(2px 3px 1px rgba(50, 50, 0, 0.2));

  /*SVG的扩张滤镜*/
  /*filter: url(#outline);*/
}



#hobby{
  height: 500px;
  width: 300px;

  position: absolute;

  /* left => 400 + 700 + 30 */
  /*left: 1175px;*/
  /*top: 80px;*/

  /*background-color: red;*/
}

#hobbyCut{

  height: 500px;
  width: 300px;

  position: absolute;
  top: 0;
  left: 0;

  /*background-color: green;*/
  background-color: white;

  clip-path: polygon(20px 0, 100% 0%, 100% 445px, 280px 100%, 0% 100%, 0% 55px); /*切割*/
}
#addHobby{
  width: 100%;
  height: 55px;

  position: absolute;
  left: 0px;
  bottom: 0px;

  background-color: black;
}

#addHobbyText{

  position: absolute;
  top: 12px;
  left: 30px;

  color: #ffffff;
  font-size: 24px;
  /*font-style: oblique 40deg;*/
  /*font-style: italic;*/
  /*斜体*/
  font-weight: 400;  /*字体宽度*/

}

#addHobbyTextItaly{

  font-style: italic;
  /*斜体*/

}






#hot{
  height: 500px;
  width: 300px;

  position: absolute;

  /*left: 1175px;*/
  top: 515px;



  /*background-color: blue;*/
}

#hotCut{

  height: 500px;
  width: 300px;

  position: absolute;
  top: 0px;
  left: 0px;

  /*background-color: orange;*/
  background-color: #f6f6f6;

  clip-path: polygon(20px 0, 100% 0%, 100% 445px, 280px 100%, 0% 100%, 0% 55px); /*切割*/

}

#hotnews{
  width: 100%;
  height: 55px;

  position: absolute;
  left: 0px;
  top: 0px;

  background-color: #e1e1e1;
}
#hotnewstext{

  position: absolute;
  left: 30px;
  top: 10px;

  font-size: 24px;
  /*font-style: oblique 40deg;*/
  font-style: italic;
  /*斜体*/
  font-weight: 550;  /*字体宽度*/
}









/*#FRANXX{*/
/*  width: 100vw;*/
/*  height: 100vh;*/

/*  padding: 0;*/
/*  margin: 0;*/

/*  position: absolute;*/
/*  top: 0;*/
/*  left: 0;*/

/*  background-color: pink;*/


/*}*/


/*body{*/
/*  padding: 0;*/
/*  margin: 0;*/
/*}*/

/*#topbar{*/
/*  width: 100%;*/
/*  height: 60px;*/

/*  position: fixed;*/
/*  top: 0;*/
/*  left: 0;*/

/*  background-color: white;*/
/*  !*opacity: 0.5;*!*/

/*}*/




/*#left{*/
/*  height: 10000px;*/
/*  width: 700px;*/

/*  position: absolute;*/
/*  left: 445px;*/
/*  top: 80px;*/

/*  background-color: aqua;*/
/*}*/

/*#right{*/
/*  height: 2000px;*/
/*  width: 300px;*/

/*  position: absolute;*/

/*  !* left => 400 + 700 + 30 *!*/
/*  left: 1175px;*/
/*  top: 80px;*/

/*  background-color: purple;*/
/*}*/



/*#hobby{*/
/*  height: 500px;*/
/*  width: 300px;*/

/*  position: absolute;*/

/*  !* left => 400 + 700 + 30 *!*/
/*  left: 1175px;*/
/*  top: 80px;*/

/*  background-color: red;*/
/*}*/


/*#hot{*/
/*  height: 500px;*/
/*  width: 300px;*/

/*  position: absolute;*/

/*  left: 1175px;*/
/*  top: 580px;*/



/*  background-color: blue;*/
/*}*/







</style>