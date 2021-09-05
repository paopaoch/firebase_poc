<template>
    <article>
        <nuxt-content :document="article" />
    </article>
</template>
<script>
export default {
    async asyncData({ $content, params }) {
        console.log(params); // you can access the params like this 
        // eg. url/blog/hello will return hello and url/blog/test will return test
        // can use this params to fetch data from database

        const article = await $content("blog", params.slug).fetch();
        console.log(article);
        return { article };
    }
};
</script>
<style lang=""></style>
