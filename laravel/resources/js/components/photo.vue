<template>
  <figure class="com-photo">
    <img :src="data.url" alt="">

    <div class="actions">
    </div>
  </figure>
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
