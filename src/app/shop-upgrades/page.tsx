import { buildTopicClusterMetadata, getTopicCluster } from "@/data/topic-clusters";
import { LongTailDetailPage } from "@/components/topic/LongTailDetailPage";

export const metadata = buildTopicClusterMetadata("shop-upgrades");

export default function ShopUpgradesPage() {
  return <LongTailDetailPage cluster={getTopicCluster("shop-upgrades")} />;
}
