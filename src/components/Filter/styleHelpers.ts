export const styleFilter = (open: boolean, colors: any) => {
    return `
        padding: 5px;
        
        @media(min-width: 320px) {
            display: ${ (open: boolean) => open ? 'flex' : 'none'};
            flex-direction: column;
            width: 100%;
            top: 0;
            left: 0;
            background-color: ${colors.blue};
            z-index: 9;
        }

        // @media(min-width: 768px) {
        //     position: unset;
        //     width: 100%;
        //     display: flex;
        //     background-color: ${colors.blue};
        // }
    `
}

