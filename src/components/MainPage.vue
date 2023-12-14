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
        <!-- Input field with two-way data binding to userMessage -->
        <input v-model="userMessage" id="userInput" />
        <!-- Button triggers the sendMessage method on click -->
        <button @click="sendMessage">Send to API</button>
  
        <!-- Display API response if it is not null -->
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
  /* Styling for the main container */
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
    data() {
      return {
        userMessage: '',      // Input field value
        apiResponse: null,    // Response from the API
        errorMessage: '',     // Error message, if any
        loading: false,       // Loading indicator
      };
    },
    // Methods section for defining component methods
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
  