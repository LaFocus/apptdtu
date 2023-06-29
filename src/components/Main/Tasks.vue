<template>
  <div class="tasks">
    <div class="tasks__inner container">
      <h2 class="tasks-title">Задачи кафедры</h2>
      <div class="tasks__cards">
        <div class="tasks__cards-item" v-for="(item, i) in tasks">
          {{ item.task }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { tasks } from "@/statick.js";

export default {
  data() {
    return {
      tasks: tasks,
    };
  },
};
</script>
