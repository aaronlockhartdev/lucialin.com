<template>
  <div>
    <div id='title'>
      <h1>Lucia Lin</h1>
      <h2>Violinist</h2>
    </div>
    <NuxtLink to='/about' id='nav-arrow'>
      <Arrow />
    </NuxtLink>
  </div>
</template>

<style lang='sass'>
  body
    background: rgba(0,0,0,0.4) url('~/assets/img/home-lg.jpg') no-repeat
    background-blend-mode: darken
    background-position: center top
    background-size: cover

  #title
    position: absolute
    top: 40vh
    left: 12vw

    display: flex
    flex-direction: column
    align-items: flex-start

    user-select: none

    h1
      margin: 0

      font-family: "Baskerville Libre", serif
      font-style: normal
      font-weight: 400
      font-size: 5rem
      letter-spacing: 0.8rem

      color: white

    h2
      margin: 0

      text-transform: uppercase

      font-family: "Helvetica Neue", Robot, sans-serif
      font-style: normal
      font-weight: 400
      font-size: 1rem
      letter-spacing: 0.3rem

      color: white

  #nav-arrow
    position: absolute
    top: 90vh
    left: 50vw

</style>

