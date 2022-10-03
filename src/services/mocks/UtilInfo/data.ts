import { UtilInfoDto } from "../../../dto/UtilInfo";
import { theme } from "../../../helpers/themes";

const paymentOptionsData: UtilInfoDto[] = [
    {
        title: "Formas de pagamento",
        options: [
            {
                title: "Crédito",
                images: [
                    {
                        src: "https://fercos-s3-ecommerce.s3.amazonaws.com/pagamentos/bandeiras/Visa.svg",
                        alt: "Visa",
                        width: "41px",
                        height: "27px",
                    },
                    {
                        src: "https://fercos-s3-ecommerce.s3.amazonaws.com/pagamentos/bandeiras/MasterCard.svg",
                        alt: "MasterCard",
                        width: "41px",
                        height: "27px",
                    },
                    {
                        src: "https://fercos-s3-ecommerce.s3.amazonaws.com/pagamentos/bandeiras/Elo.svg",
                        alt: "Elo",
                        width: "41px",
                        height: "27px",
                    },
                    {
                        src: "https://fercos-s3-ecommerce.s3.amazonaws.com/pagamentos/bandeiras/Hipercard.svg",
                        alt: "Hipercard",
                        width: "41px",
                        height: "27px",
                    },
                    {
                        src: "https://fercos-s3-ecommerce.s3.amazonaws.com/pagamentos/bandeiras/Amex.svg",
                        alt: "Amex",
                        width: "41px",
                        height: "27px",
                    },
                    {
                        src: "https://fercos-s3-ecommerce.s3.amazonaws.com/pagamentos/bandeiras/dinners.svg",
                        alt: "Dinners",
                        width: "41px",
                        height: "27px",
                    },
                ],
            },
            {
                title: "Pix",
                images: [
                    {
                        src: "https://fercos-s3-ecommerce.s3.amazonaws.com/pagamentos/icon_pix.png",
                        alt: "Visa",
                        width: "24px",
                        height: "24px",
                    },
                ],
            },
        ],
    },
];

const linkOptionsData: UtilInfoDto[] = [
    {
        title: "Lojas e Serviços",
        style: {
            borderBottom: true,
        },
        icon: {
            title: "store",
            color: theme.colors.primary["200"],
            width: 24,
            height: 24,
        },
        options: [
            {
                title: "Nossas Lojas",
                link: {
                    title: "Nossas Lojas",
                    href: "https://ferreiracosta.movidesk.com/kb/article/156436/nossas-lojas?ticketId=&q=",
                },
            },
            {
                title: "Lista de Casamento",
                link: {
                    title: "Lista de Casamento",
                    href: "/lista-de-casamento",
                },
            },
            {
                title: "Clube do Profissional",
                link: {
                    title: "Clube do Profissional",
                    href: "http://clubedoprofissional.ferreiracosta.com/",
                },
            },
            {
                title: "Trabalhe Conosco",
                link: {
                    title: "Trabalhe Conosco",
                    href: "https://carreiras.ferreiracosta.com",
                },
            },
            {
                title: "Televendas",
                link: {
                    title: "Televendas",
                    href: "https://ferreiracosta.movidesk.com/kb/article/156443/qual-o-horario-de-funcionamento-e-contatos-do-vendas-corporativa?ticketId=&q=",
                },
            },
        ],
    },
    {
        title: "Dúvidas",
        style: {
            borderBottom: true,
        },
        icon: {
            title: "headPhone",
            color: theme.colors.primary["200"],
            width: 24,
            height: 24,
        },
        options: [
            {
                title: "Central de Atendimento",
                link: {
                    title: "Central de Atendimento",
                    href: "https://ferreiracosta.movidesk.com/kb/",
                },
            },
            {
                title: "Condições de Uso do Site",
                link: {
                    title: "Condições de Uso do Site",
                    href: "https://ferreiracosta.movidesk.com/kb/article/156348/termos-e-condicoes-de-uso-do-site?ticketId=&q=",
                },
            },
            {
                title: "Política de Entrega",
                link: {
                    title: "Política de Entrega",
                    href: "https://ferreiracosta.movidesk.com/kb/article/156345/politica-de-entrega-da-ferreira-costa?ticketId=&q=",
                },
            },
            {
                title: "Política de Privacidade",
                link: {
                    title: "Política de Privacidade",
                    href: "https://ferreiracosta.movidesk.com/kb/article/158335/politica-de-privacidade-do-site-da-ferreira-costa?ticketId=&q=",
                },
            },
            {
                title: "Política de Trocas e Devoluções",
                link: {
                    title: "Política de Trocas e Devoluções",
                    href: "https://ferreiracosta.movidesk.com/kb/article/156334/politica-de-troca-e-devolucao-de-produtos-da-ferreira-costa",
                },
            },
        ],
    },
    {
        title: "Redes Sociais",
        style: {
            borderBottom: true,
        },
        icon: {
            title: "share",
            color: theme.colors.primary["200"],
            width: 24,
            height: 24,
        },
        options: [
            {
                title: "Facebook",
                link: {
                    title: "Facebook",
                    href: "https://www.facebook.com/FerreiraCosta",
                },
            },
            {
                title: "Instagram",
                link: {
                    title: "Instagram",
                    href: "https://www.instagram.com/ferreiracosta/",
                },
            },
            {
                title: "Spotify",
                link: {
                    title: "Spotify",
                    href: "https://open.spotify.com/user/kbze0z3zou1bdqjlws8a04egl?si=e1DSfrsMQqWv50B9oIf0-w",
                },
            },
            {
                title: "LinkedIn",
                link: {
                    title: "LinkedIn",
                    href: "https://www.linkedin.com/company/ferreiracosta/",
                },
            },
        ],
    },
];

const allData = {
    linkOptionsData,
    paymentOptionsData,
};

export default allData;
