import Image from "../../../../components/Image";
import { theme } from "../../../../helpers/themes";
import { FlexContainer } from "../../../../ui/Container/Flex";
import { Text } from "../../../../ui/Typography/Text";
import { Title } from "../../../../ui/Typography/Title";
import { HomeContainer } from "../style";
import {
    BrandCard,
    BrandCardImage,
    BrandCardsContainer,
    CoupleCard,
    CoupleCardBody,
    CoupleCardHeader,
    CoupleCardHeaderImage,
    CoupleCardHeaderInfo,
    GraySection,
    GraySectionTitle,
    HappyCouplesContainer,
} from "./style";

const ThirdSection = () => {
    return (
        <GraySection>
            <HomeContainer>
                <FlexContainer
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    textAlign="center"
                    gap={theme.space.x14}
                >
                    <GraySectionTitle>
                        Aqui você encontra as melhores marcas.
                    </GraySectionTitle>

                    <BrandCardsContainer
                        display="flex"
                        flexDirection="row"
                        flexWrap="wrap"
                        justifyContent="space-between"
                    >
                        <BrandCard>
                            <BrandCardImage>
                                <Image
                                    src="https://d3gcmglegmnvz8.cloudfront.net/homelista/marcas/logo-brastemp"
                                    alt="Logo Brastemp"
                                    width="100%"
                                    height="100%"
                                    layout="fill"
                                />
                            </BrandCardImage>
                        </BrandCard>
                        <BrandCard>
                            <BrandCardImage>
                                <Image
                                    src="	https://d3gcmglegmnvz8.cloudfront.net/homelista/marcas/logo-oster"
                                    alt="Logo Oster"
                                    width="100%"
                                    height="100%"
                                    layout="fill"
                                />
                            </BrandCardImage>
                        </BrandCard>
                        <BrandCard>
                            <BrandCardImage>
                                <Image
                                    src="	https://d3gcmglegmnvz8.cloudfront.net/homelista/marcas/logo-tramontina"
                                    alt="Logo Tramontina"
                                    width="100%"
                                    height="100%"
                                    layout="fill"
                                />
                            </BrandCardImage>
                        </BrandCard>
                        <BrandCard>
                            <BrandCardImage>
                                <Image
                                    src="https://d3gcmglegmnvz8.cloudfront.net/homelista/marcas/logo-lg"
                                    alt="Logo LG"
                                    width="100%"
                                    height="100%"
                                    layout="fill"
                                />
                            </BrandCardImage>
                        </BrandCard>
                        <BrandCard>
                            <BrandCardImage>
                                <Image
                                    src="https://d3gcmglegmnvz8.cloudfront.net/homelista/marcas/logo-deca"
                                    alt="Logo Deca"
                                    width="100%"
                                    height="100%"
                                    layout="fill"
                                />
                            </BrandCardImage>
                        </BrandCard>
                        <BrandCard>
                            <BrandCardImage>
                                <Image
                                    src="https://d3gcmglegmnvz8.cloudfront.net/homelista/marcas/logo-coral"
                                    alt="Logo Coral"
                                    width="100%"
                                    height="100%"
                                    layout="fill"
                                />
                            </BrandCardImage>
                        </BrandCard>
                        <BrandCard>
                            <BrandCardImage>
                                <Image
                                    src="https://d3gcmglegmnvz8.cloudfront.net/homelista/marcas/logo-santista"
                                    alt="Logo Santista"
                                    width="100%"
                                    height="100%"
                                    layout="fill"
                                />
                            </BrandCardImage>
                        </BrandCard>
                        <BrandCard>
                            <BrandCardImage>
                                <Image
                                    src="https://d3gcmglegmnvz8.cloudfront.net/homelista/marcas/logo-oxford"
                                    alt="Logo Oxford"
                                    width="100%"
                                    height="100%"
                                    layout="fill"
                                />
                            </BrandCardImage>
                        </BrandCard>
                    </BrandCardsContainer>

                    <GraySectionTitle>
                        Casais felizes com a casa completa? temos:
                    </GraySectionTitle>

                    <HappyCouplesContainer
                        display="flex"
                        flexDirection="row"
                        flexWrap="wrap"
                        justifyContent="space-between"
                        gap={theme.space.x4}
                    >
                        <CoupleCard>
                            <CoupleCardHeader
                                display="flex"
                                flexDirection="row"
                                alignItems="center"
                                gap={theme.space.x6}
                            >
                                <CoupleCardHeaderImage
                                    src="https://d3gcmglegmnvz8.cloudfront.net/homelista/fotonoivos/LiviaReis-Salvador"
                                    alt="Foto do casal"
                                    width="73px"
                                    height="73px"
                                />
                                <CoupleCardHeaderInfo>
                                    <Title>Lívia Reis e Hilder Barbosa</Title>
                                    <Text>Salvador, BA</Text>
                                </CoupleCardHeaderInfo>
                            </CoupleCardHeader>

                            <CoupleCardBody>
                                &quot;Muito obrigada a Lista de Casamento da
                                Ferreira Costa por nos proporcionar a
                                tranquilidade da montagem de nossa Lista, nesse
                                momento de tanta instabilidade, vocês nos
                                passaram a transparência e força que
                                precisávamos.&quot;
                            </CoupleCardBody>
                        </CoupleCard>

                        <CoupleCard>
                            <CoupleCardHeader
                                display="flex"
                                flexDirection="row"
                                alignItems="center"
                                gap={theme.space.x6}
                            >
                                <CoupleCardHeaderImage
                                    src="https://d3gcmglegmnvz8.cloudfront.net/homelista/fotonoivos/Felipe-Aracaju"
                                    alt="Foto do casal"
                                    width="73px"
                                    height="73px"
                                />
                                <CoupleCardHeaderInfo>
                                    <Title>Felipe e Lorenna Cabral</Title>
                                    <Text>Aracaju, SE</Text>
                                </CoupleCardHeaderInfo>
                            </CoupleCardHeader>

                            <CoupleCardBody>
                                &quot;Gostaria de agradecer a Lista de Casamento
                                pelo excelente atendimento e suporte, sempre
                                atenciosos e prestativos. Indicaremos aos nossos
                                amigos. Com certeza é uma empresa que
                                amamos!&quot;
                            </CoupleCardBody>
                        </CoupleCard>

                        <CoupleCard>
                            <CoupleCardHeader
                                display="flex"
                                flexDirection="row"
                                alignItems="center"
                                gap={theme.space.x6}
                            >
                                <CoupleCardHeaderImage
                                    src="https://d3gcmglegmnvz8.cloudfront.net/homelista/fotonoivos/Priscila-Recife"
                                    alt="Foto do casal"
                                    width="73px"
                                    height="73px"
                                />
                                <CoupleCardHeaderInfo>
                                    <Title>Priscila e Gilerson</Title>
                                    <Text>Recife, PE</Text>
                                </CoupleCardHeaderInfo>
                            </CoupleCardHeader>

                            <CoupleCardBody>
                                &quot;Minha experiência foi ótima em relação a
                                minha lista de casamento, achei super organizado
                                e prático. Amei!&quot;
                            </CoupleCardBody>
                        </CoupleCard>

                        <CoupleCard>
                            <CoupleCardHeader
                                display="flex"
                                flexDirection="row"
                                alignItems="center"
                                gap={theme.space.x6}
                            >
                                <CoupleCardHeaderImage
                                    src="https://d3gcmglegmnvz8.cloudfront.net/homelista/fotonoivos/Eduardo-JoaoPessoa"
                                    alt="Foto do casal"
                                    width="73px"
                                    height="73px"
                                />
                                <CoupleCardHeaderInfo>
                                    <Title>Eduardo e Danielly</Title>
                                    <Text>João Pessoa, PB</Text>
                                </CoupleCardHeaderInfo>
                            </CoupleCardHeader>

                            <CoupleCardBody>
                                &quot;No primeiro atendimento constatamos que
                                teríamos uma ótima experiência. A equipe sempre
                                atenciosa e a loja sempre tiveram os produtos
                                que desejávamos, não tivemos dificuldade para
                                comprar e retirar os presentes. Estamos
                                satisfeitos!&quot;
                            </CoupleCardBody>
                        </CoupleCard>

                        <CoupleCard>
                            <CoupleCardHeader
                                display="flex"
                                flexDirection="row"
                                alignItems="center"
                                gap={theme.space.x6}
                            >
                                <CoupleCardHeaderImage
                                    src="https://d3gcmglegmnvz8.cloudfront.net/homelista/fotonoivos/Laura%20Jacinto-Garanhuns"
                                    alt="Foto do casal"
                                    width="73px"
                                    height="73px"
                                />
                                <CoupleCardHeaderInfo>
                                    <Title>
                                        Laura Jacinto e Roberto Barros
                                    </Title>
                                    <Text>Garanhuns, PE</Text>
                                </CoupleCardHeaderInfo>
                            </CoupleCardHeader>

                            <CoupleCardBody>
                                &quot;Apenas elogios a a equipe que trabalha no
                                setor da Lista de Casamento da Ferreira Costa
                                sempre nos tratou muito bem, orientando e
                                atendendo todos os pedidos. Obrigada a todos
                                vocês! Recomendamos a lista a todos que estão
                                planejando se casar.&quot;
                            </CoupleCardBody>
                        </CoupleCard>

                        <CoupleCard>
                            <CoupleCardHeader
                                display="flex"
                                flexDirection="row"
                                alignItems="center"
                                gap={theme.space.x6}
                            >
                                <CoupleCardHeaderImage
                                    src="https://d3gcmglegmnvz8.cloudfront.net/homelista/fotonoivos/Jessica-Garanhuns"
                                    alt="Foto do casal"
                                    width="73px"
                                    height="73px"
                                />
                                <CoupleCardHeaderInfo>
                                    <Title>Jessica e Amauri</Title>
                                    <Text>Garanhuns, PE</Text>
                                </CoupleCardHeaderInfo>
                            </CoupleCardHeader>

                            <CoupleCardBody>
                                &quot;Amei poder escolher e ganhar exatamente o
                                que pedi. Foi rápido, ganhei vales pela internet
                                e mesmo fazendo em cima da hora consegui um
                                retorno positivo.&quot;
                            </CoupleCardBody>
                        </CoupleCard>
                    </HappyCouplesContainer>
                </FlexContainer>
            </HomeContainer>
        </GraySection>
    );
};

export default ThirdSection;
