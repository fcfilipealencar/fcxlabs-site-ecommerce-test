import { ReactLoadingSkeleton } from "../../infra/components/lib/ReactLoadingSkeleton";
import { SkeletonProps } from "../../types/SkeletonProps";

export const Skeleton = (skeletonProps: SkeletonProps) => {
    return <ReactLoadingSkeleton {...skeletonProps} />;
};
