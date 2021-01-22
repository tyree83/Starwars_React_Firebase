import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledPage = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    section:first-child {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
    }

    section:last-of-type {
        margin-top: 15px;
        display: flex;
        justify-content: center;
        align-items: center;
        button {
            width: 75px;
            border-radius: 7px;
            margin: 0 10px;
            padding: 10px;
            background-color: #000000;
            color: #ffffff;
        }
    }
`;

const StyledStarshipCard = styled.article`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 15px;
    border: 1px solid #000000;
    border-radius: 12px;
    height: 250px;
    width: 350px;
`;

export default function IndexPage(props) {
    return (
        <StyledPage>
            <section>
                {
                    props.allStarships.map((starship, idx) => 
                        <Link key={starship.name} to={`/starships/${idx}`}>
                            <StyledStarshipCard>
                                <h1>{starship.name}</h1>
                            </StyledStarshipCard>    
                        </Link>
                    )
                }
            </section>
            <section>
                {
                    props.prev 
                    && <button onClick={() => props.getNextOrPrev(props.prev)}>Previous</button>
                }
                {
                    props.next
                    && <button onClick={() => props.getNextOrPrev(props.next)}>Next</button>
                }
            </section>
        </StyledPage>
    );
};