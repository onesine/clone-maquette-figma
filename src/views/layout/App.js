import React from 'react';
import {ThemeProvider, CSSReset, Box} from "@chakra-ui/core"
import HomePage from "../HomePage";
import Nav from "../includes/Nav";
import Footer from "../includes/Footer";
import Banner from "../includes/Banner";

function App() {
    return (
        <ThemeProvider>
            <CSSReset />
            <Box>
                <Box backgroundImage={"linear-gradient(#F6FAFD, white)"}>
                    <Nav/>
                    <Banner/>
                </Box>
                <HomePage/>
                <Box mt={"5rem"} borderWidth={"1px"}/>
                <Footer/>
            </Box>
        </ThemeProvider>
    );
}

export default App;
