<template>
  <div class="hello">
    <router-link to='/'>
      <el-button type="primary">to Home</el-button>
    </router-link>   
    <router-link to='/user'>
      <el-button type="success">to User</el-button>
    </router-link>
  </div>
</template>

<script>

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
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
