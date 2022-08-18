import React, { useEffect, useState } from 'react';
import { getExchange } from './api';
import { Conversion } from './components/Conversion/Conversion';
import { Header } from './components/Header/Header';
import { Loader } from './components/Loader';
import './App.scss'

export function formatCurrency(currency: number) {
  return Math.floor(currency * 100) / 100;
}

export const App: React.FC = () => {
  const [currencies, setCurrencies] = useState<any>([]);
  const [amountFrom, setAmountFrom] = useState<number>(0);
  const [amountTo, setAmountTo] = useState<number>(0);
  const [currencyFrom, setCurrencyFrom] = useState<string>('UAH');
  const [currencyTo, setCurrencyTo] = useState<string>('USD');
  const [isLoaded, setLoaded] = useState(false);

  useEffect(() => {
    getExchange().then(data => {
      setCurrencies(data.rates);
      setLoaded(true);
  });
  }, []);

  const handelChangeAmountFrom = (amount: number) => {
    setAmountTo(formatCurrency(amount * currencies[currencyTo] / currencies[currencyFrom]));
    setAmountFrom(amount)
  }

  const handelChangeCurrencyFrom = (selectCurrency: string) => {
    setAmountTo(formatCurrency(amountFrom * currencies[currencyTo] / currencies[currencyFrom]));
    setCurrencyFrom(selectCurrency)
  }

  const handelChangeAmountTo = (amount: number) => {
    setAmountFrom(formatCurrency(amount * currencies[currencyFrom] / currencies[currencyTo]));
    setAmountTo(amount)
  }

  const handelChangeCurrencyTo = (selectCurrency: string) => {
    setAmountFrom(formatCurrency(amountTo * currencies[currencyFrom] / currencies[currencyTo]));
    setCurrencyTo(selectCurrency)
  }

  return (
    <div className="app">
      {isLoaded 
        ? <Header currencies={currencies} />
        : <Loader />
      }
      <Conversion
        currencies={Object.keys(currencies)}
        amountFrom={amountFrom}
        amountTo={amountTo}
        currencyFrom={currencyFrom}
        currencyTo={currencyTo}
        onChangeAmountFrom={handelChangeAmountFrom}
        onChangeAmountTo={handelChangeAmountTo}
        onChangeCurrencyFrom={handelChangeCurrencyFrom}
        onChangeCurrencyTo={handelChangeCurrencyTo}
      />
    </div>
  );
}
