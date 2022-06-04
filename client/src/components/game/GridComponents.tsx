import React from 'react'
import styled from 'styled-components';

export const CellBox = styled.div`
    height: 20px;
    width: 20px;
    border: 0.5px solid #53504e;
`

export const Grid = styled.div((props: { numCols: number }) => {
    return `
        display: grid;
        grid-template-columns: repeat(${props.numCols}, 20px);
        margin: 0 auto;
        height: 70%;
        overflow: scroll;
        width: 100%;
        justify-content: center;
        ::-webkit-scrollbar {
            display: none;
        }
    `
})