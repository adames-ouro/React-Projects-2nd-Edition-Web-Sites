import styled from 'styled-components';
import Link from 'next/link';

const PaginationContainer = styled.div`
    display: flex;
    justify-content:space-between;
    `;

const PaginationLink = styled.a`
    padding: 2%;
    margin: 1%;
    background-color: orange;
    cursor: ${(props) => (!props.disabled ? 'pointer' : 'not-allowed')};
    color: white;
    text-decoration: none;
    border-radius: 1px;
    justify-content: center;
    background: ${(props) => (!props.disabled ? 'orange' : 'grey')};
    pointer-events: ${(props) => (!props.disabled ? 'all' : 'none')};
    `;

function Pagination({currentPage, hasMore}) {
    return(
    <PaginationContainer>
        
        <Link href={`?page=${parseInt(currentPage) - 1}`}>
            <PaginationLink disabled={currentPage <= 1}>
                Previous
            </PaginationLink>
        </Link>

        <Link href={`?page=${parseInt(currentPage) + 1}`}>
            <PaginationLink disabled={!hasMore}>
                Next
            </PaginationLink>
        </Link>

    </PaginationContainer>
    );
}

export default Pagination;