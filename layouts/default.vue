<template>
  <div class="layout-default">
    <header>
      <div class="container">
        <div class="site-title">
          <h1><nuxt-link to="/">labs</nuxt-link></h1>
        </div>
        <div class="site-nav">
          <SiteNav />
        </div>
      </div>
    </header>
    <main>
      <nuxt />
    </main>
    <footer>
      <div class="container">
        <p><a href="https://www.sarahriazati.com" target="_blank">sarahriazati.com</a></p>
      </div>
    </footer>
  </div>
</template>

<script>
import SiteNav from '@/components/SiteNav.vue'
export default {
  components: {
    SiteNav
  }
}
</script>
<style lang="scss">
$spacer: 10px;
$transition: .3s ease all;

* {
  max-width: 100%;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  transition: $transition;
}

html {
  font-size: 18px;
}

body {
  background: rgb(182, 182, 181);
  font-family: Helvetica, Arial, sans-serif;
  text-transform: lowercase;
  letter-spacing: 0.03em;
}

h1, h2, h3, h4 {
  font-weight: 400;
}

a {
  color: inherit;
  background: transparent;
  text-decoration: none;
  &:hover {
    background: rgb(16, 88, 101);
    color: rgb(255,255,255);
  }
}

.layout-default {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  header, footer, main {
    padding: $spacer;
  }
  header, footer {
    background: rgb(255,255,255);
  }
  main {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }
  ul {
    > * {
      margin: $spacer 0;
      &:before {
        content: '-';
        padding-right: $spacer/2;
      }
    }
  }
}
</style>
