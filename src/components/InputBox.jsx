import React, { useId } from 'react';

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = 'usd',
  amountDisable = false,
  currencyDisable = false,
  className = '',
}) {
  const amountInputId = useId();

  return (
    <div className={`flex flex-col md:flex-row items-center bg-white p-4 rounded-lg shadow-md ${className}`}>
      <div className="w-full md:w-1/2 mb-2 md:mb-0 md:mr-2">
        <label htmlFor={amountInputId} className="text-gray-600 mb-2 block">
          {label}
        </label>
        <input
          id={amountInputId}
          className="w-full px-3 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-blue-600"
          type="number"
          placeholder="Amount"
          disabled={amountDisable}
          value={amount}
          onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
        />
      </div>
      <div className="w-full md:w-1/2">
        <label className="text-gray-600 mb-2 block">Currency Type</label>
        <select
          className="w-full px-3 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-blue-600"
          value={selectCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          disabled={currencyDisable}
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency.toUpperCase()}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
