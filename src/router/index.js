import Vue from 'vue'
import Router from 'vue-router'
import GistBlogList from '@/components/GistBlogList'
import GistBlogListItem from '@/components/GistBlogListItem'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'GistBlogList',
      component: GistBlogList,
      props: { default: true }
    },
    {
      path: '/gist/:id',
      name: 'GistBlogListItem',
      component: GistBlogListItem,
      props: { default: true }
    }
  ],
  mode: 'history'
})
