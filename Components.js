import React from "react";
import styled from "styled-components";

const Row = styled.div`
    display: flex;
`;
const Column = styled(Row)`
    flex-direction: column;
`;

export function WhatIsSoftware(){
    return <Column>
        <h2 style={{margin: 0}}>Soft&middot;ware</h2>
        <p style={{margin: 0}}>/ˈsôf(t)wer/</p>
        <i>noun</i>
        <p style={{paddingRight: 16}}>the programs and other operating information used by a computer.</p>
    </Column>
}
