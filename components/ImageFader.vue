<template>
  <figure>
    <img :src="img" :alt="alt" />
  </figure>
</template>

<script>
export default {
  props: {
    img: String,
    alt: String,
  },
};
</script>

<style lang="scss">
@keyframes fadeOut {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

img {
  animation: 5s ease-out forwards fadeIn;
}
</style>