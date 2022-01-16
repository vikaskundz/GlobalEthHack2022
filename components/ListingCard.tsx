import { Card, BackgroundImage, Text, Box, Flex } from "pcln-design-system"
import styled from "styled-components"
import Link from "next/link"

const StyledImage = styled(BackgroundImage)`
    background-size: contain;
    background-color: black;
    border-radius: 10px;
`

const StyledAnchor = styled.a`
    text-decoration: none;
    color: inherit;
`

function ListingCard({ token_id, contract_address, cached_file_url, chain, similarity, showMoreData }) {
    const sim = (similarity * 100).toFixed()
    return (
        <Box mx={2}>
            <Link href={`/detail/${contract_address}/${token_id}`} passHref>
                <StyledAnchor>
                    <Card
                        boxShadowSize='xl'
                        borderWidth={0}
                        borderRadius={6}
                        width='100%'
                    >
                        <StyledImage
                            image={cached_file_url} height='250px'>
                            {!cached_file_url && <Box ml={2} p={2}>
                                <Text align='center' color='white' bold>No image</Text>
                            </Box>}
                        </StyledImage>
                        {showMoreData &&
                            <Flex justifyContent='center' alignItems='start' flexDirection='column'>
                                <Flex m={2} alignItems='center'>
                                    <Box>
                                        <Text bold caps width={150}>Similarity :</Text>
                                    </Box>
                                    <Box>
                                        <Text>
                                            {sim} %
                                        </Text>
                                    </Box>
                                </Flex>
                                <Flex m={2} alignItems='center'>
                                    <Box>
                                        <Text bold caps width={150}>Chain :</Text>
                                    </Box>
                                    <Box>
                                        <Text>
                                            {chain}
                                        </Text>
                                    </Box>
                                </Flex>
                                <Flex m={2} alignItems='center'>
                                    <Box>
                                        <Text bold caps width={150}>Contract Address:</Text>
                                    </Box>
                                    <Box>
                                        <Text fontSize={1} style={{ wordBreak: 'break-all' }}>
                                            {contract_address}
                                        </Text>
                                    </Box>
                                </Flex>
                            </Flex>
                        }
                    </Card>
                </StyledAnchor>
            </Link>
        </Box>
    )
}

export default ListingCard;
