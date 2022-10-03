import SupportContactDto from "../../../dto/SupportContact";

const data: SupportContactDto[] = [
    {
        mainIcon: {
            title: "phone",
        },
        title: "Compre por telefone",
        description: "Nosso serviço de televendas está disponível",
        link: {
            title: "saiba mais >",
            href: "https://ferreiracosta.movidesk.com/kb/article/156443/qual-o-horario-de-funcionamento-e-contatos-do-vendas-corporativa?ticketId=&q=",
        },
    },
    {
        mainIcon: {
            title: "headPhone",
        },
        title: "Central de Atendimento",
        description: "Tire suas dúvidas sobre qualquer assunto",
        link: {
            title: "acesse a central >",
            href: "https://ferreiracosta.movidesk.com/kb/",
        },
    },
    {
        mainIcon: {
            title: "share",
        },
        title: "Nossas redes sociais",
        secondaryIcons: [
            {
                title: "facebook",
                link: "https://www.facebook.com/FerreiraCosta",
            },
            {
                title: "instagram",
                link: "https://www.instagram.com/ferreiracosta/",
            },
            {
                title: "spotify",
                link: "https://open.spotify.com/user/kbze0z3zou1bdqjlws8a04egl?si=e1DSfrsMQqWv50B9oIf0-w",
            },
            {
                title: "linkedIn",
                link: "https://www.linkedin.com/company/ferreiracosta/",
            },
        ],
    },
];

export default data;
