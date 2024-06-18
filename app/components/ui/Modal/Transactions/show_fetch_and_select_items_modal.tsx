import useToggle from '@/hooks/useToggle'
import react, { Dispatch, SetStateAction, useEffect } from 'react'
import FudzPlainModal from '../../FudzPlainModal'
import FudzButton from '../../FudzButton'
import { GridColDef } from '@mui/x-data-grid'
import FudzTable from '../../Tables/FudzTable'

interface IShow_fetch_and_select_items_modal {
    openItemModal: boolean,
    setItemModal: Dispatch<SetStateAction<boolean>>
    onClickSelectItem: (data: any) => void

}

const Show_fetch_and_select_items_modal = (props: IShow_fetch_and_select_items_modal) => {

    const rows = [
        {
            id: "1",
            code: "AR",
            name: "Account receivable Account receivable Account receivable Account receivable Account receivable",
        },
        {
            id: "2",
            code: "AP",
            name: "Account payable Account payable Account payable Account payable",
        }
    ];
    const columns: GridColDef[] = [
        // { field: 'id', headerName: 'ID', width: 90 },
        {
            field: 'code',
            headerName: 'Code',
            width: 150,
            editable: false,
        },
        {
            field: 'name',
            headerName: 'Title',
            flex: 1,
            editable: false,
        },
    ];

    return (
        <FudzPlainModal title={''} isOpen={props.openItemModal} setModalState={props.setItemModal}>
            <FudzTable columns={columns} rows={rows} onRowClick={(v) => props.onClickSelectItem(v)} />
        </FudzPlainModal>
    )
}
export default Show_fetch_and_select_items_modal