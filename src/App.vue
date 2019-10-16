<template>
  <div>
    <v-header></v-header>

    <div class="iphoneStockWrapper">      
      <v-index></v-index>

      <keep-alive>
          <router-view></router-view>
      </keep-alive>

    </div>
    <v-footer></v-footer>
  </div>
</template>

<script>
 import Header from './components/header/theHeader'
 import Footer from './components/footer/theFooter'
 import indexDetail from './components/storeDetail/indexDetail'


export default {
 
 components: {
   'v-header': Header,
   'v-index': indexDetail,
   'v-footer': Footer
 }
}
</script>

<style>
html{
  background: #f8f8f8;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
html{
  background-color: #f5f5f5;
}

</style>
 