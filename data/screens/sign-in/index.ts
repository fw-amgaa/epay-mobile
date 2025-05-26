import { Client } from "../../../app/auth/types";

export const getClients = async () => {
  try {
    const response = await fetch(`https://dev-switch.epayment.mn/api/clients`, {
      method: "GET",
      headers: {
        "x-api-key": "b05a38f2-6235-4cd8-b756-e0d851769975",
      },
    });

    const clients = await response.json();

    return {
      clients: clients.filter(
        (client: Client) => client.api_keys.length > 0
      ) as Client[],
      error: null,
    };
  } catch (error) {
    return { clients: [] as Client[], error: JSON.stringify(error) };
  }
};
