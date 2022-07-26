import { defineComponent } from "vue";

const base_path = "";
// lazy load components for better performance
const Main = () => {
  return import("../components/Main.vue");
};
const Information = () => {
  return import("../components/Information.vue");
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
];

export default routes;
