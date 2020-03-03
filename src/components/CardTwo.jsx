import React from "react";
import {Box, Flex, Image, Link, Text, Heading} from "@chakra-ui/core";
import {IoIosArrowRoundForward} from "react-icons/io";

const CardTwo = (props) => {
    return (
        <Box w="100%" maxHeight={"335px"}>
            <Flex align={"center"}>
                <Image
                    src={"images/"+props.img}
                    mr={"2rem"}
                    display={"inline-block"}
                    width={{md: 150}}
                    zIndex={1}
                />
                <Box pt={"3rem"} pb={"1rem"} zIndex={3} position={"relative"} fontSize={"16px"}>
                    <Heading as="h1" fontSize={"24px"} color={"#212353"}>
                        Search Data
                    </Heading>
                    <Text color={"#4B5D68"} my={5}>Don’t worry if your data is very <br/> large, the Data Warehoue <br/> provides a search engine, <br/> which is useful for making it <br/> easier to find data effectively <br/> saving time.</Text>

                    <Link href={"/learn-more"} color={"#212353"} fontWeight={"bold"}>
                        Learn More
                        <Box
                            color={"#B58EE9"}
                            as={IoIosArrowRoundForward}
                            size="32px"
                            display={"inline-block"}
                            ml={2}
                        />
                    </Link>
                </Box>
            </Flex>
            <Image
                src={"/images/grp2.png"}
                position={"relative"}
                left={"47px"}
                bottom={"296px"}
                display={"inline-block"}
                width={{md: 380}}
                zIndex={0}
            />
        </Box>
    );
};

export default CardTwo;
