createPriceBlock(binance, 'binance BTC', 'BTC');
createPriceBlock(binance, 'binance ETH', 'ETH');
createPriceBlock(binance, 'binance TON', 'TON');
createPriceBlock(binance, 'binance LTC', 'LTC');

createPriceBlock(bybit, 'bybit BTC', 'BTC');
createPriceBlock(bybit, 'bybit ETH', 'ETH');
createPriceBlock(bybit, 'bybit TON', 'TON');
createPriceBlock(bybit, 'bybit LTC', 'LTC');

createPriceBlock(okx, 'okx BTC', 'BTC');
createPriceBlock(okx, 'okx ETH', 'ETH');
createPriceBlock(okx, 'okx TON', 'TON');
createPriceBlock(okx, 'okx LTC', 'LTC');

createDiffBlock(diff, 'diff BTC');
createDiffBlock(diff, 'diff ETH');
createDiffBlock(diff, 'diff TON');
createDiffBlock(diff, 'diff LTC');

setInterval(() => updatePriceBinance(binanceBtcUsdt, 'binance BTC', 'BTC'), 1000);
setInterval(() => updatePriceBinance(binanceEthUsdt, 'binance ETH', 'ETH'), 1000);
setInterval(() => updatePriceBinance(binanceTonUsdt, 'binance TON', 'TON'), 1000);
setInterval(() => updatePriceBinance(binanceLtcUsdt, 'binance LTC', 'LTC'), 1000);

setInterval(() => updatePriceBybit(bybitBtcUsdt, 'bybit BTC', 'BTC'), 1000);
setInterval(() => updatePriceBybit(bybitEthUsdt, 'bybit ETH', 'ETH'), 1000);
setInterval(() => updatePriceBybit(bybitTonUsdt, 'bybit TON', 'TON'), 1000);
setInterval(() => updatePriceBybit(bybitLtcUsdt, 'bybit LTC', 'LTC'), 1000);

setInterval(() => updatePriceOkx(okxBtcUsdt, 'okx BTC', 'BTC'), 1000);
setInterval(() => updatePriceOkx(okxEthUsdt, 'okx ETH', 'ETH'), 1000);
setInterval(() => updatePriceOkx(okxTonUsdt, 'okx TON', 'TON'), 1000);
setInterval(() => updatePriceOkx(okxLtcUsdt, 'okx LTC', 'LTC'), 1000);

setInterval(() => difference('BTC', 'diff BTC'), 1000);
setInterval(() => difference('ETH', 'diff ETH'), 1000);
setInterval(() => difference('TON', 'diff TON'), 1000);
setInterval(() => difference('LTC', 'diff LTC'), 1000);


