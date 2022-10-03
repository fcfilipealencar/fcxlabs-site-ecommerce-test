import { LocationIcon, NavBarMobileContainer } from "./styles";

const locationBranches = {
    1: "Garanhuns-PE",
    2: "Recife-PE",
    3: "Salvador-BA",
    // é iniciado como 2 nos cookies do site
    4: "Outras Cidades",
    5: "Aracaju-SE",
    6: "João Pessoa-PB",
    7: "Natal-RN",
    8: "Caruaru-PE",
};

interface NavBarMobileProps {
    location: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
}

const NavBarMobile = ({ location }: NavBarMobileProps) => {
    return (
        <NavBarMobileContainer>
            <LocationIcon />
            <span>
                Você está em <strong>{locationBranches[`${location}`]}</strong>
            </span>
        </NavBarMobileContainer>
    );
};

export { NavBarMobile };
