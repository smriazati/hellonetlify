<template>
  <div>
    <header>
      <h1><nuxt-link to="/">Sarah Teaches Code Art</nuxt-link></h1>
    </header>
    <nuxt />
  </div>
</template>

<style lang="scss">

* {
  box-sizing: border-box;
  max-width: 100%;
}

a {
  text-decoration: none;
}
.nuxt-link-exact-active {
  color: inherit;
  cursor: default;
}
.layout-enter-active, .layout-leave-active {
  transition: opacity .5s
}
.layout-enter, .layout-leave-active {
  opacity: 0
}
</style>
