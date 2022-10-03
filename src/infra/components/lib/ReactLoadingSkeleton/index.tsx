import { FC, PropsWithChildren } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { SkeletonProps } from "../../../../types/SkeletonProps";
import {
    SkeletonCardsContainer,
    SkeletonCardWrapper,
    SkeletonCircle,
    SkeletonWrapper,
} from "./style";

type ReactLoadingSkeletonProps = SkeletonProps;

const flexStart = "flex-start";

const Box = ({ children }: PropsWithChildren<unknown>) => {
    return (
        <div
            style={{
                marginBottom: ".8rem",
            }}
        >
            {children}
        </div>
    );
};

export const ReactLoadingSkeleton: FC<ReactLoadingSkeletonProps> = ({
    count,
    type = "basic",
    width = "100%",
    height = 30,
    inline = false,
    style,
}) => {
    const templates = {
        basic: (
            <Skeleton
                wrapper={Box}
                count={count}
                width={width}
                height={height}
                inline={inline}
            />
        ),
        card: (
            <SkeletonCardsContainer style={{ ...style }}>
                {Array(count)
                    .fill(1)
                    .map((value, index) => (
                        <SkeletonCardWrapper key={index}>
                            <SkeletonCircle />
                            <Skeleton width={width} height={height} />
                        </SkeletonCardWrapper>
                    ))}
            </SkeletonCardsContainer>
        ),
        user: (
            <div style={{ ...style }}>
                {Array(count)
                    .fill(1)
                    .map((value, index) => (
                        <div
                            key={index}
                            style={{
                                display: "flex",
                                alignItems: "center",
                                width,
                                borderBottom: "1px solid #e5e6e6",
                                padding: "16px 0",
                            }}
                        >
                            <div
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                }}
                            >
                                <Skeleton
                                    style={{ marginRight: "10px" }}
                                    width="50px"
                                    height="50px"
                                    borderRadius="400px"
                                />
                                <div
                                    style={{
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: flexStart,
                                        gap: "4px",
                                    }}
                                >
                                    <Skeleton width="300px" height="16px" />
                                    <Skeleton width="125px" height="16px" />
                                </div>
                            </div>
                        </div>
                    ))}
            </div>
        ),
        product: (
            <div style={{ ...style }}>
                {Array(count)
                    .fill(1)
                    .map((value, index) => (
                        <div
                            key={index}
                            style={{
                                display: "flex",
                                alignItems: "center",
                                width,
                                borderBottom: "1px solid #e5e6e6",
                                padding: "16px 0",
                            }}
                        >
                            <div
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    width: "36vw",
                                }}
                            >
                                <Skeleton
                                    style={{ marginRight: "10px" }}
                                    width="16px"
                                    height="16px"
                                    borderRadius="4px"
                                />
                                <Skeleton
                                    style={{ marginRight: "10px" }}
                                    width="40px"
                                    height="40px"
                                    borderRadius="400px"
                                />
                                <div
                                    style={{
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: flexStart,
                                        gap: "4px",
                                        width: "423px",
                                        height: "37px",
                                    }}
                                >
                                    <Skeleton width="423px" height="18px" />
                                    <Skeleton width="80px" height="15px" />
                                </div>
                            </div>

                            <div
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    width: "20vw",
                                }}
                            >
                                <div
                                    style={{
                                        marginLeft: "20px",
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: flexStart,
                                        height: "37px",
                                    }}
                                >
                                    <Skeleton width="188px" height="16px" />
                                </div>
                            </div>

                            <div
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    width: "14vw",
                                }}
                            >
                                <div
                                    style={{
                                        marginLeft: "15px",
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: flexStart,
                                        gap: "4px",
                                        height: "37px",
                                    }}
                                >
                                    <Skeleton width="64px" height="15px" />
                                    <Skeleton width="186px" height="15px" />
                                </div>
                            </div>

                            <div
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    width: "10vw",
                                }}
                            >
                                <div
                                    style={{
                                        marginLeft: "15px",
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: flexStart,
                                        gap: "4px",
                                        height: "37px",
                                    }}
                                >
                                    <Skeleton width="52px" height="21px" />
                                </div>
                            </div>
                        </div>
                    ))}
            </div>
        ),
    };

    return <SkeletonWrapper>{templates[`${type}`]}</SkeletonWrapper>;
};

export default ReactLoadingSkeleton;
