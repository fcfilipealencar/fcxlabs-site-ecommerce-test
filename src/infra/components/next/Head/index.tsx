import NextHead from "next/head";

export interface HeadProps {
    title?: string;
}

const Head = ({
    title = "Ferreira Costa | Tudo para Casa, Construção e Decoração",
}: HeadProps) => {
    return (
        <NextHead>
            <title>{title}</title>
            {/* <meta name="description" content="Encontre as melhores ofertas de eletrodomésticos, móveis, pisos, utilidades domésticas e muito mais para sua casa! Aproveite!"/>
            <meta name="keywords" content="Ferreira Costa, Home Center, Construção, Casa, Ofertas, Decoração"/> */}
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1"
            />
            <link
                rel="apple-touch-icon"
                sizes="180x180"
                href="https://fercos-s3-ecommerce.s3.amazonaws.com/favicon/apple-touch-icon.png"
            />
            <link
                rel="icon"
                type="image/png"
                sizes="32x32"
                href="https://fercos-s3-ecommerce.s3.amazonaws.com/favicon/favicon-32x32.png"
            />
            <link
                rel="icon"
                type="image/png"
                sizes="16x16"
                href="https://fercos-s3-ecommerce.s3.amazonaws.com/favicon/favicon-16x16.png"
            />
        </NextHead>
    );
};

export default Head;
