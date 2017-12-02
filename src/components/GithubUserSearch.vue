<template>
  <v-form
    @submit="onSubmit"
  >
    <v-text-field
      v-show="searching"
      v-model="githubUserToGet"
      placeholder="Github username"
    >
    </v-text-field>
  </v-form>
</template>

<script>
export default {
  name: 'GithubUserSearch',
  data () {
    return {
      githubUserToGet: ''
    }
  },
  computed: {
    searching () {
      return this.$store.getters.searching
    }
  },
  methods: {
    onSubmit (ev) {
      ev.preventDefault()
      this.$store.dispatch('setGithubUser', this.githubUserToGet)
      this.$store.dispatch('getGists', this.githubUserToGet)
      this.$router.replace('/gister/' + this.githubUserToGet)
      this.githubUserToGet = ''
    }
  }
}
</script>

<style>

</style>
