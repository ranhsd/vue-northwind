import axios from "axios";

const BASE_URL = "/Northwind/Northwind.svc/";

const client = axios.create({
  baseURL: BASE_URL,
});

async function getCustomers(params) {
  const { data } = await client.get("Customers", {
    params: {
      $select: "CustomerID,CompanyName,ContactName,Address",
      ...params,
    },
  });

  return data.value;
}

async function getCustomerOrders(customerId, params = {}) {
  const path = `Customers('${customerId}')/Orders`;

  const { data } = await client.get(path, {
    ...params,
  });

  return data ? data.value : null;
}

export { getCustomers, getCustomerOrders };
