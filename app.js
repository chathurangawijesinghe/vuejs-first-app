new Vue({
	el: '#app',
  data: {
  	name: 'Max'
  },
  methods: {
  	changeName: function() {
    	this.name = 'Anna';
    }
  }
});