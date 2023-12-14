//This file is part of the server-side of the application. 
//Specifically, it's defining the routes for the Open AI API. 
//router.js is responsible for handling different HTTP requests (like GET or POST) 
//to specific endpoints on the express server (/api/chat)


// Importing necessary modules for the code
const express = require("express"); // Express is a web application framework for Node.js
const { OpenAI } = require("openai"); // Importing OpenAI module to interact with the OpenAI API
const axios = require("axios"); // Axios is a promise-based HTTP client for the browser and Node.js
const router = express.Router(); // Creating an Express router to handle routes
const bodyParser = require("body-parser"); // Body-parser is used to parse incoming request bodies
require("dotenv").config(); // Loading environment variables from a .env file

router.use(bodyParser.json()); // Using body-parser middleware to parse JSON requests
router.use(bodyParser.urlencoded({ extended: true })); // Parsing URL-encoded requests

// Initializing the OpenAI API client with the provided API key
const openai = new OpenAI({
    key: process.env.OPENAI_API_KEY,
});

// Defining a conversation context prompt
const conversationContextPrompt =
    "Answer yes or no to the question to the right of the colon:";

// Middleware function to log the timestamp of incoming requests
router.use((req, res, next) => {
    console.log(`Request received at ${new Date()}`);
    next();
});

// Endpoint to handle POST requests to "/chat"
router.post("/chat", async (req, res) => {
    // Extracting the user's message from the request body
    const message = req.body.message;

    try {
        // Calling the OpenAI API to complete the message using the text-davinci-003 model
        const response = await openai.completions.create({
            model: "text-davinci-003",
            prompt: conversationContextPrompt + message,
            max_tokens: 250, // Limiting the number of tokens in the response
        });

        // Extracting the raw text from the OpenAI API response
        const rawText = response.choices[0].text;

        // Sending the raw text response back to the client
        res.json({ response: rawText });
    } catch (error) {
        // Handling errors from the OpenAI API
        console.error("OpenAI API Error:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

// Exporting the router module for use in other files
module.exports = router;
