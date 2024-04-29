<script>
import axios from 'axios';
export default {

  data() {
    return {
      projects: [],

      apiLinks: [],
      apiPageNumber: 1,
      isLoading: true,
      baseApiUrl: 'http://127.0.0.1:8000/api',
    }
  },

  mounted() {

    this.apiCall();
  },

  methods: {

    apiCall() {

      this.isLoading = true

      axios.get(this.baseApiUrl + '/projects', {
        params: {
          page: this.apiPageNumber
        }
      }).then(res => {

        if (res.data.success) {
          this.isLoading = false
        }

        this.projects = res.data.results.data;
        this.apiLinks = res.data.results.links;
      })
    },

    changeApiPage(pageNumber) {
      this.apiPageNumber = pageNumber;
      this.apiCall();
    }
  },
}

</script>

<template>

  <div class="container py-4">

    <h1>I miei Projects:</h1>

    <div v-if="!isLoading">

      <div v-for="project in projects" :key="project.id">
        <h2>{{ project.title }}</h2>

        <p>{{ project.description }}</p>

        <div v-if="project.type">
          <small>{{ project.type.title }}</small>
        </div>

        <div>
          <img class="img-size mt-2" :src="'http://127.0.0.1:8000/storage/' + project.image" alt="Copertina">
        </div>

        <div class="d-flex mt-2 gap-2">
          <div v-for="technology in project.technologies" :key="technology.id">
            <img class="icon-size" :src="'http://127.0.0.1:8000/storage/' + technology.preview" alt="Tecnologia">
          </div>
        </div>

      </div>

      <nav>

        <ul class="d-flex gap-2">

          <li v-for="link in apiLinks" v-html="link.label" @click="changeApiPage(link.label)"
            :class="link.label == apiPageNumber ? 'active' : ''">

          </li>

        </ul>

      </nav>

    </div>
    <div v-else>
      <div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>


  </div>

</template>

<style lang="scss" scoped>
nav {
  margin-top: 100px;
  padding-top: 20px;
  border-top: solid 1px gray;

  ul {
    list-style-type: none;

    li {

      padding: 8px;
      text-decoration: none;
      color: white;
      transition: all .3s ease;
      cursor: pointer;

      &:hover,
      &.active {
        background-color: rgba(255, 255, 255, 0.4);
        color: black;
      }
    }
  }
}
</style>