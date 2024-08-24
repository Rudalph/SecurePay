"use client"
import React,{useState, useContext} from 'react'
import { Input } from "../Components/ui/input";
import { Button } from "../Components/ui/button";
import { DataContext } from '../Components/Datacontext';


const Form = () => {

    // const [data, setData] = useState({
    //    invoiceNumber:'',
    //    invoiceDate:'',
    //    spocName:'',
    //    companyName:'',
    //    contact:'',
    //    email:'',
    //    address:'',
    //    additionalDetails:'',
    //    accountHolderName:'',
    //    accountNumber:'',
    //    panNumber:'',
    //    ifscCode:'',
    //    branchName:'',
    //    additional:'',
    //    total:'',
    //    sr1:'',
    //    sr2:'',
    //    sr3:'',
    //    sr4:'',
    //    sr5:'',
    //    item1:'',
    //    item2:'',
    //    item3:'',
    //    item4:'',
    //    item5:'',
    //    rate1:'',
    //    rate2:'',
    //    rate3:'',
    //    rate4:'',
    //    rate5:'',
    //    quantity1:'',
    //    quantity2:'',
    //    quantity3:'',
    //    quantity4:'',
    //    quantity5:'',
    //    ammount1:'',
    //    ammount2:'',
    //    ammount3:'',
    //    ammount4:'',
    //    ammount5:'',
    // })

    const { data, setData } = useContext(DataContext);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        console.log(`Updating ${name} to ${value}`);
        setData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };
    
    const submitData = () => {
        console.log("Data value:", data);
    };

    return (
        <div className='mt-5'>
            <div className='h-[500px] overflow-y-scroll no-scrollbar'>

                <div>
                    <div className='flex justify-center align-middle items-center text-base lg:text-xl font-extrabold text-black pb-6'>Billing Details</div>
                    <div className='flex justify-center gap-10'>
                        <Input type="number" placeholder="Invoice Number" className="text-black m-2" name="invoiceNumber" value={data.invoiceNumber} onChange={handleInputChange}/>
                        <Input type="text" placeholder="Invoice Date" className="text-black m-2" name="invoiceDate" value={data.invoiceDate} onChange={handleInputChange}/>
                    </div>

                    <div className='flex justify-center gap-10'>
                        <Input type="text" placeholder="SPOC Name" className="text-black m-2" name="spocName" value={data.spocName} onChange={handleInputChange}/>
                        <Input type="text" placeholder="Company Name" className="text-black m-2" name="companyName" value={data.companyName} onChange={handleInputChange}/>
                    </div>

                    <div className='flex justify-center gap-10'>
                        <Input type="number" placeholder="Contact" className="text-black m-2" name="contact" value={data.contact} onChange={handleInputChange}/>
                        <Input type="email" placeholder="Email Address" className="text-black m-2" name="email" value={data.email} onChange={handleInputChange}/>
                    </div>

                    <div className='flex justify-center gap-10'>
                        <Input type="text" placeholder="Address" className="text-black m-2" name="address" value={data.address} onChange={handleInputChange}/>
                        <Input type="text" placeholder="Additional Details" className="text-black m-2" name="additionalDetails" value={data.additionalDetails} onChange={handleInputChange}/>
                    </div>
                </div>


                <div className='mt-10'>
                    <div className='flex justify-center align-middle items-center text-base lg:text-xl font-extrabold text-black pb-6'>Payment Details</div>
                    <div className='flex justify-center gap-10'>
                        <Input type="text" placeholder="Account Holder Name" className="text-black m-2" name="accountHolderName" value={data.accountHolderName} onChange={handleInputChange}/>
                        <Input type="number" placeholder="Account Number" className="text-black m-2" name="accountNumber" value={data.accountNumber} onChange={handleInputChange}/>
                    </div>

                    <div className='flex justify-center gap-10'>
                        <Input type="text" placeholder="PAN Number" className="text-black m-2" name="panNumber" value={data.panNumber} onChange={handleInputChange}/>
                        <Input type="text" placeholder="IFSC Code" className="text-black m-2" name="ifscCode" value={data.ifscCode} onChange={handleInputChange}/>
                    </div>

                    <div className='flex justify-center gap-10'>
                        <Input type="text" placeholder="Branch Name" className="text-black m-2" name="branchName" value={data.branchName} onChange={handleInputChange}/>
                        <Input type="text" placeholder="Additional" className="text-black m-2" name="additional" value={data.additional} onChange={handleInputChange}/>
                    </div>
                </div>


                <div className='mt-10'>
                    <div className='flex justify-center align-middle items-center text-base lg:text-xl font-extrabold text-black pb-6'>Bill</div>
                    <div className='flex justify-center'>
                        <Input type="number" placeholder="Sr. No." className="text-black m-2" name="sr1" value={data.sr1} onChange={handleInputChange}/>
                        <Input type="text" placeholder="Item" className="text-black m-2" name="item1" value={data.item1} onChange={handleInputChange}/>
                        <Input type="number" placeholder="Rate" className="text-black m-2" name="rate1" value={data.rate1} onChange={handleInputChange}/>
                        <Input type="number" placeholder="Quantity" className="text-black m-2" name="quantity1" value={data.quantity1} onChange={handleInputChange}/>
                        <Input type="number" placeholder="Ammount" className="text-black m-2" name="ammount1" value={data.ammount1} onChange={handleInputChange}/>
                    </div>

                    <div className='flex justify-center'>
                        <Input type="number" placeholder="Sr. No." className="text-black m-2" name="sr2" value={data.sr2} onChange={handleInputChange}/>
                        <Input type="text" placeholder="Item" className="text-black m-2" name="item2" value={data.item2} onChange={handleInputChange}/>
                        <Input type="number" placeholder="Rate" className="text-black m-2" name="rate2" value={data.rate2} onChange={handleInputChange}/>
                        <Input type="number" placeholder="Quantity" className="text-black m-2" name="quantity2" value={data.quantity2} onChange={handleInputChange}/>
                        <Input type="number" placeholder="Ammount" className="text-black m-2" name="ammount2" value={data.ammount2} onChange={handleInputChange}/>
                    </div>

                    <div className='flex justify-center'>
                        <Input type="number" placeholder="Sr. No." className="text-black m-2" name="sr3" value={data.sr3} onChange={handleInputChange}/>
                        <Input type="text" placeholder="Item" className="text-black m-2" name="item3" value={data.item3} onChange={handleInputChange}/>
                        <Input type="number" placeholder="Rate" className="text-black m-2"name="rate3" value={data.rate3} onChange={handleInputChange} />
                        <Input type="number" placeholder="Quantity" className="text-black m-2" name="quantity3" value={data.quantity3} onChange={handleInputChange}/>
                        <Input type="number" placeholder="Ammount" className="text-black m-2" name="ammount3" value={data.ammount3} onChange={handleInputChange}/>
                    </div>

                    <div className='flex justify-center'>
                        <Input type="number" placeholder="Sr. No." className="text-black m-2" name="sr4" value={data.sr4} onChange={handleInputChange}/>
                        <Input type="text" placeholder="Item" className="text-black m-2" name="item4" value={data.item4} onChange={handleInputChange}/>
                        <Input type="number" placeholder="Rate" className="text-black m-2" name="rate4" value={data.rate4} onChange={handleInputChange}/>
                        <Input type="number" placeholder="Quantity" className="text-black m-2" name="quantity4" value={data.quantity4} onChange={handleInputChange}/>
                        <Input type="number" placeholder="Ammount" className="text-black m-2" name="ammount4" value={data.ammount4} onChange={handleInputChange}/>
                    </div>

                    <div className='flex justify-center'>
                        <Input type="number" placeholder="Sr. No." className="text-black m-2" name="sr5" value={data.sr5} onChange={handleInputChange}/>
                        <Input type="text" placeholder="Item" className="text-black m-2" name="item5" value={data.item5} onChange={handleInputChange}/>
                        <Input type="number" placeholder="Rate" className="text-black m-2" name="rate5" value={data.rate5} onChange={handleInputChange}/>
                        <Input type="number" placeholder="Quantity" className="text-black m-2" name="quantity5" value={data.quantity5} onChange={handleInputChange}/>
                        <Input type="number" placeholder="Ammount" className="text-black m-2" name="ammount5" value={data.ammount5} onChange={handleInputChange}/>
                    </div>
                </div>

                <div className='mt-10'>
                    <div className='flex justify-center align-middle items-center text-base lg:text-xl font-extrabold text-black pb-6'>Total Payable Ammount</div>
                    <div className='flex justify-center gap-10 align-middle items-center'>
                        <Input type="text" placeholder="Total Ammount" className="text-black m-2" name="total" value={data.total} onChange={handleInputChange}/>
                        <Button onClick={submitData}>Done</Button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Form
