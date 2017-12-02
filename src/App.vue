<template>
  <v-app light>
    <v-toolbar app>
      <!-- <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon> -->
      <v-toolbar-title v-text="title"></v-toolbar-title>
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
      <v-container fluid grid-list-lg>
          <span v-if="error">
            <app-alert @dismissed="onDismissed" :text="error.message"></app-alert>
          </span>
        <v-slide-y-transition mode="out-in">
          <router-view></router-view>
        </v-slide-y-transition>
      </v-container>
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
      fixed: false,
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
    }
  }
}
</script>
