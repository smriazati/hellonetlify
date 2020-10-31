<template>
  <div class="container">
    <section class="data">

        <h1 v-if="tut.name">{{ tut.name}}</h1>
        <p v-if="tut.url"><a :href="tut.url" target="_blank">Tutorial</a></p>
        <p v-if="tut.repo"><a :href="tut.repo" target="_blank">Repo</a></p>
    </section>
    <main>
        {{ testQuery }}
    </main>
    
  </div>
</template>

<script>
import gql from "graphql-tag";
export default {
  apollo: {
    testQuery: {
      query: gql`
        query getVids {
          threeByThirteenProject {
            videoId
            videoUrl
            title
            img
          }
        }
      `,
      update(data) {
        return data.threeByThirteenProject;
      }
    }
  },
  data() {
    return {
        tut: {
            name: 'GraphQL with Hasura and Nuxt',
            url: 'https://www.netlify.com/blog/2020/10/26/graphql-with-hasura-and-nuxt/',
            repo: 'https://github.com/sdras/favegame'
        }
    }
  }
};
</script>

<style lang='scss'>


</style>