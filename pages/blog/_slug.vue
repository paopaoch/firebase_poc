<template>
    <article>
        <nuxt-content :document="article" />
    </article>
</template>
<script>
export default {
    async asyncData({ $content, params }) {
        console.log(params)
        const article = await $content('blog', params.slug).fetch();
        console.log(article)
        return {article}
    }
}
</script>
<style lang="">
    
</style>