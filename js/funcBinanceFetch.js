function updatePriceBinance(rel, dataSymbol, crypto) {
  fetch(rel)
    .then(response => response.json())
    .then(data => {
      const block = document.querySelector(`[data-symbol="${dataSymbol}"]`);
      if (block) {
        const priceElem = block.querySelector('.price');
        const formattedPrice = `${parseFloat(data.price).toFixed(2)}`;
        priceElem.textContent = formattedPrice;

        prices.binance[crypto] = formattedPrice;

      }
    })
    .catch(error => console.error('Ошибка:', error));
}