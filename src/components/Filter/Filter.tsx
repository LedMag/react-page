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
        if(!form) return undefined;
        const filter: any = {};

        const formData = new FormData(form);
 
        const keys = formData.keys();
        Array.from(keys).forEach( key => {
            filter[key] = formData.get(key);
        })
        filter.order = 'asc';
        console.log(filter);

        return filter;
    } 

    const form: HTMLFormElement | null = document.querySelector('#filter');

    const categoryOptions = categories.map( (category: any) => {
        return (
            <option label={category.name} value={category.id} key={category.id} />
        )
    });

    const collectionOptions = collections.map( (collection: any) => {
        return (
            <option label={collection.name} value={collection.id} key={collection.id} />
        )
    });

    return (
        <FilterBox
            id='filter' 
            onChange={ (event: any) => {
                // const formData = form ? new FormData(form) : null;
                handleChange(getFormData(event.target.form));
            }}
        >
            <label htmlFor={'name'} >Name</label>
            <InputName name={'name'} defaultValue={filters.name} />

            <label htmlFor={'category'} >Category</label>
            <SelectCategory name={'category'} defaultValue={filters.category} >
                <option label="-" value={0}></option>
                {collectionOptions}
            </SelectCategory>

            <label htmlFor={'collection'} >Collection</label>
            <SelectCollection name={'collection'} defaultValue={filters.collection} >
                <option label="-" value={0}></option>
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