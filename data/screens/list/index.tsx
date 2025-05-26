import { useAuth } from "@/contexts/auth-context";
import { useQuery } from "@tanstack/react-query";
import { BankAccount, GetPaymentsApiResponse, Payment } from "./types";

export const getPayments = async (url: string, apiKey: string) => {
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "x-api-key": apiKey,
      },
    });

    const data: GetPaymentsApiResponse = await response.json();

    return { payments: data.data as Payment[], error: null };
  } catch (error) {
    return { payments: [] as Payment[], error: JSON.stringify(error) };
  }
};

export const qrDecrypt = async (url: string, apiKey: string, qr: string) => {
  const response = await fetch(`${url}/qr-decrypt`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": apiKey,
    },
    body: JSON.stringify({ qrcPayload: qr }),
  });

  if (response.status !== 201) {
    return { data: null, error: "Error decrypting QR code" };
  }

  const json = await response.json();

  return { data: json, error: null };
};

export const usePayments = () => {
  const { user } = useAuth();

  const { data, isLoading, error } = useQuery({
    queryKey: ["payments"],
    queryFn: () =>
      getPayments(
        `${user?.client?.api_url.replace(/\/message$/, "")}/payments`,
        user?._id!
      ),
    enabled: !!user,
  });

  return { payments: data?.payments || [], isLoading, error };
};

export const getBankAccounts = async (url: string, apiKey: string) => {
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "x-api-key": apiKey,
      },
    });

    const data: BankAccount[] = await response.json();

    return { bankAccounts: data, error: null };
  } catch (error) {
    return { bankAccounts: [] as BankAccount[], error: JSON.stringify(error) };
  }
};

export const useBankAccounts = () => {
  const { user } = useAuth();

  const { data, isLoading, error } = useQuery({
    queryKey: ["bank-accounts"],
    queryFn: () =>
      getBankAccounts(
        `${user?.client?.api_url.replace(/\/message$/, "")}/bank-accounts`,
        user?._id!
      ),
    enabled: !!user,
  });

  return { bankAccounts: data?.bankAccounts || [], isLoading, error };
};

export const onPaid = async (
  url: string,
  apiKey: string,
  paymentCode: string,
  bankAccountId: string
) => {
  const response = await fetch(`${url}/on-paid`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": apiKey,
    },
    body: JSON.stringify({ paymentCode, bankAccountId }),
  });

  if (response.status !== 201) {
    console.log("Error response", await response.json());
    return { data: null, error: "Error payment on this QR code" };
  }

  const json = await response.json();

  return { data: json, error: null };
};
