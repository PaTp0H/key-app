import { FC, createContext, useContext, useMemo, useState } from "react";

type CartContextValue = {
  cartValue: number;
  changeCartValue: (value: number) => void;
};

const CartContext = createContext<CartContextValue | undefined>(undefined);

const CartProvider: FC<{ children: any }> = ({ children }) => {
  const [cartValue, setCartValue] = useState(0);

  const contextValue: CartContextValue = useMemo(
    () => ({
      cartValue,
      changeCartValue: setCartValue,
    }),
    [cartValue]
  );

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};

export const useCart = (): CartContextValue => {
  const context = useContext(CartContext);

  if (context === undefined) {
    throw new ReferenceError("Use Cart inside its provider.");
  }

  return context;
};

export default CartProvider;
