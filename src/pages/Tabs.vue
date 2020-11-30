<template>
  <div>
    <v-app-bar app fixed>
      <v-tabs v-model="currentTab" grow>
        <v-tab v-for="i in 2" :key="i" :href="`#tab-${i}`">
          Item {{ i }}
        </v-tab>
      </v-tabs>
    </v-app-bar>

    <v-tabs-items v-model="currentTab">
      <v-tab-item value="tab-1">
        <div>
          <div class="d-flex pa-4">
            <div style="height: 60px; width: 50%; background-color: red;"></div>
            <div
              style="height: 60px; width: 50%; background-color: red;"
              class="ml-4"
            ></div>
          </div>
          <ul class="list">
            <li v-for="i in 100" :key="i">
              {{ `Item number ${i}` }}
            </li>
          </ul>
        </div>
      </v-tab-item>
      <v-tab-item value="tab-2">
        Tab 2 content
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>

<script>
export default {
  name: "Tabs",
  data() {
    return {
      currentTab: "tab-1",
    };
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.sticky {
  top: 0;
  right: 0;
  left: 0;
  overflow-y: hidden;
}

.list {
  max-height: calc(100vh - 110px - 56px);
  overflow-y: auto;
}
</style>
