<template>
  <f7-app :params="f7Params">
    <f7-view url="/" :main="true" class="safe-areas" :master-detail-breakpoint="800"></f7-view>
  </f7-app>
</template>
<script>
import routes from "./routes/index";

export default {
  data() {
    // Demo Theme
    let theme = "auto";
    if (document.location.search.indexOf("theme=") >= 0) {
      theme = document.location.search.split("theme=")[1].split("&")[0];
    }
    return {
      f7Params: {
        id: "io.framework7.testapp",
        theme,
        routes,
        popup: {
          closeOnEscape: true
        },
        sheet: {
          closeOnEscape: true
        },
        popover: {
          closeOnEscape: true
        },
        actions: {
          closeOnEscape: true
        }
      }
    };
  }
};
</script>