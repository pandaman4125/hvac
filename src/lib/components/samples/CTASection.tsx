import { Box, Flex, Image } from '@chakra-ui/react';

const CTASection = () => {
  return (
    <Box textAlign="center" width="100%">
      <Box transform="scale(0.85)">
        <Flex
          marginY={4}
          justifyContent="space-around"
          gap={10}
          alignItems="flex-end"
        >
          <Image
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHM-_pf2zPqlIUhrN_oOTH6HrwydWlrGG-8Q&s"
            alt="Hoshiznki"
            height={10}
          />
          <Image
            src="https://armstronginternational.eu/wp-content/uploads/sites/7/ai-logo-yellow-600.png"
            alt="Armstrong"
            height={10}
          />
          <Image
            src="https://images.squarespace-cdn.com/content/v1/502a8efb84ae42cbccf920c4/1585574686746-VCDIHSO21O76WR72WIAD/LG-Logo.png"
            alt="LG"
            height={10}
          />
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Fujitsu-Logo.svg/2560px-Fujitsu-Logo.svg.png"
            alt="Fujitsu"
            height={10}
          />
          <Image
            src="https://1000logos.net/wp-content/uploads/2021/05/Coleman-logo.png"
            alt="Coleman"
            height={10}
          />
          <Image
            src="https://findvectorlogo.com/wp-content/uploads/2018/09/mitsubishi-electric-cooling-heating-vector-logo.png"
            alt="Mitsubishi HVAC"
            height={10}
          />
          <Image
            src="https://searchvectorlogo.com/wp-content/uploads/2020/01/heatcraft-worldwide-refrigeration-logo-vector.png"
            alt="HeatCraft"
            height={10}
          />
        </Flex>
      </Box>
    </Box>
  );
};

export default CTASection;
