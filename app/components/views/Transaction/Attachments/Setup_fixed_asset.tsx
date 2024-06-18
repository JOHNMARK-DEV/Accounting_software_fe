'use client'
import { Card, Flex, Grid } from "@radix-ui/themes"
import FudzGroupButtonDetails from "../../../ui/FudzGroupButtonDetails"
import FudzTable from "../../../ui/Tables/FudzTransTable"
import FudzTextField from "../../../ui/TextFields/FudzTextField"
import FudzButton from "../../../ui/FudzButton"


const Setup_fixed_asset = () => {
    function setOpenAddModal(arg0: boolean): void {
        throw new Error("Function not implemented.")
    }

    return (
        <div className="mt-4">
            <FudzTable />
            <FudzGroupButtonDetails onAdd={() => setOpenAddModal(true)} onEdit={() => setOpenAddModal(true)} onDelete={() => setOpenAddModal(true)} />
            <Card>
                <Flex direction={'column'} gap={'1'}  >
                    <Grid columns="3" gap={'1'} width="auto" className="grid justify-items-end">
                        <div className="content-end">
                            <FudzTextField
                                label="Date Acquired"
                            />
                        </div>
                        <div className="content-end">
                            <FudzTextField
                                label="Lapsing Start Date"
                            />
                        </div>
                        <div className="content-end">
                            <FudzTextField
                                label="Historical Rate"
                            />
                        </div>
                    </Grid >
                    <Grid columns="3" gap={'1'} width="auto" className="grid justify-items-end">
                        <div className="content-end">
                            <FudzTextField
                                label="Asset code"
                            />
                        </div>
                        <div className="content-end">
                            <FudzTextField
                                label="Quantity"
                            />
                        </div>
                        <div className="content-end">
                            <FudzTextField
                                label="Salvage Value"
                            />
                        </div>
                    </Grid>
                    <Grid columns="3" gap={'1'} width="auto" className="grid justify-items-end">
                        <div className="content-end">
                            <FudzTextField
                                label="Acquisition cost"
                            />
                        </div>
                        <div className="content-end">
                            <FudzTextField
                                label="Useful life"
                            />
                        </div>
                    </Grid>
                    <Grid columns="1" gap={'5'} width="auto">
                        <FudzTextField
                            label="Description"
                            width="100%"
                        />
                    </Grid>

                </Flex>

                <Flex justify={'center'} className="mt-4">
                    <FudzButton className="bg-lime-500" variant={'soft'} onClick={() => console.log(true)}>Save changes     </FudzButton>
                    <FudzButton className="bg-rose-500 text-white" variant={'soft'}>Cancel</FudzButton>
                </Flex>
            </Card>
        </div>
    )
}
export default Setup_fixed_asset