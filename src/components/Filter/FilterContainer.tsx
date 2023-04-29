import React, { useEffect } from 'react';
import { FormattedMessage } from 'react-intl';
import { useDispatch, useSelector } from 'react-redux';
import { setFilters } from 'redux/actions/actionCreator';
import { GET_DATA, GET_PRODUCTS_BY_FILTER } from 'redux/constans';
import Filter from './Filter';

const FilterContainer = ():JSX.Element => {

    const dispatch = useDispatch();
    const { filters, categories, collections, error } = useSelector( (store: any) => {
        return {
            filters: store.setFilters.filters,
            categories: store.setData.categories.data,
            collections: store.setData.collections.data,
            error: store.setErrors.productsError,
        }
    });

    const handleChange = (data: any) => {
        dispatch(setFilters(data));
        dispatch({type: GET_PRODUCTS_BY_FILTER});
    }

    useEffect( () => {
        dispatch({type: GET_DATA});
    }, [dispatch])
    
    return (
        <Filter params={{filters, categories, collections}} handleChange={handleChange} />
        // Filter( {params: {filters, categories, collections}, handleChange} )
    )
}

export default FilterContainer;