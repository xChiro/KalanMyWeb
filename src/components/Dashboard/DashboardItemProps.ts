import {CSSProperties, DOMAttributes} from "react";

export interface DashboardItemProps extends DOMAttributes<HTMLElement> {
    title: string;
    containerStyle: CSSProperties | undefined;
    titleStyle: CSSProperties | undefined;
}