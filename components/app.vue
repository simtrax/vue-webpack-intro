<style>
    body {
        font-family: 'Raleway', sans-serif;
    }
</style>

<template>
  <div class="app">
      <div class="container">
        <h1>{{message}}</h1>

        <child-component :parent-message="message"></child-component>

      </div>
  </div>
</template>

<script>
    export default {
        data() {
            return {
                message: 'The app component!'
            }
        },

        ready() {
        }
    }
</script>