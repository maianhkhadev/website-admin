<template>
  <div class="com-row">
    <span class="com-cell">{{ index }}</span>
    <span class="com-cell">{{ data.title }}</span>
    <span class="com-cell">
      <time :datetime="data.updated_at">{{ data.updated_at }}</time>
    </span>
    <span class="com-cell">
      <a class="" v-bind:href="`/posts/${data.id}`">Show</a>
      <a class="" v-bind:href="`/posts/${data.id}/edit`">Edit</a>
    </span>
  </div>
</template>

<script>
  export default {
    props: {
      index: {
        type: Number,
        default: function () {
          return 0
        }
      },
      data: {
        type: Object,
        default: function () {
          return {}
        }
      }
    }
  }
</script>
