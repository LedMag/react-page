import React, { useEffect, useState } from 'react';
import { InputMax, InputMin, InputRangeContainer, Line, Range, RangeBox, RangeInputMin, RangeInputMax } from './InputRangeStyle';
import { useDispatch, useSelector } from 'react-redux';
import { setFilters } from 'redux/actions/actionCreator';

const RANGE_SETTINGS = {
    priceGap: 1,
    max: 99,
    min: 0
}

export const InputRange = (): JSX.Element => {

    const dispatch = useDispatch();

    const { filters } = useSelector( (store: any) => {
        return {
            filters: store.setFilters.filters,
        }
    });
    const [range, setRange] = useState({min: RANGE_SETTINGS.min, max: RANGE_SETTINGS.max});
    const [length, setLength] = useState({left: 0, right: 0});

    useEffect( () => {
        dispatch(setFilters({...filters, minPrice: range.min, maxPrice: range.max}))
    }, [range])

    const handlerInputMax = (e: any) => {
        if(((e.target.value - range.min) < RANGE_SETTINGS.priceGap) || e.target.value > RANGE_SETTINGS.max) return;
        setRange({...range, max: e.target.value || RANGE_SETTINGS.max});
        setLength({...length, right: 100 - (range.max / 99) * 100});
    }

    const handlerInputMin = (e: any) => {
        if(((range.max - e.target.value) < RANGE_SETTINGS.priceGap) || e.target.value < RANGE_SETTINGS.min) return;
        setRange({...range, min: e.target.value || RANGE_SETTINGS.min});
        setLength({...length, left: (range.min / 98) * 100});
    }

    return (
        <InputRangeContainer>
            <InputMin onInput={handlerInputMin} maxLength={4}  placeholder='Min' name={'minPrice'} value={range.min} />
            <RangeBox>
                <Line>
                    <Range length={length}/>
                </Line>
                <RangeInputMin type='range' onInput={handlerInputMin} min={RANGE_SETTINGS.min} max={RANGE_SETTINGS.max - RANGE_SETTINGS.priceGap} value={range.min} step={RANGE_SETTINGS.priceGap} />
                <RangeInputMax type="range" onInput={handlerInputMax} min={RANGE_SETTINGS.min + RANGE_SETTINGS.priceGap} max={RANGE_SETTINGS.max} value={range.max} step={RANGE_SETTINGS.priceGap} />
            </RangeBox>
            <InputMax onInput={handlerInputMax} maxLength={4} placeholder='Max' name={'maxPrice'} value={range.max} />
        </InputRangeContainer>
    )
}