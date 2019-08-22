<template>
  <div class="upload__photo">
    <button class="upload__photo__button"
            v-if="!uploadPhoto"
            @click="clickUploadPhoto"
    >Добавить фотo</button>

    <div v-if="uploadPhoto && !showReadyImg" class="upload__photo__wrapper">
      <div class="photo">
      <ButtonClose class="close" @closePhotoUpload="closePhotoUpload"/>

      <div class="photo__layers">
        <Layers :image="imageFull"/>
      </div>

      <div class="photo__buttons">
        <Button :hasImg="img"
                imgName="img"
                name="фото"
                @getImage="getImage"
                @deleteImage="deleteImage"
        />
        <Button :hasImg="bgImage"
                imgName="bgImage"
                name="фон"
                text="text"
                @getImage="getImage"
                @deleteImage="deleteImage"
        />
      </div>

      <div class="photo__filters">
        <h4>{{img ? 'Фильтры картинки' : 'Добавьте фото!!!'}} </h4>
        <ul v-if="img" class="photo__filters__image">
          <li v-for="filter in imageFilters" :key="filter.id">
            <span>{{filter.name}}</span>
            <FilterItem type="range"
                        name="filter"
                        :values="filter"
                        :initialValue="imageFull.filter[filter.value]"
                        @updateValue="updateValue"
            />
          </li>
        </ul>

        <h4 v-if="img">Перемещение картинки</h4>
        <ul v-if="img" class="photo__filters__image move">
          <li v-for="filter in moveFilters" :key="filter.id">
            <span>{{filter.name}}</span>
            <div>
              <FilterItem type="range"
                          name="move"
                          :values="filter"
                          :initialValue="imageFull.move[filter.value]"
                          @updateValue="updateValue"
              />
              <FilterItem class="move__item"
                          type="number"
                          name="move"
                          :values="filter"
                          :initialValue="imageFull.move[filter.value]"
                          @updateValue="updateValue"
              />
            </div>
          </li>
        </ul>

        <h4>Изменить цвет фона</h4>
        <ul class="photo__filters__image">

          <li class="color">
            <span>Цвет фона</span>
            <input type="color"
                   v-model="imageFull.bgColor"
                   @change="addBgColor($event)"
                   :style="{backgroundColor: imageFull.bgColor}"
            >
          </li>
        </ul>

        <h4>Изменить тень</h4>
        <ul class="photo__filters__image">
          <li v-for="filter in shadowFilters" :key="filter.id">
            <span>{{filter.name}}</span>
            <FilterItem type="range"
                        name="shadow"
                        :values="filter"
                        :initialValue="imageFull.shadow[filter.value]"
                        @updateValue="updateValue"
            />
          </li>
        </ul>
        <button v-if="img"
                class="photo__filters__save"
                @click="saveImage(imageFull.id)"
        >Сохранить картинку</button>
      </div>
    </div>
    </div>
    <div v-if="showReadyImg" class="image">
      <ImageItem :img="imageFull" @editImage="editImage" @deleteImage="deleteImageItem"/>
    </div>
  </div>
</template>

