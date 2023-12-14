<!-- 
  This is the root Vue component of the HelloVue application. 
  It acts as a container for all other components. 
  It defines the overall structure of your application, 
  including the layout that persists across multiple pages or views. 
-->
<template>
  <!-- Include the MainPage component -->
  <MainPage />
</template>

<script>
// Import the MainPage component
import MainPage from './components/MainPage.vue';
/* 
export default { ... }:

This syntax is used to export the root Vue component. 
In a Vue.js single-file component, you typically export an object that defines 
the properties and behavior of the component.

*/

// Export the root Vue component
export default {
  // Name of the component, in this case, 'App'

  /* name: 'App':
The name property is optional, but when present, it provides a name for the Vue component. 
The name is useful for debugging and identifying components in the Vue Devtools.
*/
  name: 'App',
  // Register the MainPage component for use within this component
  /* components: { MainPage }:
The components property is used to register child components that are used 
within the current component. In this case, it's registering the MainPage component. 
This makes the MainPage component available for use within the template of the current 
component.
*/
  components: {
    MainPage,
  },
};
</script>

<style>
/* Styles for the #app element, setting width and height to 100% with no margins or padding */
#app {
  width: 100%;
  height: 100%;
  margin: 0px;
  padding: 0px;
}

/* Styles for the body element, removing margin */
body { 
  margin: 0 !important; 
}

</style>
