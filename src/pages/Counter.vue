<template>
  <v-container>
    <div class="text-h2">{{ count }}</div>
    <div class="text-h2">{{ count2 }}</div>
    <div class="text-h2">{{ count3 }}</div>
    <div class="text-h2">{{ counterSquare }}</div>
    <v-btn color="primary" class="mt-4" @click="incrementCounter"
      >Increase</v-btn
    >

    <v-btn color="primary" class="mt-4 ml-4" @click="$store.commit('decrement')"
      >Decrease</v-btn
    >

    <v-btn color="primary" class="mt-4 ml-4" @click="_startTimer"
      >Start Timer</v-btn
    >

    <v-btn color="primary" class="mt-4 ml-4">Square Counter</v-btn>

    <v-btn
      color="primary"
      class="mt-4 ml-10"
      :to="{
        name: 'counter2',
      }"
      >Go to counter 2</v-btn
    >
  </v-container>
</template>

<script>
import { mapFields } from "vuex-map-fields";
import { mapActions } from "vuex";
export default {
  name: "Counter",
  computed: {
    ...mapFields("counter", ["count", "count2", "count3"]),
    // ...mapState("counter", ["count"]),
    // ...mapGetters("counter", ["counterSquare"]),
  },
  methods: {
    // ...mapMutations("counter", ["increment", "incrementWithParams"]),
    ...mapActions("counter", ["incrementAfter5Seconds", "startTimer"]),
    incrementCounter() {
      this.count++;
      this.count2 += 2;
      this.count3 += 3;
      // this.increment();
    },
    _startTimer() {
      this.startTimer();
    },
  },
};
</script>

<style lang="scss" scoped></style>
