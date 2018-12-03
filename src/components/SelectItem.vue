<template>
  <div class="select-item" @click="submit">
    <div class="sgbdel">
      <span class="sgb-title">第{{user.num}}天</span>
      <img :src="user.img" class="sgb-pic">
      <div class="sgb-bottom">{{user.jifen}}积分</div>
      <img :src="user.img1" class="sgb-pic1">
    </div>

    <div class="sgb-qiandao" v-if="isSigned">
      <span class="aaa">已签到</span>
    </div>
  </div>
</template>
<script>
export default {
  // 传进来的对象
  props: {
    user: {
      type: Array,
      type: null
    },
    isSigned: {
      type: Boolean,
      default: false
    },
    index: {
      type: Number,
      default: 1
    },
    onsubmit: {
      type: Function,
      default: null
    }
  },
  // 组件自己维护的状态
  data() {
    return {
      sgbdel: true
    };
  },
  methods: {
    // submit() {
    //   this.$emit("update:userData", this.data);
    // },
    //把index传到子组件中
    submit() {
      this.onsubmit(this.index);
    }
  }
};
</script>
<style lang="less" scoped>
.select-item {
  display: flex;
  flex-wrap: wrap;
  position: relative;
  left: 3px;
  top: 20px;
  .sgbdel {
    margin-left: 8px;
    width: 70px;
    position: relative;
    top: 20px;
    height: 70px;
    border: 1px solid white;
    background: #e8e8e8;
    //   color: #e8e8e8;
  }
  .sgb-pic {
    width: 40px;
    height: 40px;
    position: absolute;
    left: 15px;
    bottom: 40px;
  }
  .sgb-title {
    font-weight: bolder;
    font-size: 15px;
    font-family: "微软雅黑";
    position: absolute;
    width: 100px;
    top: -30px;
    left: -12px;
  }
  // .sgb-sign {
  //   width: 10px;
  //   height: 10px;
  //   font-size: 25px;
  //   position: absolute;
  //   color: white;
  //   left: 20px;
  //   bottom: 30px;
  // }

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
    top: 25px;
  }

  .sgb-bottom {
    font-family: "微软雅黑";
    position: absolute;
    bottom: 4px;
    left: 15px;
  }
}

.sgb-qiandao {
  // background: #826b00;
  color: white;
  background: rgba(0, 0, 0, 0.5);
  width: 70px;
  height: 70px;
  position: absolute;
  left: 10px;
  top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  .aaa {
    transform: rotate(320deg);
  }
}
</style>
