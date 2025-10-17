// Core TypeScript types for LUXE storefront

export interface Product {
  id: string;
  title: string;
  description: string;
  vendor: string;
  productType: string;
  tags: string[];
  handle: string;
  images: ProductImage[];
  variants: ProductVariant[];
  options: ProductOption[];
  priceRange: PriceRange;
  compareAtPriceRange: PriceRange;
  availableForSale: boolean;
  seo: SEO;
  createdAt: string;
  updatedAt: string;
}

export interface ProductImage {
  id: string;
  url: string;
  altText: string | null;
  width: number;
  height: number;
}

export interface ProductVariant {
  id: string;
  title: string;
  sku: string;
  available: boolean;
  quantityAvailable: number;
  price: Money;
  compareAtPrice: Money | null;
  selectedOptions: SelectedOption[];
  image: ProductImage | null;
  unitPrice: Money | null;
}

export interface ProductOption {
  id: string;
  name: string;
  values: string[];
}

export interface SelectedOption {
  name: string;
  value: string;
}

export interface Money {
  amount: string;
  currencyCode: string;
}

export interface PriceRange {
  minVariantPrice: Money;
  maxVariantPrice: Money;
}

export interface SEO {
  title: string | null;
  description: string | null;
}

export interface Cart {
  id: string;
  checkoutUrl: string;
  cost: CartCost;
  lines: CartLine[];
  totalQuantity: number;
  buyerIdentity: CartBuyerIdentity;
  note: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface CartLine {
  id: string;
  quantity: number;
  cost: CartLineCost;
  merchandise: Merchandise;
  attributes: Attribute[];
}

export interface Merchandise {
  id: string;
  title: string;
  product: Product;
  selectedOptions: SelectedOption[];
}

export interface CartCost {
  totalAmount: Money;
  subtotalAmount: Money;
  totalTaxAmount: Money | null;
  totalDutyAmount: Money | null;
}

export interface CartLineCost {
  totalAmount: Money;
  subtotalAmount: Money;
}

export interface CartBuyerIdentity {
  email: string | null;
  phone: string | null;
  countryCode: string | null;
}

export interface Attribute {
  key: string;
  value: string;
}

export interface Collection {
  id: string;
  title: string;
  description: string;
  handle: string;
  image: ProductImage | null;
  products: ProductConnection;
  seo: SEO;
  updatedAt: string;
}

export interface ProductConnection {
  edges: ProductEdge[];
  pageInfo: PageInfo;
}

export interface ProductEdge {
  node: Product;
  cursor: string;
}

export interface PageInfo {
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  startCursor: string;
  endCursor: string;
}

export interface Customer {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  phone: string | null;
  acceptsMarketing: boolean;
  defaultAddress: Address | null;
  addresses: AddressConnection;
  orders: OrderConnection;
}

export interface Address {
  id: string;
  firstName: string;
  lastName: string;
  company: string | null;
  address1: string;
  address2: string | null;
  city: string;
  province: string | null;
  country: string;
  zip: string;
  phone: string | null;
}

export interface AddressConnection {
  edges: AddressEdge[];
}

export interface AddressEdge {
  node: Address;
}

export interface OrderConnection {
  edges: OrderEdge[];
}

export interface OrderEdge {
  node: Order;
}

export interface Order {
  id: string;
  name: string;
  orderNumber: number;
  processedAt: string;
  financialStatus: OrderFinancialStatus;
  fulfillmentStatus: OrderFulfillmentStatus;
  currentTotalPrice: Money;
  lineItems: OrderLineItemConnection;
}

export interface OrderLineItemConnection {
  edges: OrderLineItemEdge[];
}

export interface OrderLineItemEdge {
  node: OrderLineItem;
}

export interface OrderLineItem {
  title: string;
  quantity: number;
  variant: ProductVariant;
}

export enum OrderFinancialStatus {
  PENDING = 'PENDING',
  AUTHORIZED = 'AUTHORIZED',
  PARTIALLY_PAID = 'PARTIALLY_PAID',
  PAID = 'PAID',
  PARTIALLY_REFUNDED = 'PARTIALLY_REFUNDED',
  REFUNDED = 'REFUNDED',
  VOIDED = 'VOIDED',
}

export enum OrderFulfillmentStatus {
  UNFULFILLED = 'UNFULFILLED',
  PARTIALLY_FULFILLED = 'PARTIALLY_FULFILLED',
  FULFILLED = 'FULFILLED',
}

export interface Filters {
  productTypes: string[];
  vendors: string[];
  tags: string[];
  priceRange: [number, number];
  available: boolean;
}

export interface SearchParams {
  query?: string;
  sortBy?: 'PRICE' | 'CREATED_AT' | 'BEST_SELLING' | 'RELEVANCE';
  sortOrder?: 'ASC' | 'DESC';
  filters?: Partial<Filters>;
  after?: string;
  before?: string;
  first?: number;
  last?: number;
}

export interface AppState {
  cart: Cart | null;
  customer: Customer | null;
  isLoading: boolean;
  error: string | null;
}