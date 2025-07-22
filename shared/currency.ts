export type Currency = 'USD' | 'NGN';

export interface CurrencyConfig {
  code: Currency;
  symbol: string;
  name: string;
  exchangeRate: number; // Rate to USD
}

export const CURRENCIES: Record<Currency, CurrencyConfig> = {
  USD: {
    code: 'USD',
    symbol: '$',
    name: 'US Dollar',
    exchangeRate: 1,
  },
  NGN: {
    code: 'NGN',
    symbol: '₦',
    name: 'Nigerian Naira',
    exchangeRate: 1550, // Approximate rate: 1 USD = 1550 NGN
  },
};

export const formatCurrency = (amount: number, currency: Currency = 'USD'): string => {
  const config = CURRENCIES[currency];
  const convertedAmount = currency === 'USD' ? amount : amount * config.exchangeRate;
  
  if (currency === 'NGN') {
    return `${config.symbol}${convertedAmount.toLocaleString('en-NG', { 
      minimumFractionDigits: 0,
      maximumFractionDigits: 0 
    })}`;
  }
  
  return `${config.symbol}${convertedAmount.toFixed(2)}`;
};

export const convertCurrency = (amount: number, from: Currency, to: Currency): number => {
  if (from === to) return amount;
  
  // Convert to USD first
  const amountInUSD = from === 'USD' ? amount : amount / CURRENCIES[from].exchangeRate;
  
  // Convert from USD to target currency
  return to === 'USD' ? amountInUSD : amountInUSD * CURRENCIES[to].exchangeRate;
};

export interface PaymentMethod {
  id: string;
  name: string;
  icon: any;
  details: string;
  currency: Currency;
  balance?: number;
}
