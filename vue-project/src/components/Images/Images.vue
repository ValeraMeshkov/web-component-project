<template>
  <div class="images">
    <div class="images__items">
      <div v-for="image in webComponents"
           class="images__items__image"
      >
        <photo-upload :image="JSON.stringify(image)"
                      @post="postImages"
                      @delete="deleteImage"
                      class="images__photo"
        ></photo-upload>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Images',
    data() {
      return {
        webComponents: [],
        imagesURL: 'http://localhost:3000/images',
      }
    },
    methods: {
      getImages(){
        this.$http.get(this.imagesURL)
          .then(response => response.json())
          .then(images => {
            //this.webComponents = [];
            if (images.length) {
              this.$nextTick(() => {
                this.webComponents = images;
                this.webComponents.push({});
              })
            } else {
              this.webComponents = [{}]
            }
          })
          .catch(error => console.log(error));
      },
      postImages(value){
        if (!this.searchWebComponentsId(value)){
          this.$http.post(this.imagesURL, value.detail[0])
            .then(this.getImages)
            .catch(error=> console.log(error))
        } else {
          this.$http.put(`${this.imagesURL}/${value.detail[0].id}`, value.detail[0])
            .then(this.getImages)
            .catch(error=> console.log(error))
        }
      },
      searchWebComponentsId(value) {
        return this.webComponents.some(obj => obj.id === value.detail[0].id);
      },
      deleteImage(value){
        this.webComponents.forEach((obj,index) => {
          if (obj.id === value.detail[0]){
            this.$http.delete(`${this.imagesURL}/${obj.id}`)
              .then(this.getImages)
              .catch(error => console.log(error));
          }
        })
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
      cursor: pointer;

      &__image {
        min-height: 200px;
        height: 250px;
        background-size: cover;
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
      height: 100%;
      position: relative;
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
