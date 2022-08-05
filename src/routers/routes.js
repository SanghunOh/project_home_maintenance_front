import { defineComponent } from "vue";

const base_path = "";
// lazy load components for better performance
const Main = () => {
  return import("../components/Main.vue");
};
const Information = () => {
  return import("../components/Information.vue");
};
const UserLogin = () => {
  return import("../components/users/UserLogin.vue");
};
const UserRegister = () => {
  return import("../components/users/UserRegister.vue");
};
const NotFound = defineComponent({
  template: "<div>Not Found</div>",
});
const routes = [
  {
    path: base_path + "/:pathMatch(.*)*",
    name: "NotFound",
    component: NotFound,
  },
  { path: base_path + "/", redirect: "/main", name: "Home" },
  {
    path: base_path + "/main",
    component: Main,
    name: "Main",
  },
  {
    path: base_path + "/information",
    component: Information,
    name: "Information",
  },
  {
    path: base_path + "/login",
    component: UserLogin,
    name: "UserLogin",
  },
  {
    path: base_path + "/register",
    component: UserRegister,
    name: "UserRegister",
  },
];

export default routes;
