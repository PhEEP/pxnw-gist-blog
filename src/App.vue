<template>
  <v-app light>
    <v-toolbar app fixed>
      <v-toolbar-side-icon
        @click.stop="drawer = !drawer"
        class="hidden-md-and-up"
      >
      </v-toolbar-side-icon>
      <v-toolbar-title v-text="title"></v-toolbar-title>
      <v-btn
        v-for="(item, index) in navItems"
        :key="item.icon"
        flat
        :to="item.url"
        exact
        class="hidden-sm-and-down"
      >
        <v-icon>
          {{ item.icon }}
        </v-icon>
        {{ item.name }}
      </v-btn>
      <v-spacer></v-spacer>
      <v-slide-y-transition mode="out-in">
        <GithubUserSearch />
      </v-slide-y-transition>
      <v-btn
        icon
        @click="toggleSearching"
      >
        <v-icon>search</v-icon>
      </v-btn>
    </v-toolbar>
      <v-content>
      <span v-if="error">
        <app-alert @dismissed="onDismissed" :text="error.message"></app-alert>
      </span>
        <v-slide-y-transition mode="out-in">
          <router-view></router-view>
        </v-slide-y-transition>
      </v-content>
    <v-footer :fixed="fixed" app>
      <span>&copy; 2017</span>
    </v-footer>
  </v-app>
</template>

<script>
import GistBlogList from '@/components/GistBlogList'
import GithubUserSearch from '@/components/GithubUserSearch'

export default {
  data () {
    return {
      searchBar: false,
      drawer: false,
      fixed: true,
      title: 'Glogger',
      githubUserToGet: ''
    }
  },
  components: {
    GistBlogList,
    GithubUserSearch
  },
  methods: {
    toggleSearching () {
      this.$store.dispatch('toggleSearch')
    },
    onDismissed () {
      this.$store.dispatch('clearError')
    }
  },
  computed: {
    error () {
      return this.$store.getters.error
    },
    navItems () {
      return [
        {
          name: 'Home',
          icon: 'home',
          url: '/'
        },
        {
          name: 'User',
          icon: 'face',
          url: '/user/' + this.githubUser.login
        }
      ]
    },
    githubUser () {
      return this.$store.getters.githubUser
    }
  }
}
</script>
