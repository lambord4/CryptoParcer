function updatePriceOkx(rel, dataSymbol, crypto) {
    fetch(rel)
      .then(response => response.json())
      .then(data => {
        const block = document.querySelector(`[data-symbol="${dataSymbol}"]`);
        if (block) {
          const priceElem = block.querySelector('.price');
          const formattedPrice = `${parseFloat(data.data[0].last).toFixed(2)}`;
          priceElem.textContent = formattedPrice;

          prices.okx[crypto] = formattedPrice
        }
      })
      .catch(error => console.error('Ошибка:', error));
}