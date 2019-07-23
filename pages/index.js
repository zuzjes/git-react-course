import Hello from '../components/Hello';
import {
  Box,
  Button,
  Heading,
  Grid,
  BaseStyles
} from '@primer/components'

function Home() {
  return (
    <>
      <BaseStyles>
        <Box m={5}>
          <Heading mb={2}>Hello, world!</Heading>
          <p>This will get Primer text styles.</p>
          <Hello name='Zuz' /><br />
          <a href="/aboutme">ABOUT ME</a>

          <Grid gridTemplateColumns="repeat(3, auto)" gridGap={4}>
            <Box p={3} bg="blue.2">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Integer imperdiet lectus quis justo. Fusce dui leo, imperdiet in, aliquam sit amet, feugiat eu, orci. Integer malesuada.</Box>
            <Box p={3} bg="yellow.5">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Integer imperdiet lectus quis justo. Fusce dui leo, imperdiet in, aliquam sit amet, feugiat eu, orci. Integer malesuada. Cras elementum. In convallis. Quisque porta. Duis ante orci, molestie vitae vehicula venenatis, tincidunt ac pede. Nulla non lectus sed nisl molestie malesuada. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos.</Box>
            <Box p={3} bg="red.9">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Integer imperdiet lectus quis justo. Fusce dui leo, imperdiet in, aliquam sit amet, feugiat eu, orci. Integer malesuada. Cras elementum. In convallis. Quisque porta. Duis ante orci, molestie vitae vehicula venenatis, tincidunt ac pede. Nulla non lectus sed nisl molestie malesuada. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Integer imperdiet lectus quis justo. Fusce dui leo, imperdiet in, aliquam sit amet, feugiat eu, orci. Integer malesuada. Cras elementum. In convallis. Quisque porta. Duis ante orci, molestie vitae vehicula venenatis, tincidunt ac pede. Nulla non lectus sed nisl molestie malesuada. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos</Box>
          </Grid>
        </Box>
      </BaseStyles>
    </>
  );
}

export default Home;
