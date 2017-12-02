<template>
  <v-app light>
    <v-navigation-drawer
      fixed
      v-model="drawer"
      app
    >
      <v-list>
        <v-list-tile
          v-for="(item, i) in items"
          :key="i"
          value="true"
        >
          <v-list-tile-action>
            <v-icon light v-html="item.icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-slide-y-transition mode="out-in">
        <v-text-field
          v-show="searchBar"
          v-model="githubUserToGet"
          label="Github username"
          prepend-icon="search"
        >
        </v-text-field>
      </v-slide-y-transition>
      <v-btn
        icon
        @click="searchBar = !searchBar"
      >
        <v-icon>search</v-icon>
      </v-btn>
    </v-toolbar>
    <v-content>
      <v-container fluid grid-list-lg>
        <v-slide-y-transition mode="out-in">
          <GistBlogList />
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

export default {
  data () {
    return {
      drawer: true,
      searchBar: false,
      fixed: false,
      items: [{
        icon: 'bubble_chart',
        title: 'Inspire'
      }],
      miniVariant: false,
      title: 'Glogger',
      githubUserToGet: ''
    }
  },
  components: {
    GistBlogList
  }
}
</script>
