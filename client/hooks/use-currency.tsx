import { createContext, useContext, useState, ReactNode } from 'react';
import { Currency, CURRENCIES, formatCurrency } from '@shared/currency';

interface CurrencyContextType {
  currency: Currency;
  setCurrency: (currency: Currency) => void;
  formatAmount: (amount: number) => string;
  getCurrencySymbol: () => string;
  getCurrencyName: () => string;
}

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined);

export const CurrencyProvider = ({ children }: { children: ReactNode }) => {
  const [currency, setCurrency] = useState<Currency>('USD');

  const formatAmount = (amount: number) => formatCurrency(amount, currency);
  
  const getCurrencySymbol = () => CURRENCIES[currency].symbol;
  
  const getCurrencyName = () => CURRENCIES[currency].name;

  return (
    <CurrencyContext.Provider value={{
      currency,
      setCurrency,
      formatAmount,
      getCurrencySymbol,
      getCurrencyName,
    }}>
      {children}
    </CurrencyContext.Provider>
  );
};

export const useCurrency = () => {
  const context = useContext(CurrencyContext);
  if (!context) {
    throw new Error('useCurrency must be used within a CurrencyProvider');
  }
  return context;
};
