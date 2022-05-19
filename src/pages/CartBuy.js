
import { Container, FormControl, FormLabel, Grid, Input } from '@chakra-ui/react'
import { Button, Box } from '@chakra-ui/react'
import React, { useState } from 'react';
import axios from 'axios';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { ChakraProvider } from '@chakra-ui/react';
import { extendTheme } from '@chakra-ui/react';
import { Stack, Radio, RadioGroup } from '@chakra-ui/react';


import '../css/app.css';


const theme = extendTheme({
    colors: {light: '#e9ebee'}
    ,
    components: {
        Button: {
            variants: {
                solid: {
                    p: '6',
                    borderColor: 'black',
                    borderWidth: '1px',
                    color: 'black',
                    bg: 'white',
                    _hover: { bg: 'black',color: 'white' },
                    _active: { bg: 'black' },
                }
            },
        },
    },
})


function CartBuy() {


    const handleInputID = (e) => { setData({ ...data, Item_ID: e.target.value }) }
    const handleInputName = (e) => { setData({ ...data, Item_Name: e.target.value }) }
    const handleInputBuyPrice = (e) => { setData({ ...data, BuyPrice: e.target.value }) }
    const handleInputSellPrice = (e) => { setData({ ...data, SellPrice: e.target.value }) }
    const handleInputQuantity = (e) => { setData({ ...data, Qty: e.target.value }) }
    const handleInputShippingCost = (e) => { setData({ ...data, ShippingCost: e.target.value }) }
    const handleInputPackingFees = (e) => { setData({ ...data, PackingFees: e.target.value }) }
    const handleInputTaxes = (e) => { setData({ ...data, Taxes: e.target.value }) }
    //'$Item_ID','$Item_Name','$BuyPrice','$SellPrice','$Qty','$ShippingCost','$PackingFees','$Taxes'

    const [data, setData] = useState({
        Item_ID: "",
        Item_Name: "",
        BuyPrice: "",
        SellPrice: "",
        Qty: "",
        ShippingCost: "",
        PackingFees: "",
        Taxes: ""
    });
    const [value, setValue] = useState('0');




    const handleOnClick = () => {
        axios.post('http://localhost/project/InsertAcc.php', data)
            .then(res =>
                console.log(res.data)
            )
            .catch(error => {
                console.log(error.response)
            });
        window.location.reload();
    }

    console.log(data);
    return (
        <div className="page-container">
            <Navbar />
            <ChakraProvider theme={theme} >
                <Container display={{ base: 'block', md: 'flex', }} maxW="container.xl" >
                    <Box
                        as="main"
                        flex={3}
                        d="flex"
                        flexDir="column"
                        justifyContent="space-between"
                        pt={5}
                        px={3}
                        mt={5}
                    >
                        <div  >
                            <h1 className="display-6 fw-bolder">
                                Detalii comanda
                            </h1>
                            <hr />
                        </div>
                    </Box>
                </Container>

                <Container display={{ base: 'block', md: 'flex', }} maxW="container.xl" >

                    <Box
                        as="main"
                        flex={3}
                        d="flex"
                        flexDir="column"
                        justifyContent="space-between"
                        pt={5}
                        px={3}
                        mt={5}
                        bg="white"
                        rounded="md"
                        borderWidth={1}
                        borderColor="black"
                    >

                        <h5 className="cart-subtitle mb-1" >
                            Modalitate livrare
                        </h5>
                        <hr className='mb-3' />

                        <RadioGroup onChange={setValue} value={value} className="mb-3 ">
                            <Stack direction='row'>
                                <Radio value='1'>Fan Courier (16 RON)</Radio>
                                <Radio value='2'>SameDay (20 RON)</Radio>
                                <Radio value='3'>Posta Romana (10 RON)</Radio>
                            </Stack>
                        </RadioGroup>

                    </Box>
                </Container>

                <Container display={{ base: 'block', md: 'flex', }} maxW="container.xl" >
                    <Box
                        as="main"
                        flex={3}
                        d="flex"
                        flexDir="column"
                        justifyContent="space-between"
                        pt={5}
                        px={3}
                        pb={5}
                        mt={5}
                        bg="white"
                        rounded="md"
                        borderWidth={1}
                        borderColor="black"
                    >
                        <h5 className="cart-subtitle mb-1" >
                            Date factura
                        </h5>
                        <hr className='mb-3' />

                        <Grid
                            templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }}
                            gap={6}
                        >
                            <FormControl id="firstName">
                                <FormLabel>Nume</FormLabel>
                                <Input
                                    type="text"
                                    value={data.ProductID}
                                    onChange={handleInputID}
                                    autoComplete="none"
                                />
                            </FormControl>
                            <FormControl id="lastName">
                                <FormLabel>Prenume</FormLabel>
                                <Input
                                    type="text"
                                    value={data.ProductName}
                                    onChange={handleInputName}
                                    autoComplete="none"
                                />
                            </FormControl>
                            <FormControl id="phoneNumber">
                                <FormLabel>Tara</FormLabel>
                                <Input
                                    type="tel"
                                    value={data.BuyPrice}
                                    onChange={handleInputBuyPrice}
                                    autoComplete="none"
                                />
                            </FormControl>
                            <FormControl id="emailAddress">
                                <FormLabel>Judet</FormLabel>
                                <Input
                                    type="email"
                                    value={data.SellPrice}
                                    onChange={handleInputSellPrice}
                                    autoComplete="none"
                                />
                            </FormControl>

                            <FormControl id="city">
                                <FormLabel>Oras</FormLabel>
                                <Input
                                    type="text"
                                    value={data.Quantity}
                                    onChange={handleInputQuantity}
                                    autoComplete="none"
                                />
                            </FormControl>

                            <FormControl id="country">
                                <FormLabel>Adresa</FormLabel>
                                <Input
                                    type="text"
                                    value={data.ShippingCost}
                                    onChange={handleInputShippingCost}
                                    autoComplete="none"
                                />
                            </FormControl>

                            <FormControl id="country">
                                <FormLabel>Bloc</FormLabel>
                                <Input
                                    type="text"
                                    value={data.PackingFees}
                                    onChange={handleInputPackingFees}
                                    autoComplete="none"
                                />
                            </FormControl>

                            <FormControl id="country">
                                <FormLabel>Scara</FormLabel>
                                <Input
                                    type="text"
                                    value={data.Taxes}
                                    onChange={handleInputTaxes}
                                    autoComplete="none"
                                />
                            </FormControl>
                        </Grid>


                    </Box>
                </Container>
                <Container display={{ base: 'block', md: 'flex', }} maxW="container.xl" >

                    <Box
                        as="main"
                        flex={3}
                        d="flex"
                        flexDir="column"
                        justifyContent="space-between"
                        pt={5}
                        px={3}
                        mt={5}
                        bg="white"
                        rounded="md"
                        borderWidth={1}
                        borderColor="black"
                    >

                        <h5 className="cart-subtitle mb-1" >
                            Sumar
                        </h5>
                        <hr className='mb-3' />
                        <div>
                            <p>Total:--</p>
                            <Box mt={5} py={5} px={8} borderTopWidth={1} borderColor="brand.light">
                                <Button onClick={handleOnClick} >Finalizare comanda</Button>
                            </Box>
                        </div>



                    </Box>
                </Container>
            </ChakraProvider>

            <Footer />
        </div>
    );
}
export default CartBuy;