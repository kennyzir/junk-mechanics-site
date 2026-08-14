import { buildTopicClusterMetadata, getTopicCluster } from "@/data/topic-clusters";
import { LongTailDetailPage } from "@/components/topic/LongTailDetailPage";

export const metadata = buildTopicClusterMetadata("best-money-method");

export default function BestMoneyMethodPage() {
  return <LongTailDetailPage cluster={getTopicCluster("best-money-method")} />;
}
