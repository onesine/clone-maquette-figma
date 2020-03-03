import React from "react";
import {Box, Text, Flex, Heading, Image} from "@chakra-ui/core";
import {IoIosArrowRoundForward} from "react-icons/io";
import {FaFacebookF, FaCommentDots, FaInstagram, FaTwitter} from "react-icons/all";

const HomePage = () => {
    return (
        <Box mx={"150px"} mb={"96px"}>
            <Flex mt={"4rem"} justify={"space-between"}>
                <Box>
                    <Heading as="h1" fontSize="40px" color={"#212353"} position={"relative"} lineHeight={"130%"}>
                        Try for free!
                    </Heading>
                    <Text mt={3} fontWeight={"500"} fontSize={"18px"} lineHeight={"160%"} color={"#4B5D68"}>Get limited 1 week free try our features!</Text>
                </Box>
                <Box>
                    <Box
                        as="button"
                        rounded="full"
                        bg="#F063B8"
                        px={"2rem"}
                        h={"3.5rem"}
                        color={"white"}
                        fontWeight={"bold"}
                        mr={"2rem"}
                    >
                        Learn More
                    </Box>
                    <Box
                        as="button"
                        rounded="full"
                        bg="white"
                        px={"2rem"}
                        h={"3.5rem"}
                        shadow={"md"}
                        color={"#2F315E"}
                        fontWeight={"bold"}
                    >
                        Request Demo
                        <Box
                            color={"#B58EE9"}
                            as={IoIosArrowRoundForward}
                            size="32px"
                            display={"inline-block"}
                            ml={2}
                        />
                    </Box>
                </Box>
            </Flex>
            <Flex mt={"150px"} justify={"space-between"}>
                <Box>
                    <Heading as="h3" fontSize="20px" color={"#212353"}>
                        <Image
                            src="/images/Logo.png"
                            alt="logo"
                            display={"inline-block"}
                            mr={6}
                        />
                        DataWarehouse
                    </Heading>
                    <Text mt={20} lineHeight={"180%"} fontWeight={"500"} fontSize={"16px"} letterSpacing={"0.01em"}>Warehouse Society, 234 <br/> Bahagia Ave Street PRBW 29281</Text>
                    <Text mt={4}>info@warehouse.project <br/> 1-232-3434 (Main)</Text>
                </Box>
                <Box justify={"flex-end"}>
                    <Heading as="h3" fontSize="20px" color={"#212353"} fontWeight={"900"} mb={6}>
                        About
                    </Heading>
                    <Text fontSize={"16px"} lineHeight={"50px"} color={"#212353"}>Profile</Text>
                    <Text fontSize={"16px"} lineHeight={"50px"} color={"#212353"}>Features</Text>
                    <Text fontSize={"16px"} lineHeight={"50px"} color={"#212353"}>Careers</Text>
                    <Text fontSize={"16px"} lineHeight={"50px"} color={"#212353"}>DW News</Text>
                </Box>
                <Box justify={"flex-end"}>
                    <Heading as="h3" fontSize="20px" color={"#212353"} fontWeight={"900"} mb={8}>
                        Help
                    </Heading>
                    <Text fontSize={"16px"} lineHeight={"50px"} color={"#212353"}>Support</Text>
                    <Text fontSize={"16px"} lineHeight={"50px"} color={"#212353"}>Sign up</Text>
                    <Text fontSize={"16px"} lineHeight={"50px"} color={"#212353"}>Guide</Text>
                    <Text fontSize={"16px"} lineHeight={"50px"} color={"#212353"}>Reports</Text>
                    <Text fontSize={"16px"} lineHeight={"50px"} color={"#212353"}>Q&A</Text>
                </Box>
                <Box justify={"flex-end"}>
                    <Heading as="h3" fontSize="20px" color={"#212353"} fontWeight={"900"} mb={8}>
                        Social Media
                    </Heading>
                    <Flex>
                        <Flex
                            as={"button"}
                            width={"50px"}
                            height={"50px"}
                            bg={"#E9E9EE"}
                            align={"center"}
                            justify={"center"}
                            rounded={"full"}
                            mr={2}
                        >
                            <Box
                                color={"white"}
                                as={FaFacebookF}
                                size="25px"
                                display={"inline-block"}
                            />
                        </Flex>
                        <Flex
                            as={"button"}
                            width={"50px"}
                            height={"50px"}
                            bg={"#E9E9EE"}
                            align={"center"}
                            justify={"center"}
                            rounded={"full"}
                            mx={2}
                        >
                            <Box
                                color={"white"}
                                as={FaTwitter}
                                size="25px"
                                display={"inline-block"}
                            />
                        </Flex>
                        <Flex
                            as={"button"}
                            width={"50px"}
                            height={"50px"}
                            bg={"#E9E9EE"}
                            align={"center"}
                            justify={"center"}
                            rounded={"full"}
                            mx={2}
                        >
                            <Box
                                color={"white"}
                                as={FaInstagram}
                                size="25px"
                                display={"inline-block"}
                            />
                        </Flex>
                    </Flex>
                </Box>
            </Flex>
            <Flex mt={"96px"} justify={"space-between"} align={"center"}>
                <Text color={"#212353"} letterSpacing={"0.01em"} fontSize={"12px"}>© Datawarehouse™, 2020. All rights reserved. <br/> Company Registration Number: 21479524.</Text>
                <Flex
                    as={"button"}
                    width={"50px"}
                    height={"50px"}
                    bg={"#E9E9EE"}
                    align={"center"}
                    justify={"center"}
                    rounded={"full"}
                >
                    <Box
                        color={"#9C69E2"}
                        as={FaCommentDots}
                        size="25px"
                        display={"inline-block"}
                    />
                </Flex>
            </Flex>
            <Heading as="h3" fontSize="40px" color={"#212353"} fontWeight={"900"} mt={8} textAlign={"center"} lineHeight={"170%"}>
                ✨ Realize with ❤ 💘 💝 😍 by g2ek ✨ <br/>
                😎 Challenge for your 👨‍💻💻 🙈🙈 👊👊👊
            </Heading>
        </Box>
    );
};

export default HomePage;
