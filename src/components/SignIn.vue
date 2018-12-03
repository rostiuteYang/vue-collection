<template>
  <div class="sign-in">
    <div class="sg-del">
      <img src="../assets/叉叉.png" class="chacha">
      <img src="../assets/pic.png" class="pic">
      <div class="sg-title">
        <span>—</span>
        已经连续签到
        <span class="sg-title-color">{{userData}}</span> 天
        <span>—</span>
      </div>
      <div class="sg-body">
        <!-- <sub-group
          v-for="(user,index) in userList"
          :key="index"
          :data="user.data"
          :img="user.img"
          :jifen="user.jifen"
          :img1="user.img1"
          :userData.sync="userData"
          :isSigned="user.isSigned"
          :index="index"
          :onsunbmit="dd"
        ></sub-group>-->
        <select-item
          v-for="(user,index) in signList"
          :user="user"
          :isSigned="user.isSigned"
          :userData.sync="userData"
          :index="index"
          :onsubmit="cc"
          :key="index"
        ></select-item>
        <!-- <div class="sgb-del" v-for="user in userList" @click="changeindex">
          <span class="sgb-title">{{user.data}}</span>
          <img :src="user.img" class="sgb-pic">
          <div class="sgb-bottom">{{user.jifen}}积分</div>
          <img :src="user.img1" class="sgb-pic1">
        </div>-->
        <!-- <div class="sglast" :class="{sglast1,act:c==7}" @click="bbb(7)"> -->
        <!-- <div class="sgb-qiandao1" v-if="isSigned">
          <span class="aaa">已签到</span>
        </div>-->
        <div :class="{sglast,act:c==7}" @click="bbb(7)">
          <span class="sgl-title">第七天</span>
          <img src="../assets/红包.png" class="sgl-pic">
          <div class="sgl-bottom">30积分</div>
        </div>
        <div class="sgb-qiandao" v-if="c==7">
          <span class="aaa">已签到</span>
        </div>
      </div>
      <div class="sg-bottom">
        <div class="sg-name">去逛逛</div>
      </div>
    </div>
  </div>
</template>
<script>
import SelectItem from "./SelectItem";
// import SubGroup from "./SubGroup";
export default {
  components: {
    "select-item": SelectItem
    // "sub-group": SubGroup
  },
  data() {
    return {
      sglast: true,
      act: true,
      c: true,
      userData: "1",
      signList: [
        {
          num: "一",
          jifen: "5",
          img: require("../assets/积分.png"),
          img1: require("../assets/三角.png"),
          isSigned: true
        },
        {
          num: "二",
          jifen: "5",
          img: require("../assets/积分.png"),
          img1: require("../assets/三角.png"),
          isSigned: false
        },
        {
          num: "三",
          jifen: "10",
          img: require("../assets/积分.png"),
          img1: require("../assets/三角.png"),
          isSigned: false
        },
        {
          num: "四",
          jifen: "10",
          img: require("../assets/积分.png"),
          img1: require("../assets/三角.png"),
          isSigned: true
        },
        {
          num: "五",
          jifen: "10",
          img: require("../assets/积分.png"),
          img1: require("../assets/三角.png"),
          isSigned: false
        },
        {
          num: "六",
          jifen: "15",
          img: require("../assets/积分.png"),
          img1: require("../assets/三角.png"),
          isSigned: true
        }
      ]
    };
  },
  methods: {
    bbb(index) {
      this.c = index;
    },

    cc() {
      // this.userList[index].isSigned = true;
      this.userList[index].isSigned = !this.userList[index].isSigned;
    }
    // dd() {
    //   this.userList[index].isSigned = true;
    // }
  }
};
</script>
<style lang="less" scoped>
.sign-in {
  width: 100%;
  height: 667px;
  background: rgba(0, 0, 0, 0.3);

  .sg-del {
    width: 340px;
    height: 560px;
    background: white;
    opacity: 1;
    position: fixed;
    left: 15px;
    top: 70px;
    .chacha {
      width: 30px;
      height: 30px;
      position: absolute;
      top: -20px;
      right: -15px;
    }
    .pic {
      width: 340px;
      height: 150px;
    }
    .sg-title {
      font-family: "微软雅黑";
      font-weight: bold;
      .sg-title-color {
        color: #ffdb00;
      }
    }
    .sg-body {
      display: flex;
      flex-wrap: wrap;
      width: 340px;
      height: 260px;
      position: relative;
      left: 10px;
      top: 20px;
      // background: aqua;
      // .sgb-del {
      //   margin-left: 8px;
      //   width: 70px;
      //   position: relative;
      //   top: 20px;
      //   height: 70px;
      //   background: #e8e8e8;
      //   border: 1px solid white;
      //   border-radius: 8px;
      //   .sgb-title {
      //     font-weight: bolder;
      //     font-size: 15px;
      //     font-family: "微软雅黑";
      //     position: absolute;
      //     width: 100px;
      //     top: -30px;
      //     left: -12px;
      //   }
      //   .sgb-pic {
      //     width: 40px;
      //     height: 40px;
      //     position: absolute;
      //     left: 15px;
      //     top: 5px;
      //     bottom: 40px;
      //   }
      //   .sgb-pic1 {
      //     width: 25px;
      //     height: 25px;
      //     position: absolute;
      //     left: 63px;
      //     top: 30px;
      //   }
      //   .sgb-bottom {
      //     font-family: "微软雅黑";
      //     position: absolute;
      //     bottom: 4px;
      //     left: 15px;
      //   }
      // }
      .sglast {
        width: 149px;
        height: 70px;
        background: #e8e8e8;
        position: absolute;
        left: 170px;
        top: 170px;
        .sgl-title {
          font-weight: bolder;
          font-size: 15px;
          font-family: "微软雅黑";
          position: absolute;
          top: -30px;
          left: 50px;
        }
        .sgl-pic {
          width: 45px;
          height: 45px;
          position: absolute;
          top: 8px;
          left: 50px;
        }
        .sgl-bottom {
          font-family: "微软雅黑";
          position: absolute;
          bottom: 0px;
          left: 50px;
        }
      }
    }
    .sg-name {
      width: 160px;
      height: 50px;
      position: absolute;
      left: 90px;
      top: 460px;
      border: 1px solid black;
      border-radius: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
}
.sgb-qiandao {
  font-size: 20px;
  color: white;
  background: rgba(0, 0, 0, 0.5);
  width: 149px;
  height: 70px;
  position: absolute;
  left: 170px;
  top: 170px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.aaa {
  transform: rotate(320deg);
}
.sgb-qiandao1 {
  font-size: 20px;
  color: red;
  background: rgba(0, 0, 0, 0.5);
  width: 149px;
  height: 70px;
  position: absolute;
  left: 190px;
  top: 170px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
