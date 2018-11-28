<template>
  <div class="hello-world">
    <div class="top">
      <div class="out-1 flex flex-align-center flex-pack-center" id="signIn">
        <div class="out-2 flex flex-align-center flex-pack-center">
          <div class="signBtn" @click="click_daily_bonus">
            <strong id="sign-txt">{{daily_bonus_text}}</strong>
            <span>
              连续
              <em id="sign-count">{{daily_data}}</em>天
            </span>
          </div>
        </div>
      </div>
    </div>
    <div class="tips">今天已签到，获得1个红包</div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      daily_bonus_text: "签到",
      daily_data: "0"
    };
  },
  methods: {
    click_daily_bonus() {
      // alert("已经提交");
      this.daily_bonus_text = "已签到";
      this.daily_data = "1";
    }
  }
};
</script>


<style lang="less" scoped>
.top {
  width: 100%;
  height: 192px;
  background: #007aff;
  position: absolute;
  right: 2px;
  bottom: 778px;

  overflow: hidden;
  .flex {
    display: flex;
  }
  .flex-pack-center {
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
  }
  .flex-align-center {
    align-items: center;
  }
  .out-1 {
    width: 8rem;
    height: 8rem;
    border-radius: 100%;

    background: rgba(255, 255, 255, 0.4);
    margin: 1rem auto 0 auto;
    .out-2 {
      width: 7rem;
      height: 7rem;
      border-radius: 100%;
      -webkit-border-radius: 100%;
      background: #ffffff;
      margin: 0 auto;
      .signBtn {
        width: 6.2rem;
        height: 6.2rem;
        border-radius: 100%;
        -webkit-border-radius: 100%;
        border: 1px #7ebdff solid;
        strong {
          display: block;
          width: 85%;
          margin: 0 auto;
          text-align: center;
          color: #007aff;
          font-weight: 400;
          font-style: normal;
          font-variant: normal;
          height: 3.5rem;
          line-height: 4.5rem;
          font-weight: 600;
          border-bottom: 1px #eee solid;
          display: block;
          width: 85%;
          margin: 0 auto;
          text-align: center;
          color: #007aff;
        }
        span {
          height: 2.5rem;
          line-height: 2.5rem;
          font-size: 0.9rem;
          line-height: 2rem !important;
          display: block;
          width: 85%;
          margin: 0 auto;
          text-align: center;
          color: #007aff;
        }
        .sign-txt {
          height: 3.5rem;
          line-height: 4.5rem;
          font-weight: 600;
          border-bottom: 1px #eee solid;
        }
      }
    }
    .flex-pack-center {
      -webkit-box-pack: center;
      -webkit-justify-content: center;
      -ms-flex-pack: center;
      justify-content: center;
    }
    .flex-align-center {
      -webkit-box-align: center;
      -webkit-align-items: center;
      -ms-flex-align: center;
      align-items: center;
    }
  }
}

.tips {
  position: absolute;
  top: 158px;
  left: 872px;
  color: #fff;
  font-size: 14px;
}
</style>

