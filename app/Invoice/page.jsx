import React from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "../../Components/ui/dialog"

import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "../../Components/ui/drawer";

import { Button } from "../../Components/ui/button";

import Form from '@/Components/Form';

const page = () => {
    return (
        <div className='mt-36 flex justify-center p-5 flex-wrap'>
            <div className="max-w-2xl flex justify-between rounded-md border border-[#5F61E6] md:flex-row m-5">
                <div>
                    <div className="p-4">
                        <h1 className="inline-flex items-center lg:text-2xl text-lg font-extrabold text-[#5BC18A]">
                            Create Invoice
                        </h1>
                        <p className="mt-3 text-sm text-white">
                            Generate a customized invoice for your recent transaction with our company through Secure Pay
                            ensuring a seamless and secure payment experience Your personalized invoice will include all relevant
                            details and will be accessible through your Secure Pay domain providing you with easy access and peace of mind for your records
                        </p>
                    </div>
                </div>
                <div className="flex flex-col justify-end p-4">
                    <Dialog>
                        <DialogTrigger className='bg-[#5F61E6] rounded-lg p-1 text-white font-extrabold'>Create</DialogTrigger>
                        <DialogContent>
                            <DialogHeader>
                                <DialogTitle className="font-extrabold text-xl lg:text-2xl">Invoice</DialogTitle>
                                <DialogDescription>
                                   <Form />
                                </DialogDescription>
                            </DialogHeader>
                        </DialogContent>
                    </Dialog>
                </div>
            </div>

            <div className="max-w-2xl flex justify-between rounded-md border border-[#5F61E6] md:flex-row m-5">
                <div>
                    <div className="p-4">
                        <h1 className="inline-flex items-center lg:text-2xl text-lg font-extrabold text-[#5BC18A]">
                            View Invoice
                        </h1>
                        <p className="mt-3 text-sm text-white">
                        Review your recently generated invoice for your transaction with our company via Secure Pay. This detailed invoice 
                        outlines all pertinent information and is securely stored on your Secure Pay domain. Access your invoice with ease 
                        and confidence knowing that your payment and transaction details are safely documented for your convenience and peace of mind.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col justify-end p-4 w-36">
                    <Drawer>
                        <DrawerTrigger className='bg-[#5F61E6] rounded-lg p-1 text-white font-extrabold' >Preview</DrawerTrigger>
                        <DrawerContent>
                            <DrawerHeader>
                                <DrawerTitle>Are you absolutely sure?</DrawerTitle>
                                <DrawerDescription>This action cannot be undone.</DrawerDescription>
                            </DrawerHeader>
                            <DrawerFooter>
                                <DrawerClose>
                                    <Button variant="outline">Cancel</Button>
                                </DrawerClose>
                            </DrawerFooter>
                        </DrawerContent>
                    </Drawer>

                </div>
            </div>
        </div>
    )
}

export default page