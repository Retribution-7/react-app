export interface ProductSpec {
  label: string;
  value: string;
}

export interface Product {
  id: number;
  category: string;
  title: string;
  image: string;
  price: string;
  brand: string;
  specs: ProductSpec[];
  color: string;
  thickness: string;
  surface: string;
}

export interface ProductFilters {
  category?: string;
  _sort?: string;
  _order?: 'asc' | 'desc';
  title_like?: string;
}
