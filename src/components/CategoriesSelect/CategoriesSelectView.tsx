import React, {useEffect, useState} from 'react';
import {CategoriesSelectProps} from "./CategoriesSelectProps";
import {useAppSelector} from "../../store/hooks";
import {selectToken} from "../../store/user/user.slice";
import {getCategoriesByAccount} from "../../services/CategoriesService";

function CategoriesSelectView(props: CategoriesSelectProps) {
    const [category, setCategory] = useState(props.value ?? "");
    const tokenModel = useAppSelector(selectToken);
    const [categories, setCategories] = useState([]);
    const categoriesOptions: any[] = [];

    useEffect(
        () => {
            if (props.accountId && tokenModel.token) {
                getCategoriesByAccount(props.accountId, tokenModel.token).then(
                    (value) => {
                        setCategories(value.categories);
                    }
                )
            }
        },
        [props.accountId, tokenModel.token]
    )

    if (categories)
        categories.forEach((value, index) => categoriesOptions.push(<option key={index}>{value}</option>));

    return (
        <div>
            <input className={props.className} type="text" list="categories" placeholder="Category" style={props.style} value={category}
                   onChange={(event) => {
                       setCategory(event.target.value);
                       props.onChange(event.target.value);
                   }}/>
            <datalist id="categories">
                {categoriesOptions}
            </datalist>
        </div>
    );
}

export default CategoriesSelectView;