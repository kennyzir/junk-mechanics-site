import { TopicClusterPage } from "@/components/topic/TopicClusterPage";
import { getTopicCluster, buildTopicClusterMetadata } from "@/data/topic-clusters";

export const metadata = buildTopicClusterMetadata("vehicles");

export default function VehiclesPage() {
  return <TopicClusterPage cluster={getTopicCluster("vehicles")} />;
}