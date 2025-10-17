import { createStorefrontApiClient } from '@shopify/storefront-api-client';
import { 
  Product, 
  ProductConnection, 
  Collection, 
  Cart, 
  CartLine,
  Customer,
  SearchParams 
} from '@/types';
import { 
  GET_PRODUCTS_QUERY, 
  GET_PRODUCT_QUERY, 
  GET_COLLECTIONS_QUERY,
  CREATE_CART_MUTATION,
  ADD_TO_CART_MUTATION,
  UPDATE_CART_LINES_MUTATION,
  REMOVE_FROM_CART_MUTATION,
  GET_CART_QUERY,
  CUSTOMER_LOGIN_MUTATION,
  CUSTOMER_REGISTER_MUTATION,
  GET_CUSTOMER_QUERY
} from './queries';

class ShopifyClient {
  private client: ReturnType<typeof createStorefrontApiClient>;

  constructor() {
    if (!process.env.SHOPIFY_STORE_DOMAIN || !process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN) {
      throw new Error('Shopify environment variables are not configured');
    }

    this.client = createStorefrontApiClient({
      storeDomain: process.env.SHOPIFY_STORE_DOMAIN,
      apiVersion: '2024-01',
      publicAccessToken: process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN,
    });
  }

  async getProducts(params: SearchParams = {}): Promise<ProductConnection> {
    const variables = {
      first: params.first || 20,
      query: params.query || '',
      sortKey: params.sortBy || 'CREATED_AT',
      reverse: params.sortOrder === 'DESC',
      after: params.after,
      before: params.before,
    };

    const response = await this.client.request(GET_PRODUCTS_QUERY, variables);
    return response.data.products;
  }

  async getProduct(handle: string): Promise<Product> {
    const response = await this.client.request(GET_PRODUCT_QUERY, { handle });
    return response.data.product;
  }

  async getCollections(): Promise<Collection[]> {
    const response = await this.client.request(GET_COLLECTIONS_QUERY, {
      first: 20,
    });
    return response.data.collections.edges.map((edge: any) => edge.node);
  }

  async getCollection(handle: string): Promise<Collection> {
    const response = await this.client.request(GET_COLLECTION_QUERY, { handle });
    return response.data.collection;
  }

  async createCart(): Promise<Cart> {
    const response = await this.client.request(CREATE_CART_MUTATION);
    return response.data.cartCreate.cart;
  }

  async getCart(cartId?: string): Promise<Cart | null> {
    if (!cartId) {
      return null;
    }

    const response = await this.client.request(GET_CART_QUERY, { cartId });
    return response.data.cart;
  }

  async addToCart(
    cartId: string | undefined, 
    merchandiseId: string, 
    quantity: number
  ): Promise<Cart> {
    const variables = {
      cartId,
      lines: [
        {
          merchandiseId,
          quantity,
        },
      ],
    };

    const response = await this.client.request(ADD_TO_CART_MUTATION, variables);
    return response.data.cartLinesAdd.cart;
  }

  async updateCartLines(
    cartId: string, 
    lines: Array<{ id: string; quantity: number }>
  ): Promise<Cart> {
    const variables = {
      cartId,
      lines,
    };

    const response = await this.client.request(UPDATE_CART_LINES_MUTATION, variables);
    return response.data.cartLinesUpdate.cart;
  }

  async removeFromCart(cartId: string, lineIds: string[]): Promise<Cart> {
    const variables = {
      cartId,
      lineIds,
    };

    const response = await this.client.request(REMOVE_FROM_CART_MUTATION, variables);
    return response.data.cartLinesRemove.cart;
  }

  async customerLogin(email: string, password: string): Promise<Customer | null> {
    const response = await this.client.request(CUSTOMER_LOGIN_MUTATION, {
      email,
      password,
    });

    if (response.data.customerAccessTokenCreate.customerAccessToken) {
      return this.getCustomer(response.data.customerAccessTokenCreate.customerAccessToken.accessToken);
    }

    return null;
  }

  async customerRegister(
    email: string, 
    password: string, 
    firstName: string, 
    lastName: string
  ): Promise<Customer | null> {
    const response = await this.client.request(CUSTOMER_REGISTER_MUTATION, {
      input: {
        email,
        password,
        firstName,
        lastName,
      },
    });

    if (response.data.customerCreate.customer) {
      return response.data.customerCreate.customer;
    }

    return null;
  }

  async getCustomer(accessToken: string): Promise<Customer> {
    const response = await this.client.request(GET_CUSTOMER_QUERY, {
      customerAccessToken: accessToken,
    });
    return response.data.customer;
  }

  async searchProducts(query: string): Promise<Product[]> {
    const response = await this.client.request(SEARCH_PRODUCTS_QUERY, {
      query,
      first: 20,
    });
    return response.data.products.edges.map((edge: any) => edge.node);
  }
}

export const shopifyClient = new ShopifyClient();