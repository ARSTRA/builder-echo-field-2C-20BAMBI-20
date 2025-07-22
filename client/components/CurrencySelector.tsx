import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, DollarSign, Banknote } from "lucide-react";
import { useCurrency } from "@/hooks/use-currency";
import { Currency, CURRENCIES } from "@shared/currency";

export function CurrencySelector() {
  const { currency, setCurrency, getCurrencySymbol } = useCurrency();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" className="gap-2">
          {currency === 'USD' ? (
            <DollarSign className="w-4 h-4" />
          ) : (
            <Banknote className="w-4 h-4" />
          )}
          {currency}
          <ChevronDown className="w-4 h-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem
          onClick={() => setCurrency('USD')}
          className={currency === 'USD' ? 'bg-accent' : ''}
        >
          <DollarSign className="w-4 h-4 mr-2" />
          <span className="mr-2">{CURRENCIES.USD.name}</span>
          <span className="text-sm text-muted-foreground">({CURRENCIES.USD.symbol})</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setCurrency('NGN')}
          className={currency === 'NGN' ? 'bg-accent' : ''}
        >
          <Banknote className="w-4 h-4 mr-2" />
          <span className="mr-2">{CURRENCIES.NGN.name}</span>
          <span className="text-sm text-muted-foreground">({CURRENCIES.NGN.symbol})</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
