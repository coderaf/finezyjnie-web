export interface FetchProductsParams {
  tag?: string;
  tags?: string[];
  page?: number;
  pageSize?: number;
  category?: string;
}

export interface ShipmentMethod {
  id: number;
  name: string;
  price: number;
  displayPrice: string;
  active: boolean;
}

export interface PaymentMethod {
  id: number;
  name: string;
  active: boolean;
}

export interface TransactionItem {
  productId: number;
  quantity: number;
}

export interface Address {
  firstName: string;
  lastName: string;
  street: string;
  city: string;
  postalCode: string;
  type: string;
  phoneNumber: string;
  email: string;
}

export interface TransactionData {
  transactionItems: TransactionItem[];
  paymentMethodId: number;
  shipmentMethodId: number;
  addresses: Address[];
  notes?: string;
}

export interface ShopConfig {
  delivery_time: string;
  bank_transfer_account_number: string;
  bank_transfer_account_name: string;
  bank_transfer_address: string;
}
