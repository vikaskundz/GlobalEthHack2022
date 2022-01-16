import Head from "next/head";
import Link from "next/link";
import Account from "../components/Account";
import useEagerConnect from "../hooks/useEagerConnect";
import { Banner, Flex, Heading, Button, Image } from "pcln-design-system"
import styled from "styled-components"

const StyledAnchor = styled.a`
    text-decoration: none;
    color: inherit;
`

function NavBar() {
    const triedToEagerConnect = useEagerConnect();
    return (
        <>
            <Head>
                <title>TrueNFT</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <header>
                <Banner showIcon={false} bg='lightBlue' p={1}>
                    <Flex alignItems='center' justifyContent='space-between' mx={2}>
                        <Flex>
                            <Link href="/" passHref>
                                <StyledAnchor><Image width='70px' height='70px' alt='homepage' src='/TrueNFTLogo5.png'></Image></StyledAnchor>
                            </Link>
                            <Link href="/" passHref>
                                <Flex>
                                    <StyledAnchor>
                                        <Heading.h2>TrueNFT</Heading.h2>
                                    </StyledAnchor>
                                    <Heading.h5 mx={2}>Built with NFTPort</Heading.h5>
                                    </Flex>
                            </Link>
                        </Flex>
                        <Flex alignItems='center'>
                            <Button style={{ borderRadius: '10px' }} mx={2} color='darkBlue' onClick={() => {
                                window.open('https://app.unlock-protocol.com/checkout?redirectUri=http%3A%2F%2Flocalhost%3A3000&paywallConfig=%7B%22locks%22%3A%7B%220xE258bFffC07cA86A5860D8dc76EC33a416D3CfD0%22%3A%7B%22network%22%3A4%7D%7D%2C%22pessimistic%22%3Atrue%2C%22persistentCheckout%22%3Atrue%2C%22icon%22%3A%22https%3A%2F%2Flocksmith.unlock-protocol.com%2Flock%2F0xE258bFffC07cA86A5860D8dc76EC33a416D3CfD0%2Ficon%22%7D')
                            }}>
                                Be a TrueNFT member
                                <Image width='120px' height='18px' alt='homepage' src='/Powered_by_Unlock.png'></Image>
                            </Button>
                            <Account triedToEagerConnect={triedToEagerConnect} />
                        </Flex>
                    </Flex>
                </Banner>
            </header>
        </>
    );
}

export default NavBar;
