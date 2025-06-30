function updatePriceBybit(rel, dataSymbol, crypto) {
    fetch(rel)
      .then(response => response.json())
      .then(data => {
        const block = document.querySelector(`[data-symbol="${dataSymbol}"]`);
        if (block) {
          const priceElem = block.querySelector('.price');
          const formattedPrice = `${parseFloat(data.result.list[0].lastPrice).toFixed(2)}`;
          priceElem.textContent = formattedPrice;

          prices.bybit[crypto] = formattedPrice;
        }
      })
      .catch(error => console.error('Ошибка:', error));
}