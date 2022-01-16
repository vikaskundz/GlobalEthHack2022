import { useWeb3React } from "@web3-react/core";
import ETHBalance from "../components/ETHBalance";
import TokenBalance from "../components/TokenBalance";
import { Box, Text } from "pcln-design-system"
import Homepage from "../components/Homepage";


function Home() {
  const { account, library } = useWeb3React();

  const isConnected = typeof account === "string" && !!library;

  return (
    <Box p={2}>
      {isConnected ? <Homepage /> : <Text>Please Connect to Wallet</Text>}
    </Box>
  );
}

export default Home;
