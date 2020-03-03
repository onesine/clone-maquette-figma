import React from "react";
import {Box, Heading, Image, Text} from "@chakra-ui/core";


const Banner = () => {
    return (
        <Box mx={"150px"} mt={"6rem"} maxHeight={"500px"}>
            <Box>
                <Heading as="h1" fontSize="4em" color={"#212353"} position={"relative"} zIndex={2}>
                    Save your data <br/> storage here.
                </Heading>
                <Text my={"50px"} color={"#4B5D68"} zIndex={2} position={"relative"} fontSize={"18px"} fontWeight={"500"}>
                    Data Warehouse is a data storage area that <br/> has been tested for security, so you can store <br/> your data here safely but not be afraid of <br/> being stolen by others.
                </Text>
                <Box
                    fontWeight={"800"}
                    fontSize={"18px"}
                    as="button"
                    rounded="full"
                    bg="#9C69E2"
                    px={"2rem"}
                    h={"3rem"}
                    color={"white"}
                >
                    Learn More
                </Box>
            </Box>
            <Image
                src={"/images/img1.png"}
                position={"relative"}
                display={"inline-block"}
                left={"320px"}
                bottom={"330px"}
                width={{md: 740}}
                zIndex={1}
            />
        </Box>
    );
};

export default Banner;
