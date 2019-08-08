<template>
  <div class="photo">
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
        <li v-for="filter in imageFilters">
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
        <li v-for="filter in moveFilters">
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
        <li v-for="filter in shadowFilters">
          <span>{{filter.name}}</span>
          <FilterItem type="range"
                      name="shadow"
                      :values="filter"
                      :initialValue="imageFull.shadow[filter.value]"
                      @updateValue="updateValue"
          />
        </li>
      </ul>

      <button v-if="img" class="photo__filters__save" @click="saveImage">Сохранить картинку</button>
    </div>
  </div>
</template>

<script>
  import Layers from './components/Layers/Layers';
  import Button from './components/Button/Button';
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
      positionX: 0,
      positionY: 0
    }
  };

  export default {
    name: 'NewImage',
    components: {
      Layers,
      Button,
      FilterItem
    },
    data() {
      return {
        img: false,
        bgImage: false,
        imageFull: JSON.parse(JSON.stringify(defaultImageSettings)),
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
      deleteImage(value){
        this.imageFull[value] = '';
        this[value] = false;
      },
      saveImage() {
        this.$emit('postImage', this.imageFull);
        this.clearImageFull();
      },
      clearImageFull(){
        this.imageFull = JSON.parse(JSON.stringify(defaultImageSettings));
      },
      getFilterObj(name, value, min, max, step) {
        return { name, value, min, max, step };
      },
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
        this.getFilterObj('Перемещение по x', 'positionX', '-50', '50', '1'),
        this.getFilterObj('Перемещение по y', 'positionY', '-50', '50', '1')
      );
    },
  }
</script>

<style lang="scss" scoped>
  .photo {
    width: 100%;
    min-width: 300px;
    max-width: 320px;
    min-height: 400px;
    max-height: 600px;
    height: 100%;
    position: relative;
    border-radius: 5px;
    border: 1px solid silver;
    overflow: hidden;

    &__layers {
      width: 100%;
      min-height: 200px;
      max-height: 400px;
      height: 16em;
      position: relative;
      overflow: hidden;
      display: flex;
      justify-content: center;
      align-items: center;
    }

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
</style>

