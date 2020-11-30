<template>
  <v-container>
    <div class="text-h2">{{ count }}</div>
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
import { mapState, mapMutations, mapGetters, mapActions } from "vuex";
export default {
  name: "Counter",
  computed: {
    ...mapState(["count"]),
    ...mapGetters(["counterSquare"]),
  },
  methods: {
    ...mapMutations(["increment", "incrementWithParams"]),
    incrementCounter() {
        this.increment();
    },
    _startTimer() {
      this.startTimer();
    },
    ...mapActions(["incrementAfter5Seconds", "startTimer"]),
  },
};
</script>

<style lang="scss" scoped></style>
