import { Box, TextArea, Button, Input, Label, Flex, Text } from "pcln-design-system"
import { useState } from "react"
import { useWeb3React } from '@web3-react/core'

function MintForm( {handlePreview, handleReview, submitMint} ) {
    const { library, active, account } = useWeb3React();
    const [tokenUrl, setTokenUrl] = useState('')
    const [nftName, setNftName] = useState('')
    const [nftDesc, setNftDesc] = useState('')
    const [isProcessing, setIsProcessing] = useState(false)
    const [statusMessage, setStatusMessage] = useState('')

    const mintNftHandler = () => {
        if (tokenUrl && nftName && nftDesc && account) {
            setStatusMessage('Minting in process...')
            setIsProcessing(true)
            fetch('/api/mintNft', {
                method: 'post',
                body: JSON.stringify({
                    tokenUrl, nftName, nftDesc, account
                })
            })
                .then(response => response.json())
                .then((resData) => {
                    setIsProcessing(false)
                    setStatusMessage('Minting complete. Please go to homepage')
                })
        }
    }
    const SubmitForm = (
        <Box p={4} width={1 / 2}>
            <Box my={1}>
                <Label htmlFor='tokenUrl'>Token URL</Label>
                <Input
                    id='tokenUrl'
                    name='tokenUrl'
                    value={tokenUrl}
                    onBlur={handlePreview}
                    onChange={(e) => {
                        setTokenUrl(e.target.value)
                    }}
                />
            </Box>
            <Box my={1}>
                <Label htmlFor='nftName'>NFT Name</Label>
                <Input
                    id='nftName'
                    name='nftName'
                    value={nftName}
                    onChange={(e) => {
                        setNftName(e.target.value)
                    }}
                />
            </Box>
            <Box my={1}>
                <Label htmlFor='nftDesc'>NFT description</Label>
                <TextArea
                    id='nftDesc'
                    name='nftDesc'
                    value={nftDesc}
                    onChange={(e) => {
                        setNftDesc(e.target.value)
                    }}
                />
            </Box>
            <Flex justifyContent='end'>
                <Box>
                    <Button m={2} color='tintBlue' onClick={()=> {
                        handleReview(tokenUrl)
                    }}>Review</Button>
                </Box>
                <Box>
                    <Button m={2} color='tintGreen' onClick={mintNftHandler}>Confirm to mint</Button>
                </Box>
                <Box>
                    <Button m={2} color='tintRed' onClick={()=> {
                        window.open('/', '_self')
                    }}>Cancel</Button>
                </Box>
            </Flex>
            {statusMessage && <Text>{statusMessage}</Text>}
        </Box>
    )
    return SubmitForm
}

export default MintForm