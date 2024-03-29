<template lang="pug">
v-card
  .row.pointer(@click="show = !show")
    v-col(cols="9")
      v-card-title {{ setName || field.label }}
      v-card-subtitle
        a(:href="docsUrl", target="_blank", @click.stop) {{ setTypeBeautified }}

    v-col.d-flex.align-center.justify-end(cols="3")
      ElementButtons(:path="path")

  transition(name="fade")
    v-card-text(v-show="show")
      TextAttributeInput(
        v-if="setType === 'item-set'",
        :path="path",
        :attributes="['name']",
        :rules="['requiredText', 'noSpaces']"
      )
      RecursiveComponentRender(:path="path", :show="show")
      CardItems(v-if="itemsPath.length > 0" :path="itemsPath")
</template>

<script lang="ts">
import Vue from 'vue';
import { Element } from '@reginaldlee/xml-js';
import * as ModuleContentType from '../../store/ModuleContentType';
import ElementButtons from '../buttons/ElementButtons.vue';
import TextAttributeInput from '../inputs/TextAttributeInput.vue';
import CardItems from '../cards/CardItems.vue';

export default Vue.extend({
  name: 'FieldOrItemSet',
  components: { CardItems, TextAttributeInput, ElementButtons },
  props: {
    path: Array,
    field: Object, // label, hint
  },
  data: () => ({
    show: false,
  }),
  beforeCreate() {
    if (this.$options && this.$options.components) {
      this.$options.components.RecursiveComponentRender = require('../RecursiveComponentRender.vue').default;
    }
  },
  mounted() {
    if (!this.setItemsHasElements()) this.show = true;
  },
  methods: {
    setItemsHasElements() {
      const items = ModuleContentType.getContentTypeByPath(this.$store)(
        this.itemsPath,
      ) as Element;

      return (items?.elements || []).length > 0;
    },
  },
  computed: {
    elementsPath(): string[] {
      return [...(this.path as string[]), 'elements'];
    },
    setName(): string {
      const path = [...this.path, 'attributes', 'name'] as string[];
      return ModuleContentType.getContentTypeByPath(this.$store)(path) || '';
    },
    setType(): string {
      const path = [...this.path, 'name'] as string[];
      return ModuleContentType.getContentTypeByPath(this.$store)(path) || '';
    },
    setTypeBeautified(): string {
      return this.setType
        .split('-')
        .map((s) => s[0].toUpperCase() + s.slice(1))
        .join('');
    },
    itemsPath(): (string | number)[] {
      const elements = ModuleContentType.getContentTypeByPath(this.$store)(
        this.elementsPath,
      ) as Array<Element>;

      const itemsIndexInElements = elements.findIndex(
        (el: Element) => el.name === 'items',
      );

      return itemsIndexInElements >= 0
        ? [...this.elementsPath, itemsIndexInElements]
        : [];
    },
    docsUrl(): string {
      const setType = this.setType.replace('-', '_').toLowerCase();
      return `https://developer.enonic.com/docs/xp/stable/cms/sets#${setType}`;
    },
  },
});
</script>

<style lang="scss" scoped>
</style>
