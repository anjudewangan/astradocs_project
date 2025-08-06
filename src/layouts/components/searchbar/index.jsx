import { useState, useCallback } from 'react';
import parse from 'autosuggest-highlight/parse';
import match from 'autosuggest-highlight/match';

import Box from '@mui/material/Box';
import SvgIcon from '@mui/material/SvgIcon';
import InputBase from '@mui/material/InputBase';
import { useTheme } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Dialog, { dialogClasses } from '@mui/material/Dialog';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import { useRouter } from 'src/routes/hooks';
import { isExternalLink } from 'src/routes/utils';
import { useBoolean } from 'src/hooks/use-boolean';
import { useEventListener } from 'src/hooks/use-event-listener';
import { varAlpha } from 'src/theme/styles';

import { Label } from 'src/components/label';
import { Iconify } from 'src/components/iconify';
// import { Scrollbar } from 'src/components/scrollbar';
// import { SearchNotFound } from 'src/components/search-not-found';

import { ResultItem } from './result-item';
import { groupItems, applyFilter, getAllItems } from './utils';

// ----------------------------------------------------------------------

export function Searchbar({ data: navItems = [], sx, ...other }) {
  const theme = useTheme();

  const router = useRouter();

  const search = useBoolean();

  const [searchQuery, setSearchQuery] = useState('');
  const [secondarySearchQuery, setSecondarySearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const [openResponsiveDialog, setOpenResponsiveDialog] = useState(false); // For responsive search dialog

  const handleResponsiveSearchClick = () => {
    setOpenResponsiveDialog(true);
  };

  const handleCloseResponsiveDialog = () => {
    setOpenResponsiveDialog(false);
  };

  const handleClose = useCallback(() => {
    search.onFalse();
    setSearchQuery('');
    setSecondarySearchQuery('');
  }, [search]);

  const handleKeyDown = (event) => {
    if (event.key === 'k' && event.metaKey) {
      search.onToggle();
      setSearchQuery('');
    }
  };

  useEventListener('keydown', handleKeyDown);

  const handleClick = useCallback(
    (path) => {
      if (isExternalLink(path)) {
        window.open(path);
      } else {
        router.push(path);
      }
      handleClose();
    },
    [handleClose, router]
  );

  const handleSearch = useCallback((event) => {
    setSearchQuery(event.target.value);
  }, []);

  const handleSecondarySearch = useCallback((event) => {
    setSecondarySearchQuery(event.target.value);
  }, []);

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const dataFiltered = applyFilter({
    inputData: getAllItems({ data: navItems, category: selectedCategory }),
    query: searchQuery,
  });

  const secondaryDataFiltered = applyFilter({
    inputData: dataFiltered,
    query: secondarySearchQuery,
  });

  const notFound = secondarySearchQuery && !secondaryDataFiltered.length;

  const renderItems = () => {
    const dataGroups = groupItems(secondaryDataFiltered);

    return Object.keys(dataGroups)
      .sort((a, b) => -b.localeCompare(a))
      .map((group, index) => (
        <Box component="ul" key={`${group}-${index}`}>
          {dataGroups[group].map((item) => {
            const { title, path } = item;

            const partsTitle = parse(title, match(title, secondarySearchQuery));

            const partsPath = parse(path, match(path, secondarySearchQuery));

            return (
              <Box component="li" key={`${title}${path}`} sx={{ display: 'flex' }}>
                <ResultItem
                  path={partsPath}
                  title={partsTitle}
                  groupLabel={secondarySearchQuery && group}
                  onClickItem={() => handleClick(path)}
                />
              </Box>
            );
          })}
        </Box>
      ));
  };

  const renderButton = (
    <Box
      display="flex"
      alignItems="center"
      onClick={search.onTrue}
      sx={{
        pr: { sm: 1 },
        borderRadius: { sm: 1.5 },
        cursor: { sm: 'pointer' },
        bgcolor: { sm: varAlpha(theme.vars.palette.grey['500Channel'], 0.08) },
        display: { xs: 'none', sm: 'inline-flex' },
      }}
      {...other}
    >
      <IconButton disableRipple>
        <SvgIcon sx={{ width: 20, height: 20 }}>
          <path
            fill="currentColor"
            d="m20.71 19.29l-3.4-3.39A7.92 7.92 0 0 0 19 11a8 8 0 1 0-8 8a7.92 7.92 0 0 0 4.9-1.69l3.39 3.4a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.42M5 11a6 6 0 1 1 6 6a6 6 0 0 1-6-6"
          />
        </SvgIcon>
      </IconButton>

      <Label
        sx={{
          fontSize: 12,
          color: 'grey.800',
          bgcolor: 'common.white',
          boxShadow: theme.customShadows.z1,
          display: { xs: 'none', sm: 'inline-flex' },
        }}
      >
        Advanced Search
      </Label>
    </Box>
  );

  return (
    <>
      <Box
        display="flex"
        alignItems="center"
        onClick={handleResponsiveSearchClick}
        sx={{
          pr: { sm: 1 },
          borderRadius: { sm: 1.5 },
          cursor: { sm: 'pointer' },
          bgcolor: { sm: varAlpha(theme.vars.palette.grey['500Channel'], 0.08) },
          display: { xs: 'inline-flex', sm: 'none' },
        }}
        {...other}
      >
        <IconButton disableRipple>
          <SvgIcon sx={{ width: 20, height: 20 }}>
            <path
              fill="currentColor"
              d="m20.71 19.29l-3.4-3.39A7.92 7.92 0 0 0 19 11a8 8 0 1 0-8 8a7.92 7.92 0 0 0 4.9-1.69l3.39 3.4a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.42M5 11a6 6 0 1 1 6 6a6 6 0 0 1-6-6"
            />
          </SvgIcon>
        </IconButton>

        <Label
          sx={{
            fontSize: 12,
            color: 'grey.800',
            bgcolor: 'common.white',
            boxShadow: theme.customShadows.z1,
            display: { xs: 'none', sm: 'inline-flex' },
          }}
        >
          Responsive Search
        </Label>
      </Box>

      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        sx={{
          mt: 2,
          mb: 2,
        }}
      >
        <Select
          value={selectedCategory}
          onChange={handleCategoryChange}
          displayEmpty
          sx={{
            mr: 2,
            minWidth: 180,
            height: '40px',
            display: { xs: 'none', sm: 'inline-flex' },
          }}
        >
          <MenuItem value="" disabled>Document Type</MenuItem>
          <MenuItem value="category12">Document</MenuItem>
          <MenuItem value="category1">Cabinet</MenuItem>
          <MenuItem value="category2">Document File</MenuItem>
          <MenuItem value="category3">Document File Page</MenuItem>
          <MenuItem value="category4">Group</MenuItem>
          <MenuItem value="category5">Index Instance Node</MenuItem>
          <MenuItem value="category6">Message</MenuItem>
          <MenuItem value="category7">Metadata Type</MenuItem>
          <MenuItem value="category8">Role</MenuItem>
          <MenuItem value="category9">Signature Capture</MenuItem>
          <MenuItem value="category10">Tag</MenuItem>
          <MenuItem value="category11">User</MenuItem>
        </Select>

        <InputBase
          placeholder="Search terms..."
          value={searchQuery}
          onChange={handleSearch}
          sx={{
            mr: 2,
            width: 180,
            height: '40px',
            border: '1px solid #ccc',
            borderRadius: 1,
            px: 2,
            display: { xs: 'none', sm: 'inline-flex' },
          }}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                sx={{
                  backgroundColor: theme.palette.grey[200],
                  borderRadius: '50%',
                  padding: 1,
                  marginRight: '-5px',
                  '&:hover': { backgroundColor: theme.palette.grey[300] },
                }}
                onClick={() => console.log('Search triggered')}
              >
                <SvgIcon sx={{ width: 18, height: 18 }}>
                  <path
                    fill="currentColor"
                    d="M20.71 19.29l-3.4-3.39A7.92 7.92 0 0 0 19 11a8 8 0 1 0-8 8a7.92 7.92 0 0 0 4.9-1.69l3.39 3.4a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42M5 11a6 6 0 1 1 6 6a6 6 0 0 1-6-6"
                  />
                </SvgIcon>
              </IconButton>
            </InputAdornment>
          }
        />

        {renderButton}
      </Box>

      <Dialog
        fullWidth
        disableRestoreFocus
        maxWidth="md"
        open={openResponsiveDialog}
        onClose={handleCloseResponsiveDialog}
        transitionDuration={{
          enter: theme.transitions.duration.shortest,
          exit: 0,
        }}
        PaperProps={{
          sx: { mt: 5, overflow: 'unset', maxHeight: '90vh' },
        }}
        sx={{ [`& .${dialogClasses.container}`]: { alignItems: 'flex-start' } }}
      >
        <Box sx={{ p: 3, borderBottom: `solid 1px ${theme.vars.palette.divider}` }}>
          <Select
            value={selectedCategory}
            onChange={handleCategoryChange}
            displayEmpty
            fullWidth
            sx={{
              mr: 2,
              mb: 2,
              height: '40px',
            }}
            MenuProps={{
              PaperProps: {
                sx: {
                  maxHeight: '200px',
                  padding: 0,
                },
              },
            }}
          >
            <MenuItem value="" disabled>Document Type</MenuItem>
            <MenuItem value="category12">Document</MenuItem>
            <MenuItem value="category1">Cabinet</MenuItem>
            <MenuItem value="category2">Document File</MenuItem>
            <MenuItem value="category3">Document File Page</MenuItem>
            <MenuItem value="category4">Group</MenuItem>
            <MenuItem value="category5">Index Instance Node</MenuItem>
            <MenuItem value="category6">Message</MenuItem>
            <MenuItem value="category7">Metadata Type</MenuItem>
            <MenuItem value="category8">Role</MenuItem>
            <MenuItem value="category9">Signature Capture</MenuItem>
            <MenuItem value="category10">Tag</MenuItem>
            <MenuItem value="category11">User</MenuItem>
          </Select>

          <InputBase
            fullWidth
            autoFocus
            placeholder="Search terms..."
            value={searchQuery}
            onChange={handleSearch}
            startAdornment={
              <InputAdornment position="start">
                <Iconify icon="eva:search-fill" width={24} sx={{ color: 'text.disabled' }} />
              </InputAdornment>
            }
            inputProps={{ sx: { typography: 'h6' } }}
          />
        </Box>

        <Box sx={{ p: 2, display: 'flex', justifyContent: 'space-between' }}>
          <button
            type="button"
            onClick={() => console.log('Search triggered')}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '8px 14px',
              border: '1px solid #ccc',
              borderRadius: '8px',
              background: '#fff',
              color: '#000',
              fontWeight: 'bold',
              cursor: 'pointer',
            }}
          >
            <Iconify icon="eva:search-fill" width={20} />
            Search
          </button>

          <Box
            display="flex"
            alignItems="center"
            onClick={search.onTrue}
            sx={{
              pr: { sm: 1 },
              borderRadius: { sm: 1.5 },
              cursor: { sm: 'pointer' },
              bgcolor: { sm: varAlpha(theme.vars.palette.grey['500Channel'], 0.08) },
              display: { xs: 'inline-flex', sm: 'none' },
            }}
          >
            <button
              type="button"
              onClick={() => console.log('Search triggered')}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '8px 14px',
                border: '1px solid #ccc',
                borderRadius: '8px',
                background: '#fff',
                color: '#000',
                fontWeight: 'bold',
                cursor: 'pointer',
              }}
            >
              <Iconify icon="eva:search-fill" width={20} />
              Advanced Search
            </button>
          </Box>
        </Box>
      </Dialog>

      <Dialog
        fullWidth
        disableRestoreFocus
        maxWidth="md"
        open={search.value}
        onClose={handleClose}
        transitionDuration={{
          enter: theme.transitions.duration.shortest,
          exit: 0,
        }}
        PaperProps={{
          sx: { mt: 5, overflow: 'unset', maxHeight: '90vh' },
        }}
        sx={{ [`& .${dialogClasses.container}`]: { alignItems: 'flex-start' } }}
      >
        <Box sx={{ p: 3, borderBottom: `solid 1px ${theme.vars.palette.divider}` }}>
          <InputBase
            fullWidth
            autoFocus
            placeholder="Advanced search for..."
            value={searchQuery}
            onChange={handleSearch}
            startAdornment={
              <InputAdornment position="start">
                <Iconify icon="eva:search-fill" width={24} sx={{ color: 'text.disabled' }} />
              </InputAdornment>
            }
            inputProps={{ sx: { typography: 'h6' } }}
          />
        </Box>

        <Box
          component="form"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            p: 2,
            overflowY: 'auto',
          }}
        >
          <fieldset style={{ border: 'none', padding: 0, margin: 0 }}>
            <legend
              style={{
                fontWeight: 'bold',
                fontSize: '12px',
                marginBottom: '8px',
                color: '#000',
              }}
            >
              Match all:
            </legend>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <label htmlFor="matchAllYes" style={{ fontSize: '12px', cursor: 'pointer' }}>
                <input
                  type="radio"
                  id="matchAllYes"
                  value="yes"
                  name="matchAll"
                  style={{ marginRight: 5 }}
                />
                Yes
              </label>
              <label htmlFor="matchAllNo" style={{ fontSize: '12px', cursor: 'pointer' }}>
                <input
                  type="radio"
                  id="matchAllNo"
                  value="no"
                  name="matchAll"
                  style={{ marginRight: 5 }}
                />
                No
              </label>
            </Box>
          </fieldset>

          <span style={{ display: 'block', color: '#597ea2', fontSize: '12px' }}>
            Return only results that match all fields.
          </span>

          <Grid container spacing={2}>
            {[
              { id: 'id', label: 'ID', placeholder: 'Enter ID', description: '' },
              {
                id: 'docTypeLabel',
                label: 'Document type label',
                placeholder: 'Enter document type label',
                description: 'A short text identifying the document type.',
              },
              {
                id: 'created',
                label: 'Created',
                placeholder: 'Enter creation date',
                description: 'The date and time of the document creation.',
              },
              {
                id: 'label',
                label: 'Label',
                placeholder: 'Enter label',
                description: 'A short text identifying the document.',
              },
              {
                id: 'description',
                label: 'Description',
                placeholder: 'Enter description',
                description: 'An optional short text describing a document.',
              },
              {
                id: 'uuid',
                label: 'UUID',
                placeholder: 'Enter UUID',
                description: 'UUID of a document, a unique identifier generated for each document.',
              },
              {
                id: 'checksum',
                label: 'Document file checksum',
                placeholder: 'Enter checksum',
                description:
                  'A hash/checkdigit/fingerprint generated from the document’s binary data.',
              },
              {
                id: 'filename',
                label: 'Document file filename',
                placeholder: 'Enter file filename',
                description: 'Document file MIME type.',
              },
              {
                id: 'mimeType',
                label: 'Document file MIME type',
                placeholder: 'Enter MIME type',
                description: 'The document file’s MIME type (e.g., "text/plain", "image/jpeg").',
              },
              {
                id: 'cabinet',
                label: 'Cabinets',
                placeholder: 'Enter cabinet name',
                description: 'A short text used to identify the cabinet.',
              },
              { id: 'comments', label: 'Comments', placeholder: 'Enter comments', description: '' },
              {
                id: 'fileContent',
                label: 'Document file content',
                placeholder: 'Enter content',
                description: 'The actual text content extracted by the document parsing backend.',
              },
              {
                id: 'workflowComment',
                label: 'Document workflow transition comment',
                placeholder: 'Enter comment',
                description: '',
              },
              {
                id: 'fileMetadataKey',
                label: 'File metadata key',
                placeholder: 'Enter metadata key',
                description: 'Name of the file metadata entry.',
              },
              {
                id: 'fileMetadataValue',
                label: 'File metadata value',
                placeholder: 'Enter metadata value',
                description: 'Value of the file metadata entry.',
              },
              {
                id: 'metadataType',
                label: 'Metadata type',
                placeholder: 'Enter metadata type',
                description: 'Name used by other apps to reference this metadata type.',
              },
              {
                id: 'metadataValue',
                label: 'Metadata value',
                placeholder: 'Enter metadata value',
                description: 'The actual value stored in the metadata type field for the document.',
              },
              {
                id: 'ocrText',
                label: 'Document version OCR',
                placeholder: 'Enter OCR text',
                description: 'The actual text content extracted by the OCR backend.',
              },
              {
                id: 'signatureCaptureText',
                label: 'Signature capture text',
                placeholder: 'Enter signature text',
                description: 'Print version of the captured signature.',
              },
              {
                id: 'signatureUserFirstName',
                label: 'Signature capture user first name',
                placeholder: 'Enter first name',
                description:
                  'Required. 150 characters or fewer. Letters, digits, and @/./+/-/_ only.',
              },
              {
                id: 'signatureUserLastName',
                label: 'Signature capture user last name',
                placeholder: 'Enter last name',
                description: '',
              },
              {
                id: 'signatureUserUsername',
                label: 'Signature capture user username',
                placeholder: 'Enter username',
                description:
                  'Required. 150 characters or fewer. Letters, digits, and @/./+/-/_ only.',
              },
              {
                id: 'tagLabel',
                label: 'Tag label',
                placeholder: 'Enter tag label',
                description: 'A short text used as the tag name.',
              },
              {
                id: 'tagColor',
                label: 'Tag color',
                placeholder: 'Enter tag color',
                description: 'The RGB color values for the tag.',
              },
            ].map((field, index) => (
              <Grid item xs={12} sm={12} md={12} lg={12} key={index}>
                <Box>
                  <label
                    htmlFor={field.id}
                    style={{
                      fontWeight: 'bold',
                      fontSize: '12px',
                      marginBottom: '8px',
                      display: 'block',
                    }}
                  >
                    {field.label}:
                  </label>
                  <InputBase
                    id={field.id}
                    placeholder={field.placeholder}
                    fullWidth
                    sx={{
                      border: '1px solid #ccc',
                      borderRadius: 1,
                      px: 2,
                      py: 1,
                    }}
                  />
                  {field.description && (
                    <Typography
                      variant="caption"
                      sx={{ color: '#597ea2', display: 'block', marginTop: 1 }}
                    >
                      {field.description}
                    </Typography>
                  )}
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            p: 2,
            borderTop: `solid 1px ${theme.palette.divider}`,
          }}
        >
          <button
            type="button"
            onClick={handleClose}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '8px 14px',
              border: '1px solid #ccc',
              borderRadius: '8px',
              background: '#ff5630',
              color: '#fff',
              fontWeight: 'bold',
              cursor: 'pointer',
            }}
          >
            <Iconify icon="eva:close-fill" width={20} />
            Cancel
          </button>
          <button
            type="button"
            onClick={() => console.log('Search triggered')}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '8px 14px',
              border: '1px solid #ccc',
              borderRadius: '8px',
              background: '#4caf50',
              color: '#fff',
              fontWeight: 'bold',
              cursor: 'pointer',
            }}
          >
            <Iconify icon="eva:search-fill" width={20} />
            Search
          </button>
        </Box>
      </Dialog>
    </>
  );
}
