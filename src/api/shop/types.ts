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

// Address interface reprezentujący informacje o adresie
export interface Address {
  firstName: string;
  lastName: string;
  street?: string;
  number: string;
  city: string;
  postalCode: string;
  type: 'shipping' | 'billing'; // Dodano typ "billing" dla zróżnicowania adresów
  phoneNumber?: string;
}

// TransactionData interface reprezentujący całe dane transakcji
export interface TransactionData {
  transactionItems: TransactionItem[];
  paymentMethodId: number;
  shipmentMethodId: number;
  addresses: Address[];
}
