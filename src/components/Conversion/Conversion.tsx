import React from 'react';
import './Conversion.scss'

type Props = {
  currencies: string[],
  amountFrom: number,
  amountTo: number,
  currencyFrom: string,
  currencyTo: string,
  onChangeAmountFrom: (amountFrom: number) => void,
  onChangeAmountTo: (amountTo: number) => void,
  onChangeCurrencyFrom: (currencyFrom: string) => void,
  onChangeCurrencyTo:(currencyTo: string) => void,
};

export const Conversion: React.FC<Props> = ({
  currencies,
  amountFrom,
  amountTo,
  currencyFrom,
  currencyTo,
  onChangeAmountFrom,
  onChangeAmountTo,
  onChangeCurrencyFrom,
  onChangeCurrencyTo,
}) => {

  return (
    <div className="converion app__converion">
      <div className="converion__from">
        <input
          type="text"
          className="converion__field"
          value={amountFrom}
          onChange={event => {
            onChangeAmountFrom(+event.target.value);
          }}
        />
        <div className="select">
          <select
            name="currency"
            value={currencyFrom}
            onChange={event => {
              onChangeCurrencyFrom(event.target.value);
            }}
          >
            {currencies.map(currency => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="converion__to">
        <input
          type="text"
          className="converion__field"
          value={amountTo}
          onChange={event => {
            onChangeAmountTo(+event.target.value);
          }}
        />
        <div className="select">
          <select
            name="currency"
            value={currencyTo}
            onChange={event => {
              onChangeCurrencyTo(event.target.value);
            }}
          >
            {currencies.map(currency => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}
