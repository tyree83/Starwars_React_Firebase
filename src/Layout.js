import { useState, useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import styled from 'styled-components';

import Header from './components/Header';
import Footer from './components/Footer';

import HomePage from './pages/HomePage';
import IndexPage from './pages/IndexPage';
import DetailPage from './pages/DetailPage';

import { fetchStarships } from './services/starwars-api';
import { auth } from './services/firebase';


const StyledLayout = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    
    main {
      flex-grow: 1;
    }
`;

function Layout() {

  useEffect(() => {
    getAppData();

    const unsubscribe = auth.onAuthStateChanged(user => setUserState({ user }));
    return () => unsubscribe();
  }, []);

  const [appState, setAppState] = useState({
    sampleStarships: [],
    allStarships: {
      next: null,
      previous: null,
      results: [],
      count: null
    }
  });

  const [ userState, setUserState ] = useState({
    user: null
  });

  async function getAppData() {
    const data = await fetchStarships();
    setAppState({
      allStarships: data,
      sampleStarships: data.results.slice(0, 4)
    });
  }

  async function getNextOrPrev(pageURL) {
    const data = await fetchStarships(pageURL);
    setAppState(prevState => ({
      ...prevState,
      allStarships: data
    }));
  };

  return (
    <StyledLayout>
      <Header user={userState.user} />
        <Switch>
          <Route exact path="/" render={props => 
            <HomePage sampleStarships={appState.sampleStarships}/>
          }/>
          <Route exact path="/starships" render={props => 
            userState.user 
            ? <IndexPage 
                  allStarships={appState.allStarships.results}
                  getNextOrPrev={getNextOrPrev}
                  next={appState.allStarships.next}
                  prev={appState.allStarships.previous}
              />
            : <Redirect to="/" />
          }/>
          <Route exact path="/starships/:id" render={props => 
            userState.user 
            ? <DetailPage 
                  starship={appState.allStarships.results[props.match.params.id]}
              />
            : <Redirect to="/" />
          }/>
        </Switch>
      <Footer />
    </StyledLayout>
  );
}

export default Layout;