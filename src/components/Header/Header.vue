<template>
  <header class="header">
    <div class="container header__inner">
      <div class="header__top">
        <a href="https://tdtu.uz/" class="header__top-link" target="_blank">TDTU.UZ</a>
        <div class="header__top-info">
          <a href="tel:+998712468242" class="header__top-tel">Тел. доверия: +998 71 246-82-42,</a>
          <a href="tel:+998712469236" class="header__top-tel">+998 71 246-92-36</a>
          <a href="mailto:" class="header__top-mail">Webmail.tdtu.uz</a>
        </div>
        <a href="tel:+998712468242, +998712469236" class="header__top-info-phone">
          Позвонить
        </a>
      </div>
    </div>

  </header>
  <div class="intro">
  <div class="intro__inner container">
    <router-link class="intro__nav-item" to="/">
      <div class="intro__logo">
        <img
          src="@/assets/images/tdtuLogo.svg"
          alt=""
          class="intro__logo-img"
        />
        <h1 class="intro__logo-title">
          Кафедра Автоматизации Производственных Процессов
          <span class="intro__logo-span"
            >Tashkent State Technical University</span
          >
        </h1>
      </div>
    </router-link>

    <nav class="intro__nav" :style="style">
      
      <router-link class="intro__nav-item" to="/"
      >Главная</router-link
      >
      <router-link class="intro__nav-item" to="/baccalaureate"
      >Бакалавриат</router-link
      >
      <router-link class="intro__nav-item" to="/magistracy"
      >Магистратура</router-link
      >
      <router-link class="intro__nav-item" to="/process"
        >Учебный процесс</router-link
      >

      <button class="intro__nav-btn" @click="closeStyle">
        <img src="@/assets/images/close.png" alt="">
      </button>
    </nav>
    <button class="intro-btn" @click="showNav">
      <img src="@/assets/images/menu.png" alt="">
    </button>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      hidden: true,
      shownStyle: 'left: 0;',
      hiddenStyle: 'left: 100%;',
      display: ' display: flex',
      style: ''
    }
  },
  computed: {

  },
  methods: {
    showNav() {
      this.style = this.shownStyle + this.display
    },
    closeStyle() {
      this.style = this.hiddenStyle
    }
  }
}
</script>

<style lang="scss">

</style>