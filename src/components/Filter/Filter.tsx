import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { FilterBox, InputName, SelectCategory, SelectCollection, InputMin, InputMax } from './FilterStyles';
import { useDispatch, useSelector } from 'react-redux';
import { GET_PRODUCTS_BY_FILTER } from 'redux/constans';
import { InputRange } from 'components/Inputs/InputRange/InputRange';

type Filter = {
    name: string,
    category: number,
    collection: number,
    minPrice: number,
    maxPrice: number,
    order: string,
}

type TypeArg = {
    params: {
        filters: any,
        categories: any[],
        collections: any[]
    },
    handleChange: Function
}

let Filter = ({params: { filters, categories, collections }, handleChange}: TypeArg):JSX.Element => {

    const dispatch = useDispatch();
    
    const { isOpen } = useSelector( (store: any) => {
        return {
            isOpen: store.toggleFilter,
        }
    });

    const getFormData = (form: any) => {
        if(!form) return undefined;
        const filter: any = {};

        const formData = new FormData(form);
 
        const keys = formData.keys();
        Array.from(keys).forEach( key => {
            filter[key] = formData.get(key);
        })
        filter.order = 'asc';
        return filter;
    } 

    const form: HTMLFormElement | null = document.querySelector('#filter');

    const categoryOptions = categories?.map( (category: any) => {
        return (
            <option label={category.name} value={category.id} key={category.id} />
        )
    });

    const collectionOptions = collections?.map( (collection: any) => {
        return (
            <option label={collection.name} value={collection.id} key={collection.id} />
        )
    });

    return (
        <FilterBox open={isOpen}
            id='filter' 
            onChange={ (event: any) => {
                const formData = form ? new FormData(form) : null;
                handleChange(getFormData(event.target.form));
            }}
        >
            <InputName placeholder='Name' name={'name'} defaultValue={filters.name} />

            <SelectCategory name={'category'} defaultValue={filters.category} >
                <option label="Category" value={0}></option>
                {categoryOptions || []}
            </SelectCategory>

            <SelectCollection name={'collection'} defaultValue={filters.collection} >
                <option label="Collection" value={0}></option>
                {collectionOptions || []}
            </SelectCollection>

            <InputRange />

            {/* <InputMin placeholder='Min' name={'minPrice'} defaultValue={filters.minPrice} />
            
            <InputMax placeholder='Max' name={'maxPrice'} defaultValue={filters.maxPrice} /> */}
        </FilterBox>
    )
}

export default Filter;