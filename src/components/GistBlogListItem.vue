<template>
  <v-layout>
    <v-flex>
      {{ gistId }}
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: 'GistBlogListItem',
  data () {
    return {}
  },
  props: ['gistId'],
  computed: {
    gistContent () {
      return this.$store.getters.gist
    }
  },
  mounted () {
    console.log('mounted list item')
    this.$store.dispatch('setGist', this.gistId)
  }
}
</script>

<style>

</style>
