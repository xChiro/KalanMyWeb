import {ChangeEventHandler, CSSProperties} from "react";

export interface CategoriesSelectProps {
    accountId: string | undefined;
    style?: CSSProperties | undefined;
    className?: string;
    onChange?: any | undefined;
    value?: string | undefined;
}