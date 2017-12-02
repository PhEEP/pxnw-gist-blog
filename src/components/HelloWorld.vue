<template>
  <v-container grid-list-lg>
    <v-layout
      row
      wrap
    >
      <v-flex
        v-for="(user, index) in users"
        :key="index"
        xs12
        sm6
        md3
        lg2
      >
        <v-card>
          <v-card-media
            :src="user.avatar_url"
            height="200px"
          >
          </v-card-media>
          <v-card-title>
            {{ user.name }}
          </v-card-title>
          <v-card-actions>
            <v-btn
              @click="goToUser(user.login)"
            >See Glog</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
    <h2>Recent searches</h2>
    <v-layout>
      <v-flex
        v-for="(user, index) in recentSearches"
        :key="index"
      >
        {{ user.name }}
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      users: [
        {
          login: 'marcammann',
          avatar_url: 'https://avatars0.githubusercontent.com/u/49620',
          name: 'Marc Ammann'
        },
        {
          login: 'PhEEP',
          avatar_url: 'https://avatars2.githubusercontent.com/u/9273255',
          name: 'Philippe Moore'
        },
        {
          login: 'getify',
          avatar_url: 'https://avatars1.githubusercontent.com/u/150330',
          name: 'Kyle Simpson'
        },
        {
          login: 'zassmin',
          avatar_url: 'https://avatars2.githubusercontent.com/u/1654151',
          name: 'zassmin'
        }
      ]
    }
  },
  methods: {
    goToUser (user) {
      this.$store.dispatch('setGithubUser', user)
      this.$store.dispatch('getGists', user)
      this.$router.replace('/user/' + user)
    }
  },
  mounted () {
    this.$store.dispatch('getRecentUsers')
  },
  computed: {
    recentSearches () {
      return this.$store.getters.recentSearches
    }
  }
}
</script>

<style>
</style>
