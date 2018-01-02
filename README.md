# pxnw-gist-blog

> Code Challenge using Gists as Blog Posts

**Live Site** [Glogger](https://matchbox-life.firebaseapp.com/)

## Build Setup

Uses the [Vuecli with Vuetify and Webpack](https://github.com/vuetifyjs/webpack-advanced)

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

## Intro

The idea is that you display the skills required to build scalable frontend
applications. In this code challenge, you will be asked to build a single page application with the framework of your choice, consuming web services and building a presentable UI.
You will be required to make a trade off between visual aesthetics, scalability, test coverage and feature completeness. When we grade your code challenge, we will take that into account. We are aware that the time we propose for this code challenge is too short to deliver a complete solution.
We pay attention to user experience aspects like small load times, clear
communication of what is happening, well done animations as well as your eye for details. We have a strong focus on delivered quality and one major indicator of quality is the quality of the user interface.
Another aspect is the structure of your application. While this application doesn't necessarily warrant one of the big frameworks, we'd still like to see how you would implement this as part of a larger scale initiative if time permits. At Pacific by Northwest, we're often tasked with architecting larger frontend initiatives.
A third aspect is testing. We're not looking for 100% coverage or much coverage at all. But we'd like to see how you fare in setting up basic testing structures, what your thoughts are around continuous integration, where & how you would deploy this application.
Overall, we expect you to document your approach. A well documented approach in this instance is better than a complete solution as we want to understand your process and your ability to work with others.

## Challenge

We're transporting you back to the early 2000's – we're building a quick blog.
We're asking you to build an application with two pages, one to list blog posts and
a short excerpt, one to display a full blog post. The backend for this blog are Github
Gists. The idea is that you can configure a username to look up on Github and the
index page will display excerpts of the Gists. The post detail page will then display
the full content of the gist. Possible enhancements are a searchable list of posts,
only show certain Gists as blog posts, formatted Markdown as HTML etc.

## Requirements

* As a reader, I want to be able to see a list of blog posts that a writer has posted on Github in the form of Gists, so that I can make a decision on which post to read.
* As a reader, I want to be able to select a post on the index page and see the post details, so that I can read the post.
* As a reader, I want to be able to navigate from a post to the next post so that I can read the next post.
* As a reader, I want to be able to navigate to the index page from a post so that I can select a different post to read.
* As a writer, I want to be able to post a Gist to Github and have that post show up on my blog so that a reader can read the new post.
* As a writer, I want to able to make updates to a post by updating the Gist so that I can correct typos and make content updates.

## Questions

* What do you think you would do different if you had 2 weeks to complete this assignment and no requirement to use Github. What would your backend solution look like?
  * Testing
  * User authentication
  * User accounts to manage saved blogs
  * Robust representation of github profiles
  * Pagination of blog posts, next/prev posts, featured gists, etc.
  * gist format influencing frontend display (markdown/html/json/php, etc.) syntax highlighting
  * Linking of Github profile with option to pull in Gists as well as your own blog posts.
  * I would probably keep the Firebase backend, it's flexible and scalable
  * It would be awesome to have searchable gists by language/problem/tag, etc.
  * Could turn into more of a social problem-solving site/network, more curated than StackOverflow or geared towards education/learning
* How and where do you feel like this application should be deployed to?
  * It's already deployed to Firebase hosting, which I think is a good solution.
* Are you happy with your own solutions? If yes, what parts do you think are really well done, if not, what would you want to change?
  * I'm pretty happy with how this turned out. The fundamentals are sound with a solid state management system via Vuex and some reusable components which are fairly easy to understand
  * The site is (mostly) responsive and can be saved as an app on your smartphone screen
  * It could use more documentation and testing
    * I focused on my strengths. I don't have a ton of experience in making tests so I didn't want to take up a bunch of time with them here. I realize their value to a project and acknowledge my lack of experience with them.


For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