<script>
  import ImageItem from './components/ImageItem/ImageItem';
  import Layers from './components/Layers/Layers';
  import Button from './components/Button/Button';
  import ButtonClose from './components/ButtonClose/ButtonClose';
  import FilterItem from './components/Filter/Filter';

  const defaultImageSettings = {
    id: '',
    bgImage: '',
    bgColor: 'rgb(191, 128, 255)',
    img: '',
    shadow: {
      height: 100,
      opacity: 0.35,
    },
    filter: {
      opacity: 1,
      blur: 0,
      contrast: 1,
      brightness: 1,
      saturate: 1,
      sizeImg: 100
    },
    move: {
      positionX: 50,
      positionY: 50
    }
  };

  export default {
    name: 'NewImage',
    props: {
      image: {
        type: String,
        default: JSON.stringify({})
      },
    },
    components: {
      ImageItem,
      Layers,
      Button,
      ButtonClose,
      FilterItem
    },
    data() {
      return {
        uploadPhoto: false,
        img: false,
        bgImage: false,
        imageFull: JSON.parse(JSON.stringify(defaultImageSettings)),
        showReadyImg: false,
        imageFilters: [],
        moveFilters: [],
        shadowFilters: []
      }
    },
    methods: {
      updateValue({name, filterName, value}){
        this.imageFull[filterName][name] = value;
      },
      addBgColor(e) {
        this.bgColor = e.target.value;
      },
      getImage(value){
        this.imageFull[value.imgName] = value.img;
        this[value.imgName] = true;
      },
      deleteImage(value) {
        this.imageFull[value] = '';
        this[value] = false;
      },
      deleteImageItem(){
        this.$emit('delete', this.imageFull.id);
        this.clearImageFull();
      },
      clickUploadPhoto(){
        this.imageFull = this.imageFull.id
          ? this.imageFull
          : JSON.parse(JSON.stringify(defaultImageSettings));
        this.uploadPhoto = true;
      },
      saveImage(id) {
        this.imageFull.id = id === '' ? Date.now() : id;
        this.showReadyImg = true;
        this.$emit('post', this.imageFull)
      },
      clearImageFull(){
        this.img = this.bgImage = false;
        this.uploadPhoto = false;
        this.showReadyImg = false;
        this.imageFull = JSON.parse(JSON.stringify(defaultImageSettings));
      },
      getFilterObj(name, value, min, max, step) {
        return { name, value, min, max, step };
      },
      closePhotoUpload() {
        if (!this.imageFull.img){
          this.deleteImageItem();
          this.showReadyImg = false;
          this.uploadPhoto = false;
        } else {
          this.showReadyImg = true;
          this.uploadPhoto = true;
        }
      },
      editImage(){
        this.uploadPhoto = true;
        this.showReadyImg = false;
      },
      getFullImage(){
        this.imageFull = JSON.parse(this.image);
        if (!this.imageFull.img){
          this.showReadyImg = false;
          this.uploadPhoto = false;
        } else {
          this.img = true;
          this.bgImage = !this.imageFull.bgImage === '';
          this.showReadyImg = true;
          this.uploadPhoto = true;
        }
      }
    },
    mounted() {
      this.imageFilters.push(
        this.getFilterObj('Прозрачность', 'opacity', '0.1', '1', '0.01'),
        this.getFilterObj('Размытие', 'blur', '0', '5', '1'),
        this.getFilterObj('Контраст', 'contrast', '1', '3', '0.1'),
        this.getFilterObj('Яркость', 'brightness', '1', '5', '0.1'),
        this.getFilterObj('Насыщенность', 'saturate', '0', '10', '0.1'),
        this.getFilterObj('Масштаб', 'sizeImg', '20', '300', '1')
      );
      this.shadowFilters.push(
        this.getFilterObj('Высота:', 'height', '0', '300', '1'),
        this.getFilterObj('Прозрачность:', 'opacity', '0', '1', '0.01')
      );
      this.moveFilters.push(
        this.getFilterObj('Перемещение по x', 'positionX', '0', '100', '1'),
        this.getFilterObj('Перемещение по y', 'positionY', '0', '100', '1')
      );
      this.getFullImage();
    },
    watch: {
      image() {
        this.getFullImage();
      }
    }
  }
</script>

<style lang="scss" scoped>

  .upload__photo {
    width: 100%;
    height: 100%;
  }

  .upload__photo__wrapper {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: #fff;
    z-index: 30;
  }

  .upload__photo__button {
    border: 2px solid #21fb92;
    width: 100px;
    height: 100px;
    background-color: #fff;
    border-radius: 10px;
    margin: 10px;
    cursor: pointer;
  }

  .close {
    position: fixed;
    top: 5px;
    right: 5px;
  }

  .photo {
    width: 100%;
    min-width: 300px;
    max-width: 320px;
    min-height: 400px;
    max-height: 550px;
    height: 100%;
    top: 50%;
    left: 50%;
    overflow: hidden;
    position: fixed;
    transform: translate(-50%, -50%);
    border-radius: 5px;
    border: 1px solid silver;
    background-color: #fff;
    box-shadow: 0 0 26px rgba(0, 0, 0, 0.5);
    z-index: 20;

   &__buttons {
      height: 3em;
      padding: 5px;
      box-sizing: border-box;
      display: flex;
      justify-content: space-around;
      align-items: center;
    }

    &__filters {
      position: relative;
      height: 40em;
      max-height: 300px;
      overflow-y: scroll;
      margin: 0;
      font-family: "Comic Sans MS";
      text-align: center;
      padding: 0;

      &__image {
        padding: 0 15px;
        margin: 0;

        li {
          display: flex;
          padding: 0;
          justify-content: space-between;
          align-items: center;
        }

        .color > input {
          margin-right: -2px;
          width: 120px;
          height: 20px;
          padding: 5px 60px 6px;
          border: 2px solid #21fb92;
          cursor: pointer;
          box-sizing: border-box;
          border-radius: 20px;
        }
      }

      h4 {
        margin: 10px auto 5px;
      }

      .move {
        li {
          display: flex;
          flex-direction: column;

          div {
            display: flex;
            justify-content: space-between;
            width: 100%;

            div {
              width: auto;
            }
          }
        }
      }

      &__save {
        background-color: #fff;
        border: 1px solid silver;
        margin: 10px 10px 10px;
        height: 30px;
        width: 60%;
        border-radius: 10px;
      }
    }
  }

  .image {
    height: 100%;
  }
</style>

