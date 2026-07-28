import "./widgets.css";
import { FiCpu, FiTrendingUp, FiCheckCircle } from "react-icons/fi";
import { aiRecommendation } from "../../data/dashboardData";

function AIRecommendation() {
  return (
    <div className="widget ai-widget">

      <div className="widget-header">
        <div className="widget-title">
          <FiCpu className="widget-icon" />
          <h3>AI Pricing Recommendation</h3>
        </div>

        <span className="badge">LIVE</span>
      </div>

      <div className="product-name">
        {aiRecommendation.product}
      </div>

      <div className="price-grid">

        <div className="price-box">
          <p>Current Price</p>
          <h2>{aiRecommendation.currentPrice}</h2>
        </div>

        <div className="price-box recommended">
          <p>Suggested Price</p>
          <h2>{aiRecommendation.suggestedPrice}</h2>
        </div>

      </div>

      <div className="recommendation-info">

        <div>
          <strong>Demand</strong>
          <p>{aiRecommendation.demand}</p>
        </div>

        <div>
          <strong>Confidence</strong>
          <p>{aiRecommendation.confidence}</p>
        </div>

        <div>
          <strong>Expected Revenue</strong>
          <p>{aiRecommendation.expectedRevenue}</p>
        </div>

      </div>

      <div className="reason-box">

        <FiTrendingUp />

        <span>
          {aiRecommendation.reason}
        </span>

      </div>

      <button className="apply-btn">

        <FiCheckCircle />

        Apply Recommendation

      </button>

    </div>
  );
}

export default AIRecommendation;