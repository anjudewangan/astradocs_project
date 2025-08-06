import { useState, useCallback } from 'react';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Autocomplete from '@mui/material/Autocomplete';
import { useBoolean } from 'src/hooks/use-boolean';
import { fData } from 'src/utils/format-number';
import { fDateTime } from 'src/utils/format-time';
import { Iconify } from 'src/components/iconify';
import { Scrollbar } from 'src/components/scrollbar';
import { FileManagerShareDialog } from './file-manager-share-dialog';
import { FileManagerInvitedItem } from './file-manager-invited-item';

export function FileManagerFileDetails({ item, open, onClose, onDelete, ...other }) {
  const { name, size, url, type, shared, modifiedAt } = item;
  const hasShared = shared && !!shared.length;
  const toggleTags = useBoolean(true);
  const share = useBoolean();
  const properties = useBoolean(true);

  const [inviteEmail, setInviteEmail] = useState('');
  const [tags, setTags] = useState(item.tags.slice(0, 3));

  const handleChangeInvite = useCallback((event) => {
    setInviteEmail(event.target.value);
  }, []);

  const handleChangeTags = useCallback((newValue) => {
    setTags(newValue);
  }, []);

  const renderFilePreview = () => {
    const fileExtension = name.split('.').pop().toLowerCase();

    if (['jpg', 'jpeg', 'png', 'gif'].includes(fileExtension)) {
      return (
        <img src={url} alt={name} style={{ width: '100%', height: 'auto', objectFit: 'contain' }} />
      );
    }

    if (fileExtension === 'pdf') {
      return (
        <iframe
          src={url}
          title={`PDF Preview of ${name}`}
          style={{ width: '100%', height: '600px' }}
        />
      );
    }

    if (['mp4', 'mov', 'avi'].includes(fileExtension)) {
      return (
        <video controls style={{ width: '100%' }}>
          <source src={url} type={`video/${fileExtension}`} />
          <track kind="captions" srcLang="en" label="English" src="path/to/captions.vtt" default />
          Your browser does not support the video tag.
        </video>
      );
    }

    if (['mp3', 'wav'].includes(fileExtension)) {
      return (
        <audio controls style={{ width: '100%' }}>
          <source src={url} type={`audio/${fileExtension}`} />
          <track kind="captions" srcLang="en" label="English" src="path/to/captions.vtt" default />
          Your browser does not support the audio tag.
        </audio>
      );
    }

    if (['doc', 'docx', 'xls', 'xlsx', 'ppt', 'pptx'].includes(fileExtension)) {
      return (
        <Typography variant="body2">
          <a href={url} target="_blank" rel="noopener noreferrer">
            {' '}
            View Document: {name}{' '}
          </a>
          <br />
          Preview not available for this document type. Please download or use an external viewer
          like Google Docs or Office365.
        </Typography>
      );
    }

    return (
      <Typography variant="body2">
        Preview not available for this file type. Please download the file to view.
      </Typography>
    );
  };

  return (
    <>
      <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth {...other}>
        <Scrollbar>
          <DialogContent sx={{ mt: 3 }}>
            {renderFilePreview()}
            <Typography variant="subtitle1" sx={{ wordBreak: 'break-all', mt: 2 }}>
              {name}
            </Typography>
            <Divider sx={{ borderStyle: 'dashed', my: 2 }} />

            <Stack spacing={1.5}>
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
                sx={{ typography: 'subtitle2' }}
              >
                Tags
                <IconButton size="small" onClick={toggleTags.onToggle}>
                  <Iconify
                    icon={
                      toggleTags.value ? 'eva:arrow-ios-upward-fill' : 'eva:arrow-ios-downward-fill'
                    }
                  />
                </IconButton>
              </Stack>
              {toggleTags.value && (
                <Autocomplete
                  multiple
                  freeSolo
                  options={item.tags.map((option) => option)}
                  getOptionLabel={(option) => option}
                  defaultValue={item.tags.slice(0, 3)}
                  value={tags}
                  onChange={(event, newValue) => handleChangeTags(newValue)}
                  renderInput={(params) => <TextField {...params} placeholder="#Add a tags" />}
                />
              )}
            </Stack>

            <Stack spacing={1.5}>
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
                sx={{ typography: 'subtitle2' }}
              >
                Properties
                <IconButton size="small" onClick={properties.onToggle}>
                  <Iconify
                    icon={
                      properties.value ? 'eva:arrow-ios-upward-fill' : 'eva:arrow-ios-downward-fill'
                    }
                  />
                </IconButton>
              </Stack>
              {properties.value && (
                <>
                  <Stack
                    direction="row"
                    sx={{ typography: 'caption', textTransform: 'capitalize' }}
                  >
                    <Box component="span" sx={{ width: 80, color: 'text.secondary', mr: 2 }}>
                      {' '}
                      Size{' '}
                    </Box>
                    {fData(size)}
                  </Stack>
                  <Stack
                    direction="row"
                    sx={{ typography: 'caption', textTransform: 'capitalize' }}
                  >
                    <Box component="span" sx={{ width: 80, color: 'text.secondary', mr: 2 }}>
                      {' '}
                      Modified{' '}
                    </Box>
                    {fDateTime(modifiedAt)}
                  </Stack>
                  <Stack
                    direction="row"
                    sx={{ typography: 'caption', textTransform: 'capitalize' }}
                  >
                    <Box component="span" sx={{ width: 80, color: 'text.secondary', mr: 2 }}>
                      {' '}
                      Type{' '}
                    </Box>
                    {type}
                  </Stack>
                </>
              )}
            </Stack>

            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
              sx={{ p: 2.5 }}
            >
              <Typography variant="subtitle2"> Share with </Typography>

              <IconButton
                size="small"
                color="primary"
                onClick={share.onTrue}
                sx={{
                  width: 24,
                  height: 24,
                  bgcolor: 'primary.main',
                  color: 'primary.contrastText',
                  '&:hover': { bgcolor: 'primary.dark' },
                }}
              >
                <Iconify icon="mingcute:add-line" />
              </IconButton>
            </Stack>
            {hasShared && (
              <Box component="ul" sx={{ pl: 2, pr: 1 }}>
                {shared.map((person) => (
                  <FileManagerInvitedItem key={person.id} person={person} />
                ))}
              </Box>
            )}
          </DialogContent>

          <DialogActions>
            <Button
              variant="outlined"
              color="primary"
              size="small"
              startIcon={<Iconify icon="eva:download-fill" />}
              onClick={() => {
                const link = document.createElement('a');
                link.href = url;
                link.download = name;
                link.click();
              }}
            >
              Download
            </Button>

            <Button
              variant="outlined"
              color="error"
              size="small"
              startIcon={<Iconify icon="solar:trash-bin-trash-bold" />}
              onClick={onDelete}
            >
              Delete
            </Button>
          </DialogActions>
        </Scrollbar>
      </Dialog>

      <FileManagerShareDialog
        open={share.value}
        shared={shared}
        inviteEmail={inviteEmail}
        onChangeInvite={handleChangeInvite}
        onClose={() => {
          share.onFalse();
          setInviteEmail('');
        }}
      />
    </>
  );
}
