import Slider from 'components/Slider/Slider';
import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Section } from './MainStyle';

const Main = (): JSX.Element => {
    return (
        <Section className='main'>
            <Slider />
        </Section>
    )
}



export default Main;