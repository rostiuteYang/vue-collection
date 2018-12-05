<template>
  <div class="earn-ing">
    <div class="icb-del">
      <div class="icbd-img">
        <img :src="pro.img1" class="proimg">
      </div>
      <div class="icb-name">
        <div>{{pro.name}}</div>
        <div class="icb-daily">{{pro.daily}}</div>
      </div>

      <div class="icb-tele">
        <div>
          <img :src="pro.img2" class="peoimg1">
          <span class="icbt-num">{{pro.num}}</span>
        </div>
        <div class="pro-time">{{pro.time}}</div>
      </div>
      <div class="price">{{pro.lucre}}</div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    pro: {
      type: Object,
      default: null
    }
  }
};
</script>
<style lang="less" scoped>
.earn-ing {
  .icb-del {
    width: 100%;
    height: 80px;
    border: 1px solid white;
    border-bottom-color: #dfdfdf;
    display: flex;
    flex-flow: column;
    justify-content: center;
    .icbd-img {
      height: 60px;
      width: 60px;
      display: flex;
      align-items: center;
      justify-content: center;

      .proimg {
        height: 50px;
        width: 50px;
      }
    }
    .icb-name {
      display: flex;
      flex-flow: column;
      justify-content: space-between;
      align-items: center;
      // background: aqua;
      width: 180px;
      height: 50px;
      margin-left: 10px;
      margin-top: -55px;
      .icb-daily {
        color: grey;
      }
    }
    .icb-tele {
      display: flex;
      flex-flow: column;
      margin-left: 50px;
      margin-top: -50px;
      .peoimg1 {
        margin-left: 10px;
        margin-top: 1px;
        width: 20px;
        height: 20px;
      }
      .pro-time {
        color: grey;
        margin-left: -40px;
        margin-top: 7px;
      }
    }
    .price {
      position: absolute;
      height: 80px;
      width: 50px;
      right: 20px;
      color: red;
      font-size: 30px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}
</style>
