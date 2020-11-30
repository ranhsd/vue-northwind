<template>
  <div>
    <div class="text-h5 font-weight-bold" v-if="orderId">{{ orderId }}</div>
  </div>
</template>

<script>
export default {
  name: "SelectedOrder",
  props: {
    orderId: {
      type: Number,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped></style>
