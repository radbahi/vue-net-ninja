const app = Vue.createApp({
  //data and functions go here. vue will inject this template into the app div in app.js
  data() {
    //using this data function makes it so the values within can be changed instead of hardcoding
    return {
      showBooks: true,
      title: "The Final Empire",
      author: "Brandon Sanderson",
      age: 45,
    };
  },
  //any functions or methods we wanna run for this component, we add below to methods
  methods: {
    changeTitle(title) {
      //this references this component itself which is why we use it in methods
      // this.title = "Words of radiance";
      //we passed in an argument in index.html
      this.title = title;
    },
    toggleShowBooks() {
      this.showBooks = !this.showBooks;
    },
  },
});
//basic boilerplate for mounting an app with vue
app.mount("#app");
