<template>
  <v-layout>
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
  }
}
</script>

<style>
</style>
