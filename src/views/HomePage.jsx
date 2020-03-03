import React from "react";
import {Box, Avatar, Grid, Flex, Image, Text, Heading} from "@chakra-ui/core";
import CardFirst from "../components/CardFirst";
import CardTwo from "../components/CardTwo.jsx";
import CardThree from "../components/CardThree";
import CardFour from "../components/CardFour.jsx";
import {IoIosArrowRoundForward, IoIosArrowRoundBack} from "react-icons/io";

const HomePage = () => {
    return (
        <Box mx={"150px"} mt={"4.5rem"}>
            <Flex
                align={"center"}
                bg={"rgba(240, 99, 184, 0.15)"}
                p={2}
                rounded={"50px"}
            >
                <Image src={"/images/img2.png"} width={{md: 400}} mr={"8rem"}/>
                <Box>
                    <Heading as="h1" fontSize={"40px"} color={"#212353"}>
                        We are a high-level data <br/> storage bank
                    </Heading>
                    <Text mt={"2rem"} color={"#4B5D68"} fontWeight={"500"} fontSize={"18px"}>The place to store various data that you can access at any <br/> time through the internet and where you can carry it. <br/> This very flexible storage area has a high level of security. <br/> To enter into your own data you must enter the password <br/> that you created when you registered in this Data <br/> Warehouse.</Text>
                </Box>
            </Flex>

            <Box mt={"80px"}>
                <Heading as="h1" fontSize={"40px"} color={"#212353"} textAlign={"center"}>
                    Features
                </Heading>
                <Text textAlign={"center"} color={"#4B5D68"} mt={"2rem"} fontWeight={"500"} fontSize={"18px"}>Some of the features and advantages that we provide for those of you <br/> who store data in this Data Warehouse.</Text>
                <Grid templateColumns="repeat(2, 1fr)" gap={10} mt={"6rem"}>
                    <CardFirst img={"img3.png"}/>
                    <CardTwo img={"img4.png"}/>
                    <CardThree img={"img5.png"}/>
                    <CardFour img={"img6.png"}/>
                </Grid>

                <Box mt={"5rem"} bg={"#9C69E2"} rounded={"50px"} px={"60px"} py={"70px"}>
                    <Heading as="h1" fontSize={"40px"} color={"#212353"} color={"white"} mb={"40px"} fontWeight={"bold"}>
                        Testimonials
                    </Heading>

                    <Flex bg={"white"} rounded={"15px"} px={"20px"} py={"40px"} boxShadow={"xl"}>
                        <Avatar size="lg" name="Christian Nwamba" src="https://bit.ly/code-beast" ml={"3rem"} mr={"2rem"}/>
                        <Box>
                            <Heading as="h3" fontSize={"18px"} color={"#212353"} fontWeight={"900"}>
                                Jhon Fang
                            </Heading>
                            <Heading as="h4" fontSize={"14px"} color={"#9C69E2"} letterSpacing={"0.01em"} fontWeight={"500"}>
                                wordfaang.com
                            </Heading>
                            <Text mt={2} fontSize={"18px"}>Suspendisse ultrices at diam lectus nullam. <br/> Nisl, sagittis viverra enim erat tortor ultricies <br/>  massa turpis. Arcu pulvinar aenean nam laoreet <br/> nulla.</Text>
                        </Box>
                    </Flex>

                    <Flex justify={"space-between"} mt={10}>
                        <Flex>
                            <Box as={"button"} width={"10px"} height={"10px"} bg={"#F063B8"} rounded={"md"} mx={"2px"}/>
                            <Box as={"button"} width={"8px"} height={"8px"} bg={"white"} rounded={"md"} mx={"2px"}/>
                            <Box as={"button"} width={"8px"} height={"8px"} bg={"white"} rounded={"md"} mx={"2px"}/>
                            <Box as={"button"} width={"8px"} height={"8px"} bg={"white"} rounded={"md"} mx={"2px"}/>
                        </Flex>

                        <Box>
                            <Box as={"button"}>
                                <Box
                                    color={"white"}
                                    as={IoIosArrowRoundBack}
                                    size="32px"
                                    display={"inline-block"}
                                />
                            </Box>
                            <Box as={"button"}>
                                <Box
                                    color={"#CEB4F1"}
                                    as={IoIosArrowRoundForward}
                                    size="32px"
                                    display={"inline-block"}
                                />
                            </Box>
                        </Box>
                    </Flex>
                </Box>
            </Box>
        </Box>
    );
};

export default HomePage;
