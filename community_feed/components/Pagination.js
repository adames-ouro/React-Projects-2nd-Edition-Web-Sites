import styled from 'styled-components';
import Link from 'next/link';

const PaginationContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    `;

const PaginationLink = styled.div`
    background: ${(props) => (!props.disabled ? 'orange': 'lightgrey')};
    pointer-events: ${(props) => (props.disabled ? 'all': 'none')};
    cursor: ${(props) => (!props.disabled ? 'pointer': 'not-allowed')};
    color: black;
    border-radius: 50px;
    height: 30px;
    width: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    `;

function Pagination({ currentPage, hasMore }) {
    
    return (
        <PaginationContainer>
            <Link href={`?page=${parseInt(currentPage) - 1}`}>
                <PaginationLink disabled={currentPage <= 1}>Previous</PaginationLink>
            </Link>
        <Link href={`?page=${parseInt(currentPage) + 1}`}>
            <PaginationLink disabled={!hasMore}>Next</PaginationLink>
        </Link>
        </PaginationContainer>
        );
    }

export default Pagination;