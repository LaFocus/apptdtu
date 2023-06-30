<template>
  <Staff />
  <About />
  <Goals />
  <Tasks />
  <Connections />
</template>

<script>

import Staff from "@/components/Main/Staff.vue";
import Goals from "@/components/Main/Goals.vue";
import Tasks from "@/components/Main/Tasks.vue";
import About from "@/components/Main/About.vue";
import Connections from "@/components/Main/Connections.vue";

export default {
  components: {
    Staff,
    Goals,
    Tasks,
    About,
    Connections,
  },
};

</script>

<style lang="scss"></style>
