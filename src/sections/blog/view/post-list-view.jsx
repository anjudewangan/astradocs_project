import { useState, useCallback } from 'react';

import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import { useDebounce } from 'src/hooks/use-debounce';
import { useSetState } from 'src/hooks/use-set-state';

import { orderBy } from 'src/utils/helper';

import { POST_SORT_OPTIONS } from 'src/_mock';
import { DashboardContent } from 'src/layouts/dashboard';
import { useGetPosts, useSearchPosts } from 'src/actions/blog';

import { Label } from 'src/components/label';
import { Iconify } from 'src/components/iconify';
import { CustomBreadcrumbs } from 'src/components/custom-breadcrumbs';

import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import { PostSort } from '../post-sort';
import { PostSearch } from '../post-search';
import { PostListHorizontal } from '../post-list-horizontal';

// ----------------------------------------------------------------------

export function PostListView() {
  const [sortBy, setSortBy] = useState('latest');
  const [searchQuery, setSearchQuery] = useState('');
  const [page, setPage] = useState(1); // for Indexes table pagination

  const debouncedQuery = useDebounce(searchQuery);

  const { posts, postsLoading } = useGetPosts();
  const { searchResults, searchLoading } = useSearchPosts(debouncedQuery);

  const filters = useSetState({ publish: 'all' });

  const dataFiltered = applyFilter({ inputData: posts, filters: filters.state, sortBy });

  const handleSortBy = useCallback((newValue) => {
    setSortBy(newValue);
  }, []);

  const handleSearch = useCallback((inputValue) => {
    setSearchQuery(inputValue);
  }, []);

  const handleFilterPublish = useCallback(
    (event, newValue) => {
      filters.setState({ publish: newValue });
    },
    [filters]
  );

  // Sample index data
  const indexData = [
    {
      label: 'Creation date',
      depth: 2,
      totalNodes: 6,
      totalDocuments: 5,
    },
  ];

  return (
    <DashboardContent>
      <CustomBreadcrumbs
        heading="Indexes"
        links={[
          { name: 'Dashboard', href: paths.dashboard.root },
          { name: 'Indexes' },
        ]}
        sx={{ mb: { xs: 3, md: 5 } }}
      />

      <Stack
        spacing={3}
        justifyContent="space-between"
        alignItems={{ xs: 'flex-end', sm: 'center' }}
        direction={{ xs: 'column', sm: 'row' }}
        sx={{ mb: { xs: 3, md: 5 } }}
      >
        <PostSearch
          query={debouncedQuery}
          results={searchResults}
          onSearch={handleSearch}
          loading={searchLoading}
          hrefItem={(title) => paths.dashboard.post.details(title)}
        />
        <Typography variant="body2" sx={{ fontSize: '18px' }}>
          Total: {indexData.length}
        </Typography>

      </Stack>


      <PostListHorizontal posts={dataFiltered} loading={postsLoading} />

      {/* Indexes Table Section */}
      <Stack spacing={2}>

        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  <Stack direction="row" alignItems="center" spacing={0.5}>
                    <strong>Label</strong>
                    <Tooltip title="Short description on this index." arrow>
                      <IconButton size="small" sx={{ p: 0.25 }}>
                        <Iconify icon="eva:question-mark-circle-outline" width={16} height={16} />
                      </IconButton>
                    </Tooltip>
                  </Stack>
                </TableCell>
                <TableCell>
                  <Stack direction="row" alignItems="center" spacing={0.5}>
                    <strong>Depth</strong>
                    <Tooltip title="Total number of node levels this item contains." arrow>
                      <IconButton size="small" sx={{ p: 0.25 }}>
                        <Iconify icon="eva:question-mark-circle-outline" width={16} height={16} />
                      </IconButton>
                    </Tooltip>
                  </Stack>
                </TableCell>
                <TableCell>
                  <Stack direction="row" alignItems="center" spacing={0.5}>
                    <strong>Total Nodes</strong>
                    <Tooltip title="Total number of nodes with unique values this item contains." arrow>
                      <IconButton size="small" sx={{ p: 0.25 }}>
                        <Iconify icon="eva:question-mark-circle-outline" width={16} height={16} />
                      </IconButton>
                    </Tooltip>
                  </Stack>
                </TableCell>
                <TableCell>
                  <Stack direction="row" alignItems="center" spacing={0.5}>
                    <strong>Total Documents</strong>
                    <Tooltip title="Number of unique documents this item contains." arrow>
                      <IconButton size="small" sx={{ p: 0.25 }}>
                        <Iconify icon="eva:question-mark-circle-outline" width={16} height={16} />
                      </IconButton>
                    </Tooltip>
                  </Stack>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {indexData.map((row, index) => (
                <TableRow key={index}>
                  <TableCell>{row.label}</TableCell>
                  <TableCell>{row.depth}</TableCell>
                  <TableCell>{row.totalNodes}</TableCell>
                  <TableCell>{row.totalDocuments}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <Stack direction="row" spacing={1} alignItems="center">
          <Button
            variant="outlined"
            size="small"
            disabled={page === 1}
            onClick={() => setPage(page - 1)}
          >
            &laquo;
          </Button>
          <Typography>{page}</Typography>
          <Button
            variant="outlined"
            size="small"
            disabled
            onClick={() => setPage(page + 1)}
          >
            &raquo;
          </Button>
        </Stack>
      </Stack>
    </DashboardContent>
  );
}

// ----------------------------------------------------------------------

const applyFilter = ({ inputData, filters, sortBy }) => {
  const { publish } = filters;

  if (sortBy === 'latest') {
    inputData = orderBy(inputData, ['createdAt'], ['desc']);
  }

  if (sortBy === 'oldest') {
    inputData = orderBy(inputData, ['createdAt'], ['asc']);
  }

  if (sortBy === 'popular') {
    inputData = orderBy(inputData, ['totalViews'], ['desc']);
  }

  if (publish !== 'all') {
    inputData = inputData.filter((post) => post.publish === publish);
  }

  return inputData;
};
