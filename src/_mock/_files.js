import { _mock } from './_mock';
import { _tags, _fileNames } from './assets';

// ----------------------------------------------------------------------

const GB = 1000000000 * 24;

const FOLDERS = ['Docs', 'Projects', 'Work', 'Training', 'Sport', 'Foods'];

const URLS = [
  _mock.image.cover(1),
  '/assets/audio/design_suriname_2015.mp3',
  '/assets/video/expertise_2015_conakry_sao-tome-and-principe_gender.mp4',
  '/assets/documents/money-popup-crack.pdf',
  _mock.image.cover(3),
  _mock.image.cover(5),
  '/assets/text/large_news.txt',
  '/assets/photoshop/nauru-6015-small-fighter-left-gender.psd',
  '/assets/documents/tv-xs.doc',
  '/assets/documents/gustavia-entertainment-productivity.docx',
  '/assets/excel/vintage_bahrain_saipan.xls',
  '/assets/excel/indonesia-quito-nancy-grace-left-glad.xlsx',
  '/assets/zip/legislation-grain.zip',
  '/assets/zip/large_energy_dry_philippines.rar',
  '/assets/iso/footer-243-ecuador.iso',
  '/assets/illustrator/kyrgyzstan-04795009-picabo-street-guide-style.ai',
  '/assets/data/india-data-large-gk-chesterton-mother.esp',
  '/assets/powerpoint/footer-barbados-celine-dion.ppt',
  '/assets/powerpoint/socio_respectively_366996.pptx',
  '/assets/audio/socio_ahead_531437_sweden_popup.wav',
  '/assets/video/trinidad_samuel-morse_bring.m4v',
  _mock.image.cover(11),
  _mock.image.cover(17),
  '/assets/documents/xl_david-blaine_component_tanzania_books.pdf',
];

const SHARED_PERSONS = [...Array(20)].map((_, index) => ({
  id: _mock.id(index),
  name: _mock.fullName(index),
  email: _mock.email(index),
  avatarUrl: _mock.image.avatar(index),
  permission: index % 2 ? 'view' : 'edit',
}));

export const FILE_TYPE_OPTIONS = [
  'folder',
  'txt',
  'zip',
  'audio',
  'image',
  'video',
  'word',
  'excel',
  'powerpoint',
  'pdf',
  'photoshop',
  'illustrator',
];

// ----------------------------------------------------------------------

const shared = (index) =>
  (index === 0 && SHARED_PERSONS.slice(0, 5)) ||
  (index === 1 && SHARED_PERSONS.slice(5, 9)) ||
  (index === 2 && SHARED_PERSONS.slice(9, 11)) ||
  (index === 3 && SHARED_PERSONS.slice(11, 12)) ||
  [];

export const _folders = FOLDERS.map((name, index) => ({
    id: `${_mock.id(index)}_folder`,
    name,
    type: 'folder',
    url: URLS[index],
    shared: shared(index),
    tags: _tags.slice(0, 5),
    size: GB / ((index + 1) * 10),
    totalFiles: (index + 1) * 100,
    createdAt: _mock.time(index),
    modifiedAt: _mock.time(index),
    isFavorited: _mock.boolean(index + 1),
}));

export const _files = _fileNames.map((name, index) => ({
    id: `${_mock.id(index)}_file`,
    name,
    url: URLS[index],
    shared: shared(index),
    tags: _tags.slice(0, 5),
    size: GB / ((index + 1) * 500),
    createdAt: _mock.time(index),
    modifiedAt: _mock.time(index),
    type: `${name.split('.').pop()}`,
    isFavorited: _mock.boolean(index + 1),
}));

export const _allFiles = [..._folders, ..._files];