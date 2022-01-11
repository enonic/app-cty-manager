<template lang="pug">
v-card
  .row(@click="show = !show")
    v-col(cols="9")
      v-card-title {{ setName || field.label }}
      v-card-subtitle {{ setType }}

    v-col.d-flex.align-center.justify-end(cols="3")
      ElementButtons(:path="path")

  v-card-text(v-show="show")
    TextAttributeInput(
      v-if="setType === 'item-set'",
      :path="path",
      :attributes="['name']",
      :rules="['requiredText', 'noSpaces']"
    )
    RecursiveComponentRender(:path="path")
    CardItems(:path="itemsPath")
</template>

<script lang="ts">
import Vue from "vue";
import * as ModuleContentType from "../../store/ModuleContentType";
import ElementButtons from "../buttons/ElementButtons.vue";
import TextAttributeInput from "../inputs/TextAttributeInput.vue";
import CardItems from "../cards/CardItems.vue";
import { Element } from "@reginaldlee/xml-js";

export default Vue.extend({
  name: "FieldOrItemSet",
  components: { CardItems, TextAttributeInput, ElementButtons },
  props: {
    path: Array,
    field: Object, // label, hint
  },
  data: () => ({
    show: true,
  }),
  beforeCreate() {
    ((this.$options || {}).components || {}).RecursiveComponentRender =
      require("../RecursiveComponentRender.vue").default;
  },
  created() {},
  methods: {},
  computed: {
    elementsPath(): string[] {
      return [...(this.path as string[]), "elements"];
    },
    setName(): string {
      const path = [...this.path, "attributes", "name"] as string[];
      return ModuleContentType.getContentTypeByPath(this.$store)(path) || "";
    },
    setType(): string {
      const path = [...this.path, "name"] as string[];
      return ModuleContentType.getContentTypeByPath(this.$store)(path) || "";
    },
    itemsPath(): (string | number)[] {
      const elements = ModuleContentType.getContentTypeByPath(this.$store)(
        this.elementsPath
      ) as Array<Element>;

      const itemsIndexInElements = elements.findIndex(
        (el: Element) => el.name === "items"
      );

      return itemsIndexInElements >= 0
        ? [...this.elementsPath, itemsIndexInElements]
        : [];
    },
  },
});
</script>

<style lang="scss" scoped>
</style>