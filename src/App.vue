<!-- This is the root Vue component of the HelloVue application. 
  It acts as a container for all other components. 
  It defines the overall structure of your application, 
  including the layout that persists across multiple pages or views. 
  
 -->
<template>
  <MainPage />
</template>

<script>
import MainPage from './components/MainPage.vue';

export default {
  name: 'App',
  components: {
    MainPage,
  },
};
</script>

<style>
#app {
  width: 100%;
  height: 100%;
  margin: 0px;
  padding: 0px;
}

body { 
  margin: 0 !important; 
}
/* Add your styles here */
</style>