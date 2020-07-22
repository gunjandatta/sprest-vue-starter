import Vue from "vue";
import App from "./app.vue";
import { Configuration } from "./cfg";
import router from "./router";
import store from "./store";
import Strings from "./strings";

// Create the global variable for this solution
window[Strings.GlobalVariable] = {
    Configuration
}

// Render the app
new Vue({
    el: "#" + Strings.AppElementId,
    render: h => h(App),
    router,
    store
});