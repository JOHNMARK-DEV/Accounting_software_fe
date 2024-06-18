import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

const columns: GridColDef<(typeof rows)[number]>[] = [ 
  {
    field: 'Label',
    headerName: 'Label',
    width: 150,
    editable: true,
  }, 
  {
    field: 'Value',
    headerName: 'Values',
    width: 150,
    editable: true,
  }, 
];

const rows = [
  { id:1,Label: 1, Value: 'Lannister'  },
  { id:2,Label: 2, Value: 'Snow'},
  { id:3,Label: 3, Value: 'Lannistesr'} 
];

export default function FudzTransTableUDF() {
  return (
    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}    
        density='compact'
        hideFooter 
      
      />
    </Box>
  );
}