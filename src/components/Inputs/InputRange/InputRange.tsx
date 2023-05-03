import React, { useEffect } from 'react';
import { InputMax, InputMin, InputRangeContainer, Line, RangeBox, RangeButton } from './InputRangeStyle';

export const InputRange = (): JSX.Element => {

    useEffect( () => {
        window.addEventListener('mousemove', handlerMousemove);

        return () => {
            window.removeEventListener('mousemove', handlerMousemove);
        }
    }, []);

    const handlerMousemove = (e: any) => {
        console.log(e.x);
    }

    const handlerClickMin = (e: any) => {
        e.preventDefault();

        console.log(e);
    };

    const handlerClickMax = (e: any) => {
        e.preventDefault();
        console.log(e);
    };

    return (
        <InputRangeContainer>
            <InputMin maxLength={4}  placeholder='Min' name={'minPrice'} defaultValue={0} />
            
            <RangeBox>
                <Line />
                <RangeButton onClick={handlerClickMin} />
                <RangeButton onClick={handlerClickMax} />
            </RangeBox>

            <InputMax maxLength={4} placeholder='Max' name={'maxPrice'} defaultValue={0} />
        </InputRangeContainer>
    )
}