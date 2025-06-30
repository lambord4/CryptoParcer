function createPriceBlock(parent, dataSymbol, cryptoName) {
    const block = document.createElement('div');
    block.classList.add('block');
    block.setAttribute('data-symbol', dataSymbol);
  
    const name = document.createElement('div');
    name.classList.add('name');
    name.textContent = `${cryptoName}/USDT`;
    block.appendChild(name);
  
    const line = document.createElement('div');
    line.classList.add('line');
    block.appendChild(line);
  
    const price = document.createElement('div');
    price.classList.add('price');
    price.textContent = '...'; // заглушка до загрузки
    block.appendChild(price);
  
    parent.appendChild(block);
}  