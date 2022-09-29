import {ChangeEventHandler, CSSProperties} from "react";

export interface CategoriesSelectProps {
    accountId: string | undefined;
    style?: CSSProperties | undefined;
    className?: string;
    handleClick?: any | undefined;
}