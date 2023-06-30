<template>
  <Header />
  <router-view />
  <Footer />
</template>

<script>
import Header from "@/components/Header/Header.vue";
import Footer from "@/components/Footer/Footer.vue";

export default {
  name: 'App',
  components: {
    Header,
    Footer,
  },
  mounted() {
    this.$router.push('/')
  },
}
</script>

<style lang="scss" >

</style>