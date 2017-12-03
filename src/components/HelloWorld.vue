<template>
  <v-container grid-list-lg>
    <v-layout
      row
      wrap
    >
      <v-flex xs12>
        <h2>Recent searches</h2>
      </v-flex>
      <v-flex
        v-for="(user, index) in recentUsers"
        :key="index"
        xs6
        sm4
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
            {{ user.name || user.login }}
          </v-card-title>
          <v-card-actions>
            <v-btn
              @click="goToUser(user.login)"
              color="primary"
            >See Glog</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'HelloWorld',
  methods: {
    goToUser (user) {
      this.$store.dispatch('setGithubUser', user)
      this.$store.dispatch('getGists', user)
      this.$router.replace('/gister/' + user)
    }
  },
  mounted () {
    this.$store.dispatch('getRecentUsers')
  },
  computed: {
    recentUsers () {
      return this.$store.getters.recentUsers
    }
  }
}
</script>

<style>
</style>
