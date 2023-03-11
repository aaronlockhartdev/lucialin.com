<template>
  <div>
    <p id="bio">{{global.data.bio}}</p>
  </div>
</template>

<style scoped lang='sass'>
  #bio
    position: absolute
    top: 0
    left: 0
    width: 50vw

    margin: 10vh 8vw

    font-family: "Helvetica Neue", Roboto, sans-serif
    font-style: normal
    font-weight: 400
    font-size: 0.9rem
    letter-spacing: 0.125rem

    color: white
</style>

<script setup lang='ts'>
  const { $directus } = useNuxtApp()
  const { data: global } = await useAsyncData('global', () => {
    return $directus.items('global').readByQuery()
  })
</script>

<script lang='ts'>
  export default {
    mounted() {
      document.body.style.background = "rgba(0,0,0,0.4) url('/img/about-lg.png') no-repeat"
      document.body.style.backgroundBlendMode = "darken"
      document.body.style.backgroundPosition = "center top"
      document.body.style.backgroundSize = "cover"
    }
  }
</script>
