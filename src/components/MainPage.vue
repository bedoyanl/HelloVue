<!-- This file represents a Vue.js component called MainPage. 
  In Vue.js, components are reusable building blocks for your application. 
  They contain the HTML, CSS, and JavaScript code that defines a specific part of the UI. -->
  <template>
    <!-- The main container for the Vue component -->
    <div class="flex-container">
      <!-- Page title -->
      <h2>HelloVue</h2>
  
      <!-- User input section -->
      <div>
        <label for="userInput">Enter something:</label>
        <!-- Input field with two-way data binding to userMessage 
        v-model: This is a directive provided by Vue. 
        It creates a two-way binding on the userMessage property, 
        linking the input field's value to the userMessage data property.
        
        -->
        <input v-model="userMessage" id="userInput" />
        <!-- Button triggers the sendMessage method on click 
        @click: This is a shorthand for v-on:click. 
        It's an event binding that listens for a click event on the button and 
        triggers the sendMessage method.
        -->
        <button @click="sendMessage">Send to API</button>
  
        <!-- Display API response if it is not null 
        v-if: These are conditional directives that conditionally render or remove 
        elements based on the truthiness of the specified expression. In this case, 
        parts of the template are conditionally rendered based on the values of apiResponse, 
        errorMessage, and loading.
        -->
        <div v-if="apiResponse !== null">
          <h3>API Response:</h3>
          <!-- Display the API response data -->
          <p>{{ apiResponse }}</p>
        </div>
  
        <!-- Display error message if errorMessage is present -->
        <div v-if="errorMessage">
          <p>Error: {{ errorMessage }}</p>
        </div>
  
        <!-- Display loading message while waiting for API response -->
        <div v-if="loading">
          <p>Loading...</p>
        </div>
      </div>
    </div>
  </template>
  
  <style scoped>
  /* Styling for the main container 
  scoped: This is a Vue-specific attribute in the style section. 
  It ensures that the styles defined in this component only apply to 
  the elements within this component, providing encapsulation.
  
  */
  .flex-container {
    display: flex;
    flex-direction: column;
    align-items: center; /* Optional: Center items horizontally */
    justify-content: center; /* Optional: Center items vertically */
  }
  
  /* Styling for the page title */
  h2 {
    font-size: 24px;
    margin-bottom: 16px;
  }
  </style>
  
  <script>
  // Import Axios library for making HTTP requests
  import axios from 'axios';
  
  // Export the Vue component
  export default {
    // Data properties for the component
    //data(): This is a lifecycle hook in Vue components. It returns an object with the 
    //initial data for the component.

    data() {
      return {
        userMessage: '',      // Input field value
        apiResponse: null,    // Response from the API
        errorMessage: '',     // Error message, if any
        loading: false,       // Loading indicator
      };
    },
    // Methods section for defining component methods
    //methods: This is a section where you define methods that can be called in 
    //response to user actions or other events. In this case, sendMessage is a 
    //method that makes an asynchronous call using Axios to a chat API.

    methods: {
      // Asynchronous method to send a message to the API
      async sendMessage() {
        try {
          this.errorMessage = '';  // Reset error message
          this.loading = true;     // Set loading to true
  
          // Make a POST request to the '/api/chat' endpoint with userMessage
          const response = await axios.post('/api/chat', {
            message: this.userMessage,
          });
  
          // Update apiResponse with the response data
          this.apiResponse = response.data.response;
        } catch (error) {
          console.error('Error sending message:', error);
          // Set errorMessage with the API response error or a default message
          this.errorMessage = error.response?.data?.error || 'An error occurred! Please Try Again.';
        } finally {
          this.loading = false;  // Set loading to false, regardless of success or failure
        }
      },
    },
  };
  </script>
  