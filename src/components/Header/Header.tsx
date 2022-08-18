/* eslint-disable jsx-a11y/anchor-has-content */
import React, { useEffect, useState } from 'react';
import { formatCurrency } from '../../App';
import { Currency } from '../../types/Currency';
import './Header.scss'
import './Logo.scss'

type Props = {
  currencies: Currency[]
};

function findCurency(serchCurrency: string, currencies: Currency[]) {
  return Object.entries(currencies).find(currency => (
    currency[0] === serchCurrency
  ));
}

export const Header: React.FC<Props> = ({currencies}) => {
  const [usdExchange, setUsdExchange] = useState(0);
  const [eurExchange, setEurExchange] = useState(0);
  const uah = findCurency('UAH', currencies)?.[1];
  const usd = findCurency('USD', currencies)?.[1];
  const eur = findCurency('EUR', currencies)?.[1];

  useEffect (() => {
    if (usd) {
      setUsdExchange(+usd);
    }
  
    if (eur) {
      setEurExchange(+eur);
    }
  }, [usd, eur])

  
  return (
    <header className="header app__header">
      <div className="header__logo logo">
        <a href="https://www.itop1000.site/" className="logo__img"></a>
        <div className="logo__text"></div>
      </div>

       <div className="header__courses">
          {uah && <p className="header__usd header__currency">{`1$ - ${formatCurrency(usdExchange * +uah)} ₴`}</p>}
          {uah && <p className="header__eur header__currency">{`1€ - ${formatCurrency(eurExchange * +uah)} ₴`}</p>}
       </div>
    </header>
  );
};
