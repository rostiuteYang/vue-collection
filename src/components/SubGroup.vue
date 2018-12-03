<template>
  <div class="sub-group" @click="aa">
    <div class="sgb-del">
      <span class="sgb-title">第{{data}}天</span>
      <img :src="img" class="sgb-pic">
      <div class="sgb-bottom">{{jifen}}积分</div>
      <img :src="img1" class="sgb-pic1">
    </div>
    <div class="sgb-qiandao" v-if="isSigned">
      <span class="aaa">已签到</span>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    data: {
      type: String
    },
    img: {
      type: String
    },
    jifen: {
      type: String
    },
    img1: {
      type: String
    },
    isSigned: {
      type: Boolean,
      default: false
    },
    onsunbmit: {
      type: Function,
      default: null
    },
    index: {
      type: Number,
      default: 1
    }
  },
  methods: {
    aa() {
      this.$emit("update:userData", this.data);
    },
    aa() {
      this.onsunbmit(this.index);
    }
  }
};
</script>
<style lang="less" scoped>
.sgb-del {
  margin-left: 8px;
  width: 70px;
  position: relative;
  top: 40px;
  height: 70px;
  background: #e8e8e8;
  border: 1px solid white;
  border-radius: 8px;
  .sgb-title {
    font-weight: bolder;
    font-size: 15px;
    font-family: "微软雅黑";
    position: absolute;
    width: 100px;
    top: -30px;
    left: -12px;
  }
  .sgb-pic {
    width: 40px;
    height: 40px;
    position: absolute;
    left: 15px;
    top: 5px;
    bottom: 40px;
  }
  .sgb-pic1 {
    width: 25px;
    height: 25px;
    position: absolute;
    left: 63px;
    top: 30px;
  }
  .sgb-bottom {
    font-family: "微软雅黑";
    position: absolute;
    bottom: 4px;
    left: 15px;
  }
}
.sgb-qiandao {
  color: white;
  background: rgba(0, 0, 0, 0.5);
  width: 70px;
  height: 70px;
  position: relative;
  left: 10px;
  top: -30px;
  display: flex;
  align-items: center;
  justify-content: center;
  .aaa {
    transform: rotate(320deg);
  }
}
</style>
