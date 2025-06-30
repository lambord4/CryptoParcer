const binanceBtcUsdt = 'https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT';
const binanceEthUsdt = 'https://api.binance.com/api/v3/ticker/price?symbol=ETHUSDT';
const binanceTonUsdt = "https://api.binance.com/api/v3/ticker/price?symbol=TONUSDT";
const binanceLtcUsdt = 'https://api.binance.com/api/v3/ticker/price?symbol=LTCUSDT';

const bybitBtcUsdt = 'https://api.bybit.com/v5/market/tickers?category=linear&symbol=BTCUSDT';
const bybitEthUsdt = 'https://api.bybit.com/v5/market/tickers?category=linear&symbol=ETHUSDT';
const bybitTonUsdt = 'https://api.bybit.com/v5/market/tickers?category=linear&symbol=TONUSDT';
const bybitLtcUsdt = 'https://api.bybit.com/v5/market/tickers?category=linear&symbol=LTCUSDT';

const okxBtcUsdt = 'https://www.okx.com/api/v5/market/ticker?instId=BTC-USDT';
const okxEthUsdt = 'https://www.okx.com/api/v5/market/ticker?instId=ETH-USDT';
const okxTonUsdt = 'https://www.okx.com/api/v5/market/ticker?instId=TON-USDT';
const okxLtcUsdt = 'https://www.okx.com/api/v5/market/ticker?instId=LTC-USDT';


const column = document.querySelectorAll('.column');
const binance = column[0];
const bybit = column[1];
const okx = column[2];
const diff = column[3]