import styled from 'styled-components';

const StyledPage = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    @media (max-width: 1150px) {
        flex-direction: column;
    }
`;

const StyledStarshipCard = styled.article`
    display: flex;
    flex-direction: column;
    padding: 15px;
    margin: 15px;
    border: 1px solid #000000;
    border-radius: 12px;
    height: 250px;
    width: 350px;
    h1 {
        text-align: center;
    }
`;

export default function HomePage(props) {
    return (
        <StyledPage>
            {
                props.sampleStarships.map(starship => 
                    <StyledStarshipCard>
                        <h1>{starship.name}</h1>
                        <p><strong>Manufacturer:</strong> {starship.manufacturer}</p>
                        <p><strong>Passenger Capacity:</strong> {starship.passengers}</p>
                        <p><strong>Hyperdrive Rating:</strong> {starship.hyperdrive_rating}</p>
                    </StyledStarshipCard>    
                )
            }
        </StyledPage>
    );
};