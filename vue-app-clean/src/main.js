import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

var vueApp = createApp(App);
vueApp.use(store).use(router).mount("#app");

vueApp.directive("changeSize", (el, binding) => {
  el.style.fontSize = binding.value + "px";
});

vueApp.directive("changeColor", (el, binding) => {
  el.style.color = binding.value;
});
