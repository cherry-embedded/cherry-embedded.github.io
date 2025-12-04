export interface Product {
  id: string;
  name: string;
  title: string;
  shortDescription: string;
  description: string;
  icon: string;
  image?: string;
  tags: string[];
  features: string[];
  github?: string;
  currentVersion?: string;
  documentation?: string;
  pricing?: {
    type: 'subproducts' | 'versions';
    description: string;
    items: PricingItem[];
  };
}

export interface PricingItem {
  id: string;
  name: string;
  description: string;
  price: string;
  features: string[];
  url?: string;
}

export interface Partner {
  id: string;
  name: string;
  logo: string;
  website?: string;
  description?: string;
}
