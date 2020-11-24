<template>
  <div class="container">
    <section v-if="tut" class="tut">
      <h1 v-if="tut.name">{{ tut.name }}</h1>
      <p v-if="tut.url"><a :href="tut.url" target="_blank">Tutorial</a></p>
      <p v-if="tut.repo"><a :href="tut.repo" target="_blank">Repo</a></p>
    </section>

  </div>
</template>

<script>
export default {
  data() {
    return {
      tut: {
        name: "",
        url: "",
        date: "",
        repo: "",
      }
    };
  },
};
</script>

<style lang='scss'>
</style>