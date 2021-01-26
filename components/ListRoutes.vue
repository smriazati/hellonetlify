<template>
    <ul>
        <li v-for="(item, index) in routeItems" :key="index">
            <nuxt-link :to="item.path">
                {{item.name }}
            </nuxt-link>
        </li>
    </ul>
</template>

<script>
export default {
    created() {
        this.$router.options.routes.forEach(route => {
          if (route.name.includes(this.routeName)) {
            this.routeItems.push({
                name: route.name.replace(this.routeName, ''), 
                path: route.path
            })
          }
        })
    }, 
    props: {
        routeName: String
    },
    data() {
        return {
            routeItems: []
        }
    }
}
</script>
