import { buildTopicClusterMetadata, getTopicCluster } from "@/data/topic-clusters";
import { LongTailDetailPage } from "@/components/topic/LongTailDetailPage";

export const metadata = buildTopicClusterMetadata("gamepasses");

export default function GamepassesPage() {
  return <LongTailDetailPage cluster={getTopicCluster("gamepasses")} />;
}
