<template>
  <div id="app" class="wrapper">
      <Header class="wrapper__header"/>
      <Images class="wrapper__images"/>
      <Footer class="wrapper__footer"/>
    </div>
</template>

<script>
  import Header from './Header/Header';
  import Images from './Images/Images';
  import Footer from './Footer/Footer';

  export default {
    name: 'App',
    components: {
      Header,
      Images,
      Footer
    }
  }
</script>

<style lang="scss">
  .wrapper {
    min-height: 100%;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    text-align: center;
    display: grid;
    grid-template-rows: 1fr auto;
    grid-template-columns: 100%;

    &__header {
      position: fixed;
      top: 0;
      left: 0;
    }
    &__images {
      position: relative;
      margin: 70px auto;
    }
  }
</style>
