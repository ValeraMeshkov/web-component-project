<template>
  <div class="photo__layers" :style="{boxShadow: shadowLayers}">
    <div v-if="image.bgImage"
         class="photo__layers__bgImage"
         :style="{backgroundImage: `url(${image.bgImage})`}"
    ></div>
    <div v-else class="photo__layers__bgColor" :style="{backgroundColor: image.bgColor}"></div>

    <div class="photo__layers__image"
         :style="{
             backgroundImage: `url(${image.img})`,
             opacity: image.filter.opacity,
             minWidth: `${image.filter.sizeImg}%`,
             minHeight: `${image.filter.sizeImg}%`,
             width: `${image.filter.sizeImg}%`,
             height: `${image.filter.sizeImg}%`,
             left: `${image.move.positionX}%`,
             top: `${image.move.positionY}%`,
             filter: `
               blur(${image.filter.blur}px)
               contrast(${image.filter.contrast})
               brightness(${image.filter.brightness})
               saturate(${image.filter.saturate})
               `,
             }"
    ></div>
  </div>
</template>

<script>
  export default {
    name: 'Layers',
    props: {
      image: Object
    },
    computed: {
      shadowLayers() {
        let sh = this.image.shadow;
        return `inset 0px 0px ${sh.height}px rgba(0,0,0,${sh.opacity})`;
      }
    }
  }
</script>

<style lang="scss" scoped>
  .photo__layers {
      width: 100%;
      min-height: 200px;
      max-height: 600px;
      height: 100%;
      position: relative;
      overflow: hidden;
      display: flex;
      justify-content: center;
      align-items: center;

    &__image, &__bgImage, &__bgColor {
      position: absolute;
      width: 100%;
      height: 100%;
      z-index: -2;
    }

    &__image {
      position: absolute;
      transform: translate(-50%, -50%);
      z-index: -1;
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
    }

    &__bgImage {
      background-size: cover;
    }
  }
</style>

