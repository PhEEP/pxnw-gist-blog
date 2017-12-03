<template>
<v-container
  fluid
  grid-list-lg
>
    <v-progress-linear
      :indeterminate="true"
      v-if="loading"
    ></v-progress-linear>
  <v-layout
    row
    wrap
  >
    <v-flex xs12>
      <h1>{{ githubUser.name || githubUser.login }}</h1>
    </v-flex>
    <v-flex
      xs12
      md3
    >
      <v-card>
        <v-card-media
        :src="githubUser.avatar_url"
        height="200px"
        >
        </v-card-media>
        <v-card-text>
          {{ githubUser.bio }}
        </v-card-text>
        <v-card-actions>
        </v-card-actions>
      </v-card>
    </v-flex>
    <v-flex
      xs12
      md9
    >
      <v-layout
        row
        wrap
      >
        <v-flex
          v-for="(gist, index) in gistList"
          :key="index"
          xs6
          md3
          lg2
        >
          <v-card
            :to="'/gister/' + githubUser.login + '/gist/' + gist.id"
          >
            <v-card-title>
              <h4>
                {{ gist.description || 'No Description' }}
              </h4>
            </v-card-title>
            <v-card-text>
              {{ dateFormat(gist.updated_at) }}
            </v-card-text>
          </v-card>
        </v-flex>
        <v-flex>
          <v-card>

          <v-card-text
            v-if="gistList.length < 1"
          >
            Looks like {{ githubUser.name }} doesn't have any Gists...
          </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-flex>

  </v-layout>
  </v-container>
</template>

<script>
import moment from 'moment'

export default {
  name: 'GistBlogList',
  data () {
    return {}
  },
  mounted () {
    this.$store.dispatch('setGithubUser', this.githubUser.login)
    this.$store.dispatch('getGists', this.githubUser.login)
  },
  methods: {
    dateFormat (date) {
      return moment(date).format('MM-DD-YYYY')
    }
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
