<template lang="pug">
v-card
  .row
    v-col(cols="9")
      v-card-title {{ inputName }}
      v-card-subtitle {{ inputType }}

    v-col.d-flex.align-center.justify-end(cols="3")
      ElementButtons(:path="path")

  v-card-text(v-show="show")
    TextAttributeInput(
      :path="path",
      :attributes="['name']",
      :rules="['requiredText', 'noSpaces']"
    )
    RecursiveComponentRender(:path="path")
</template>

<script lang="ts">
import Vue from "vue";
import ElementButtons from "../buttons/ElementButtons.vue";
import TextAttributeInput from "../inputs/TextAttributeInput.vue";
import TextInput from "../inputs/TextInput.vue";
import * as ModuleContentType from "../../store/ModuleContentType";

export default Vue.extend({
  name: "CardInput",
  components: { TextInput, TextAttributeInput, ElementButtons },
  props: {
    path: Array,
  },
  data: () => ({
    show: true,
  }),
  beforeCreate() {
    ((this.$options || {}).components || {}).RecursiveComponentRender =
      require("../RecursiveComponentRender.vue").default;
  },
  computed: {
    inputName(): string {
      const path = [...this.path, "attributes", "name"] as string[];
      return ModuleContentType.getContentTypeByPath(this.$store)(path) || "";
    },
    inputType(): string {
      const path = [...this.path, "attributes", "type"] as string[];
      return ModuleContentType.getContentTypeByPath(this.$store)(path) || "";
    },
  },
});
</script>

<style lang="scss"></style>