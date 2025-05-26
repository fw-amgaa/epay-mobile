export type GetPaymentsApiResponse = {
  data: Payment[];
  total: number;
};

export type Payment = {
  _id: string;
  qrcPayload: string;
  customerCode: string;
  customerName: string;
  paymentStatus: string;
  paymentStatusDate: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
  amount: number;
  currency: string;
  description: string;
  invoiceCode: string;
  trxId: string;
  accountCurrency: string;
  accountName: string;
  accountNumber: string;
  bankCode: string;
  beneficiaryBankAccounts: BankAccount[];
  paymentMethod: "BANK_ACCOUNT";
};

export type BankAccount = {
  _id: string;
  bankName: string;
  bankCode: string;
  accountNumber: string;
  accountName: string;
  accountCurrency: string;
  isDefault: boolean;
  customer: string;
};

export type BankInfo = {
  bankName: string;
  bankCode: string;
  accountNumber: string;
  accountName: string;
  accountCurrency: string;
  isDefault: boolean;
  _id: string;
};

export type Invoice = {
  _id: string;
  invoiceCode: string;
  qrCode: string;
  beneficiary: BankInfo;
  amount: number;
  currency: string;
  description: string;
  invoiceStatus: string;
  invoiceStatusDate: string;
  transactionType: string;
  isAllowCard: boolean;
  createdAt: string;
  updatedAt: string;
  paymentCode?: string;
  trxId?: string;
  paid?: BankInfo;
};
