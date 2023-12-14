//This file is the main entry point for the front-end code. 
//It initializes the HelloVue application by importing the root component (App.vue) 
//and mounting it to the DOM. 

// Importing the createApp function from the Vue.js library
import { createApp } from 'vue';

// Importing the root component (App.vue) of the Vue.js application
import App from './App.vue';

// Creating a Vue application using the createApp function and mounting it to the element with the ID 'app'
createApp(App).mount('#app');
