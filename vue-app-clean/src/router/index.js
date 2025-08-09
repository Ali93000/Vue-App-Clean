import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/views/Home/HomePage.vue";
import BasicsPage from "@/views/Basics/BasicsPage.vue";
import PropsPage from "@/views/Props/PropsPage.vue";
import EmitPage from "@/views/EmitEvent/EmitPage.vue";
import HooksPage from "@/views/Hooks/HooksPage.vue";
import SlotsPage from "@/views/Slots/SlotsPage.vue";
import TwoWayBindingPage from "@/views/TwoWayBinding/TwoWayBindingPage.vue";
import HttpComponent from "@/views/HTTPRequested/HttpRequestsPage.vue";
import CustomDirective from "@/views/CustomDirective/CustomDirectivePage.vue";
import MixinPage from "@/views/Mixins/UserMixinPage.vue";
import ComputedPage from "@/views/Computed/ComputedPage.vue";
import RouterPage from "@/views/Router/RouterPage.vue";
import DynamicRoutePage from "@/views/DynamicRoute/DynamicRoutePage.vue";
import ProfilePage from "@/views/DynamicRoute/ProfilePage.vue";
import NestedRoutesPage from "@/views/NestedRoute/NestedRoutePage.vue";
import MyLearningPage from "@/views/NestedRoute/MyLearningPage.vue";
import MyWishlistPage from "@/views/NestedRoute/MyWishlistPage.vue";
import NotFoundPage from "@/views/NotFound/NotFoundPage.vue";
import WatchPage from "@/views/Watchers/WatchPage.vue";
import ProvideInjectPage from "@/views/ProvideInject/ProvideInjectPage.vue";

const routes = [
  {
    name: "home",
    path: "/",
    component: HomePage,
    meta: {
      title: "Home",
      isActive: true,
      requiresParams: false,
    },
  },
  {
    name: "basics",
    path: "/basics",
    component: BasicsPage,
    meta: {
      title: "Basics",
      isActive: true,
      requiresParams: false,
    },
  },
  {
    name: "props",
    path: "/props",
    component: PropsPage,
    meta: {
      title: "Props",
      isActive: true,
      requiresParams: false,
    },
  },
  {
    name: "emit",
    path: "/emit",
    component: EmitPage,
    meta: {
      title: "Emit",
      isActive: true,
      requiresParams: false,
    },
  },
  {
    name: "hooks",
    path: "/hooks",
    component: HooksPage,
    meta: {
      title: "Hooks",
      isActive: true,
      requiresParams: false,
    },
  },
  {
    name: "slots",
    path: "/slots",
    component: SlotsPage,
    meta: {
      title: "Slots",
      isActive: true,
      requiresParams: false,
    },
  },
  {
    name: "two-way-binding",
    path: "/two-way-binding",
    component: TwoWayBindingPage,
    meta: {
      title: "TwoWayBinding",
      isActive: true,
      requiresParams: false,
    },
  },
  {
    name: "http-requests",
    path: "/products",
    component: HttpComponent,
    meta: {
      title: "Products",
      isActive: true,
      requiresParams: false,
    },
  },
  {
    name: "custom_directives",
    path: "/custom-directives",
    component: CustomDirective,
    meta: {
      title: "Custom Directives",
      isActive: true,
      requiresParams: false,
    },
  },
  {
    name: "users_mixins",
    path: "/users-mixins",
    component: MixinPage,
    meta: {
      title: "User Mixin",
      isActive: true,
      requiresParams: false,
    },
  },
  {
    name: "computed",
    path: "/computed",
    component: ComputedPage,
    meta: {
      title: "Computed",
      isActive: true,
      requiresParams: false,
    },
  },
  {
    name: "router",
    path: "/router",
    component: RouterPage,
    meta: {
      title: "Router",
      isActive: true,
      requiresParams: false,
    },
  },
  {
    name: "dynamic",
    path: "/dynamic/:userId/:userName",
    component: DynamicRoutePage,
    meta: {
      title: "Dynamic",
      isActive: true,
      requiresParams: true,
    },
  },
  {
    name: "profile",
    path: "/profile/:userId/:userName",
    component: ProfilePage,
    meta: {
      title: "Profile",
      isActive: false,
      requiresParams: true,
    },
  },
  {
    name: "nested-route",
    path: "/nested",
    component: NestedRoutesPage,
    meta: {
      title: "Nested Route",
      isActive: true,
      requiresParams: false,
    },
    children: [
      {
        name: "my_learning",
        path: "my-learning",
        component: MyLearningPage,
        meta: {
          title: "My Learning",
          isActive: true,
          requiresParams: false,
        },
      },
      {
        name: "my_wishlist",
        path: "my-wishlist",
        component: MyWishlistPage,
        meta: {
          title: "My Wishlist",
          isActive: true,
          requiresParams: false,
        },
      },
    ],
  },
  {
    name: "notfound",
    path: "/:pathMatch(.*)*",
    component: NotFoundPage,
    meta: {
      title: "My Wishlist",
      isActive: false,
      requiresParams: false,
    },
  },
  {
    name: "watch",
    path: "/watch",
    component: WatchPage,
    meta: {
      title: "Watchers",
      isActive: true,
      requiresParams: false,
    },
  },
  {
    name: "provide_inject",
    path: "/provide-inject",
    component: ProvideInjectPage,
    meta: {
      title: "provide-inject",
      isActive: true,
      requiresParams: false,
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
});
export default router;
