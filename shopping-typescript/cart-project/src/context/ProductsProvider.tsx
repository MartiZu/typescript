import { ReactElement, createContext, useState } from "react";

export type ProductType = {
  sku: string;
  name: string;
  price: number;
};

const initState: ProductType[] = [
  {
    sku: "item001",
    name: "Widget",
    price: 10.0,
  },
  {
    sku: "item002",
    name: "Gadget",
    price: 20.0,
  },
  {
    sku: "item003",
    name: "Gizmo",
    price: 30.0,
  },
];

export type UseProductsContextType = { products: ProductType[] };

const initContextState: UseProductsContextType = { products: [] };

const ProductsContext = createContext<UseProductsContextType>(initContextState);

type ChildrenType = { children?: ReactElement | ReactElement[] };

export const ProductsProviders = ({ children }: ChildrenType): ReactElement => {
  const [products, setProducts] = useState<ProductType[]>(initState);
};
