<template>
  <div class="photo__button">
    <input v-if="!hasImg"
           type="file"
           @change="addImage($event, imgName)"
           :class="{text: text}"
    >
    <button v-else @click="deleteImage(imgName)">Удалить {{name}}</button>
  </div>
</template>

<script>
  export default {
    props: {
      hasImg: Boolean,
      imgName: String,
      name: String,
      text: String
    },
    methods: {
      addImage(e, value) {
        let file = e.target.files[0];
        let filereader = new FileReader();
        filereader.readAsDataURL(file);
        filereader.onload = (e) => {
          this.$emit('getImage', {
            img: e.target.result,
            imgName: value
          })
        };
      },
      deleteImage(value) {
        this.$emit('deleteImage', value);
      }
    }
  }
</script>

<style lang="scss" scoped>
  .photo__button {
    input, button {
      border: 1px solid #21fb92;
      border-radius: 10px;
      width: 120px;
      height: 2.5em;
      position: relative;
      background-color: white;
    }

    input::after {
      content: 'Выбрать фото';
      position: absolute;
      top: 0;
      left: 0;
      background-color: white;
      width: 100%;
      height: 100%;
      z-index: 2;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
    }

    .text {
      &::after {
        content: 'Выбрать фон';
      }
    }
  }
</style>

