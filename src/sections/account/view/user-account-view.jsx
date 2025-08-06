import React, { useState } from 'react';
import {
  Box,
  Button,
  IconButton,
  MenuItem,
  Select,
  Typography,
  FormControl,
  InputLabel,
  OutlinedInput,
  ListSubheader,
  TextField,
  Checkbox,
  FormControlLabel,
  Stepper,
  Step,
  StepLabel,
  Chip
} from '@mui/material';
import { Icon } from '@iconify/react';
import { CONFIG } from 'src/config-global';

export function AccountView() {
  const [step, setStep] = useState(1);
  const [docType, setDocType] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTags, setSelectedTags] = useState([]);
  const [selectedCabinets, setSelectedCabinets] = useState([]);
  const [selectedLanguage, setSelectedLanguage] = useState('English');
  const [uploadedFiles, setUploadedFiles] = useState([]);

  const documentTypes = ['Default', 'Books', 'Finance', 'Presentations'];
  const cabintes = ['Demo', 'Test', 'Test123'];
  const tags = ['Admin', 'Demo'];
  const languages = ['English', 'French', 'German', 'Spanish', 'Hindi', 'Chinese', 'Arabic', 'Russian', 'Portuguese', 'Bengali']; // trimmed for brevity

  const filteredDocs = documentTypes.filter((type) =>
    type.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleNext = () => {
    if (step === 1 && docType === 'Default') {
      setStep(4);
    } else if (step < 4) {
      setStep((prev) => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (step > 1) setStep((prev) => prev - 1);
  };

  const handleFirst = () => {
    setStep(1);
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);

    const filesWithPreview = files.map((file) => {
      if (file.type.startsWith('image/')) {
        const reader = new FileReader();
        return new Promise((resolve) => {
          reader.onloadend = () => {
            resolve({ file, preview: reader.result });
          };
          reader.readAsDataURL(file);
        });
      }
      return Promise.resolve({ file, preview: null });
    });

    Promise.all(filesWithPreview).then((newFiles) => {
      setUploadedFiles((prev) => [...prev, ...newFiles]);
    });
  };

  const removeFile = (indexToRemove) => {
    setUploadedFiles((prev) => prev.filter((_, i) => i !== indexToRemove));
  };

  const getFileIcon = (filename) => {
    const ext = filename.split('.').pop().toLowerCase();
    if (['jpg', 'jpeg', 'png', 'gif'].includes(ext)) return 'mdi:file-image-outline';
    if (['pdf'].includes(ext)) return 'mdi:file-pdf-box';
    if (['doc', 'docx'].includes(ext)) return 'mdi:file-word-box';
    if (['xls', 'xlsx'].includes(ext)) return 'mdi:file-excel-box';
    if (['mp3', 'wav'].includes(ext)) return 'mdi:music-box-outline';
    return 'mdi:file-outline';
  };

  return (
    <Box sx={{ py: 0, px: 5, mx: 10 }}>
      <Typography variant="h4" gutterBottom>
        Document Upload Wizard
      </Typography>

      <Stepper
        activeStep={step - 1}
        alternativeLabel
        sx={{
          py: 4,
          '& .MuiStepIcon-root': {
            width: 32,
            height: 32,
          },
          '& .MuiStepIcon-root.Mui-active': {
            width: 40,
            height: 40,
            color: 'primary.main',
          },
          '& .MuiStepLabel-label.Mui-active': {
            fontWeight: 'bold',
            fontSize: '1rem',
          },
        }}
      >
        {['Select Document Type', 'Select Tags', 'Select Cabinets', 'Upload Files'].map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>

      {/* Step 1 */}
      {step === 1 && (
        <Box sx={{ mb: 4 }}>
          <FormControl fullWidth required sx={{ mt: 2 }}>
            <InputLabel id="doc-type-label">Document Type</InputLabel>
            <Select
              labelId="doc-type-label"
              value={docType}
              onChange={(e) => setDocType(e.target.value)}
              input={<OutlinedInput label="Document Type" />}
              MenuProps={{ PaperProps: { sx: { maxHeight: 300 } } }}
            >
              <ListSubheader>
                <TextField
                  size="small"
                  placeholder="Search..."
                  fullWidth
                  autoFocus
                  onChange={(e) => setSearchTerm(e.target.value)}
                  onClick={(e) => e.stopPropagation()}
                />
              </ListSubheader>
              {filteredDocs.map((type) => (
                <MenuItem key={type} value={type}>
                  {type}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
      )}

      {/* Step 2 */}
      {step === 2 && (
        <Box sx={{ mb: 4 }}>
          <FormControl fullWidth sx={{ mt: 2 }}>
            <InputLabel id="tag-select-label">Select Tag</InputLabel>
            <Select
              labelId="tag-select-label"
              value=""
              onChange={(e) => {
                const newTag = e.target.value;
                if (!selectedTags.includes(newTag)) {
                  setSelectedTags((prev) => [...prev, newTag]);
                }
              }}
              input={<OutlinedInput label="Select Tag" />}
            >
              {tags.map((tag) => (
                <MenuItem key={tag} value={tag}>
                  {tag}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mt: 2 }}>
            {selectedTags.map((tag) => (
              <Chip
                key={tag}
                label={tag}
                onDelete={() => setSelectedTags((prev) => prev.filter((t) => t !== tag))}
                color="success"
              />
            ))}
          </Box>
        </Box>
      )}

      {/* Step 3 */}
      {step === 3 && (
        <Box sx={{ mb: 4 }}>
          <FormControl fullWidth sx={{ mt: 2 }}>
            <InputLabel id="cabinet-select-label">Select Cabinets</InputLabel>
            <Select
              labelId="cabinet-select-label"
              multiple
              value={selectedCabinets}
              onChange={(e) => {
                const {
                  target: { value },
                } = e;
                setSelectedCabinets(typeof value === 'string' ? value.split(',') : value);
              }}
              input={<OutlinedInput label="Select Cabinets" />}
              renderValue={(selected) => (
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                  {selected.map((cabinet) => (
                    <Chip
                      key={cabinet}
                      label={cabinet}
                      onDelete={() =>
                        setSelectedCabinets((prev) => prev.filter((c) => c !== cabinet))
                      }
                      deleteIcon={<Icon icon="mdi:close" />}
                    />
                  ))}
                </Box>
              )}
            >
              {cabintes.map((cabinet) => (
                <MenuItem key={cabinet} value={cabinet}>
                  {cabinet}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
      )}

      {/* Step 4 */}
      {step === 4 && (
        <Box sx={{ mb: 4 }}>

          <FormControl fullWidth sx={{ mb: 2 }}>
            <InputLabel id="language-select-label">Language</InputLabel>
            <Select
              labelId="language-select-label"
              value={selectedLanguage}
              onChange={(e) => setSelectedLanguage(e.target.value)}
              input={<OutlinedInput label="Language" />}
              MenuProps={{ PaperProps: { sx: { maxHeight: 300 } } }}
            >
              {languages.map((lang) => (
                <MenuItem key={lang} value={lang}>
                  {lang}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControlLabel
            control={<Checkbox id="expand-files" />}
            label="Expand compressed files"
          />

          <input
            type="file"
            id="multi-upload"
            multiple
            accept=".pdf,.doc,.docx,.xls,.xlsx,.png,.jpg,.jpeg,.gif,.mp3,.wav"
            style={{ display: 'none' }}
            onChange={handleFileChange}
          />

          <Box
            onClick={() => document.getElementById('multi-upload')?.click()}
            sx={{
              border: '1px dashed #ccc',
              borderRadius: 2,
              height: 200,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
              textAlign: 'center',
              cursor: 'pointer',
              overflowY: 'auto',
              p: 2,
              mt: 2,
            }}
          >
            {uploadedFiles.length === 0 ? (
              <>
                <Icon icon="mdi:cloud-upload-outline" width={32} />
                <Typography variant="body2" mt={1}>
                  Drop files or click here to upload
                </Typography>
              </>
            ) : (
              uploadedFiles.map(({ file, preview }, index) => (
                <Box
                  key={index}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    width: '100%',
                    mb: 1,
                    p: 1,
                    border: '1px solid #eee',
                    borderRadius: 1,
                    backgroundColor: '#fafafa',
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    {preview ? (
                      <img
                        src={preview}
                        alt="Preview"
                        style={{ width: 40, height: 40, objectFit: 'cover', borderRadius: 4 }}
                      />
                    ) : (
                      <Icon icon={getFileIcon(file.name)} width={40} />
                    )}
                    <Typography variant="body2" noWrap maxWidth={180}>
                      {file.name}
                    </Typography>
                  </Box>

                  <IconButton
                    color="error"
                    onClick={(e) => {
                      e.stopPropagation();
                      removeFile(index);
                    }}
                  >
                    <Icon icon="mdi:close" />
                  </IconButton>
                </Box>
              ))
            )}
          </Box>
        </Box>
      )}

      {/* Navigation Buttons */}
      <Box sx={{ display: 'flex', justifyContent: 'end', gap: 2 }}>
        <Button
          variant="outlined"
          startIcon={<Icon icon="mdi:first-page" />}
          onClick={handleFirst}
          disabled={step === 1}
        >
          First
        </Button>
        <Button
          variant="outlined"
          startIcon={<Icon icon="mdi:chevron-left" />}
          onClick={handlePrevious}
          disabled={step === 1}
        >
          Previous
        </Button>
        <Button
          variant="contained"
          endIcon={<Icon icon="mdi:chevron-right" />}
          onClick={handleNext}
          disabled={
            (step === 1 && !docType) ||
            (step === 2 && selectedTags.length === 0) ||
            (step === 3 && selectedCabinets.length === 0)
          }
        >
          Next
        </Button>
      </Box>
    </Box>
  );
}

// import Tab from '@mui/material/Tab';
// import Tabs from '@mui/material/Tabs';

// import { paths } from 'src/routes/paths';

// import { useTabs } from 'src/hooks/use-tabs';

// import { DashboardContent } from 'src/layouts/dashboard';
// import { _userAbout, _userPlans, _userPayment, _userInvoices, _userAddressBook } from 'src/_mock';

// import { Iconify } from 'src/components/iconify';
// import { CustomBreadcrumbs } from 'src/components/custom-breadcrumbs';

// import { AccountGeneral } from '../account-general';
// import { AccountBilling } from '../account-billing';
// import { AccountSocialLinks } from '../account-social-links';
// import { AccountNotifications } from '../account-notifications';
// import { AccountChangePassword } from '../account-change-password';

// // ----------------------------------------------------------------------

// const TABS = [
//   { value: 'general', label: 'General', icon: <Iconify icon="solar:user-id-bold" width={24} /> },
//   { value: 'billing', label: 'Billing', icon: <Iconify icon="solar:bill-list-bold" width={24} /> },
//   {
//     value: 'notifications',
//     label: 'Notifications',
//     icon: <Iconify icon="solar:bell-bing-bold" width={24} />,
//   },
//   { value: 'social', label: 'Social links', icon: <Iconify icon="solar:share-bold" width={24} /> },
//   { value: 'security', label: 'Security', icon: <Iconify icon="ic:round-vpn-key" width={24} /> },
// ];

// // ----------------------------------------------------------------------

// export function AccountView() {
//   const tabs = useTabs('general');

//   return (
//     <DashboardContent>
//       <CustomBreadcrumbs
//         heading="Account"
//         links={[
//           { name: 'Dashboard', href: paths.dashboard.root },
//           { name: 'User', href: paths.dashboard.user.root },
//           { name: 'Account' },
//         ]}
//         sx={{ mb: { xs: 3, md: 5 } }}
//       />

//       <Tabs value={tabs.value} onChange={tabs.onChange} sx={{ mb: { xs: 3, md: 5 } }}>
//         {TABS.map((tab) => (
//           <Tab key={tab.value} label={tab.label} icon={tab.icon} value={tab.value} />
//         ))}
//       </Tabs>

//       {tabs.value === 'general' && <AccountGeneral />}

//       {tabs.value === 'billing' && (
//         <AccountBilling
//           plans={_userPlans}
//           cards={_userPayment}
//           invoices={_userInvoices}
//           addressBook={_userAddressBook}
//         />
//       )}

//       {tabs.value === 'notifications' && <AccountNotifications />}

//       {tabs.value === 'social' && <AccountSocialLinks socialLinks={_userAbout.socialLinks} />}

//       {tabs.value === 'security' && <AccountChangePassword />}
//     </DashboardContent>
//   );
// }
