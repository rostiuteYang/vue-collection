<template>
  <div class="income">
    <div class="ic-title">
      <div class="ict-left">
        <div class="ictl-up">今日收益</div>
        <div class="ictl-down">672.76</div>
      </div>
      <div class="ict-right">
        <div class="ictr-up">昨日收益</div>
        <div class="ictr-down">605.33</div>
      </div>
    </div>
    <div class="ic-body">
      <div class="icb-top">收益总金额</div>
      <div class="icb-botton">9913.34</div>
      <div class="icb-color"></div>
    </div>
    <div class="icb-pic">
      <img src="../assets/color.png" class="ic-col">
    </div>
    <div class="ic-botton">
      <Ear-ning v-for="pro in profit" :pro="pro" :key="index"></Ear-ning>
    </div>
  </div>
</template>
<script>
import Earning from "./Earning";
export default {
  components: { "Ear-ning": Earning },
  data() {
    return {
      profit: [
        {
          img1: require("../assets/菱形.png"),
          name: "岳*铂金会员",
          img2: require("../assets/电话.png"),
          num: "186****4542",
          daily: "2017-12-26",
          time: "14:38:06",
          lucre: "0.8"
        },
        {
          img1: require("../assets/菱形.png"),
          name: "岳*铂金会员",
          img2: require("../assets/电话.png"),
          num: "186****4542",
          daily: "2017-12-26",
          time: "14:38:06",
          lucre: "0.8"
        },
        {
          img1: require("../assets/菱形.png"),
          name: "岳*铂金会员",
          img2: require("../assets/电话.png"),
          num: "186****4542",
          daily: "2017-12-26",
          time: "14:38:06",
          lucre: "0.8"
        },
        {
          img1: require("../assets/菱形.png"),
          name: "岳*铂金会员",
          img2: require("../assets/电话.png"),
          num: "186****4542",
          daily: "2017-12-26",
          time: "14:38:06",
          lucre: "0.8"
        },
        {
          img1: require("../assets/菱形.png"),
          name: "岳*铂金会员",
          img2: require("../assets/电话.png"),
          num: "186****4542",
          daily: "2017-12-26",
          time: "14:38:06",
          lucre: "0.8"
        },
        {
          img1: require("../assets/菱形.png"),
          name: "岳*铂金会员",
          img2: require("../assets/电话.png"),
          num: "186****4542",
          daily: "2017-12-26",
          time: "14:38:06",
          lucre: "0.8"
        }
      ]
    };
  }
};
</script>
<style lang="less" scoped>
.income {
  width: 100%;
  height: 667px;
  .ic-title {
    position: relative;
    height: 100px;
    background: #03c5ff;
    color: white;
    .ict-left {
      position: absolute;
      left: 60px;
      top: 30px;
      .ictl-down {
        position: absolute;
        top: 30px;
        left: 10px;
      }
    }
    .ict-right {
      position: absolute;
      left: 250px;
      top: 30px;
      .ictr-down {
        position: absolute;
        top: 30px;
        left: 10px;
      }
    }
  }
  .ic-body {
    color: white;
    background: #03c5ff;
    height: 105px;
    .icb-top {
      position: absolute;
      top: 130px;
      left: 140px;
      font-size: 20px;
    }
    .icb-botton {
      position: absolute;
      top: 160px;
      left: 100px;
      font-size: 50px;
    }
    .icb-color {
      position: absolute;
      height: 40px;
      background: #03c5ff;
      width: 359px;
      top: 213px;
    }
  }
  .icb-pic {
    width: 100%;
    .ic-col {
      width: 359px;
      position: absolute;
      top: 245px;
      left: 8px;
    }
  }

  .ic-botton {
    width: 100%;
    height: 500px;
    // background: aqua;
    display: flex;
    flex-flow: column;
    margin-top: 62px;
    font-style: "微软雅黑";
  }
}
</style>
