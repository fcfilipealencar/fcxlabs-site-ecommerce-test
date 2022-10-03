export interface IconProps {
    width?: number;
    height?: number;
    color?: string;
    // eslint-disable-next-line react/no-unused-prop-types
    strokeWidth?: string;
}

export const ArrowDown = ({
    width = 32,
    height = 32,
    color = "black",
}: IconProps) => {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M8 10L12 14L16 10"
                stroke={color}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

export const ArrowUp = ({
    width = 32,
    height = 32,
    color = "black",
}: IconProps) => {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M16 14L12 10L8 14"
                stroke={color}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

export const Phone = ({
    width = 32,
    height = 32,
    color = "black",
}: IconProps) => {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.856 13.144C9.686 11.974 8.804 10.664 8.218 9.33499C8.094 9.05399 8.167 8.72499 8.384 8.50799L9.203 7.68999C9.874 7.01899 9.874 6.06999 9.288 5.48399L8.114 4.30999C7.333 3.52899 6.067 3.52899 5.286 4.30999L4.634 4.96199C3.893 5.70299 3.584 6.77199 3.784 7.83199C4.278 10.445 5.796 13.306 8.245 15.755C10.694 18.204 13.555 19.722 16.168 20.216C17.228 20.416 18.297 20.107 19.038 19.366L19.689 18.715C20.47 17.934 20.47 16.668 19.689 15.887L18.516 14.714C17.93 14.128 16.98 14.128 16.395 14.714L15.492 15.618C15.275 15.835 14.946 15.908 14.665 15.784C13.336 15.197 12.026 14.314 10.856 13.144Z"
                stroke={color}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

export const HeadPhone = ({
    width = 32,
    height = 32,
    color = "black",
}: IconProps) => {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M19 17H18C17.448 17 17 16.552 17 16V11C17 10.448 17.448 10 18 10H19C20.105 10 21 10.895 21 12V15C21 16.105 20.105 17 19 17Z"
                stroke={color}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M6 17H5C3.895 17 3 16.105 3 15V12C3 10.895 3.895 10 5 10H6C6.552 10 7 10.448 7 11V16C7 16.552 6.552 17 6 17Z"
                stroke={color}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M18.5 10V9.5C18.5 5.91 15.59 3 12 3V3C8.41 3 5.5 5.91 5.5 9.5V10"
                stroke={color}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12.625 21.25H11.375C10.685 21.25 10.125 20.69 10.125 20V20C10.125 19.31 10.685 18.75 11.375 18.75H12.625C13.315 18.75 13.875 19.31 13.875 20V20C13.875 20.69 13.315 21.25 12.625 21.25Z"
                stroke={color}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M13.875 20H16C17.105 20 18 19.105 18 18V17"
                stroke={color}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

export const Share = ({
    width = 32,
    height = 32,
    color = "black",
}: IconProps) => {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M8.55286 10.1141C9.59439 11.1556 9.59439 12.8443 8.55286 13.8858C7.51133 14.9273 5.82268 14.9273 4.78115 13.8858C3.73962 12.8443 3.73962 11.1556 4.78115 10.1141C5.82268 9.07256 7.51133 9.07256 8.55286 10.1141"
                stroke={color}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M19.2189 4.78115C20.2604 5.82268 20.2604 7.51133 19.2189 8.55286C18.1774 9.59439 16.4887 9.59439 15.4472 8.55286C14.4057 7.51133 14.4057 5.82268 15.4472 4.78115C16.4887 3.73962 18.1774 3.73962 19.2189 4.78115"
                stroke={color}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M19.2189 15.4471C20.2604 16.4886 20.2604 18.1773 19.2189 19.2188C18.1774 20.2603 16.4887 20.2603 15.4472 19.2188C14.4057 18.1773 14.4057 16.4886 15.4472 15.4471C16.4887 14.4056 18.1774 14.4056 19.2189 15.4471"
                stroke={color}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M9.03999 10.81L14.96 7.84998"
                stroke={color}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M9.03999 13.19L14.96 16.15"
                stroke={color}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

export const Facebook = ({
    width = 32,
    height = 32,
    color = "black",
}: IconProps) => {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            {/* <path fillRule="evenodd" clipRule="evenodd" d="M7.5 3H16.504C18.987 3 21 5.013 21 7.496V16.505C21 18.987 18.987 21 16.504 21H7.496C5.013 21 3 18.987 3 16.504V7.5C3 5.015 5.015 3 7.5 3V3Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/> */}
            <path
                d="M11.1 12.9H16.5"
                stroke={color}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M16.5 8.40002H15.555C14.089 8.40002 12.9 9.58902 12.9 11.055V12V21"
                stroke={color}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

export const Instagram = ({
    width = 32,
    height = 32,
    color = "black",
}: IconProps) => {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g filter="url(#filter0_b_1042_56)">
                {/* <path fillRule="evenodd" clipRule="evenodd" d="M7.496 3H16.505C18.987 3 21 5.012 21 7.496V16.505C21 18.987 18.988 21 16.504 21H7.496C5.013 21 3 18.988 3 16.504V7.496C3 5.013 5.012 3 7.496 3V3Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/> */}
                <path
                    d="M16.949 6.71298C16.763 6.71398 16.612 6.86498 16.612 7.05098C16.612 7.23698 16.764 7.38798 16.95 7.38798C17.136 7.38798 17.287 7.23698 17.287 7.05098C17.288 6.86398 17.136 6.71298 16.949 6.71298"
                    stroke={color}
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M14.5456 9.45444C15.9515 10.8603 15.9515 13.1397 14.5456 14.5456C13.1397 15.9515 10.8603 15.9515 9.45443 14.5456C8.04854 13.1397 8.04854 10.8603 9.45443 9.45444C10.8603 8.04855 13.1397 8.04855 14.5456 9.45444"
                    stroke={color}
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </g>
            <defs>
                <filter
                    id="filter0_b_1042_56"
                    x="-4"
                    y="-4"
                    width={width}
                    height={height}
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feGaussianBlur in="BackgroundImage" stdDeviation="2" />
                    <feComposite
                        in2="SourceAlpha"
                        operator="in"
                        result="effect1_backgroundBlur_1042_56"
                    />
                    <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_backgroundBlur_1042_56"
                        result="shape"
                    />
                </filter>
            </defs>
        </svg>
    );
};

export const Spotify = ({
    width = 32,
    height = 32,
    color = "black",
}: IconProps) => {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            {/* <path d="M18.364 5.63604C21.8787 9.15076 21.8787 14.8492 18.364 18.3639C14.8493 21.8787 9.1508 21.8787 5.6361 18.3639C2.12138 14.8492 2.12138 9.15074 5.6361 5.63604C9.15082 2.12132 14.8493 2.12132 18.364 5.63604" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/> */}
            <path
                d="M6.60899 9.13601C10.438 8.00301 15.435 8.78701 17.764 10.26"
                stroke={color}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M7.069 12.054C10.442 11.003 14.425 11.756 16.628 13.173"
                stroke={color}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M7.325 14.756C11.078 13.914 13.684 14.505 15.654 15.687"
                stroke={color}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

export const LinkedIn = ({
    width = 32,
    height = 32,
    color = "black",
}: IconProps) => {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            {/* <path fillRule="evenodd" clipRule="evenodd" d="M7.5 3H16.504C18.987 3 21 5.013 21 7.496V16.505C21 18.987 18.987 21 16.504 21H7.496C5.013 21 3 18.987 3 16.504V7.5C3 5.015 5.015 3 7.5 3V3Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/> */}
            <path
                d="M8.12 11.1V16.5"
                stroke={color}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M11.719 16.5V13.35C11.719 12.107 12.726 11.1 13.969 11.1V11.1C15.212 11.1 16.219 12.107 16.219 13.35V16.5"
                stroke={color}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M8.11801 7.83799C7.99401 7.83799 7.89301 7.93899 7.89401 8.06299C7.89401 8.18699 7.99501 8.28799 8.11901 8.28799C8.24301 8.28799 8.34401 8.18699 8.34401 8.06299C8.34401 7.93799 8.24301 7.83799 8.11801 7.83799"
                stroke={color}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

export const Store = ({
    width = 32,
    height = 32,
    color = "black",
}: IconProps) => {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M11 13H8V16H10"
                stroke={color}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M3 20.0001L11 20"
                stroke={color}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M4.22 20V9.98706"
                stroke={color}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M21.7243 6.47765C22.0194 7.03345 22.078 7.68474 21.887 8.28433C21.5565 9.32453 20.5804 10.0228 19.4892 9.99943C18.398 9.9761 17.4526 9.23678 17.1669 8.18341C17.1488 8.12223 17.0926 8.08025 17.0288 8.08025C16.965 8.08025 16.9088 8.12223 16.8907 8.18341C16.5989 9.25555 15.6253 9.99951 14.5142 9.99939C13.4031 9.99927 12.4296 9.2551 12.1381 8.1829C12.12 8.12169 12.0638 8.07968 12 8.07968C11.9362 8.07968 11.88 8.12169 11.8619 8.1829C11.5702 9.2551 10.5967 9.99918 9.48551 9.99914C8.37435 9.9991 7.40085 9.25495 7.10926 8.18273C7.09113 8.12156 7.03493 8.0796 6.97113 8.0796C6.90734 8.0796 6.85113 8.12156 6.833 8.18273C6.54727 9.23599 5.60193 9.97521 4.51085 9.99858C3.41977 10.0219 2.44365 9.32387 2.11308 8.28381C1.92195 7.68412 1.98061 7.0327 2.2758 6.47681L3.98252 3.09822C4.32276 2.4247 5.0131 2 5.76768 2H18.232C18.9866 2 19.6769 2.4247 20.0172 3.09822L21.7243 6.47765Z"
                stroke={color}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M14 21.5V21.094C14.0033 19.9389 14.9389 19.0033 16.094 19H18.906C20.0611 19.0033 20.9967 19.9389 21 21.094V21.5C21 21.7761 20.7761 22 20.5 22H14.5C14.3674 22 14.2402 21.9473 14.1464 21.8536C14.0527 21.7598 14 21.6326 14 21.5Z"
                stroke={color}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <circle
                cx="17.5"
                cy="14.5"
                r="2"
                stroke={color}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

export const Apple = ({
    width = 28,
    height = 28,
    color = "black",
}: // strokeWidth = "1.5",
IconProps) => {
    return (
        <svg
            style={{ marginRight: "0.5rem", marginBottom: "5px" }}
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            viewBox="0 0 22.773 22.773"
            xmlSpace="preserve"
            width={width}
            height={height}
        >
            <path
                d="M15.769,0c0.053,0,0.106,0,0.162,0c0.13,1.606-0.483,2.806-1.228,3.675c-0.731,0.863-1.732,1.7-3.351,1.573
			c-0.108-1.583,0.506-2.694,1.25-3.561C13.292,0.879,14.557,0.16,15.769,0z"
                fill={color}
            />
            <path
                d="M20.67,16.716c0,0.016,0,0.03,0,0.045c-0.455,1.378-1.104,2.559-1.896,3.655c-0.723,0.995-1.609,2.334-3.191,2.334
			c-1.367,0-2.275-0.879-3.676-0.903c-1.482-0.024-2.297,0.735-3.652,0.926c-0.155,0-0.31,0-0.462,0
			c-0.995-0.144-1.798-0.932-2.383-1.642c-1.725-2.098-3.058-4.808-3.306-8.276c0-0.34,0-0.679,0-1.019
			c0.105-2.482,1.311-4.5,2.914-5.478c0.846-0.52,2.009-0.963,3.304-0.765c0.555,0.086,1.122,0.276,1.619,0.464
			c0.471,0.181,1.06,0.502,1.618,0.485c0.378-0.011,0.754-0.208,1.135-0.347c1.116-0.403,2.21-0.865,3.652-0.648
			c1.733,0.262,2.963,1.032,3.723,2.22c-1.466,0.933-2.625,2.339-2.427,4.74C17.818,14.688,19.086,15.964,20.67,16.716z"
                fill={color}
            />
        </svg>
    );
};

export const Google = ({
    width = 22,
    height = 22,
    color = "white",
}: // strokeWidth = "1.5",
IconProps) => {
    return (
        <svg
            style={{ marginRight: "0.5rem" }}
            fill={color}
            height={height}
            width={width}
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            viewBox="0 0 210 210"
            xmlSpace="preserve"
        >
            <path
                d="M0,105C0,47.103,47.103,0,105,0c23.383,0,45.515,7.523,64.004,21.756l-24.4,31.696C133.172,44.652,119.477,40,105,40
	c-35.841,0-65,29.159-65,65s29.159,65,65,65c28.867,0,53.398-18.913,61.852-45H105V85h105v20c0,57.897-47.103,105-105,105
	S0,162.897,0,105z"
            />
        </svg>

        // <svg
        //     width={width}
        //     height={height}
        //     viewBox="0 0 24 24"
        //     fill="none"
        //     xmlns="http://www.w3.org/2000/svg"
        // >
        //     <path
        //         d="M17.12 5.856C15.733 4.698 13.948 4 12 4C7.582 4 4 7.582 4 12C4 16.418 7.582 20 12 20C16.418 20 20 16.418 20 12H13"
        //         stroke={color}
        //         strokeWidth={strokeWidth}
        //         strokeLinecap="round"
        //         strokeLinejoin="round"
        //     />
        // </svg>
    );
};

export const Search = ({
    width = 32,
    height = 32,
    color = "black",
    strokeWidth = "1.5",
}: IconProps) => {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <circle
                cx="11.0586"
                cy="11.0586"
                r="7.06194"
                stroke={color}
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M20.0033 20.0033L16.0517 16.0517"
                stroke={color}
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

export const Question = ({
    width = 32,
    height = 32,
    color = "black",
    strokeWidth = "1.5",
}: IconProps) => {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M12 13.5006V12C13.105 12 14.0008 11.1042 14.0008 9.99919C14.0008 8.89416 13.105 7.99835 12 7.99835C10.895 7.99835 9.99916 8.89416 9.99916 9.99919"
                stroke={color}
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <circle
                cx="12"
                cy="12"
                r="9.00375"
                stroke={color}
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M12 15.9517C11.9724 15.9517 11.95 15.974 11.95 16.0017C11.95 16.0293 11.9724 16.0517 12 16.0517C12.0276 16.0517 12.05 16.0293 12.05 16.0017C12.05 15.974 12.0276 15.9517 12 15.9517"
                stroke={color}
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

export const Coinpig = ({
    width = 32,
    height = 32,
    color = "black",
    strokeWidth = "1.5",
}: IconProps) => {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M13.9749 4.02513C15.3417 5.39197 15.3417 7.60804 13.9749 8.97488C12.6081 10.3417 10.392 10.3417 9.02515 8.97488C7.65831 7.60804 7.65831 5.39197 9.02515 4.02513C10.392 2.65829 12.6081 2.65829 13.9749 4.02513"
                stroke={color}
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M17.0325 11.9675C17.0505 11.9854 17.0505 12.0146 17.0325 12.0325C17.0145 12.0505 16.9854 12.0505 16.9674 12.0325C16.9495 12.0146 16.9495 11.9854 16.9674 11.9675C16.9854 11.9495 17.0145 11.9495 17.0325 11.9675"
                stroke={color}
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M14.98 6.859C15.306 6.775 15.619 6.652 15.902 6.47C16.363 6.173 16.91 6 17.5 6H18.5V8.554C19.218 9.202 19.788 10.01 20.126 10.935H21C21.552 10.935 22 11.383 22 11.935V15C22 15.552 21.552 16 21 16H19.689C19.164 16.908 18.406 17.664 17.5 18.191V20C17.5 20.552 17.052 21 16.5 21H14.5C13.948 21 13.5 20.552 13.5 20V19H10V19.868C10 20.42 9.552 20.868 9 20.868H7C6.448 20.868 6 20.42 6 19.868V17.463C4.775 16.365 4 14.775 4 13C4 10.352 5.718 8.109 8.098 7.313"
                stroke={color}
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M2.288 10C1.819 10.273 1.5 10.776 1.5 11.358C1.5 12.229 2.206 12.935 3.077 12.935H4"
                stroke={color}
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M8.5 10H14.5"
                stroke={color}
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

export const CreditCard = ({
    width = 32,
    height = 32,
    color = "black",
    strokeWidth = "1.5",
}: IconProps) => {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M17.0021 18.0025V12C17.0022 11.4693 16.7915 10.9603 16.4162 10.585C16.0409 10.2098 15.5319 9.999 15.0012 9.99915H4.99708C4.46638 9.999 3.95738 10.2098 3.58212 10.585C3.20686 10.9603 2.9961 11.4693 2.99625 12V18.0025C2.9961 18.5332 3.20686 19.0422 3.58212 19.4174C3.95738 19.7927 4.46638 20.0035 4.99708 20.0033H15.0012C16.1063 20.0033 17.0021 19.1075 17.0021 18.0025Z"
                stroke={color}
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M2.99625 14.0799H17.0021"
                stroke={color}
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M6.19757 9.99913L7.40807 5.47724C7.54542 4.96477 7.88105 4.52801 8.34089 4.26337C8.80074 3.99872 9.34699 3.92794 9.8591 4.06665L19.5231 6.65773C20.0356 6.79508 20.4724 7.13071 20.737 7.59055C21.0016 8.05039 21.0724 8.59665 20.9337 9.10875L19.3831 14.9012C19.1071 15.9436 18.0521 16.5776 17.0021 16.3318"
                stroke={color}
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

export const Gift = ({
    width = 32,
    height = 32,
    color = "black",
    strokeWidth = "1.5",
}: IconProps) => {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M20 8H4C3.448 8 3 8.448 3 9V11C3 11.552 3.448 12 4 12H20C20.552 12 21 11.552 21 11V9C21 8.448 20.552 8 20 8Z"
                stroke={color}
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M12 21V8"
                stroke={color}
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M15.696 6.612C14.618 7.734 12.921 8 12.099 8"
                stroke={color}
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M12.099 8C12.099 8 11.605 4.884 12.82 3.62"
                stroke={color}
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M15.696 6.61199C16.49 5.78599 16.49 4.44599 15.696 3.61999C14.902 2.79399 13.615 2.79399 12.821 3.61999"
                stroke={color}
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M8.30399 6.612C9.38199 7.734 11.079 8 11.901 8"
                stroke={color}
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M11.901 8C11.901 8 12.395 4.884 11.18 3.62"
                stroke={color}
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M8.304 6.61199C7.51 5.78599 7.51 4.44599 8.304 3.61999C9.098 2.79399 10.385 2.79399 11.179 3.61999"
                stroke={color}
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M19 12V20C19 20.552 18.552 21 18 21H6C5.448 21 5 20.552 5 20V12"
                stroke={color}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

export const Close = ({
    width = 32,
    height = 32,
    color = "black",
    strokeWidth = "1.5",
}: IconProps) => {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g clipPath="url(#clip0_1181_37)">
                <path
                    d="M6.66667 6.66669L17.3333 17.3334"
                    stroke={color}
                    strokeWidth={strokeWidth}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M17.3333 6.66669L6.66667 17.3334"
                    stroke={color}
                    strokeWidth={strokeWidth}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </g>
            <defs>
                <clipPath id="clip0_1181_37">
                    <rect width={width} height={height} fill="white" />
                </clipPath>
            </defs>
        </svg>
    );
};

export const Alliances = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            fill="none"
            viewBox="0 0 28 28"
        >
            <g>
                <path
                    fill="#000"
                    fillRule="evenodd"
                    d="M14.737 10.753c2.442-1.325 3.66-2.81 3.66-4.512 0-2.448-2.236-3.996-4.322-2.935l-.09.047-.06-.046c-2.127-1.019-4.321.509-4.321 2.934 0 1.67 1.197 3.07 3.748 4.492l.43.207a.645.645 0 00.55.003l.405-.19zm4.715-.384c4.188 0 7.583 3.26 7.583 7.28 0 4.022-3.395 7.28-7.583 7.28-2.096 0-4.055-.82-5.427-2.244-1.42 1.424-3.38 2.245-5.477 2.245-4.187 0-7.583-3.26-7.583-7.28 0-4.022 3.396-7.28 7.583-7.28 2.097 0 4.056.82 5.428 2.245 1.42-1.425 3.38-2.246 5.476-2.246zm0 .07a7.841 7.841 0 00-5.476 2.225c-1.408-1.412-3.35-2.225-5.428-2.225-4.15 0-7.513 3.229-7.513 7.21 0 3.982 3.364 7.21 7.513 7.21 2.078 0 4.02-.812 5.477-2.223 1.408 1.411 3.35 2.224 5.427 2.224 4.15 0 7.513-3.229 7.513-7.21 0-3.982-3.363-7.21-7.513-7.21zm-6.222 3.167c-1.194-1.3-2.877-2.03-4.682-2.03-3.493 0-6.325 2.72-6.325 6.073 0 3.355 2.832 6.073 6.325 6.073a6.43 6.43 0 004.68-1.986c-.835-1.228-1.29-2.624-1.29-4.087 0-1.462.455-2.859 1.292-4.043zm6.222-2.03c3.493 0 6.325 2.72 6.325 6.073 0 3.355-2.832 6.073-6.325 6.073-1.805 0-3.488-.73-4.68-2.03a6.974 6.974 0 001.29-4.043c0-1.462-.455-2.859-1.29-4.086a6.43 6.43 0 014.68-1.986zM2.293 17.65c0-3.314 2.8-6.002 6.255-6.002 1.786 0 3.45.721 4.628 1.963a6.79 6.79 0 00-1.308 4.04c0 1.476.46 2.887 1.305 4.082a6.484 6.484 0 01-4.625 1.92c-3.455 0-6.255-2.688-6.255-6.003zm17.159-6.002c-1.786 0-3.45.721-4.625 1.92a7.035 7.035 0 011.305 4.082 6.79 6.79 0 01-1.307 4.039 6.353 6.353 0 004.627 1.964c3.455 0 6.255-2.688 6.255-6.003 0-3.314-2.8-6.002-6.255-6.002zm-4.578 6.002a5.86 5.86 0 00-.843-3.03h-.06l-.087.146-.141.267a5.86 5.86 0 00.227 5.648c.61-.913.904-1.95.904-3.03zM14 14.706l-.056.095a5.785 5.785 0 00-.749 2.85c0 1.066.29 2.09.773 2.994a5.788 5.788 0 00.032-5.939zm3.151-8.464c0-1.647-1.372-2.557-2.65-1.79l-.128.082-.094.054a.643.643 0 01-.617-.044c-1.37-.889-2.815.009-2.815 1.698 0 1.119.907 2.171 2.836 3.292l.258.146.107.065.11-.05c2.01-1.092 2.993-2.236 2.993-3.453z"
                    clipRule="evenodd"
                />
                <mask
                    id="mask0_0_2928"
                    style={{ maskType: "alpha" }}
                    width="28"
                    height="23"
                    x="0"
                    y="2"
                    maskUnits="userSpaceOnUse"
                >
                    <path
                        fill="#fff"
                        fillRule="evenodd"
                        d="M14.737 10.753c2.442-1.325 3.66-2.81 3.66-4.512 0-2.448-2.236-3.996-4.322-2.935l-.09.047-.06-.046c-2.127-1.019-4.321.509-4.321 2.934 0 1.67 1.197 3.07 3.748 4.492l.43.207a.645.645 0 00.55.003l.405-.19zm4.715-.384c4.188 0 7.583 3.26 7.583 7.28 0 4.022-3.395 7.28-7.583 7.28-2.096 0-4.055-.82-5.427-2.244-1.42 1.424-3.38 2.245-5.477 2.245-4.187 0-7.583-3.26-7.583-7.28 0-4.022 3.396-7.28 7.583-7.28 2.097 0 4.056.82 5.428 2.245 1.42-1.425 3.38-2.246 5.476-2.246zm0 .07a7.841 7.841 0 00-5.476 2.225c-1.408-1.412-3.35-2.225-5.428-2.225-4.15 0-7.513 3.229-7.513 7.21 0 3.982 3.364 7.21 7.513 7.21 2.078 0 4.02-.812 5.477-2.223 1.408 1.411 3.35 2.224 5.427 2.224 4.15 0 7.513-3.229 7.513-7.21 0-3.982-3.363-7.21-7.513-7.21zm-6.222 3.167c-1.194-1.3-2.877-2.03-4.682-2.03-3.493 0-6.325 2.72-6.325 6.073 0 3.355 2.832 6.073 6.325 6.073a6.43 6.43 0 004.68-1.986c-.835-1.228-1.29-2.624-1.29-4.087 0-1.462.455-2.859 1.292-4.043zm6.222-2.03c3.493 0 6.325 2.72 6.325 6.073 0 3.355-2.832 6.073-6.325 6.073-1.805 0-3.488-.73-4.68-2.03a6.974 6.974 0 001.29-4.043c0-1.462-.455-2.859-1.29-4.086a6.43 6.43 0 014.68-1.986zM2.293 17.65c0-3.314 2.8-6.002 6.255-6.002 1.786 0 3.45.721 4.628 1.963a6.79 6.79 0 00-1.308 4.04c0 1.476.46 2.887 1.305 4.082a6.484 6.484 0 01-4.625 1.92c-3.455 0-6.255-2.688-6.255-6.003zm17.159-6.002c-1.786 0-3.45.721-4.625 1.92a7.035 7.035 0 011.305 4.082 6.79 6.79 0 01-1.307 4.039 6.353 6.353 0 004.627 1.964c3.455 0 6.255-2.688 6.255-6.003 0-3.314-2.8-6.002-6.255-6.002zm-4.578 6.002a5.86 5.86 0 00-.843-3.03h-.06l-.087.146-.141.267a5.86 5.86 0 00.227 5.648c.61-.913.904-1.95.904-3.03zM14 14.706l-.056.095a5.785 5.785 0 00-.749 2.85c0 1.066.29 2.09.773 2.994a5.788 5.788 0 00.032-5.939zm3.151-8.464c0-1.647-1.372-2.557-2.65-1.79l-.128.082-.094.054a.643.643 0 01-.617-.044c-1.37-.889-2.815.009-2.815 1.698 0 1.119.907 2.171 2.836 3.292l.258.146.107.065.11-.05c2.01-1.092 2.993-2.236 2.993-3.453z"
                        clipRule="evenodd"
                    />
                </mask>
                <g mask="url(#mask0_0_2928)">
                    <g>
                        <path fill="#000" d="M0 0H28V28H0z" />
                    </g>
                </g>
            </g>
        </svg>
    );
};

type IconsTable = { [key: string]: JSX.Element };

export const mappedIcons = (title: string, iconProps: IconProps) => {
    const iconsTable: IconsTable = {
        arrowDown: ArrowDown(iconProps),
        arrowUp: ArrowUp(iconProps),
        phone: Phone(iconProps),
        headPhone: HeadPhone(iconProps),
        share: Share(iconProps),
        facebook: Facebook(iconProps),
        instagram: Instagram(iconProps),
        spotify: Spotify(iconProps),
        linkedIn: LinkedIn(iconProps),
        store: Store(iconProps),
        apple: Apple(iconProps),
        google: Google(iconProps),
        search: Search(iconProps),
        question: Question(iconProps),
        coinPig: Coinpig(iconProps),
        creditCard: CreditCard(iconProps),
        gift: Gift(iconProps),
        close: Close(iconProps),
    };

    return iconsTable[`${title}`] || null;
};
