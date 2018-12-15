<template>
    <div id="show-blog">
        <h1>{{ title }}</h1>
        <div v-if="isLoading">Loading...</div>
        <div v-else>
            <div v-for="(post, index) in posts" :key="index" class="blog-item">
                <router-link :to="'/blog/'+post.id"><h2>{{ post.title }}</h2></router-link>
                <article>{{ post.body }}</article>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    data(){
        return {
            title: 'Blog posts',
            isLoading : true,
            apiURL: 'https://jsonplaceholder.typicode.com/',
            posts: [],
            postsLimit: 5
        }
    },
    created() {
        this.getPosts();
    }, 
    methods: {
        getPosts() {                            
            axios.get(this.apiURL + 'posts')
            .then(response => {
                console.log(response);
                let append = response.data.slice( this.posts.length, this.posts.length + this.postsLimit )
                
                this.posts = this.posts.concat(append);
                this.isLoading = false;
            })
            .catch(response => {
                console.log(response);
                this.isLoading = false;
            });          
        }
    }    
}
</script>

<style>

</style>
