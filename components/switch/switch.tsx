import { Flex, useColorMode, Switch } from '@chakra-ui/react'

import {
  SunIcon,
  MoonIcon,
} from '@chakra-ui/icons';

export default function NighMode() {
  const { colorMode, toggleColorMode } = useColorMode();

  return <Flex align='center'>
    {colorMode !== 'dark' ?
      <SunIcon color={'orange'} mr={3} fontSize={23} /> :
      <MoonIcon mr={3} fontSize={23} color={'pink.300'} />}
    <Switch
      id="expand"
      size='lg'
      onChange={toggleColorMode}
      colorScheme='pink'
    />
  </Flex>
}