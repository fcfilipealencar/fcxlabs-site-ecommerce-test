import Image from "../../../../../components/Image";
import Link from "../../../../../components/Link";
import { CategoriesScrollerContainer } from "./styles";

type CategoriesData = {
    name: string;
    image?: string;
};

interface CategoriesScrollerProps {
    listCategories: CategoriesData[];
}

const CategoriesScrollerMobile = ({
    listCategories,
}: CategoriesScrollerProps) => {
    return (
        <CategoriesScrollerContainer>
            {listCategories?.map(({ name }) => (
                <Link href="/" key={name}>
                    <div>
                        <Image
                            src="https://fercos-s3-ecommerce.s3.amazonaws.com/thumb/default/default_thumb.svg"
                            alt={name}
                            width="54px"
                            height="54px"
                        />
                    </div>
                    <aside>
                        <p>{name}</p>
                    </aside>
                </Link>
            ))}
        </CategoriesScrollerContainer>
    );
};

export { CategoriesScrollerMobile };
