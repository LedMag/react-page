import React from 'react';
import { FormattedMessage } from 'react-intl';
import { FilterBox, InputName, SelectCategory, SelectCollection, InputMin, InputMax } from './FilterStyles';
import { useDispatch } from 'react-redux';
import { GET_PRODUCTS_BY_FILTER } from 'redux/constans';

// type Filter = {
//     name: string,
//     category: number,
//     collection: number,
//     minPrice: number,
//     maxPrice: number,
//     order: string,
// }

let Filter = ({params: {filters, categories, collections}, handleChange}: any):JSX.Element => {
    const dispatch = useDispatch();

    const getFormData = (form: any) => {
        const filter: any = {};
        form.forEach( (defaultValue: string | number, key: string) => {
            filter[key] = defaultValue;
        })
        filter.order = 'asc';
        return filter;
    } 

    const form: HTMLFormElement | null = document.querySelector('#filter');

    const categoryOptions = categories.map( (category: any) => {
        return (
            <option label={category.name} defaultValue={category.id} key={category.id} />
        )
    });

    const collectionOptions = collections.map( (collection: any) => {
        return (
            <option label={collection.name} defaultValue={collection.id} key={collection.id} />
        )
    });

    return (
        <FilterBox
            id='filter' 
            onChange={ () => {
                const formData = form ? new FormData(form) : null;
                handleChange(getFormData(formData));
            }}
        >
            <label htmlFor={'name'} >Name</label>
            <InputName name={'name'} defaultValue={filters.name} />

            <label htmlFor={'category'} >Category</label>
            <SelectCategory name={'category'} defaultValue={filters.category} >
                <option label={'-'} defaultValue={''} />
                {collectionOptions}
            </SelectCategory>

            <label htmlFor={'collection'} >Collection</label>
            <SelectCollection name={'collection'} defaultValue={filters.collection} >
                <option label={'-'} defaultValue={''} />
                {collectionOptions}
            </SelectCollection>

            <label htmlFor={'minPrice'} >Min</label>
            <InputMin name={'minPrice'} defaultValue={filters.minPrice} />
            
            <label htmlFor={'maxPrice'} >Max</label>
            <InputMax name={'maxPrice'} defaultValue={filters.maxPrice} />
        </FilterBox>
    )
}

export default Filter;