<template>
  <div class="app">
      <p clas="lead">
          Here's the parent message: <b>{{parentMessage}}</b>
      </p>
  </div>
</template>

<script>
    export default {
        props: ['parentMessage'],

        data() {
            return {
            }
        },

        ready() {
        }
    }
</script>