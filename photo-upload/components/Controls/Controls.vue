<template>
  <div class="buttons">
    <button @click="$emit('editImage')">Edit</button>
    <button @click="$emit('deleteImage')">Delete</button>
  </div>
</template>

<script>
  export default {
    name: 'Controls'
  }
</script>

<style lang="scss" scoped>
  .buttons {
    display: flex;
    justify-content: space-between;

    button {
      border: 1px solid #21fb92;
      border-radius: 5px;
      padding: 3px 10px;
      display: flex;
      justify-content: center;
      background-color: #fff;
      z-index: 3;
      cursor: pointer;
    }
  }
</style>

