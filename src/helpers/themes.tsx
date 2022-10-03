const x1bar3 = "33.333333%";
const x1bar2 = "50%";
const x2bar3 = "66.666667%";
const x1bar6 = "16.666667%";

const partition = {
    "x1/1": "100%",
    "x1/2": x1bar2,
    "x1/3": x1bar3,
    "x2/3": x2bar3,
    "x1/4": "25%",
    "x2/4": x1bar2,
    "x3/4": "75%",
    "x1/5": "20%",
    "x2/5": "40%",
    "x3/5": "60%",
    "x4/5": "80%",
    "x1/6": x1bar6,
    "x2/6": x1bar3,
    "x3/6": x1bar2,
    "x4/6": x2bar3,
    "x5/6": "83.333333%",
    "x1/12": "8.333333%",
    "x2/12": x1bar6,
    "x3/12": "25%",
    "x4/12": x1bar3,
    "x5/12": "41.666667%",
    "x6/12": x1bar2,
    "x7/12": "58.333333%",
    "x8/12": x2bar3,
    "x9/12": "75%",
    "x10/12": "83.333333%",
    "x11/12": "91.666667%",
};

const space = {
    ...partition,
    x0: "0",
    xpx: "1px",
    "x0.5": "2px", // 0.125rem
    x1: "4px", // 0.25rem
    "x1.5": "6px", // 0.375rem
    x2: "8px", // 0.5rem
    "x2.5": "10px", // 0.625rem
    x3: "12px", // 0.75rem
    "x3.5": "14px", // 0.875rem
    x4: "16px", // 1rem
    x5: "20px", // 1.25rem'
    x6: "24px", // 1.5rem
    x7: "1.75rem", // 1.75rem
    x8: "32px", // 2rem
    x9: "36px", // 2.25rem
    x10: "40px", // 2.5rem
    x11: "44px", // 2.75rem
    x12: "48px", // 3rem
    x14: "56px", // 3.5rem
    x16: "64px", // 4rem
    x20: "80px", // 5rem
    x24: "96px", // 6rem
    x28: "112px", // 7rem
    x32: "128px", // 8rem
    x36: "144px", // 9rem
    x40: "160px", // 10rem
    x44: "176px", // 11rem
    x48: "192px", // 12rem
    x52: "208px", // 13rem
    x56: "224px", // 14rem
    x60: "240px", // 15rem
    x64: "256px", // 16rem
    x72: "288px", // 18rem
    x78: "305px", // 18.75rem
    x80: "320px", // 20rem
    x88: "352px", // 22rem
    x96: "384px", // 24rem
    x104: "412px", // 26rem
    x112: "448px", // 28rem
    x128: "512px", // 32rem
    x144: "576px", // 36rem
    x160: "640px", // 40rem
};

const size = {
    mobileS: "320px",
    mobileM: "375px",
    mobileL: "425px",
    tabletS: "576px",
    tablet: "768px",
    laptop: "1024px",
    laptopL: "1440px",
    desktop: "2560px",
};

const getDevices = (mobileFirst = false) => {
    const mobileFirstAsString = mobileFirst ? "min-width" : "max-width";

    return {
        mobileS: `(${mobileFirstAsString}: ${size.mobileS})`,
        mobileM: `(${mobileFirstAsString}: ${size.mobileM})`,
        mobileL: `(${mobileFirstAsString}: ${size.mobileL})`,
        tabletS: `(${mobileFirstAsString}: ${size.tabletS})`,
        tablet: `(${mobileFirstAsString}: ${size.tablet})`,
        laptop: `(${mobileFirstAsString}: ${size.laptop})`,
        laptopL: `(${mobileFirstAsString}: ${size.laptopL})`,
        desktop: `(${mobileFirstAsString}: ${size.desktop})`,
    };
};

export const theme = {
    breakpoints: {
        "Breakpoints.xs": "0",
        "Breakpoints.sm": 480,
        "Breakpoints.md": 768,
        "Breakpoints.lg": 992,
        "Breakpoints.xl": 1200,
    },
    colors: {
        primary: {
            "050": "#FF0915",
            "100": "#EE0813",
            "200": "#DA0812",
            "300": "#C50710",
            "400": "#B1060E",
            "500": "#9C050C",
            "600": "#88050B",
        },
        secondary: {
            "050": "#00EF45",
            "100": "#00DA3F",
            "200": "#00C639",
            "300": "#00B234",
            "400": "#009D2E",
            "500": "#008928",
            "600": "#007422",
        },
        tertiary: {
            "050": "#00A2A2",
            "100": "#1E90FF",
            "200": "#187DE9",
            "300": "#126AD2",
            "400": "#0C56BC",
            "500": "#0643A5",
            "600": "#00308F",
        },
        neutral: {
            "000": "#FFFFFF",
            "025": "#FBFBFB",
            "050": "#F7F7F7",
            "075": "#EFEFEF",
            "100": "#E4E4E4",
            "200": "#CFCFCF",
            "300": "#B1B1B1",
            "400": "#9E9E9E",
            "500": "#7E7E7E",
            "600": "#626262",
            "700": "#565656",
            "800": "#4A4A4A",
            "900": "#161616",
            "999": "#000000",
        },
    },
    device: {
        mobileFirst: getDevices(true),
        desktopFirst: getDevices(false),
    },
    typography: {
        fontFamily: "Open Sans",
        fontSize: {
            xxs: "12px",
            xs: "14px",
            ssm: "16px",
            sm: "18px",
            md: "24px",
            lg: "32px",
            ml: "36px",
            xl: "64px",
        },
        fontWeight: {
            "100": 100,
            "200": 200,
            "300": 300,
            "400": 400,
            "500": 500,
            "600": 600,
            "700": 700,
            "800": 800,
            "900": 900,
            bold: "bold",
            bolder: "bolder",
            normal: "normal",
        },
    },
    space,
};
