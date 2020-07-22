<template>
  <div>
    <Jumbotron :title="title" :content="content" />
    <Card :body="body" />
  </div>
</template>

<script>
import { Components } from "gd-sprest-bs";
import { Card, Jumbotron } from "gd-sprest-bs-vue";
import Strings from "../strings";
export default {
  components: { Card, Jumbotron },
  data() {
    return {
      title: Strings.ProjectName,
      content: Strings.ProjectDescription,
      body: [
        {
          title: "TODO",
          content: "Create the application"
        }
      ]
    };
  }
}
</script>