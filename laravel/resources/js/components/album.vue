<template>
  <a class="com-album" v-bind:href="`/albums/${data.id}`">
    <div class="wrapper">
      <div style="background-image: url('https://lorempixel.com/640/480/?86411')"></div>
      <div style="background-image: url('https://lorempixel.com/640/480/?86411')"></div>
      <div style="background-image: url('https://lorempixel.com/640/480/?86411')"></div>
      <div style="background-image: url('https://lorempixel.com/640/480/?86411')"></div>
    </div>

    <h5 class="com-title">{{ data.name }}</h5>
  </a>
</template>

<script>
  export default {
    props: {
      data: {
        type: Object,
        default: function () {
          return {}
        }
      }
    }
  }
</script>
