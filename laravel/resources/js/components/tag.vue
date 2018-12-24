<template>
  <input type="text" ref="input" value="">
</template>

<script>
  if (process.browser) {
    require('selectize/dist/js/selectize.js')
    require('selectize/dist/css/selectize.css')
    require('selectize/dist/css/selectize.default.css')
  }

  export default {
    mounted() {
      let self = this

      $(self.$refs.input).selectize({
        delimiter: ',',
        persist: false,
        create: function(input) {
          return {
            value: input,
            text: input
          }
        }
      });
    }
  }
</script>
