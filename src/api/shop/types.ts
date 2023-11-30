export interface FetchProductsParams {
  tag?: string;
  tags?: string[];
  page?: number;
  pageSize?: number;
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
  street?: string;
  city: string;
  postalCode: string;
  type: 'shipping';
  phoneNumber?: string;
}

export interface TransactionData {
  transactionItems: TransactionItem[];
  paymentMethodId: number;
  shipmentMethodId: number;
  addresses: Address[];
}

export interface OrderDetails {
  delivery_time: string;
  bank_transfer_account_number: string;
  bank_transfer_account_name: string;
  bank_transfer_address: string;
}
