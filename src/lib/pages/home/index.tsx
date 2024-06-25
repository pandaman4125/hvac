import { Divider, AbsoluteCenter, GridItem, Grid, Box } from '@chakra-ui/react';

import CTASection from '~/lib/components/samples/CTASection';
import SomeImage from '~/lib/components/samples/SomeImage';
import SomeText from '~/lib/components/samples/SomeText';

const Home = () => {
  return (
    <Grid
      templateAreas={`"header header"
                      "nav main"
                      "footer footer"`}
      gridTemplateRows="80px 1fr 80px"
      gridTemplateColumns="1fr 3fr"
      h="100vh"
      gap="1"
      color="blackAlpha.700"
      fontWeight="bold"
      fontSize="28"
    >
      <GridItem pl="2" area="header" bg="orange.300">
        Navbar
      </GridItem>
      <GridItem pl="2" bg="gray.300" area="nav">
        <SomeText />
      </GridItem>
      <GridItem pl="2" bg="green.300" area="main">
        Main
      </GridItem>
      <GridItem pl="2" area="footer">
        <Box
          marginTop={2}
          position="relative"
          display="flex"
          alignItems="center"
        >
          Contact
          <Divider />
          <AbsoluteCenter bg="white" px="4">
            <SomeImage />
          </AbsoluteCenter>
        </Box>
        <CTASection />
      </GridItem>
    </Grid>
  );
};

export default Home;
