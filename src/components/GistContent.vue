<template>
  <div>
    {{ gistContent }}
  </div>
</template>

<script>
export default {
  name: 'GistContent',
  data () {
    return {}
  },
  mounted () {
    this.$store.dispatch('getGistContent')
  },
  computed: {
    gistContent () {
      return this.$store.getters.gistContent
    }
  }
}
</script>

<style>

</style>
