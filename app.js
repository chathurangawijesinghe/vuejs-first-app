Vue.component('app-username', {
  props: ['username'],
  data: function() {
    return {
      // username: 'Test'
    };
  },
  template: '<p>{{ username }}</p>'
});

new Vue({
	el: '#app',
  data: {
    name: 'Max',
    elements: []
  },
  methods: {
  	changeName: function() {
    	this.name = 'Anna';
    },
    addElement: function() {
      this.elements.push(this.elements.length + 1);
    },
    getColor: function(number) {
      return number % 2 == 0 ? 'green' : 'red';
    }
  }
});

new Vue({
  el: '#app2',
  data: {
    message: 'Hello there'
  }
});