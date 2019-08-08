<template>
  <div class="header">
    <h3>Header</h3>
  </div>
</template>

<script>
  export default {
    name: 'Header'
  }
</script>

<style lang="scss" scoped>
  .header {
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #a06bd6;
    color: #fff;
    font-family: "Comic Sans MS";
    border-bottom: 1px solid black;
    z-index: 10;
  }
</style>
