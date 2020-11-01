<template>
  <div class="layout-default">
    <header>
      <div class="container">
        <h1><nuxt-link to="/">Sarah Teaches Code / Art / Whatever</nuxt-link></h1>
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

<style lang="scss">
$spacer: 5px;

* {
  box-sizing: border-box;
  max-width: 100%;
  margin: 0;
  padding: 0;
}


html {
  font-size: $spacer*3;
}

body {
  font-family: 'Helvetica', Arial, sans-serif;
  letter-spacing: 0.01rem;
}

h1, h2, h3, h4 {
  text-transform: uppercase;
  font-weight: 400;
  letter-spacing: 0.1rem;
}

a {
  text-decoration: none;
  color: rgb(0,0,255);
  &:hover {
    color: rgb(48, 0, 222);
  }
}

.nuxt-link-exact-active {
  color: inherit;
  cursor: default;
  &:hover {
    color: inherit;
  }
}
.page-enter-active, .page-leave-active,
.layout-enter-active, .layout-leave-active {
  transition: opacity .5s
}

.page-enter, .page-leave-active
.layout-enter, .layout-leave-active {
  opacity: 0
}

.layout-default {
  display: flex;
  flex-direction: column;
  min-height: 100%;
  min-height: 100vh;
  justify-content: space-between;
  main {
    flex: 1;
  }
  .container {
    padding: $spacer*4;
  }
}


header {
  h1 {
    margin: 0;
  } 
}

main {
  background: rgb(195, 195, 227);
  color: rgb(36, 36, 36);
  h1, h2, h3, h4 {
    margin-bottom: $spacer*4;
  }

  p + p,
  p + ul,
  p + ol,
  ul + p,
  ul + ul {
    margin-top: $spacer*2;
  }

  p, ul, ol {
    max-width: 60ch;
    font-size: 1rem;
    line-height: 1.5rem;
  }

  ul, ol {
    list-style: none;
    > li {
      padding: $spacer 0;
      &:last-child {
        padding-bottom: $spacer;
      }
    }
  }

}

.index {
  &.container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
    .index-section {
      // border: 5px solid white;
      background: rgba(238, 231, 154, 0.286);
      padding: $spacer*4;
      & + .index-section {
        margin-left: $spacer*4;
      }
    }
    .welcome {
      flex: 0 0 15vw;
    }
  }
}

img.circle {
  clip-path: circle(50%);
  transition: 1s ease clip-path;
  &:hover {
    clip-path: circle(100%);
  }
}


</style>
