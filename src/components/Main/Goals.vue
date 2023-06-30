<template>
  <div class="goals">
    <div class="goals__inner container">
      <h2 class="goals-title">Цели кафедры</h2>
      <div class="goals__cards">
        <div class="goals__cards__item" v-for="(item, i) in goals">
          {{ item.goal }}
        </div>
      </div>
      <img class="goals-img" src="@/assets/images/allfamily.jpg" alt="">
    </div>
  </div>
</template>

<script>
import { goals } from "@/statick";
export default {
  data() {
    return {
      goals: goals,
    };
  },
};
</script>
