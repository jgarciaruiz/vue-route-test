import ShowBlog from '../components/ShowBlog.vue'
import SingleBlog from '../components/SingleBlog.vue'
import NotFound from '../components/NotFound.vue'

export default [
    { path: '/', component: ShowBlog },
    { path: '/blog/:id', component: SingleBlog },
    { path: '*', component: NotFound }
]