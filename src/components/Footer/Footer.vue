<template>
  <footer class="footer">
    <div class="footer__inner container">
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

      <div class="footer__contacts">
        <h3 class="footer__contacts-title">Contact with us</h3>
        <div class="footer__contacts-info">
          <a class="footer__contacts-info-link" href="tel:+998712271716" @contextmenu="getHidden">Телефон: +998 (71) 227-17-16</a>
          <a class="footer__contacts-info-link" href="mailto:app-tgtu@мail.ru">Эл. почта: app-tgtu@мail.ru</a>
        </div>
      </div>
    </div>
  </footer>

  <div class="hiddenText" v-if="hidden">
    <div class="hiddenText__inner container">
      <p>Данный сайт был разработан студентом группы 164-22 факультета Электроники и Автоматики. Его имя - Данилов Данияр. Он потратил много времени, что бы сделать этот сайт красивым, переписывая код по несколько раз. Однако, он не справился бы без его девушки, которая вместе с ним сидела и придумывала дизайн почти всего сайта. Они вместе продбирали цвета, шрифты, макеты, примеры. Спасибо ей за это ♥</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hidden: false
    }
  },
  methods: {
    getHidden() {
      this.hidden = true
    }
  }
}
</script>
