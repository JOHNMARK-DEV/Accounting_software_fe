import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridToolbar } from '@mui/x-data-grid';
import { useState } from 'react';
import CustomToolbar from './CustomToolbar';
 
export default function FudzTable(props:{
  columns:any,
  rows:any
  onRowClick:(v: any) => void
  customProps?:{
    checkboxSelection: boolean
  }
}) {
 
  return (
    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={props.rows}
        columns={props.columns} 
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 100,
            },
          },
        }}
        onRowClick={(data)=>{
          props.onRowClick(data.row) 
        }}
        pageSizeOptions={[100]}
        checkboxSelection={props.customProps?.checkboxSelection}  
        
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