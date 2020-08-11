import React from "react";
import "../../sass/personalArea/rate.sass";
import getCurrencyFullName from "../../utils/getCurrencyName";

const Rate = ({ currency_prices, cmpWallet }) => {
  if (!currency_prices || !cmpWallet) {
    return "";
  }
  console.log("currency_prices", currency_prices);
  return (
    <div className="rate">
      <div className="rate__menu">
        <p className="rate__title">Курс</p>
      </div>
      <hr />
      <div>
        {currency_prices &&
          currency_prices.map((price, i) => (
            <div
              key={i}
              className={`rate__table-row ${
                i % 2 === 0 ? "" : "rate__table-row__active"
              }`}
            >
              <div className="rate-table__item-left">
                <p>{getCurrencyFullName(price.currency)}</p>
              </div>
              <div className="rate-table__item-right">
                <p>
                  1 {price.currency} = {price.price} CMP
                </p>
              </div>
            </div>
          ))}
        {/* <div
          className={`rate__table-row ${
            currency_prices.length % 2 === 0 ? "" : "rate__table-row__active"
          }`}
        >
          <div className="balance-table-cash-in__input">
            <input
              placeholder="Ваш адрес"
              value={cmpWallet.address ? cmpWallet.address : ""}
            />
            <div
              onClick={() =>
                copyToClipboard(cmpWallet.address ? cmpWallet.address : "")
              }
              className="balance-table-cash-in__copy-button"
            >
              <p>Копировать</p>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Rate;