import { createRouter, createWebHistory } from "@ionic/vue-router";
import HomePage from "../views/HomePage.vue";

const routes = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    name: "Home",
    component: HomePage,
  },
  {
    path: "/organize",
    component: () => import("../components/Meetups/CreateMeetup.vue"),
  },
  {
    path: "/view",
    component: () => import("../components/Meetups/MeetUps.vue"),
  },
  {
    path: "/view/:meetupId",
    name: "meetupDetails",
    props: true,
    component: () => import("../components/Meetups/MeetupDetails.vue"),
  },
  {
    path: "/login",
    component: () => import("../components/User/LogIn.vue"),
  },
  {
    path: "/register",
    component: () => import("../components/User/SignUp.vue"),
  },
  {
    path: "/profile",
    component: () => import("../components/User/UserProfile.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
