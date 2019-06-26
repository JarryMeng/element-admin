<template lang="html">
  <component v-bind="link">
    <slot></slot>
  </component>
</template>

<script>
const isExternal = path => (/^(https?:|mailto:|tel:)/.test(path))
export default {
  props: {
    to: {
      type: String,
      required: true
    }
  },
  computed: {
    link() {
      if (isExternal(this.to)) {
        return {
          is: 'a',
          href: this.to,
          target: '_blank'
        }
      } else {
        return {
          is: 'router-link',
          to: this.to
        }
      }

    }
  }
}
</script>

<style lang="css" scoped>

</style>
