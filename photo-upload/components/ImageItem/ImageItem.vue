<template>
  <div class="img">
    <Controls class="img__controls"
              @editImage="$emit('editImage')"
              @deleteImage="$emit('deleteImage')"
    />
    <Layers :image="img"/>
  </div>
</template>

<script>
  import Layers from '../Layers/Layers';
  import Controls from '../Controls/Controls';

  export default {
    name: 'ImageItem',
    props: {
      img: Object
    },
    components: {
      Layers,
      Controls
    }
  }
</script>

<style lang="scss" scoped>
  .img {
    position: relative;
    height: 100%;

    &__controls {
      position: absolute;
      top: 5px;
      right: 5px;
      left: 5px;
    }
  }
</style>

