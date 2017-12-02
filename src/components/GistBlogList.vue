<template>
  <v-layout row wrap>
    <v-flex
      v-for="(gist, index) in gistList"
      :key="index"
    >
      <pre>
        {{gist}}
      </pre>
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
    }
  }
}
</script>

<style>

</style>
