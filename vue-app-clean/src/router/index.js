import { createRouter, createWebHashHistory } from "vue-router";
import HomePage from "@/views/Home/HomePage.vue";
import BasicsPage from "@/views/Basics/BasicsPage.vue";
import PropsPage from "@/views/Props/PropsPage.vue";
import EmitPage from "@/views/EmitEvent/EmitPage.vue";
import HooksPage from "@/views/Hooks/HooksPage.vue";
import SlotsPage from "@/views/Slots/SlotsPage.vue";
import TwoWayBindingPage from "@/views/TwoWayBinding/TwoWayBindingPage.vue";

const routes = [
  {
    name: "home",
    path: "/",
    component: HomePage,
  },
  {
    name: "basics",
    path: "/basics",
    component: BasicsPage,
  },
  {
    name: "props",
    path: "/props",
    component: PropsPage,
  },
  {
    name: "emit",
    path: "/emit",
    component: EmitPage,
  },
  {
    name: "hooks",
    path: "/hooks",
    component: HooksPage,
  },
  {
    name: "slots",
    path: "/slots",
    component: SlotsPage,
  },
  {
    name: "two-way-binding",
    path: "/two-way-binding",
    component: TwoWayBindingPage,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
