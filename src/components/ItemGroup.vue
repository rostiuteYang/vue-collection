<template>
  <div class="item-group">
    <div class="item-title">提现</div>
    <!-- <div class="it-wrap"></div> -->
    <div class="it-color">
      <div class="item-top">
        <div class="item-top-title">本周完成</div>
        <div class="item-top-body">
          <div class="item-amount">
            <div class="item-name">在线课时</div>
            <div class="item-number">
              <strong>26</strong>
            </div>
          </div>
          <div class="item-amount">
            <div class="item-name">好评率</div>
            <div class="item-number">89.5%</div>
          </div>
          <div class="item-amount">
            <div class="item-name">本周工资</div>
            <div class="item-number">1263</div>
          </div>
        </div>
      </div>
      <div class="item-mid1">
        <div class="item-mid-title">
          <span class="mid-style">可提现余额</span>
        </div>
        <div class="item-mid-body">¥1302.00</div>
        <div class="item-mid2">提现</div>
      </div>
      <div class="item-bottom">
        <div class="it-top">提现记录</div>
        <div class="it-title font-size">
          <div class="name1">时间</div>
          <div class="name2">金额</div>
          <div class="name3">状态</div>
        </div>
        <div v-for="user in userList" class="it-msg">
          <div class="it-data">{{user.data}}</div>
          <div class="it-time">{{user.time}}</div>
          <div class="it-money">¥{{user.money}}</div>
          <div class="it-card">{{user.card}}</div>
          <div class="it-state">成功</div>
        </div>
        <br>
        <br>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      userList: [
        {
          data: "2016/08/16",
          money: "602.00",
          time: "12:53",
          card: "我的招行卡"
        },
        {
          data: "2016/08/12",
          money: "1031.00",
          time: "13:56",
          card: "农业银行卡"
        },
        {
          data: "2016/07/25",
          money: "563.00"
        }
      ]
    };
  }
};
</script>
<style lang="less" scoped>
.item-group {
  width: 100%;
  height: 100%;
  .it-color {
    background: #f5f5f5;
    .item-title {
      width: 100%;
      height: 30px;
      font-size: 20px;
    }

    .item-top {
      height: 160px;

      margin-top: 10px;
      border: 1px solid white;
      border-top-color: gainsboro;
      font-family: "微软雅黑";
      .item-top-title {
        width: 100%;
        height: 30px;
        margin-top: 20px;
      }
      .item-top-body {
        margin-left: 23px;
        height: 300px;
        display: flex;
        flex-flow: row;
        .item-amount {
          width: 100px;
          height: 100px;
          // background: aqua;

          position: relative;
          .item-name {
            margin-top: 20px;
          }
          .item-number {
            font-weight: bold;
            margin-top: 10px;
            font-size: 24px;
          }
        }
      }
    }
    .item-mid1 {
      height: 180px;
      width: 100%;
      // margin-top: 10px;
      background: #4cda63;
      border-top-left-radius: 20px;
      border-top-right-radius: 20px;
      font-family: "微软雅黑";
      // box-shadow: 2px 0px 2px #888888;
      .item-mid-title {
        font-size: 16px;
        color: white;
        padding-top: 20px;
        font-family: "微软雅黑";
      }
      .item-mid-body {
        font-size: 35px;
        color: white;
        padding-top: 15px;
      }
      .item-mid2 {
        border: 1px solid #4cda63;
        border-top-color: #46d25e;
        background: #4bd462;
        color: white;
        font-size: 20px;
        margin-top: 20px;
        padding-top: 10px;
      }
    }
    // .it-wrap {
    //   width: calc(100vw - 20px);
    //   height: 400px;
    //   background: red;
    // }
    .item-bottom {
      width: 100%;
      background: white;
      height: 250px;
      .it-top {
        font-family: "微软雅黑";
        padding-top: 15px;
        font-size: 18px;
      }
      .it-title {
        display: flex;
        flex-flow: row;
        width: 100%;
        margin-top: 15px;
        // background: aqua;
        height: 35px;
        border: 1px solid #fffafa;
        border-left-color: white;
        border-right-color: white;
        .name1 {
          color: gray;
          width: 32px;
          position: absolute;
          left: 15px;
        }
        .name2 {
          color: gray;
          width: 100px;
          right: 155px;
          position: absolute;
        }
        .name3 {
          color: gray;
          width: 100px;
          position: absolute;
          left: 290px;
        }
      }
      .it-msg {
        width: 100%;
        height: 76px;
        top: 10px;
        position: relative;
        .it-data {
          position: absolute;
          // font-weight: 500;
          left: 5px;
          top: 10px;
        }
        .it-time {
          margin-top: 5px;
          position: absolute;
          left: 5px;
          top: 30px;
          color: gray;
        }
        .it-money {
          position: absolute;
          left: 135px;
          top: 10px;
          font-weight: 600;
        }
        .it-card {
          margin-top: 5px;
          position: absolute;
          left: 135px;
          top: 30px;
          color: gray;
        }
        .it-state {
          color: #00aa00;
          position: absolute;
          left: 320px;
          top: 10px;
        }
      }
    }
  }
}

.font-size {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
