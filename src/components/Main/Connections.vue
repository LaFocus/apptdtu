<template>
  <div class="connections">
    <div class="connections__inner container">
      <h2 class="connections-title">Международные связи кафедры</h2>
      <swiper
        :slides-per-view="4"
        :space-between="20"
        :navigation="true"
        :modules="modules"
        :breakpoints="swiperOptions.breakpoints"

      >
        <swiper-slide v-for="(item, i) in connections" class="connections__item">
          <div class="connections__item-img">
            <img :src="item.img" alt="" />
          </div>
          <div class="connections__item-text">
            <p>{{ item.name }}</p>
          </div>
        </swiper-slide>
      </swiper>
    </div>
    </div>
</template>

<script>
import { connections } from "@/statick";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      connections: connections,
      modules: [Navigation],
      swiperOptions: {
        breakpoints: {
          1920: {
            slidesPerView: 5
          },
          1140: {
            slidesPerView: 4
          },
          780: {
            slidesPerView: 3
          },
          460: {
            slidesPerView: 2
          },
          320: {
            slidesPerView: 1
          }
        },
      },
    };
  },
};
</script>
