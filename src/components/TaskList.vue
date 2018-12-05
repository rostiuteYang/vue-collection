<template>
  <div class="task-list">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <div class="tl-body">
            <div class="tlb-title">
              <div>今日任务</div>
              <div class="tlb-num">1/4</div>
            </div>
            <div class="tlb-body" v-for="task in tasklist">
              <div class="tlb-left">
                <div class="tlb-time1">{{task.time1}}</div>
                <div class="tlb-time2">{{task.time2}}</div>
                <div class="tlb-pic">
                  <img :src="task.pic1" class="pic-size">
                </div>
              </div>
              <div class="tlb-right">
                <div class="tlbr-title">{{task.title}}</div>
                <div class="tlbr-content">{{task.content}}</div>
              </div>
            </div>
            <div class="tlb-botton">
              <img src="../assets/增加.png" class="pic-botton">
            </div>
          </div>
        </div>
        <div class="swiper-slide">2</div>
        <div class="swiper-slide">3</div>
        <div class="swiper-slide">4</div>
      </div>
      <!-- 如果需要分页器-->
      <div class="swiper-pagination"></div>
      <!-- 如果需要导航按钮 -->
      <!-- <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>-->
      <!-- 如果需要滚动条 -->
      <!-- <div class="swiper-scrollbar"></div> -->
    </div>
  </div>
</template>
<script>
import Swiper from "swiper";
export default {
  data() {
    return {
      tasklist: [
        {
          time1: "12:25",
          time2: "AM",
          pic1: require("../assets/中间小圆圈.png"),
          title: "Sport",
          content: "run for 1 hour"
        },
        {
          time1: "12:25",
          time2: "AM",
          pic1: require("../assets/中间小圆圈.png"),
          title: "Sport",
          content: "run for 1 hour"
        },
        {
          time1: "12:25",
          time2: "AM",
          pic1: require("../assets/中间小圆圈.png"),
          title: "Sport",
          content: "run for 1 hour"
        },
        {
          time1: "12:25",
          time2: "AM",
          pic1: require("../assets/中间小圆圈.png"),
          title: "Sport",
          content: "run for 1 hour"
        }
      ]
    };
  },
  mounted() {
    new Swiper(".swiper-container", {
      loop: true,
      // 如果需要分页器
      pagination: {
        el: ".swiper-pagination",
        type: "progressbar"
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      }
    });
  }
};
</script>
<style lang="less" scoped>
.swiper-pagination {
  background: #fce7ee;
}
.task-list {
  width: 100%;
  height: 650px;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  .swiper-container {
    width: 290px;
    height: 600px;
    display: flex;
    align-items: center;
    justify-content: center;

    .tl-body {
      width: 300px;
      height: 570px;
      background: white;
      .tlb-title {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 270px;
        height: 50px;
        //   background: aqua;
        margin-left: 20px;
        color: gray;
        .tlb-num {
          margin-right: 10px;
        }
      }
      .tlb-body {
        width: 270px;
        height: 60px;
        //   background: aqua;
        margin-left: 20px;
        margin-top: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        .tlb-left {
          display: flex;
          flex-flow: column;
          align-items: center;
          justify-content: center;
          width: 70px;
          height: 80px;
          // background: black;
          color: grey;
          .tlb-time1 {
            font-size: 15px;
          }
          .tlb-time2 {
            font-size: 10px;
            margin-top: 6px;
          }
          .tlb-pic {
            //   background: aqua;
            width: 10px;
            height: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-left: 80px;
            margin-top: -16px;
            .pic-size {
              width: 40px;
              height: 40px;
            }
          }
        }
        .tlb-right {
          width: 170px;
          height: 70px;
          display: flex;
          flex-flow: column;
          justify-content: center;
          align-items: flex-start;
          // background: aqua;
          margin-left: 50px;
          margin-top: -3px;
          border: 1px solid white;
          border-bottom-color: #f2f7fd;
          .tlbr-title {
            font-size: 20px;
            font-family: "微软雅黑";
          }
          .tlbr-content {
            font-size: 10px;
            color: #e8e8e8;
            padding-top: 10px;
          }
        }
      }
      .tlb-botton {
        display: flex;
        justify-content: center;
        margin-top: 150px;
        .pic-botton {
          width: 80px;
          height: 80px;
        }
      }
    }
  }
}
</style>
