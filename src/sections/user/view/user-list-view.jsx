import { useState, useCallback } from 'react';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Table from '@mui/material/Table';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import TableBody from '@mui/material/TableBody';
import IconButton from '@mui/material/IconButton';
import Checkbox from '@mui/material/Checkbox';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';

import { ChromePicker } from 'react-color'; 

import { paths } from 'src/routes/paths';
import { useRouter } from 'src/routes/hooks';
import { RouterLink } from 'src/routes/components';

import { useBoolean } from 'src/hooks/use-boolean';

import { DashboardContent } from 'src/layouts/dashboard';

import { toast } from 'src/components/snackbar';
import { Iconify } from 'src/components/iconify';
import { Scrollbar } from 'src/components/scrollbar';
import { ConfirmDialog } from 'src/components/custom-dialog';
import { CustomBreadcrumbs } from 'src/components/custom-breadcrumbs';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import {
  useTable,
  emptyRows,
  rowInPage,
  TableNoData,
  TableEmptyRows,
  TableHeadCustom,
  TableSelectedAction,
  TablePaginationCustom,
} from 'src/components/table';

// ----------------------------------------------------------------------

const TABLE_HEAD = [
  { id: 'label', label: 'Label' },
  { id: 'preview', label: 'Preview' },
  { id: 'documents', label: 'Documents' },
  { id: 'views', label: 'Views' },
  { id: '', label: 'Actions', width: 120 },
];

const _tagList = [
  {
    id: '1',
    label: 'Admin',
    preview: 'Admin',
    documents: 11,
    views: 3,
    color: '#4caf50',
  },
  {
    id: '2',
    label: 'Demo',
    preview: 'Demo',
    documents: 0,
    views: 1,
    color: '#2196f3',
  },
];

// ----------------------------------------------------------------------

