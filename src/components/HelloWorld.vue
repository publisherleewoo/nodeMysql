<template>
  <div class="hello">
    <input type="text" v-model="text">
    <button @click="add">abc</button>
    <ul>
      <li></li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'HelloWorld',
  data(){
    return {text:''}
  },
  mounted(){
    console.log('실행됌')
    axios.post('http://localhost:3000/api/read')
    .then((res)=>{
      console.log(res)
    }).catch((err)=>{
      console.log(err)
    })
  },
  methods:{
    add(){
      var txt = this.text;
      axios.post('http://localhost:3000/api/add',{txt:txt,done:false})
    .then((res)=>{
      console.log(res)
    }).catch((err)=>{
      console.log(err)
    })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
