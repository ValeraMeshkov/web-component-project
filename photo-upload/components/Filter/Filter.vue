<template>
  <div class="photo__filter">
    <input class="slider"
           :type="type"
           :min="values.min"
           :max="values.max"
           :step="values.step"
           v-model="currentValue"
    >
  </div>
</template>

<script>
  export default {
    name: 'FilterItem',
    props: {
      type: String,
      name: String,
      values: Object,
      initialValue: [Number, String]
  },
    data(){
      return {
        currentValue: this.initialValue
      }
    },
    watch: {
      currentValue(value){
        this.$emit('updateValue', {
          value: value,
          filterName: this.name,
          name: this.values.value
        });
      },
      initialValue(value){
        this.currentValue = value;
      }
    }
  }
</script>

<style lang="scss" scoped>
  .photo__filter {
    input[type=range] {
      -webkit-appearance: none;
      width: 120px;
      margin: 15px 0;
    }

    input[type=range]::-webkit-slider-runnable-track {
      width: 100%;
      height: 5px;
      cursor: pointer;
      background: #e2e2e2;
      border-radius: 1.3px
    }

    input[type=range]::-webkit-slider-thumb {
      height: 22px;
      width: 22px;
      border-radius: 5px;
      background: #21fb92;
      cursor: pointer;
      -webkit-appearance: none;
      margin-top: -8px;
    }

    input[type=number] {
      margin: 5px 0;
      border: 2px solid #21fb92;
      border-radius: 5px;
      padding: 5px 0 2px 5px;
    }
  }
</style>

