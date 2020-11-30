<template>
  <v-container>
    <v-row justify="center">
      <v-col
        cols="12"
        lg="3"
        md="4"
        sm="12"
        v-for="order in orders"
        :key="order.OrderID"
      >
        <v-card
          :color="
            order.OrderID === parseInt(selectedOrderId) ? 'primary' : 'white'
          "
          :dark="order.OrderID === parseInt(selectedOrderId)"
          hover
          @click="onOrderClicked(order)"
        >
          <v-card-title>
            {{ `Order Number ${order.OrderID}` }}
          </v-card-title>
          <v-card-text>
            <v-list-item v-for="item in orderList" :key="item.title">
              <v-list-item-content>
                <v-list-item-title>{{ item.title }}</v-list-item-title>
                <v-list-item-subtitle>{{
                  order[item.value]
                }}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row justify="center" class="mt-12" v-if="selectedOrderId && !loading">
      <!-- {{ selectedOrderId }} -->
      <router-view></router-view>
    </v-row>
  </v-container>
</template>

<script>
import { getCustomerOrders } from "../api";

export default {
  name: "CustomerOrders",
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  created() {
    this.refresh();
  },
  data() {
    return {
      loading: false,
      orders: [],
      selectedOrderId: undefined,
      orderList: [
        {
          title: "Shipment Name",
          value: "ShipName",
        },
        {
          title: "Shipment Address",
          value: "ShipAddress",
        },
        {
          title: "Shipment City",
          value: "ShipCity",
        },
      ],
    };
  },
  methods: {
    async refresh() {
      // get cutsomer orders from api
      try {
        this.loading = true;
        this.orders = await getCustomerOrders(this.id);
      } finally {
        this.loading = false;
      }
    },
    onOrderClicked(order) {
      this.$router.push({
        name: "selected-order",
        params: {
          orderId: order.OrderID,
        },
      });
    },
  },
  watch: {
    $route: {
      immediate: true,
      handler(value) {
        const { params } = value;

        this.selectedOrderId = params.orderId ? params.orderId : undefined;
      },
    },
  },
};
</script>

<style lang="scss" scoped></style>
