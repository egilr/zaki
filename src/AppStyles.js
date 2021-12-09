import styled from "styled-components";

export const StyledApp = styled.div`
    display: grid;
    grid-gap: 20px;
    grid-template-columns: repeat(6, minmax(200px, 1fr)); //Repeats for each column, set min width to 200px and max to 1 fr (1 part of the available space). Making it a responsive grid.
    padding: 50px 340px 50px 340px;
`