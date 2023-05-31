<template>
    <div>
      <h1>Chatbot Vue.js</h1>
      <div class="chat-window">
        <div class="chat-log">
          <div v-for="(message, index) in chatLog" :key="index">
            <div class="message" :class="message.sender === 'bot' ? 'bot' : 'user'">
              {{ message.content }}
            </div>
          </div>
        </div>
        <div class="input-area">
          <input v-model="userMessage" @keyup.enter="sendMessage" placeholder="Escribe un mensaje" />
        </div>
      </div>
    </div>
</template>
  
<script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        userMessage: '',
        chatLog: [],
      };
    },
    methods: {
      sendMessage() {
        if (this.userMessage !== '') {
          this.chatLog.push({ content: this.userMessage, sender: 'user' });
  
          axios
            .post('URL_DEL_SERVICIO_DEL_CHATBOT', { message: this.userMessage })
            .then(response => {
              this.chatLog.push({ content: response.data.message, sender: 'bot' });
              this.userMessage = '';
            })
            .catch(error => {
              console.error(error);
            });
        }
      },
    },
  };
</script>
  
<style scoped>
  .chat-window {
    border: 1px solid #ccc;
    height: 300px;
    padding: 10px;
    margin-bottom: 20px;
    overflow-y: auto;
  }
  
  .message {
    margin-bottom: 10px;
    padding: 5px;
    border-radius: 5px;
  }
  
  .bot {
    background-color: #f2f2f2;
    text-align: left;
  }
  
  .user {
    background-color: #4CAF50;
    color: white;
    text-align: right;
  }
  
  .input-area input {
    width: 100%;
    padding: 10px;
    border: none;
  }
</style>
  