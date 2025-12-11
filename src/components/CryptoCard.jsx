import { Link } from "react-router";
import { formatPrice, formatMarketCap } from "../utils/formatter";

export const CryptoCard = ({ crypto }) => {
  const priceChange = crypto.price_change_percentage_24h || 0;
  const isPositive = priceChange >= 0;

  return (
    <Link to={`/coin/${crypto.id}`} className="crypto-card">
      <div className="crypto-info">
        <img src={crypto.image} alt={crypto.name} />
        <div>
          <h3>{crypto.name}</h3>
          <p className="symbol">{crypto.symbol.toUpperCase()}</p>
          <span className="rank">#{crypto.market_cap_rank}</span>
        </div>
      </div>

      <div className="crypto-price">
        <div className="price">
          <span className="current-price">{formatPrice(crypto.current_price)}</span>
          <span className={`change ${isPositive ? "positive" : "negative"}`}>
            {isPositive ? "↗" : "↘"} {Math.abs(priceChange).toFixed(2)}%
          </span>
        </div>

        <div className="crypto-stats">
          <div className="stat">
            <span className="stat-label">Market Cap</span>
            <span className="stat-value">{formatMarketCap(crypto.market_cap)}</span>
          </div>
          <div className="stat">
            <span className="stat-label">Change (24h)</span>
            <span className={`stat-value ${isPositive ? "positive" : "negative"}`}>
              {isPositive ? "+" : ""}{priceChange.toFixed(2)}%
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};