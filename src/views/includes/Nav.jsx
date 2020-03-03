import React from "react";
import {Box, Flex, Image, Link} from "@chakra-ui/core";
import {IoIosArrowRoundForward} from "react-icons/io";

const Nav = () => {
    const links = [
        {
            text: "Home",
            link: "/"
        },
        {
            text: "Help",
            link: "/help"
        },
        {
            text: "Features",
            link: "/features"
        },
        {
            text: "Signup",
            link: "/signup"
        }
    ];

    const activeLink = (link) => {
        return link.link === "/" ? "#2E305E" : "#76858D"
    };

    const activeFontWeight = (link) => {
        return link.link === "/" ? "bold" : ""
    };

    return (
        <Box py={"15px"} mx={"150px"}>
            <Flex align={"center"} justify={"space-between"}>
                <Box>
                    <Image
                        src="/images/Logo.png"
                        alt="logo"
                        display={"inline-block"}
                        mr={20}
                    />
                    <Box display={"inline-block"}>
                        {
                            links.map(link => (
                                <Link
                                    fontSize={"16px"}
                                    mr={6}
                                    ml={6}
                                    href={link.link}
                                    color={activeLink(link)}
                                    fontWeight={activeFontWeight(link)}
                                >
                                    {link.text}
                                </Link>
                            ))
                        }
                    </Box>
                </Box>
                <Box
                    justifyContent={"flex-end"}
                    as="button"
                    rounded="full"
                    bg="white"
                    px={5}
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
            </Flex>
        </Box>
    );
};

export default Nav;
