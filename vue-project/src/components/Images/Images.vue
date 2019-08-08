<template>
  <div class="images">
    <div class="images__items">
      <div v-for="image in images"
           :key="image.id"
           class="images__items__image"
           :style="{ boxShadow: shadowLayers(image) }"
      >
        <div v-if="image.bgImage" class="bgImage" :style="{backgroundImage: `url(${image.bgImage})`}"></div>
        <div v-else class="bgColor" :style="{backgroundColor: image.bgColor}"></div>

        <div class="image" :style="{
            backgroundImage: `url(${image.img})`,
            opacity: image.filter.opacity,
            filter: `
             blur(${image.filter.blur}px)
             contrast(${image.filter.contrast})
             brightness(${image.filter.brightness})
             saturate(${image.filter.saturate})
             `,
          }">
       </div>
      </div>

      <photo-upload @postImage="postImages" class="images__photo"></photo-upload>
    </div>
    </div>
</template>

<script>
  export default {
    name: 'Images',
    data() {
      return {
        images: [],
        imagesURL: 'http://localhost:3000/images',
      }
    },
    methods: {
      getImages(){
        this.$http.get(this.imagesURL)
          .then(response => response.json())
          .then(images => {this.images = images})
          .catch(error => console.log(error));
      },
      postImages(value){
        this.$http.post(this.imagesURL, value.detail[0]);
        this.images.push(value.detail[0]);
      },
      shadowLayers(image) {
        return `inset 0px 0px ${image.shadow.height}px rgba(0,0,0,${image.shadow.opacity})`;
      }
    },
    mounted(){
      this.getImages();
    }
  }
</script>

<style lang="scss" scoped>
  .images {
    margin: 70px 30px 100px;
    box-sizing: border-box;

    &__items {
      display: grid;
      grid-template-rows: 1fr 1fr 1fr;
      grid-template-columns: 1fr 1fr 1fr;
      grid-gap: 2vw;
      max-width: 1200px;
      margin: 0 auto;

      &__image {
        min-height: 200px;
        height: 250px;
        background-size: cover;
        border: 1px solid silver;
        position: relative;
        border-radius: 5px;
        margin: 10px;
        overflow: hidden;

        .bgColor, .bgImage {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-size: cover;
          z-index: -1;
        }

        .image {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 95%;
          height: 95%;
          transform: translate(-50%, -50%);
          background-size: cover;
          z-index: -1;
        }
      }
    }

    &__photo {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 10px;
    }
  }

  @media screen and (max-width: 900px) {
    .images {
      &__items {
        grid-template-rows: 1fr 1fr;
        grid-template-columns: 1fr 1fr;

        &__image {
          height: 230px;
        }
      }
    }
  }

  @media screen and (max-width: 500px) {
    .images {
      &__items {
        grid-template-rows: 1fr;
        grid-template-columns: 1fr;

        &__image {
          height: 220px;
        }
      }
    }
  }
</style>
