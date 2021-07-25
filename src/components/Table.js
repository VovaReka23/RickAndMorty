import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';

function DataTable({ rows, columns, setCheked, checked }) {
    return (
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid onSelectionModelChange={itm => setCheked(itm)} rows={rows} columns={columns} pageSize={5} selectionModel={checked} checkboxSelection />
        </div>
    );
}
export default React.memo(DataTable)