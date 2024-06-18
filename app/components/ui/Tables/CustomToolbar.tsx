import React from 'react';
import {
  GridToolbarContainer,
  GridToolbarExport,
  GridToolbarColumnsButton,
  GridToolbarFilterButton,
  GridToolbarDensitySelector,
  GridToolbarQuickFilter
} from '@mui/x-data-grid';

const CustomToolbar = () => {
  return (
    <GridToolbarContainer>
      {/* Include the quick filter and other desired components */}
      <GridToolbarQuickFilter />
      {/* Add other toolbar buttons if needed, but omit the export button */}
    </GridToolbarContainer>
  );
};

export default CustomToolbar;
