<template>
  <div class="staff">
    <div class="container staff__inner">
      <h2 class="staff-title">Профессорско-преподавательский состав</h2>
      <div class="staff__item">
        <img
          src="@/assets/images/nophoto.png"
          class="staff__item-img"
          alt=""
        />
        <div class="staff__item__info">
          <p class="staff__item__info-text">Юсупбeкoв Aзизбeк Нoдирбeкoвич</p>
          <p class="staff__item__info-text">Должность: Заведующий кафедрой</p>
          <p class="staff__item__info-text">
            Ученая степень: Доктор технических наук, профессор
          </p>
          <p class="staff__item__info-text">
            Время приема: Каждый день с 14:00 до 16:00
          </p>
          <p class="staff__item__info-text">Телефон: +998 (71) 227-17-16</p>
          <p class="staff__item__info-text">Эл. почта: app-tgtu@мail.ru</p>
        </div>
      </div>
      <swiper
        :slides-per-view="4"
        :space-between="20"
        :navigation="true"
        :modules="modules"
      >
        <swiper-slide v-for="(item, i) in staff" class="staff__items">
          <img
            src="@/assets/images/nophoto.png"
            alt=""
            class="staff__items-img"
          />
          <p class="staff__items-name">{{ item.name }}</p>
          <p class="staff__items-position">{{ item.position }}</p>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
import { staff } from "@/statick";
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
      staff: staff,
      modules: [Navigation],
    };
  },
};

</script>
