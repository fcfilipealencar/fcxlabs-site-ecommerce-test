import { useState } from "react";
import { useForm } from "react-hook-form";
import { useAppContext } from "../../../../../application/context/state";
import FieldError from "../../../../../components/Form/FieldError";
import Input from "../../../../../components/Form/Input";
import Label from "../../../../../components/Form/Label";
import { CoupleDetailDto } from "../../../../../dto/CoupleDetail";
import { theme } from "../../../../../helpers/themes";
import WeddingGiftListApi from "../../../../../services/apis/WeddingGiftList";
import { Button } from "../../../../../ui/Button";
import { FlexContainer } from "../../../../../ui/Container/Flex";
import { ArrowDown, Close, Search } from "../../../../../ui/Icons";
import { SpaceWrapper } from "../../../../../ui/SpaceWrapper";
import { Text } from "../../../../../ui/Typography/Text";
import { useWeddingGiftListContext } from "../../../context/state";
import {
    ButtonsContainer,
    DatesInputContainer,
    FormColumn,
    FormContainer,
    FormSection,
} from "../style";

const SearchHeaderFilters = () => {
    const { isClientMobile } = useAppContext();
    const { setCouplesList } = useWeddingGiftListContext();
    const weddingGiftListApi = new WeddingGiftListApi();

    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
        // watch,
    } = useForm();

    const clearSearch = () => {
        setCouplesList({
            data: [],
            error: null,
            isLoading: false,
        });
    };

    const onSubmit = (filterValues: unknown) => {
        console.log(filterValues);

        setCouplesList({
            data: null,
            isLoading: true,
            error: null,
        });

        setTimeout(() => {
            weddingGiftListApi.getCouples().then(couples => {
                (couples.data as unknown as Promise<CoupleDetailDto[]>).then(
                    data => {
                        setCouplesList({
                            ...couples,
                            data,
                        });
                    }
                );
            });
        }, 1000);
    };

    const [showMoreFiltersClicked, setShowMoreFiltersClicked] = useState(false);

    return (
        <FormContainer>
            <FormSection
                flexDirection="row"
                flexWrap="wrap"
                gap={theme.space.x5}
                justifyContent="center"
                alignItems="flex-end"
            >
                <FormColumn flexDirection="column">
                    <Label
                        htmlFor="name"
                        text={`Nome${
                            isClientMobile ? " ou nome do casal" : ""
                        }`}
                    />

                    <FlexContainer
                        flexDirection="column"
                        alignItems="flex-start"
                    >
                        <Input
                            id="name"
                            name="name"
                            placeholder="Ex: Reginalda e Thiago, José Barros."
                            register={register}
                            maxLength={50}
                            hasError={false}
                            width={
                                isClientMobile
                                    ? theme.space["x1/1"]
                                    : theme.space.x72
                            }
                        />
                        {errors.name?.message && (
                            <FieldError text={errors.name.message.toString()} />
                        )}
                    </FlexContainer>
                </FormColumn>

                <FormColumn flexDirection="column">
                    <Label htmlFor="parentNames" text="Nome dos Pais" />

                    <FlexContainer
                        flexDirection="column"
                        alignItems="flex-start"
                    >
                        <Input
                            id="parentNames"
                            name="parentNames"
                            placeholder="Ex: Paulo e Ana"
                            register={register}
                            maxLength={50}
                            hasError={false}
                            width={
                                isClientMobile
                                    ? theme.space["x1/1"]
                                    : theme.space.x40
                            }
                        />
                        {errors.parentNames?.message && (
                            <FieldError
                                text={errors.parentNames.message.toString()}
                            />
                        )}
                    </FlexContainer>
                </FormColumn>

                <DatesInputContainer
                    gap={theme.space.x5}
                    displayInMobile={showMoreFiltersClicked ? "flex" : "none"}
                >
                    <FormColumn flexDirection="column">
                        <Label htmlFor="startDate" text="De:" />

                        <FlexContainer
                            flexDirection="column"
                            alignItems="flex-start"
                        >
                            <Input
                                id="startDate"
                                name="startDate"
                                mask="99/99/9999"
                                placeholder="Ex: 03/02/2020"
                                register={register}
                                pattern={{
                                    value: /\d{2}\/?\d{2}\/?\d{4}/,
                                    message: "Data no formato inválido!",
                                }}
                                hasError={false}
                                width={
                                    isClientMobile
                                        ? theme.space["x1/1"]
                                        : theme.space.x40
                                }
                                onBlur={({ target }) =>
                                    setValue(
                                        "startDate",
                                        target.value.replace(/[^0-9]/g, "")
                                    )
                                }
                            />
                            {errors.startDate?.message && (
                                <FieldError
                                    text={errors.startDate.message.toString()}
                                />
                            )}
                        </FlexContainer>
                    </FormColumn>

                    <FormColumn flexDirection="column">
                        <Label htmlFor="endDate" text="Até:" />

                        <FlexContainer
                            flexDirection="column"
                            alignItems="flex-start"
                        >
                            <Input
                                id="endDate"
                                name="endDate"
                                mask="99/99/9999"
                                placeholder="Ex: 03/02/2020"
                                register={register}
                                pattern={{
                                    value: /\d{2}\/?\d{2}\/?\d{4}/,
                                    message: "Data no formato inválido!",
                                }}
                                hasError={false}
                                width={
                                    isClientMobile
                                        ? theme.space["x1/1"]
                                        : theme.space.x40
                                }
                                onBlur={({ target }) =>
                                    setValue(
                                        "endDate",
                                        target.value.replace(/[^0-9]/g, "")
                                    )
                                }
                            />
                            {errors.endDate?.message && (
                                <FieldError
                                    text={errors.endDate.message.toString()}
                                />
                            )}
                        </FlexContainer>
                    </FormColumn>
                </DatesInputContainer>

                <ButtonsContainer>
                    {isClientMobile && (
                        <Button
                            rounded
                            fill="outline"
                            color={theme.colors.primary["200"]}
                            fontSize={theme.typography.fontSize.xs}
                            fontWeight={theme.typography.fontWeight["600"]}
                            width={theme.space.x64}
                            height={theme.space.x12}
                            onClick={event => {
                                event.preventDefault();
                                clearSearch();
                            }}
                        >
                            Limpar pesquisa
                        </Button>
                    )}

                    <Button
                        rounded
                        backgroundColor={theme.colors.secondary["300"]}
                        mouseOverColor={theme.colors.secondary["600"]}
                        width={theme.space.x40}
                        height={theme.space.x12}
                        fontSize={
                            isClientMobile
                                ? theme.typography.fontSize.xs
                                : theme.typography.fontSize.ssm
                        }
                        onClick={handleSubmit(onSubmit)}
                    >
                        <FlexContainer gap={theme.space.x2}>
                            <Search color={theme.colors.neutral["000"]} />
                            <Text
                                fontSize={
                                    isClientMobile
                                        ? theme.typography.fontSize.xs
                                        : theme.typography.fontSize.ssm
                                }
                                fontWeight={theme.typography.fontWeight[500]}
                                color={theme.colors.neutral["000"]}
                            >
                                Procurar
                            </Text>
                        </FlexContainer>
                    </Button>
                </ButtonsContainer>
            </FormSection>

            {isClientMobile && (
                <SpaceWrapper margin={`${theme.space.x2}`}>
                    <FlexContainer justifyContent="center">
                        <Button
                            id="show-more-filters-button"
                            data-testid="show-more-filters-button"
                            fill="clear"
                            color={theme.colors.primary["200"]}
                            width={theme.space.x48}
                            onClick={event => {
                                event?.preventDefault();
                                setShowMoreFiltersClicked(
                                    !showMoreFiltersClicked
                                );
                            }}
                        >
                            <Text
                                fontSize={theme.typography.fontSize.xs}
                                fontWeight={theme.typography.fontWeight[700]}
                            >
                                Exibir mais filtros
                            </Text>
                            <ArrowDown color={theme.colors.primary["200"]} />
                        </Button>
                    </FlexContainer>
                </SpaceWrapper>
            )}

            {!isClientMobile && (
                <SpaceWrapper margin={`${theme.space.x2}`}>
                    <FlexContainer
                        flexDirection="row"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <Button
                            rounded
                            fill="clear"
                            color={theme.colors.primary["200"]}
                            fontSize={theme.typography.fontSize.ssm}
                            fontWeight={theme.typography.fontWeight["600"]}
                            width={theme.space.x64}
                            height={theme.space.x12}
                            onClick={event => {
                                event.preventDefault();
                                clearSearch();
                            }}
                        >
                            <Close
                                color={theme.colors.primary["200"]}
                                width={60}
                                height={60}
                                strokeWidth="0.8"
                            />
                            Limpar pesquisa
                        </Button>
                    </FlexContainer>
                </SpaceWrapper>
            )}
        </FormContainer>
    );
};

export default SearchHeaderFilters;
