'use client'
import FudzTransTable from "@/components/ui/Tables/FudzTransTable" 
import FudzGroupButtonDetails from "@/components/ui/FudzGroupButtonDetails" 
import AddTransactionDetailsModal from "@/components/ui/Modal/Transactions/OfficialReciept/Add_transaction_details_modal"
 
import * as z from "zod"; 
import { InvoiceSchema } from "@/models/InvoiceSchema"
import { FormInvoice } from "./Form/Form_invoice"
import { SubmitHandler, useForm } from "react-hook-form"
import FudzCard from "@/components/ui/FudzCard" 
import FudzTransTableUDF from "@/components/ui/Tables/FudzTransTableUDF"
import FudzTransTablePaymentsSchedules from "@/components/ui/Tables/FudzTransTablePaymentsSchedules"
import { useState } from "react";

const SalesInvoiceFormComponent = () => {
    const [isOpenAddModal, setOpenAddModal] = useState(false)

    const handleAddEntry = () => {
        setOpenAddModal(!isOpenAddModal)
    }
    const handleFormSubmit = (value: z.infer<typeof InvoiceSchema>) => {
        console.log("handleForm", value)
    }
    const onSubmit: SubmitHandler<typeof InvoiceSchema> = (data: any) => console.log(data)

    return (

        <>
            <div className="grid grid-cols-4 gap-4">
                <FudzCard className="shadow-2xl col-span-3">
                    <FormInvoice onSubmit={handleFormSubmit} />
                    <FudzGroupButtonDetails onAdd={() => handleAddEntry()} onEdit={() => setOpenAddModal(true)} onDelete={() => setOpenAddModal(true)} />
                    <FudzTransTable />
                </FudzCard >
                <div>
                    <FudzCard className="shadow-2xl">
                        USER DEFINED FIELDS
                        <FudzTransTableUDF />
                    </FudzCard>
                    <FudzCard className="shadow-2xl"> 
                        PAYMENTS SCHEDULES
                        <FudzTransTablePaymentsSchedules />  
                    </FudzCard>
                </div>
                <AddTransactionDetailsModal isOpen={isOpenAddModal} setModalState={setOpenAddModal} />
            </div >
        </>
    )
}

export default SalesInvoiceFormComponent