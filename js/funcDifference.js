function difference (crypto, dataSymbol) {
    let valBinance = parseFloat(prices.binance[crypto]);
    let valBybit = parseFloat(prices.bybit[crypto]);
    let valOkx = parseFloat(prices.okx[crypto]);

    let max = Math.max(valBinance, valBybit, valOkx);
    let min = Math.min(valBinance, valBybit, valOkx);
    let diff = (max - min).toFixed(2);
    let percentOfProfit = (diff/(min/100)).toFixed(2);

    let exchMax = '';
    let exchMin = '';

    if (max === valBinance) {
        exchMax = 'BIN'
    } else if (max === valBybit) {
        exchMax = 'BYB';
    } else {
        exchMax = 'OKX';
    }

    if (min === valBinance) {
        exchMin = 'BIN';
    } else if (min === valBybit) {
        exchMin = 'BYB';
    } else {
        exchMin = 'OKX';
    }
    console.log (exchMax)
    console.log(exchMin)

    const block = document.querySelector(`[data-symbol="${dataSymbol}"]`);
      if (block) {
        const priceElem = block.querySelector('.price');
        priceElem.textContent = `${diff}≈${percentOfProfit}%`;
        if (percentOfProfit >= 5) {
            priceElem.classList.add('high-profit');
          } else if (percentOfProfit >= 3) {
            priceElem.classList.add('medium-profit');
          } else if (percentOfProfit >= 0.1) {
            priceElem.classList.add('low-profit');
          } else {
            priceElem.classList.add('no-profit');
          }
        const nameExch = block.querySelector('.name');
        nameExch.textContent = `${exchMin} ⇄ ${exchMax}`
      }
}
//TO DO сделать что бы класс менялся а не добавлялся на постоянку