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
      path: '/user/:user',
      name: 'GistBlogList',
      component: GistBlogList,
      props: { default: true },
      children: [
        {
          path: '/gist/:gistId',
          name: 'GistBlogListItem',
          components: { default: GistBlogListItem },
          props: { default: true }
        }
      ]
    }
  ],
  mode: 'history'
})
