import React from 'react';
import styled from 'styled-components';

export const FlexRow = styled.div`
    display: flex;
    flex-direction: row;
`;

export const FlexRowAligned = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const FlexRowSpaced = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: 'center';
`;

export const FlexRowCentered = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

export const FlexRowWrapped = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`;

export const FlexColumn = styled.div`
    display: flex;
    flex-direction: column;
`;

export const FlexColumnCentered = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const RelativeContainer = styled.div`
    position: relative;
`