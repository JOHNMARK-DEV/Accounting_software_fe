import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridToolbar, GridToolbarContainer, GridToolbarQuickFilter } from '@mui/x-data-grid';
import CustomToolbar from './CustomToolbar';

 


const columns: GridColDef<(typeof rows)[number]>[] = [ 
  {
    field: 'Label',
    headerName: 'Module',
    width: 150,
    editable: true,
  }, 
  {
    field: 'value',
    headerName: 'Amount',
    width: 120,
    editable: true,
  }, 
  {
    field: 'date',
    headerName: 'Date',
    width: 120,
    editable: true,
  }, 
];

const rows = [
  { id:1,Label:"OFFICIAL RECEIPT", value: '1,123,120.00',date: '1,123,120.00' },
  { id:2,Label:"OFFICIAL RECEIPT", value: '1,123,120.00',date: '1,123,120.00' },
  { id:3,Label:"OFFICIAL RECEIPT", value: '1,123,120.00',date: '1,123,120.00' },
];

export default function FudzTransTablePaymentsSchedules() {
  return (
    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}   
        density='compact'
        hideFooter
        disableColumnFilter
        disableColumnSelector
        disableDensitySelector    
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