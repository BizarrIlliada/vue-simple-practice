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
    
      return this.firstName + ' ' + this.lastName;
    }
  },

  watch: {
    // firstName(newVal, oldVal) {
    //   this.fullName = newVal + ' ' + this.lastName;
    // }
  },
})

app.mount('#vueApp')