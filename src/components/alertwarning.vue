<template>
    <nav class="navbar navbar-expand fixed-top" style="background-color: #F9CC02;">
      <div class="collapse navbar-collapse" id="navbarsExampleDefault">
      </div>
    </nav>
  </template>
  
  <script>
  import Swal from 'sweetalert2';
  
  export default {
    data() {
      return {
        userID: localStorage.getItem('userid'), // Replace with actual user ID or get it dynamically
        warnings: [],
        countdown: 5
      };
    },
    mounted() {
      this.fetchWarnings();
    },
    methods: {
      async fetchWarnings() {
        const URL = `${import.meta.env.VITE_API2}getwarning/${this.userID}`;
        try {
          const response = await fetch(URL);
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const data = await response.json();
          this.warnings = data;
          this.showWarnings();
        } catch (error) {
          console.error('There was a problem with the fetch operation:', error);
        }
      },
      showWarnings() {
        const warningContent = this.warnings.map(warning => `
          <p><strong>${warning.Header}</strong></p>
          <p>${warning.Body}</p>
          <hr>
        `).join('');
  
        const swalInstance = Swal.fire({
          title: 'Warnings',
          html: `${warningContent}<p>Closing in <span id="countdown">${this.countdown}</span> seconds</p>`,
          icon: 'info',
          confirmButtonText: 'Close now',
          didOpen: () => {
            const countdownElement = Swal.getHtmlContainer().querySelector('#countdown');
            this.startCountdown(countdownElement, swalInstance);
          }
        });
      },
      startCountdown(element, swalInstance) {
        const interval = setInterval(() => {
          this.countdown -= 1;
          element.textContent = this.countdown;
          if (this.countdown <= 0) {
            clearInterval(interval);
            swalInstance.close();
          }
        }, 1000);
      }
    }
  };
  </script>
  
  
  