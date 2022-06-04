import React from 'react';
import styled from 'styled-components';

export const FlexRow = styled.div`
    display: flex;
    flex-direction: row;
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