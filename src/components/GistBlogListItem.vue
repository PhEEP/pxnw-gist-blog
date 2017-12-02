<template>
  <v-layout row wrap>
    <v-flex>
      <v-card>
        <v-card-title>
          {{ gistContent.description || 'No Description'}}
        </v-card-title>
        <v-card-text>
          <pre
            v-text="gistContent.files.content.content"
          >
          </pre>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import GistContent from '@/components/GistContent'
export default {
  name: 'GistBlogListItem',
  data () {
    return {}
  },
  components: {
    GistContent
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
