<template>
  <header>
    <nav>
      <div>
        <span><NuxtLink to="/">Home</NuxtLink></span>
        <span><NuxtLink to="/about">About</NuxtLink></span>
        <span><NuxtLink to="/media">Media</NuxtLink></span>
        <span><NuxtLink to="/posts">Posts</NuxtLink></span>
        <span><NuxtLink to="/contact">Contact</NuxtLink></span>
      </div>
    </nav>
  </header>
  <NuxtPage/>
</template>

<style lang="sass">
  nav
    position: fixed
    top: 0

    user-select: none

    div
      width: 50vw
      padding: 2rem 2vw

      display: flex
      justify-content: space-evenly

    a
      text-decoration: none

      font-family: "Helvetica Neue", Roboto, sans-serif
      font-style: normal
      font-weight: 400
      font-size: 0.9rem
      letter-spacing: 0.125rem

      color: gray

    a.router-link-exact-active
      color: white
    
</style>
