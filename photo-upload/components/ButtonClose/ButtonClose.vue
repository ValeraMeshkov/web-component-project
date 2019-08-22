<template>
  <div>
    <button class="close" @click="closePhotoUpload()">x</button>
  </div>
</template>

<script>
  export default {
    methods: {
      closePhotoUpload() {
        this.$emit('closePhotoUpload');
      }
    }
  }
</script>

<style lang="scss" scoped>
  .close {
    cursor: pointer;
    z-index: 10;
    width: 22px;
    height: 22px;
    border-radius: 20px;
    border: 0;
    font-size: 17px;
    font-weight: 600;
    color: red;
    padding: 0;
    display: flex;
    justify-content: center;

    &:hover {
      color: #fff;
      background-color: red;
    }
  }
</style>

