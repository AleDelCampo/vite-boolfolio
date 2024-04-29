<script>

import axios from 'axios';

export default{
  data(){
    return{
      url : 'http://127.0.0.1:8000',
    }
  },
  mounted(){

    axios.get(this.url).then(res => {

      console.log(res);

    });

  },
  methods:{

  }
}

</script>

<template>
  <div class="">
    cipolle
  </div>
</template>

<style lang="scss" scoped>

</style>
