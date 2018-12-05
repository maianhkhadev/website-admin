<template>
  <div class="com-album">
    <div class="wrapper">
      <div style="background-image: url('https://lorempixel.com/640/480/?86411')"></div>
      <div style="background-image: url('https://lorempixel.com/640/480/?86411')"></div>
      <div style="background-image: url('https://lorempixel.com/640/480/?86411')"></div>
      <div style="background-image: url('https://lorempixel.com/640/480/?86411')"></div>
    </div>

    <h5 class="com-title">{{ data.name }}</h5>
  </div>
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
