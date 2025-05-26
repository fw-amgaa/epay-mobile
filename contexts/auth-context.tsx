import { getClients } from "@/data/screens/sign-in";
import { LoginSchemaType } from "@/app/auth/sign-in";
import { Client, Customer } from "@/app/auth/types";
import { useQuery } from "@tanstack/react-query";
import { useContext, createContext, useState } from "react";

const initialState = {
  user: null as Customer | null,
  session: false,
  loading: false,
  clients: [] as Client[],
  signIn: async (_: LoginSchemaType) => {
    return { error: "", customer: null as Customer | null };
  },
  signOut: () => {},
};

export const AuthContext = createContext(initialState);

export const AuthProvider = ({ children }: any) => {
  const { data } = useQuery({ queryKey: ["clients"], queryFn: getClients });

  const [loading, setLoading] = useState(false);
  const [session, setSession] = useState(false);
  const [user, setUser] = useState<Customer | null>(null);

  const signIn = async (input: LoginSchemaType) => {
    setLoading(true);

    const client = data?.clients.find((client) =>
      client.api_keys.find((key) => key.key === input.clientKey)
    );

    const baseUrl = client?.api_url.replace(/\/message$/, "");

    const response = await fetch(baseUrl + "/customers", {
      headers: {
        "x-api-key": input.clientKey,
      },
    });

    const customers: Customer[] = await response.json();
    const customer = customers.find(
      (customer: Customer) =>
        customer.customerName === input.username &&
        customer.customerCode === input.password
    );

    console.log("hi", customers);

    if (!customer || !client) {
      return { error: "Customer name or code not valid.", customer: null };
    }

    setSession(true);
    setUser({
      ...customer,
      client,
    });

    return { error: "", customer };
  };

  const signOut = () => {
    setUser(null);
    setSession(false);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        session,
        loading,
        signIn,
        signOut,
        clients: data?.clients || [],
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
