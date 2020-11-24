<template>
  <div class="container tut-gsap-demos">
    <section v-if="tut" class="tut">
        <h1 v-if="tut.name">{{ tut.name}}</h1>
        <p v-if="tut.url"><a :href="tut.url" target="_blank">Tutorial</a></p>
    </section>

    <section>
        <h2>Basic with Dev Tools</h2>
        <iframe height="500" style="width: 100%;" scrolling="no" title="gsap3 express 1" src="https://codepen.io/sriazati/embed/dyXePgL?height=252&theme-id=light&default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
        See the Pen <a href='https://codepen.io/sriazati/pen/dyXePgL'>gsap3 express 1</a> by sarah
        (<a href='https://codepen.io/sriazati'>@sriazati</a>) on <a href='https://codepen.io'>CodePen</a>.
        </iframe>
    </section>


    <section>
        <h2>Stagger</h2>
        <iframe height="500" style="width: 100%;" scrolling="no" title="gsap3 express 1" src="https://codepen.io/sriazati/embed/QWEeVbZ?height=252&theme-id=light&default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
        See the Pen <a href='https://codepen.io/sriazati/pen/QWEeVbZ'>gsap3 express 1</a> by sarah
        (<a href='https://codepen.io/sriazati'>@sriazati</a>) on <a href='https://codepen.io'>CodePen</a>.
        </iframe>
    </section>


    <section>
        <h2>Tween Control Finished</h2>
        <iframe height="500" style="width: 100%;" scrolling="no" title="gsap3 express 1" src="https://codepen.io/sriazati/embed/ExyqeKj?height=252&theme-id=light&default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
        See the Pen <a href='https://codepen.io/sriazati/pen/ExyqeKj'>gsap3 express 1</a> by sarah
        (<a href='https://codepen.io/sriazati'>@sriazati</a>) on <a href='https://codepen.io'>CodePen</a>.
        </iframe>
    </section>

    <section>
        <h2>Basic Timeline</h2>
        <iframe height="500" style="width: 100%;" scrolling="no" title="gsap3 express 1" src="https://codepen.io/sriazati/embed/NWrQLRO?height=252&theme-id=light&default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
        See the Pen <a href='https://codepen.io/sriazati/pen/NWrQLRO'>gsap3 express 1</a> by sarah
        (<a href='https://codepen.io/sriazati'>@sriazati</a>) on <a href='https://codepen.io'>CodePen</a>.
        </iframe>
    </section>

    <section>
        <h2>Typewriter</h2>
        <iframe height="500" style="width: 100%;" scrolling="no" title="gsap3 express 1" src="https://codepen.io/sriazati/embed/wvWVEqY?height=252&theme-id=light&default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
        See the Pen <a href='https://codepen.io/sriazati/pen/wvWVEqY'>gsap3 express 1</a> by sarah
        (<a href='https://codepen.io/sriazati'>@sriazati</a>) on <a href='https://codepen.io'>CodePen</a>.
        </iframe>
    </section>


    <section>
        <h2>Split Text</h2>
        <iframe height="500" style="width: 100%;" scrolling="no" title="gsap3 express 1" src="https://codepen.io/sriazati/embed/MWeNqOW?height=252&theme-id=light&default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
        See the Pen <a href='https://codepen.io/sriazati/pen/MWeNqOW'>gsap3 express 1</a> by sarah
        (<a href='https://codepen.io/sriazati'>@sriazati</a>) on <a href='https://codepen.io'>CodePen</a>.
        </iframe>
    </section>


    <section>
        <h2>3D Text</h2>
        <iframe height="500" style="width: 100%;" scrolling="no" title="gsap3 express 1" src="https://codepen.io/sriazati/embed/eYzqLVN?height=252&theme-id=light&default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
        See the Pen <a href='https://codepen.io/sriazati/pen/eYzqLVN'>gsap3 express 1</a> by sarah
        (<a href='https://codepen.io/sriazati'>@sriazati</a>) on <a href='https://codepen.io'>CodePen</a>.
        </iframe>
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
            }
        }
    }
}
</script>

<style lang='scss'>
.tut-gsap-demos {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    > *:first-child {
        flex: 0 0 100%;
    }
    > *:not(:first-child) {
        flex: 0 0 47%;
        margin-bottom: 50px;
    }
}

</style>