export function UserListView() {
  const table = useTable();
  const router = useRouter();
  const confirm = useBoolean();
  const [tableData, setTableData] = useState(_tagList);
  const [filterTerm, setFilterTerm] = useState('');

  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [currentEditRow, setCurrentEditRow] = useState(null);
  const [editLabel, setEditLabel] = useState('');
  const [editColor, setEditColor] = useState('#4caf50');

  const dataFiltered = tableData.filter((row) =>
    row.label.toLowerCase().includes(filterTerm.toLowerCase())
  );

  const dataInPage = rowInPage(dataFiltered, table.page, table.rowsPerPage);
  const notFound = !dataFiltered.length;

  const handleEditRow = useCallback(
    (id) => {
      const row = tableData.find((item) => item.id === id);
      if (row) {
        setCurrentEditRow(row);
        setEditLabel(row.label);
        setEditColor(row.color || '#4caf50');
        setEditDialogOpen(true);
      }
    },
    [tableData]
  );

  const handleSaveEdit = () => {
    if (currentEditRow) {
      const updatedRow = {
        ...currentEditRow,
        label: editLabel,
        preview: editLabel,
        color: editColor,
      };
      setTableData((prev) =>
        prev.map((row) => (row.id === currentEditRow.id ? updatedRow : row))
      );
      setEditDialogOpen(false);
      toast.success('Tag updated!');
    }
  };

  const handleCopyRow = useCallback(
    (id) => {
      const original = tableData.find((row) => row.id === id);

      if (original) {
        const baseLabel = original.label.replace(/(_\d+)$/, '');
        const similarCopies = tableData.filter((row) =>
          row.label.startsWith(baseLabel)
        );

        const existingNumbers = similarCopies
          .map((row) => {
            const match = row.label.match(new RegExp(`^${baseLabel}_(\\d+)$`));
            return match ? parseInt(match[1], 10) : 0;
          })
          .filter((num) => num >= 1);

        const maxNumber = existingNumbers.length > 0 ? Math.max(...existingNumbers) : 0;
        const newSuffix = maxNumber + 1;

        const newId = `${Date.now()}`;
        const newLabel = `${baseLabel}_${newSuffix}`;

        const copiedRow = {
          ...original,
          id: newId,
          label: newLabel,
          preview: newLabel,
          color: original.color,
        };

        setTableData([copiedRow, ...tableData]);
        toast.success('Tag copied!');
      }
    },
    [tableData]
  );

  const handleDeleteRow = useCallback(
    (id) => {
      const deleteRow = tableData.filter((row) => row.id !== id);
      toast.success('Deleted successfully');
      setTableData(deleteRow);
      table.onUpdatePageDeleteRow(dataInPage.length);
    },
    [dataInPage.length, table, tableData]
  );

  const handleDeleteRows = useCallback(() => {
    const deleteRows = tableData.filter((row) => !table.selected.includes(row.id));
    toast.success('Deleted selected');
    setTableData(deleteRows);
    table.onUpdatePageDeleteRows({
      totalRowsInPage: dataInPage.length,
      totalRowsFiltered: dataFiltered.length,
    });
  }, [dataFiltered.length, dataInPage.length, table, tableData]);

  const [bulkMenuAnchor, setBulkMenuAnchor] = useState(null);

  const handleBulkMenuOpen = (event) => {
    setBulkMenuAnchor(event.currentTarget);
  };

  const handleBulkMenuClose = () => {
    setBulkMenuAnchor(null);
  };

  const handleBulkDelete = () => {
    if (table.selected.length === 0) {
      toast.error('No tags selected');
      return;
    }

    const deleteRows = tableData.filter((row) => !table.selected.includes(row.id));
    setTableData(deleteRows);
    toast.success('Deleted selected tags');

    table.onUpdatePageDeleteRows({
      totalRowsInPage: dataInPage.length,
      totalRowsFiltered: dataFiltered.length,
    });

    handleBulkMenuClose();
  };

  return (
    <>
      <DashboardContent>
        <CustomBreadcrumbs
          heading="Tags"
          links={[
            { name: 'Dashboard', href: paths.dashboard.root },
            { name: 'Tags', href: paths.dashboard.user.root },
            { name: 'All' },
          ]}
          action={
            <>
              {/* <Button
                variant="contained"
                color="primary"
                onClick={handleBulkMenuOpen}
              >
                Bulk Actions
              </Button> */}

              <Menu
                anchorEl={bulkMenuAnchor}
                open={Boolean(bulkMenuAnchor)}
                onClose={handleBulkMenuClose}
              >
                <MenuItem onClick={handleBulkDelete}>
                  <Iconify icon="eva:trash-2-outline" sx={{ mr: 1 }} />
                  Delete
                </MenuItem>
              </Menu>
            </>
          }
        />


        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            mb: 2,
            flexWrap: 'wrap',
            gap: 2,
          }}
        >
          <Box sx={{ typography: 'subtitle2' }}>
            Total: {dataFiltered.length} {dataFiltered.length === 1 ? 'tag' : 'tags'}
          </Box>

          <TextField
            variant="outlined"
            placeholder="Filter tags..."
            size="small"
            value={filterTerm}
            onChange={(e) => {
              setFilterTerm(e.target.value);
              table.onResetPage();
            }}
            sx={{ width: 240 }}
          />
        </Box>

        <Card>
          <Box sx={{ position: 'relative' }}>
            <TableSelectedAction
              dense={table.dense}
              numSelected={table.selected.length}
              rowCount={dataFiltered.length}
              onSelectAllRows={(checked) =>
                table.onSelectAllRows(
                  checked,
                  dataFiltered.map((row) => row.id)
                )
              }
              action={
                <Tooltip title="Delete">
                  <IconButton color="primary" onClick={confirm.onTrue}>
                    <Iconify icon="solar:trash-bin-trash-bold" />
                  </IconButton>
                </Tooltip>
              }
            />

            <Scrollbar>
              <Table size={table.dense ? 'small' : 'medium'} sx={{ minWidth: '100%' }}>
                <TableHeadCustom
                  order={table.order}
                  orderBy={table.orderBy}
                  headLabel={TABLE_HEAD}
                  rowCount={dataFiltered.length}
                  numSelected={table.selected.length}
                  onSort={table.onSort}
                  onSelectAllRows={(checked) =>
                    table.onSelectAllRows(
                      checked,
                      dataFiltered.map((row) => row.id)
                    )
                  }
                />

                <TableBody>
                  {dataFiltered
                    .slice(
                      table.page * table.rowsPerPage,
                      table.page * table.rowsPerPage + table.rowsPerPage
                    )
                    .map((row) => (
                      <TableRow hover key={row.id} selected={table.selected.includes(row.id)}>
                        <TableCell padding="checkbox">
                          <Checkbox
                            checked={table.selected.includes(row.id)}
                            onClick={() => table.onSelectRow(row.id)}
                          />
                        </TableCell>

                        <TableCell>{row.label}</TableCell>

                        <TableCell>
                          <Box
                            sx={{
                              display: 'inline-block',
                              px: 1.5,
                              py: 0.5,
                              borderRadius: 1,
                              color: '#fff',
                              backgroundColor: row.color || '#4caf50',
                              fontSize: '0.875rem',
                            }}
                          >
                            {row.preview}
                          </Box>
                        </TableCell>

                        <TableCell>{row.documents}</TableCell>

                        <TableCell>
                          <Iconify icon="mdi:eye-outline" sx={{ mr: 0.5 }} />
                          {row.views}
                        </TableCell>

                        <TableCell>
                          <Stack direction="row" spacing={1}>
                            <Tooltip title="Copy">
                              <IconButton onClick={() => handleCopyRow(row.id)}>
                                <Iconify icon="eva:copy-outline" />
                              </IconButton>
                            </Tooltip>

                            <Tooltip title="Edit">
                              <IconButton onClick={() => handleEditRow(row.id)}>
                                <Iconify icon="eva:edit-fill" />
                              </IconButton>
                            </Tooltip>

                            <Tooltip title="Delete">
                              <IconButton onClick={() => handleDeleteRow(row.id)}>
                                <Iconify icon="eva:trash-2-outline" />
                              </IconButton>
                            </Tooltip>
                          </Stack>
                        </TableCell>
                      </TableRow>
                    ))}

                  <TableEmptyRows
                    height={56}
                    emptyRows={emptyRows(table.page, table.rowsPerPage, dataFiltered.length)}
                  />

                  <TableNoData notFound={notFound} />
                </TableBody>
              </Table>
            </Scrollbar>
          </Box>

          <TablePaginationCustom
            page={table.page}
            dense={table.dense}
            count={dataFiltered.length}
            rowsPerPage={table.rowsPerPage}
            onPageChange={table.onChangePage}
            onChangeDense={table.onChangeDense}
            onRowsPerPageChange={table.onChangeRowsPerPage}
          />
        </Card>
      </DashboardContent>

      <ConfirmDialog
        open={confirm.value}
        onClose={confirm.onFalse}
        title="Delete"
        content={
          <>
            Are you sure you want to delete <strong>{table.selected.length}</strong> items?
          </>
        }
        action={
          <Button
            variant="contained"
            color="error"
            onClick={() => {
              handleDeleteRows();
              confirm.onFalse();
            }}
          >
            Delete
          </Button>
        }
      />

      <Dialog open={editDialogOpen} onClose={() => setEditDialogOpen(false)} fullWidth maxWidth="sm">
        <DialogTitle>Edit Tag</DialogTitle>
        <DialogContent sx={{ pt: 2 }}>
          <Stack spacing={3}>
            <TextField
              label="Label"
              fullWidth
              value={editLabel}
              onChange={(e) => setEditLabel(e.target.value)}
              sx={{ mt: 1 }}
            />
            <Box>
              <Box sx={{ mb: 1, fontWeight: 500 }}>Color</Box>
              <ChromePicker
                color={editColor}
                onChangeComplete={(color) => setEditColor(color.hex)}
                disableAlpha
              />
            </Box>
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setEditDialogOpen(false)}>Cancel</Button>
          <Button variant="contained" onClick={handleSaveEdit}>
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
