import React, { Component } from 'react';
//import logo from './logo.svg';
import { ThemeProvider } from 'styled-components';
import List from 'components/List';
import { colorsDark } from 'styles/palette';

import { Wrapper, Title } from './styles';

class App extends Component {
  render () {
    return (
      <ThemeProvider theme={colorsDark}>
        <div>
          <Wrapper>
            <Title>Hacker News Reader</Title>
            <List />
          </Wrapper>
        </div>
      </ThemeProvider>
    );
  }
};

export default App;

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

