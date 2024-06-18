import FudzButton from "@/components/ui/FudzButton"
import FudzLabel from "@/components/ui/FudzLabel"
import FudzPlainModal from "@/components/ui/FudzPlainModal"
import FudzTextField from "@/components/ui/TextFields/FudzTextField"
import { Button, Inset, Flex, Dialog } from "@radix-ui/themes"
import { Children, Dispatch, SetStateAction, useRef, useState } from "react"
import Attachment from "../../../../views/Transaction/Attachments/attachment"  
// import Search_item_modal from "../../search_item_modal"

interface IModal {
    isOpen: boolean
    setModalState: Dispatch<SetStateAction<boolean>>
}
const Add_transaction_details_modal = (props: IModal) => {

    const [isOpenAttachmentModal, setOpenAttachmentModal] = useState(false)

    return (
        <FudzPlainModal title="Accounting Entry" maxWidth="666px" isOpen={props.isOpen} setModalState={props.setModalState} >
            <Flex direction={'column'} gap={'1'} >
                <div className="grid grid-cols-4">
                    <div className="content-start float-end">
                        <FudzLabel label="Account Code" />
                    </div>
                    <div className="content-start">
                        <FudzTextField />
                    </div>
                    <div className="col-span-2 content-start">
                        <FudzTextField width="100%" disabled />
                    </div>
                </div>
                <div className="grid grid-cols-4 justify-item-end">
                    <div className="content-start">
                        <FudzLabel label="Gen. Ref" />
                    </div>
                    <div className="content-start">
                        <FudzTextField />
                    </div>
                    <div className="col-span-2 content-end">
                        <FudzTextField label="" width="100%" disabled />
                    </div>
                </div>
                <div className="grid grid-cols-4 justify-item-end">
                    <div className="content-start">
                        <FudzLabel label="D.N. Ref" />
                    </div>
                    <div className="content-start">
                        <FudzTextField />
                    </div>
                    <div className="col-span-2 content-end">
                        <FudzTextField label="" width="100%" disabled />
                    </div>
                </div>

                <div className="flex justify-end gap-10">
                    <div className="content-start col-span-2 ">
                        <FudzTextField label="Project" />
                    </div>
                    <div className="content-start col-span-2 ">
                        <FudzTextField label="Department" />
                    </div>
                </div>


                <div className="flex justify-end gap-10">
                    <div className="content-end">
                        <FudzTextField label="Debit" />
                    </div>
                    <div className="content-end">
                        <FudzTextField label="Debit Based" disabled />
                    </div>
                </div>


                <div className="flex justify-end gap-10 ">
                    <div className="content-end">
                        <FudzTextField label="Credit" />
                    </div>
                    <div className="content-end">
                        <FudzTextField label="Credit Based" disabled />
                    </div>
                </div>

                <div className="grid grid-cols-4">
                    <div className="content-start  ">
                        <FudzLabel label="Line remarks" />
                    </div>
                    <div className="col-span-3">
                        <FudzTextField width="100%" />
                    </div>
                </div>
            </Flex>

            <Flex justify={'center'} className="mt-4">
                <FudzButton className="bg-lime-500" variant={'soft'} onClick={() => setOpenAttachmentModal(true)}>Add</FudzButton>
                <FudzButton className="bg-rose-500 text-white" variant={'soft'}>Cancel</FudzButton>
            </Flex>
            <Attachment type={"Setup_fixed_asset"} isOpen={isOpenAttachmentModal} setIsOpenModalState={setOpenAttachmentModal} />
            {/* <Search_item_modal data={{
                    id:1,
                    code:"jm",
                    name:"hatdok"
                }} /> */}
        </FudzPlainModal>
    )
}
export default Add_transaction_details_modal