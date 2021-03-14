import styled from "styled-components";
import "./App.css";
import voices from "./image/voices.jpeg";

const AppContainer = styled.div`
  border: 1px solid white;
  border-radius: 20px;

  padding: 20px;
`;

function App() {
  return (
    <AppContainer>
      <header>
        <h1>music player</h1>
      </header>
      <nav>
        <p></p>
        <ul>
          <li>Pop</li>
          <li>Rock</li>
          <li>Metal</li>
        </ul>
      </nav>
      <section>
        <input type="text" placeholder="search" />
        <button type="submit">search</button>

        <div>
          <div>
            <img src={voices} alt="album" />
            <h2>Voices - Tusse</h2>
          </div>
        </div>
      </section>
    </AppContainer>
  );
}

export default App;
