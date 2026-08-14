import { buildTopicClusterMetadata, getTopicCluster } from "@/data/topic-clusters";
import { LongTailDetailPage } from "@/components/topic/LongTailDetailPage";

export const metadata = buildTopicClusterMetadata("discord");

export default function DiscordPage() {
  return <LongTailDetailPage cluster={getTopicCluster("discord")} />;
}
