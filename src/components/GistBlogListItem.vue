<template>
  <v-layout row wrap>
    <v-flex>
      <v-card v-if="gistContent">
        <v-card-title>
          Description: {{ gistContent.description || 'No Description'}}
        </v-card-title>
        <v-card-text
          v-for="(contentItem, index) in gistContent.files"
          :key="index"
        >
          <h5>{{index}}</h5>
          <pre
            v-text="contentItem.content"
          >
          </pre>
        </v-card-text>
      </v-card>
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
  created () {
    console.log('created list item with gist id ' + this.gistId)
    this.$store.dispatch('setGist', this.gistId)
  }
}
</script>

<style>

</style>
