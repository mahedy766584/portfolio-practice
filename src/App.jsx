import styled, { ThemeProvider } from "styled-components";
import { darkTheme } from "./utils/Themes"
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter } from "react-router-dom";
import Hero from "./Components/Section/Hero";
import Skills from "./Components/Section/Skills";
import Experience from "./Components/Section/Experience";
import Education from "./Components/Section/Education";

const Body = styled.div`
    background-color: ${({ theme }) => theme.bg};
    color: ${({ theme }) => theme.text_primary};
    width: 100%;
    height: 90vh;
    overflow-x: hidden;
    position: relative;
`;

const App = () => {
    return (
        <ThemeProvider theme={darkTheme}>
            <BrowserRouter>
                <Navbar />
                <Body>
                    <Hero />
                    <Skills />
                    <Experience />
                    <Education />
                </Body>
            </BrowserRouter>
        </ThemeProvider>
    );
};

export default App;