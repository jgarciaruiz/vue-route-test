<template>
    <div id="single-post">
        <div v-if="isLoading">Loading...</div>
        <div v-else>
            <h1>{{ post.title }}</h1>
            <article>{{ post.body }}</article>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name:'SingleBlog',
    data(){
        return {
            isLoading : true,
            apiURL: 'https://jsonplaceholder.typicode.com/',            
            id: this.$route.params.id,
            post: {}
        }
    },
    created() {
        this.getPost();
    }, 
    methods: {
        getPost() {        
            console.log(this.id);                    
            axios.get(this.apiURL + 'posts/'+this.id)
            .then(response => {
                console.log(response);                
                this.post = response.data;
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
