import Vue from 'vue'
import Router from 'vue-router'
import GistBlogList from '@/components/GistBlogList'
import GistBlogListItem from '@/components/GistBlogListItem'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/:id',
      name: 'GistBlogList',
      component: GistBlogList,
      props: true
    },
    {
      path: '/gist/:id',
      name: 'GistBlogListItem',
      component: GistBlogListItem,
      props: true
    }
  ],
  mode: 'history'
})
