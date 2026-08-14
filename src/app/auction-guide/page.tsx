import { buildTopicClusterMetadata, getTopicCluster } from "@/data/topic-clusters";
import { LongTailDetailPage } from "@/components/topic/LongTailDetailPage";

export const metadata = buildTopicClusterMetadata("auction-guide");

export default function AuctionGuidePage() {
  return <LongTailDetailPage cluster={getTopicCluster("auction-guide")} />;
}
