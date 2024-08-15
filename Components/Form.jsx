import React from 'react'
import { Input } from "../Components/ui/input";
import { Button } from "../Components/ui/button";


const Form = () => {
    return (
        <div className='mt-5'>
            <div className='h-[500px] overflow-y-scroll no-scrollbar'>

                <div>
                    <div className='flex justify-center align-middle items-center text-base lg:text-xl font-extrabold text-black pb-6'>Billing Details</div>
                    <div className='flex justify-center gap-10'>
                        <Input type="number" placeholder="Invoice Number" className="text-black m-2" />
                        <Input type="text" placeholder="Invoice Date" className="text-black m-2" />
                    </div>

                    <div className='flex justify-center gap-10'>
                        <Input type="text" placeholder="SPOC Name" className="text-black m-2" />
                        <Input type="text" placeholder="Company Name" className="text-black m-2" />
                    </div>

                    <div className='flex justify-center gap-10'>
                        <Input type="number" placeholder="Contact" className="text-black m-2" />
                        <Input type="email" placeholder="Email Address" className="text-black m-2" />
                    </div>

                    <div className='flex justify-center gap-10'>
                        <Input type="text" placeholder="Address" className="text-black m-2" />
                        <Input type="text" placeholder="Additional Details" className="text-black m-2" />
                    </div>
                </div>


                <div className='mt-10'>
                    <div className='flex justify-center align-middle items-center text-base lg:text-xl font-extrabold text-black pb-6'>Payment Details</div>
                    <div className='flex justify-center gap-10'>
                        <Input type="text" placeholder="Account Holder Name" className="text-black m-2" />
                        <Input type="number" placeholder="Account Number" className="text-black m-2" />
                    </div>

                    <div className='flex justify-center gap-10'>
                        <Input type="text" placeholder="PAN Number" className="text-black m-2" />
                        <Input type="text" placeholder="IFSC Code" className="text-black m-2" />
                    </div>

                    <div className='flex justify-center gap-10'>
                        <Input type="text" placeholder="Branch Name" className="text-black m-2" />
                        <Input type="text" placeholder="Additional" className="text-black m-2" />
                    </div>
                </div>


                <div className='mt-10'>
                    <div className='flex justify-center align-middle items-center text-base lg:text-xl font-extrabold text-black pb-6'>Bill</div>
                    <div className='flex justify-center'>
                        <Input type="number" placeholder="Sr. No." className="text-black m-2" />
                        <Input type="text" placeholder="Item" className="text-black m-2" />
                        <Input type="number" placeholder="Rate" className="text-black m-2" />
                        <Input type="number" placeholder="Quantity" className="text-black m-2" />
                        <Input type="number" placeholder="Ammount" className="text-black m-2" />
                    </div>

                    <div className='flex justify-center'>
                        <Input type="number" placeholder="Sr. No." className="text-black m-2" />
                        <Input type="text" placeholder="Item" className="text-black m-2" />
                        <Input type="number" placeholder="Rate" className="text-black m-2" />
                        <Input type="number" placeholder="Quantity" className="text-black m-2" />
                        <Input type="number" placeholder="Ammount" className="text-black m-2" />
                    </div>

                    <div className='flex justify-center'>
                        <Input type="number" placeholder="Sr. No." className="text-black m-2" />
                        <Input type="text" placeholder="Item" className="text-black m-2" />
                        <Input type="number" placeholder="Rate" className="text-black m-2" />
                        <Input type="number" placeholder="Quantity" className="text-black m-2" />
                        <Input type="number" placeholder="Ammount" className="text-black m-2" />
                    </div>

                    <div className='flex justify-center'>
                        <Input type="number" placeholder="Sr. No." className="text-black m-2" />
                        <Input type="text" placeholder="Item" className="text-black m-2" />
                        <Input type="number" placeholder="Rate" className="text-black m-2" />
                        <Input type="number" placeholder="Quantity" className="text-black m-2" />
                        <Input type="number" placeholder="Ammount" className="text-black m-2" />
                    </div>

                    <div className='flex justify-center'>
                        <Input type="number" placeholder="Sr. No." className="text-black m-2" />
                        <Input type="text" placeholder="Item" className="text-black m-2" />
                        <Input type="number" placeholder="Rate" className="text-black m-2" />
                        <Input type="number" placeholder="Quantity" className="text-black m-2" />
                        <Input type="number" placeholder="Ammount" className="text-black m-2" />
                    </div>
                </div>

                <div className='mt-10'>
                    <div className='flex justify-center align-middle items-center text-base lg:text-xl font-extrabold text-black pb-6'>Total Payable Ammount</div>
                    <div className='flex justify-center gap-10 align-middle items-center'>
                        <Input type="text" placeholder="Total Ammount" className="text-black m-2" />
                        <Button>Done</Button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Form