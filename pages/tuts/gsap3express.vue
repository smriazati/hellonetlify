<template>
  <div class="container">
    <section v-if="tut" class="tut">
        <h1 v-if="tut.name">{{ tut.name}}</h1>
        <p v-if="tut.url"><a :href="tut.url" target="_blank">Tutorial</a></p>
    </section>

    <section>
        <h2>Part 1</h2>
        <iframe height="500" style="width: 100%;" scrolling="no" title="gsap3 express 1" src="https://codepen.io/sriazati/embed/dyXePgL?height=252&theme-id=light&default-tab=js,result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
        See the Pen <a href='https://codepen.io/sriazati/pen/dyXePgL'>gsap3 express 1</a> by sarah
        (<a href='https://codepen.io/sriazati'>@sriazati</a>) on <a href='https://codepen.io'>CodePen</a>.
        </iframe>
    </section>

    <section v-if="isCodepenLoaded" class="results">
        <client-only>
            <p class="codepen" data-height="265" data-theme-id="light" data-default-tab="js,result" data-user="sriazati" data-slug-hash="dyXePgL" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="gsap3 express 1">
            <span>See the Pen <a href="https://codepen.io/sriazati/pen/dyXePgL">
            gsap3 express 1</a> by sarah (<a href="https://codepen.io/sriazati">@sriazati</a>)
            on <a href="https://codepen.io">CodePen</a>.</span></p>
        </client-only>
    </section>

  </div>
</template>

<script>
export default {
    data() {
        return {
            tut: {
                name: 'Free GSAP 3 Express',
                url: 'https://www.creativecodingclub.com/courses/take/FreeGSAP3Express/lessons/',
                date: '10/31/20'
            },
            isCodepenLoaded: false
        }
      }
    //   head () {
    //     return {
    //       script: [
    //         {
    //           hid: 'cpen',
    //           src: 'https://static.codepen.io/assets/embed/ei.js',
    //           defer: true,
    //           // Changed after script load
    //           callback: () => { 
    //                 console.log('Script-loaded callback fired.');
    //                 this.isCodepenLoaded = true 
    //             } 
    //         }
    //       ]
    //     }
    //   }
}
</script>

<style lang='scss'>


</style>