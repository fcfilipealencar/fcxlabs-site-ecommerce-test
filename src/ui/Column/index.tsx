import styled from "styled-components";

type SpanValue =
    | "1"
    | "2"
    | "3"
    | "4"
    | "5"
    | "6"
    | "7"
    | "8"
    | "9"
    | "10"
    | "11"
    | "12";

const getWidthString = (span?: SpanValue) => {
    if (!span) {
        return null;
    }

    const width = (Number(span) / 12) * 100;

    return `width: ${width}%;`;
};

interface ColumnProps {
    xs?: SpanValue;
    sm?: SpanValue;
    md?: SpanValue;
    lg?: SpanValue;
}

export const Column = styled.div<ColumnProps>`
    float: left;
    ${({ xs }) => (xs ? getWidthString(xs) : "width: 100%")};

    @media only screen and (min-width: 768px) {
        ${({ sm }) => sm && getWidthString(sm)};
    }

    @media only screen and (min-width: 992px) {
        ${({ md }) => md && getWidthString(md)};
    }

    @media only screen and (min-width: 1200px) {
        ${({ lg }) => lg && getWidthString(lg)};
    }
`;
