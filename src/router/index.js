import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import GistBlogList from '@/components/GistBlogList'
import GistBlogListItem from '@/components/GistBlogListItem'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/gister/:userId',
      name: 'GistBlogList',
      component: GistBlogList,
      props: { default: true }
    },
    {
      path: '/gister/:user/gist/:gistId',
      name: 'GistBlogListItem',
      components: { default: GistBlogListItem },
      props: { default: true }
    }
  ],
  linkActiveClass: 'active',
  mode: 'history'
})
