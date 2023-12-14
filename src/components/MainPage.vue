<!-- ChatComponent.vue -->

<template>
  <div>
    <label for="userInput">Enter something:</label>
    <input v-model="userMessage" id="userInput" />
    <button @click="sendMessage">Send to API</button>

    <div v-if="apiResponse !== null">
      <h3>API Response:</h3>
      <p>{{ apiResponse }}</p>
    </div>

    <div v-if="errorMessage">
      <p>Error: {{ errorMessage }}</p>
    </div>

    <div v-if="loading">
      <p>Loading...</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      userMessage: '',
      apiResponse: null,
      errorMessage: '',
      loading: false,
    };
  },
  methods: {
    async sendMessage() {
      try {
        this.errorMessage = '';
        this.loading = true;

        const response = await axios.post('/api/chat', {
          message: this.userMessage,
        });

        this.apiResponse = response.data.response;
      } catch (error) {
        console.error('Error sending message:', error);
        this.errorMessage = error.response?.data?.error || 'An error occurred! Please Try Again.';
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>
