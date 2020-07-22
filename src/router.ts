import Vue from "vue";
import VueRouter from "vue-router";
import Project from "./views/project.vue"

// Available Views
export const Views = {
    Home: () => { router.push("/"); }
}

// Use the router
Vue.use(VueRouter);

// Create the router
const router = new VueRouter({
    routes: [
        { name: "home", path: "/", component: Project }
    ]
});
export default router;