<template>
  <div class="container">
    <h2>Sketches</h2>
    <div class="description">
        <p>Use Strapi as the CMS. Content could be a link, an article, thoughts, or an image or collection of images. A video player too.</p>
    </div>
    <div v-if="error">
      {{ error }}
    </div>
    <div v-else class="posts-wrapper">
      <div v-for="item in blogPosts" :key="item.id" class="post">
          <h1 v-if="item.Title">{{ item.Title }}</h1>
          <div v-if="item.Images">
              <div v-for="item in item.Images" :key="item.id">
                  <img :src="api + item.formats.medium.url" alt="">
              </div>
          </div>
          <div v-if="item.Post">{{ item.Post }}</div>
      </div>
    </div>
  </div>

</template>

<script>

export default {
  name: 'App',
  data () {
    return {
      blogPosts: [],
      error: null,
      headers: {'Content-Type': 'application/json'}
    }
  },
  methods: {
    parseJSON: function (resp) {
      return (resp.json ? resp.json() : resp);
    },
    checkStatus: function (resp) {
      if (resp.status >= 200 && resp.status < 300) {
        return resp;
      }
      return this.parseJSON(resp).then((resp) => {
        throw resp;
      });
    }
  },
  computed: {
      api() {
          return this.$config.strapiApi;
      }
  },
  async mounted () {
    try {
      const response = await fetch(`${this.$config.strapiApi}/sarah-teaches-code-sketches`, {
        method: 'GET',
        headers: this.headers,
      }).then(this.checkStatus)
        .then(this.parseJSON);
        this.blogPosts = response
    } catch (error) {
      this.error = error
    }
  }
}
</script>

<style lang="scss">
.posts-wrapper {
    display: flex;
    align-items: flex-start;
}
.post {
    margin: 24px 0;
    background: black;
    color: white;
    padding: 24px;
    max-width: 80ch;
    & + .post {
        margin-left: 24px;
    }
}



</style>