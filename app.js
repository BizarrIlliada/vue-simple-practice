const app = Vue.createApp({
  data() {
    return {
      firstName: '',
      lastName: '',
      // fullName: '',
      counter: 0,
    }
  },

  methods: {
    add() {
      this.counter++;
    },

    reduce() {
      this.counter--;
    },

    clearFirstName() {
      console.log('Name was cleared!');
      this.firstName = ''
    },

    clearLastName() {
      console.log('Last name was cleared!');
      this.lastName = ''
    },
  },

  computed: {
    fullName() {
      console.log('Full name was computed');
      if (this.firstName && this.lastName) {
        return this.firstName + ' ' + this.lastName;
      } else {
        return '';
      }
    }
  },

  watch: {
    counter(newVal, oldVal) {
      if (newVal > 50) {
        this.counter = 0;
      }

      if (newVal < -50) {
        this.counter = 1;
      }
    }
  },
})

app.mount('#vueApp')