import {
  FiDollarSign,
  FiTrendingUp,
  FiBox,
  FiCpu,
} from "react-icons/fi";

import AIRecommendation from "../../components/widgets/AIRecommendation";

import StatCard from "../../components/cards/StatCard";

function Dashboard() {
  return (
    <>
      <div className="dashboard-grid">

        <StatCard
          title="Today's Revenue"
          value="₹2,45,000"
          icon={<FiDollarSign />}
          color="#2563EB"
        />

        <StatCard
          title="Profit"
          value="₹62,300"
          icon={<FiTrendingUp />}
          color="#16A34A"
        />

        <StatCard
          title="Products"
          value="125"
          icon={<FiBox />}
          color="#EA580C"
        />

        <StatCard
          title="AI Accuracy"
          value="97.4%"
          icon={<FiCpu />}
          color="#9333EA"
        />

      </div>
<div className="dashboard-main">

    <AIRecommendation />

</div>
    </>
  );
}

export default Dashboard;