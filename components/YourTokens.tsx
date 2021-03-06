import { Box, Flex, Text, Button, Heading } from "pcln-design-system"
import Popover from 'pcln-popover'
import { useState } from "react"
import useSwr from 'swr'
import ListingCard from "./ListingCard"
import MintForm from "./MintForm"
import { Modal } from 'pcln-modal'
import { useWeb3React } from '@web3-react/core'
import Link from "next/link"

const fetcher = (url) => fetch(url).then((res) => res.json())

function YourTokens() {
    const { library, active, account } = useWeb3React();
    const { data, error } = useSwr(`/api/yourTokens?account=${account}`, fetcher)

    const [showForm, setShowForm] = useState(false)

    if (error) return <div>Failed to load users</div>
    if (!data?.nfts) return <div>Loading your tokens...</div>

    return (
        <>
            <Box>
                <Flex justifyContent='space-between' mx={2}>
                    <Text bold my={2} fontSize={4}>Your Tokens</Text>
                    
                    <Link href='/similarNft' passHref>
                        <Button color='tintGreen' width={80} size='large'>Mint</Button>
                    </Link>
                </Flex>
                <Flex wrap>
                    {data.nfts.map((nft, index) => (
                        <Box key={index} width={[1, 1 / 2, null, 1 / 3, 1 / 4]} my={3}>
                            <ListingCard {...nft}></ListingCard>
                        </Box>
                    ))}
                </Flex>
            </Box>
        </>
    )
}

export default YourTokens;
