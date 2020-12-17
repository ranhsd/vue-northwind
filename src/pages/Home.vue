<template>
  <div class="home">
    <v-app-bar color="primary" app dark>
      <v-toolbar-title>Northwind Demo</v-toolbar-title>

      <v-spacer></v-spacer>
    </v-app-bar>

    <v-container fluid class="px-12">
      <v-card max-height="calc(100vh - 220px)" class="mt-12">
        <v-data-table
          :loading="loading"
          :items-per-page="15"
          loading-text="Loading customers..."
          :items="customersList || []"
          :headers="headers"
          @click:row="onCustomerSelected"
        >
          <template v-slot:header.CompanyName="{ header }">
            <span>{{ header.text }}</span>
            <v-menu
              v-model="menu"
              :close-on-content-click="false"
              :nudge-width="200"
              offset-x
            >
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  v-on="on"
                  v-bind="attrs"
                  x-small
                  text
                  color="secondary"
                  class="ml-2"
                >
                  <v-icon small>mdi-filter</v-icon>
                </v-btn>
              </template>
              <v-card flat>
                <v-card-text>
                  <div class="d-flex align-center">
                    <v-text-field
                      v-model="cnFilter"
                      placeholder="Enter customer id"
                      class="mr-2"
                    ></v-text-field>
                    <v-btn @click="filter" small color="primary">Go</v-btn>
                  </div>
                </v-card-text>
              </v-card>
            </v-menu>
          </template>
        </v-data-table>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import { mapFields } from 'vuex-map-fields';

export default {
  name: "Home",
  components: {},
  created() {
    this.refresh();
  },
  data() {
    return {
      loading: false,
      firstName: "Ran",
      lastName: "Hassid",
      menu: false,
      cnFilter: "",
      headers: [
        {
          text: "Customer ID",
          value: "CustomerID",
          sortable: false,
        },
        {
          text: "Company Name",
          sortable: false,
          value: "CompanyName",
        },
        {
          text: "Contact Name",
          sortable: false,
          value: "ContactName",
        },
        {
          text: "Address",
          sortable: false,
          value: "Address",
        },
      ],
      items: null,
    };
  },
  computed: {
    ...mapFields("customers", ["customersList"]),
    // ...mapState("customers", ["customersList"]),
    fullName() {
      return this.firstName + " " + this.lastName;
    },
  },
  methods: {
    ...mapActions("customers", ["getCustomers"]),
    async refresh() {

      // if (this.customersList && this.customersList.length) {
      //   return;
      // }
      
      try {
        this.loading = true;
        await this.getCustomers();
      } finally {
        this.loading = false;
      }
    },
    async filter() {
      this.menu = false;

      if (!this.cnFilter) {
        this.refresh();
        return;
      }

      try {
        this.items = await getCustomers({
          $filter: `substringof('${this.cnFilter}',CompanyName) eq true`,
        });
      } catch (error) {}
    },

    onCustomerSelected(item) {
      this.$router.push({
        name: "customer-orders",
        params: {
          id: item.CustomerID,
        },
      });
    },
  },
  watch: {},
};
</script>

<style scoped>
.home {
  height: 100%;
}
</style>
