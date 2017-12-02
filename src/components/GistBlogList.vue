<template>
  <v-layout row wrap>
    <v-progress-linear
      :indeterminate="true"
      v-if="loading"
    ></v-progress-linear>
    <v-flex xs12>
      <h1>{{ githubUser }}</h1>
    </v-flex>
    <v-flex
      v-if="gistList.length < 1"
    >
      Looks like {{ githubUser }} doesn't have any Gists...
    </v-flex>
    <v-flex
      v-for="(gist, index) in gistList"
      :key="index"
      xs6
      md3
      lg2
    >
      <v-card
      :to="'/gist/' + gist.id"
      >
        <v-card-title>
          <h4>
            {{ gist.description || 'No Description' }}
          </h4>
        </v-card-title>
        <v-card-text>
          {{ gist.updated_at }}
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: 'GistBlogList',
  data () {
    return {}
  },
  mounted () {
    this.$store.dispatch('getGists', this.githubUser)
  },
  computed: {
    gistList () {
      return this.$store.getters.gists
    },
    githubUser () {
      return this.$store.getters.githubUser
    },
    loading () {
      return this.$store.getters.loading
    }
  }
}
</script>

<style>

</style>
