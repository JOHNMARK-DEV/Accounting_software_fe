import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import CustomToolbar from './CustomToolbar';

const columns: GridColDef<(typeof rows)[number]>[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'account_code',
    headerName: 'Account code',
    width: 150,
    editable: true,
  },
  {
    field: 'account_name',
    headerName: 'Account title',
    width: 150,
    editable: true,
  },
  {
    field: 'debit_based',
    headerName: 'Debit Based',
    type: 'number',
    width: 110,
    editable: true,
  },
  {
    field: 'credit_based',
    headerName: 'Credit Based',
    type: 'number',
    width: 110,
    editable: true,
  },
  {
    field: 'general_reference_code',
    headerName: 'Gen. ref',
    type: 'number',
    width: 110,
    editable: true,
  },
  {
    field: 'general_reference_name',
    headerName: 'Gen. name',
    type: 'number',
    width: 110,
    editable: true,
  },
  {
    field: 'dn_ref',
    headerName: 'D.N Reference',
    type: 'number',
    width: 110,
    editable: true,
  },
];

const rows = [
  {
    id: 1,
    account_code: 'Snow', 
    account_name: 'Snow', 
    debit_based: 'Snow', 
    credit_based: 'Snow', 
    general_reference_code: 'Snow', 
    dn_ref: 'Snow'   

  },
];

export default function FudzTransTable() {
  return (
    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}   
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
        hideFooter
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 100,
            },
          },
        }}
        slots={{toolbar:CustomToolbar}}  
        slotProps={{
          toolbar:{
            showQuickFilter: true
          }
        }}
      />
    </Box>
  );
}