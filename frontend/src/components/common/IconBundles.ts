import { addCollection } from '@iconify/react';

/**
  https://api.iconify.design/mdi.json?icons=weather-night,weather-sunny
 */
const mdiIcons = {
  prefix: 'mdi',
  icons: {
    'weather-night': {
      body: '<path fill="currentColor" d="m17.75 4.09l-2.53 1.94l.91 3.06l-2.63-1.81l-2.63 1.81l.91-3.06l-2.53-1.94L12.44 4l1.06-3l1.06 3l3.19.09m3.5 6.91l-1.64 1.25l.59 1.98l-1.7-1.17l-1.7 1.17l.59-1.98L15.75 11l2.06-.05L18.5 9l.69 1.95l2.06.05m-2.28 4.95c.83-.08 1.72 1.1 1.19 1.85c-.32.45-.66.87-1.08 1.27C15.17 23 8.84 23 4.94 19.07c-3.91-3.9-3.91-10.24 0-14.14c.4-.4.82-.76 1.27-1.08c.75-.53 1.93.36 1.85 1.19c-.27 2.86.69 5.83 2.89 8.02a9.96 9.96 0 0 0 8.02 2.89m-1.64 2.02a12.08 12.08 0 0 1-7.8-3.47c-2.17-2.19-3.33-5-3.49-7.82c-2.81 3.14-2.7 7.96.31 10.98c3.02 3.01 7.84 3.12 10.98.31Z"/>',
    },
    'weather-sunny': {
      body: '<path fill="currentColor" d="M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3m0-7l2.39 3.42C13.65 5.15 12.84 5 12 5c-.84 0-1.65.15-2.39.42L12 2M3.34 7l4.16-.35A7.2 7.2 0 0 0 5.94 8.5c-.44.74-.69 1.5-.83 2.29L3.34 7m.02 10l1.76-3.77a7.131 7.131 0 0 0 2.38 4.14L3.36 17M20.65 7l-1.77 3.79a7.023 7.023 0 0 0-2.38-4.15l4.15.36m-.01 10l-4.14.36c.59-.51 1.12-1.14 1.54-1.86c.42-.73.69-1.5.83-2.29L20.64 17M12 22l-2.41-3.44c.74.27 1.55.44 2.41.44c.82 0 1.63-.17 2.37-.44L12 22Z"/>',
    },
    account: {
      body: '<path fill="currentColor" d="M12 4a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m0 10c4.42 0 8 1.79 8 4v2H4v-2c0-2.21 3.58-4 8-4Z"/>',
    },
    'alert-outline': {
      body: '<path fill="currentColor" d="M12 2L1 21h22M12 6l7.53 13H4.47M11 10v4h2v-4m-2 6v2h2v-2"/>',
    },
    'dots-vertical': {
      body: '<path fill="currentColor" d="M12 16a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2m0-6a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2m0-6a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2Z"/>',
    },
    logout: {
      body: '<path fill="currentColor" d="M16 17v-3H9v-4h7V7l5 5l-5 5M14 2a2 2 0 0 1 2 2v2h-2V4H5v16h9v-2h2v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9Z"/>',
    },
    kubernetes: {
      body: '<path fill="currentColor" d="M13.95 13.5h-.23c-.18.11-.26.32-.18.5l.86 2.11c.83-.53 1.46-1.32 1.79-2.25l-2.23-.36h-.01m-3.45.29a.415.415 0 0 0-.38-.29h-.08l-2.22.37c.33.92.96 1.7 1.79 2.23l.85-2.07V14c.04-.05.04-.14.04-.21m1.83.81a.378.378 0 0 0-.51-.15c-.07.05-.12.08-.15.15h-.01l-1.09 1.97c.78.26 1.62.31 2.43.12c.14-.03.29-.07.43-.12l-1.09-1.97h-.01m3.45-4.57L14.1 11.5l.01.03a.37.37 0 0 0-.04.53c.05.06.11.1.18.12l.01.01l2.17.62c.07-.97-.14-1.95-.65-2.78m-3.11.16c.01.21.18.37.39.36c.08 0 .15-.02.21-.05h.01l1.83-1.31a4.45 4.45 0 0 0-2.57-1.24l.13 2.24m-1.94.31c.17.11.4.08.52-.09c.05-.06.07-.13.08-.21h.01l.12-2.25c-.15.02-.3.05-.46.08c-.8.18-1.54.58-2.12 1.16l1.84 1.31h.01m-.99 1.69c.2-.05.32-.26.26-.46c0-.08-.05-.14-.11-.19v-.01L8.21 10c-.52.86-.74 1.84-.63 2.82l2.16-.62v-.01m1.64.66l.62.3l.62-.3l.15-.67l-.43-.53h-.69l-.43.53l.16.67m10.89 1.32L20.5 6.5c-.09-.42-.37-.76-.74-.94l-7.17-3.43c-.37-.17-.81-.17-1.19 0L4.24 5.56c-.37.18-.65.52-.74.94l-1.77 7.67c-.05.2-.05.4 0 .59c.01.06.03.12.05.18c.03.09.08.19.13.27c.03.04.05.08.09.11l4.95 6.18c.02 0 .05.04.05.06c.1.09.19.16.28.22c.12.08.26.14.4.17c.11.05.23.05.32.05h8.12c.07 0 .14-.03.2-.05c.05-.01.1-.03.14-.04c.04-.02.07-.03.11-.05c.05-.02.1-.05.15-.08c.12-.08.23-.18.33-.28l.15-.2l4.8-5.98c.1-.12.17-.25.22-.38c.02-.06.04-.12.05-.18c.05-.19.05-.4 0-.59m-7.43 2.99c.02.06.04.12.07.17c-.04.08-.06.17-.03.26c.12.24.23.46.38.68c.08.11.16.23.24.34c0 .03.03.08.04.12c.12.2.06.46-.15.59s-.47.05-.59-.15c-.01-.03-.02-.05-.03-.08c-.02-.03-.04-.09-.06-.09c-.05-.15-.09-.28-.12-.41c-.09-.25-.17-.49-.3-.72a.375.375 0 0 0-.21-.14l-.08-.16c-1.29.48-2.7.48-3.97-.01l-.1.18c-.07.01-.14.04-.19.09c-.14.24-.24.49-.33.77c-.03.13-.07.26-.12.4c-.02 0-.04.07-.06.1a.43.43 0 0 1-.81-.29c.01-.03.03-.05.04-.08c.04-.03.04-.08.04-.11c.09-.12.16-.23.24-.35c.16-.21.29-.45.39-.69a.54.54 0 0 0-.03-.25l.07-.18a5.611 5.611 0 0 1-2.47-3.09l-.2.03a.388.388 0 0 0-.23-.09c-.27.05-.51.13-.77.22c-.11.06-.24.11-.37.15c-.03.01-.07.02-.13.03a.438.438 0 0 1-.54-.27c-.07-.23.04-.47.28-.55c.02 0 .05-.01.08-.01v-.01h.01l.11-.02c.14-.04.28-.04.41-.04c.26 0 .52-.06.77-.12c.08-.05.14-.11.19-.19l.19-.05c-.21-1.36.1-2.73.86-3.87l-.14-.12c0-.09-.03-.18-.08-.25c-.2-.17-.41-.32-.64-.45c-.12-.06-.24-.13-.36-.21c-.02-.02-.06-.05-.08-.07l-.01-.01c-.2-.16-.25-.42-.11-.63c.09-.1.21-.15.35-.15c.11.01.21.05.3.12l.09.07c.1.09.19.2.28.3c.18.19.37.37.58.52c.08.04.17.05.26.03l.15.11c.75-.8 1.73-1.36 2.8-1.6c.25-.06.52-.1.78-.12l.01-.18a.45.45 0 0 0 .14-.23c.01-.26-.01-.52-.05-.77c-.03-.13-.05-.27-.06-.41V5.1c-.02-.24.15-.45.39-.48s.44.15.47.38v.22c-.01.14-.03.28-.06.41c-.04.25-.06.51-.05.77c.02.1.07.17.14.22l.01.19c1.36.12 2.62.73 3.56 1.72l.16-.12c.09.02.18.01.26-.03c.21-.15.41-.33.58-.52c.09-.1.18-.2.28-.3c.03-.02.07-.06.1-.06c.17-.18.44-.18.59 0c.19.16.18.43 0 .6c0 .02-.03.04-.06.06a2.495 2.495 0 0 1-.44.28c-.23.13-.45.28-.64.45c-.06.07-.09.15-.08.24l-.16.14a5.44 5.44 0 0 1 .88 3.86l.19.05c.04.08.11.14.19.18c.25.07.51.11.77.14h.41c.03.03.08.04.12.05c.24.03.4.25.37.49c-.05.23-.24.4-.48.37c-.03-.01-.07-.01-.07-.02v-.01c-.06 0-.1-.01-.14-.02c-.13-.04-.25-.09-.36-.15c-.26-.1-.5-.17-.77-.21c-.09 0-.17 0-.23.08c-.07-.01-.13-.02-.19-.03c-.41 1.31-1.31 2.41-2.47 3.11Z"/>',
    },
    plus: {
      body: '<path fill="currentColor" d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2Z"/>',
    },
    eye: {
      body: '<path fill="currentColor" d="M12 9a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3m0 8a5 5 0 0 1-5-5a5 5 0 0 1 5-5a5 5 0 0 1 5 5a5 5 0 0 1-5 5m0-12.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5Z"/>',
    },
    'eye-outline': {
      body: '<path fill="currentColor" d="M12 9a3 3 0 0 1 3 3a3 3 0 0 1-3 3a3 3 0 0 1-3-3a3 3 0 0 1 3-3m0-4.5c5 0 9.27 3.11 11 7.5c-1.73 4.39-6 7.5-11 7.5S2.73 16.39 1 12c1.73-4.39 6-7.5 11-7.5M3.18 12a9.821 9.821 0 0 0 17.64 0a9.821 9.821 0 0 0-17.64 0Z"/>',
    },
    'eye-off': {
      body: '<path fill="currentColor" d="M11.83 9L15 12.16V12a3 3 0 0 0-3-3h-.17m-4.3.8l1.55 1.55c-.05.21-.08.42-.08.65a3 3 0 0 0 3 3c.22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53a5 5 0 0 1-5-5c0-.79.2-1.53.53-2.2M2 4.27l2.28 2.28l.45.45C3.08 8.3 1.78 10 1 12c1.73 4.39 6 7.5 11 7.5c1.55 0 3.03-.3 4.38-.84l.43.42L19.73 22L21 20.73L3.27 3M12 7a5 5 0 0 1 5 5c0 .64-.13 1.26-.36 1.82l2.93 2.93c1.5-1.25 2.7-2.89 3.43-4.75c-1.73-4.39-6-7.5-11-7.5c-1.4 0-2.74.25-4 .7l2.17 2.15C10.74 7.13 11.35 7 12 7Z"/>',
    },
    'information-outline': {
      body: '<path fill="currentColor" d="M11 9h2V7h-2m1 13c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8m0-18A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2m-1 15h2v-6h-2v6Z"/>',
    },
    'file-download-outline': {
      body: '<path fill="currentColor" d="m14 2l6 6v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8m4 18V9h-5V4H6v16h12m-6-1l-4-4h2.5v-3h3v3H16l-4 4Z"/>',
    },
    'checkbox-blank-outline': {
      body: '<path fill="currentColor" d="M19 3H5c-1.11 0-2 .89-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2m0 2v14H5V5h14Z"/>',
    },
    'checkbox-outline': {
      body: '<path fill="currentColor" d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2m0 2v14H5V5h14m-9 12l-4-4l1.41-1.42L10 14.17l6.59-6.59L18 9"/>',
    },
    'filter-variant': {
      body: '<path fill="currentColor" d="M6 13h12v-2H6M3 6v2h18V6M10 18h4v-2h-4v2Z"/>',
    },
    'filter-variant-remove': {
      body: '<path fill="currentColor" d="M21 8H3V6h18v2m-7.19 8H10v2h3.09c.12-.72.37-1.39.72-2M18 11H6v2h12v-2m3.12 4.46L19 17.59l-2.12-2.13l-1.41 1.42L17.59 19l-2.12 2.12l1.41 1.42L19 20.41l2.12 2.13l1.42-1.42L20.41 19l2.13-2.12l-1.42-1.42Z"/>',
    },
    'menu-up': {
      body: '<path fill="currentColor" d="m7 15l5-5l5 5H7Z"/>',
    },
    'menu-down': {
      body: '<path fill="currentColor" d="m7 10l5 5l5-5H7Z"/>',
    },
    'menu-swap': {
      body: '<path fill="currentColor" d="m12 6l-5 5h10l-5-5m-5 7l5 5l5-5H7Z"/>',
    },
    refresh: {
      body: '<path fill="currentColor" d="M17.65 6.35A7.958 7.958 0 0 0 12 4a8 8 0 0 0-8 8a8 8 0 0 0 8 8c3.73 0 6.84-2.55 7.73-6h-2.08A5.99 5.99 0 0 1 12 18a6 6 0 0 1-6-6a6 6 0 0 1 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35Z"/>',
    },
    close: {
      body: '<path fill="currentColor" d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"/>',
    },
    'chevron-down': {
      body: '<path fill="currentColor" d="M7.41 8.58L12 13.17l4.59-4.59L18 10l-6 6l-6-6l1.41-1.42Z"/>',
    },
    'chevron-left': {
      body: '<path fill="currentColor" d="M15.41 16.58L10.83 12l4.58-4.59L14 6l-6 6l6 6l1.41-1.42Z"/>',
    },
    'chevron-right': {
      body: '<path fill="currentColor" d="M8.59 16.58L13.17 12L8.59 7.41L10 6l6 6l-6 6l-1.41-1.42Z"/>',
    },
    'shield-key': {
      body: '<path fill="currentColor" d="M12 8a1 1 0 0 1 1 1a1 1 0 0 1-1 1a1 1 0 0 1-1-1a1 1 0 0 1 1-1m9 3c0 5.55-3.84 10.74-9 12c-5.16-1.26-9-6.45-9-12V5l9-4l9 4v6m-9-5a3 3 0 0 0-3 3c0 1.31.83 2.42 2 2.83V18h2v-2h2v-2h-2v-2.17c1.17-.41 2-1.52 2-2.83a3 3 0 0 0-3-3Z"/>',
    },
    pencil: {
      body: '<path fill="currentColor" d="M20.71 7.04c.39-.39.39-1.04 0-1.41l-2.34-2.34c-.37-.39-1.02-.39-1.41 0l-1.84 1.83l3.75 3.75M3 17.25V21h3.75L17.81 9.93l-3.75-3.75L3 17.25Z"/>',
    },
    delete: {
      body: '<path fill="currentColor" d="M19 4h-3.5l-1-1h-5l-1 1H5v2h14M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6v12Z"/>',
    },
    bug: {
      body: '<path fill="currentColor" d="M14 12h-4v-2h4m0 6h-4v-2h4m6-6h-2.81a5.985 5.985 0 0 0-1.82-1.96L17 4.41L15.59 3l-2.17 2.17a6.002 6.002 0 0 0-2.83 0L8.41 3L7 4.41l1.62 1.63C7.88 6.55 7.26 7.22 6.81 8H4v2h2.09c-.05.33-.09.66-.09 1v1H4v2h2v1c0 .34.04.67.09 1H4v2h2.81c1.04 1.79 2.97 3 5.19 3s4.15-1.21 5.19-3H20v-2h-2.09c.05-.33.09-.66.09-1v-1h2v-2h-2v-1c0-.34-.04-.67-.09-1H20V8Z"/>',
    },
    console: {
      body: '<path fill="currentColor" d="M20 19V7H4v12h16m0-16a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16m-7 14v-2h5v2h-5m-3.42-4L5.57 9H8.4l3.3 3.3c.39.39.39 1.03 0 1.42L8.42 17H5.59l3.99-4Z"/>',
    },
    'text-box-search-outline': {
      body: '<path fill="currentColor" d="M15.5 12c2.5 0 4.5 2 4.5 4.5c0 .88-.25 1.71-.69 2.4l3.08 3.1L21 23.39l-3.12-3.07c-.69.43-1.51.68-2.38.68c-2.5 0-4.5-2-4.5-4.5s2-4.5 4.5-4.5m0 2a2.5 2.5 0 0 0-2.5 2.5a2.5 2.5 0 0 0 2.5 2.5a2.5 2.5 0 0 0 2.5-2.5a2.5 2.5 0 0 0-2.5-2.5M5 3h14c1.11 0 2 .89 2 2v8.03c-.5-.8-1.19-1.49-2-2.03V5H5v14h4.5c.31.75.76 1.42 1.31 2H5c-1.11 0-2-.89-2-2V5c0-1.11.89-2 2-2m2 4h10v2H7V7m0 4h5.03c-.8.5-1.49 1.19-2.03 2H7v-2m0 4h2.17c-.11.5-.17 1-.17 1.5v.5H7v-2Z"/>',
    },
    'check-bold': {
      body: '<path fill="currentColor" d="m9 20.42l-6.21-6.21l2.83-2.83L9 14.77l9.88-9.89l2.83 2.83L9 20.42Z"/>',
    },
    magnify: {
      body: '<path fill="currentColor" d="M9.5 3A6.5 6.5 0 0 1 16 9.5c0 1.61-.59 3.09-1.56 4.23l.27.27h.79l5 5l-1.5 1.5l-5-5v-.79l-.27-.27A6.516 6.516 0 0 1 9.5 16A6.5 6.5 0 0 1 3 9.5A6.5 6.5 0 0 1 9.5 3m0 2C7 5 5 7 5 9.5S7 14 9.5 14S14 12 14 9.5S12 5 9.5 5Z"/>',
    },
    'format-letter-case': {
      body: '<path fill="currentColor" d="M20.06 18a3.99 3.99 0 0 1-.2-.89c-.67.7-1.48 1.05-2.41 1.05c-.83 0-1.52-.24-2.05-.71c-.53-.45-.8-1.06-.8-1.79c0-.88.33-1.56 1-2.05c.67-.49 1.61-.73 2.83-.73h1.4v-.64c0-.49-.15-.88-.45-1.17c-.3-.29-.75-.43-1.33-.43c-.52 0-.95.12-1.3.36c-.35.25-.52.54-.52.89h-1.46c0-.43.15-.84.45-1.24c.28-.4.71-.71 1.22-.94c.51-.21 1.06-.35 1.69-.35c.98 0 1.74.24 2.29.73s.84 1.16.86 2.02V16c0 .8.1 1.42.3 1.88V18h-1.52m-2.4-1.12c.45 0 .88-.11 1.29-.32c.4-.21.7-.49.88-.83v-1.57H18.7c-1.77 0-2.66.47-2.66 1.41c0 .43.15.73.46.96c.3.23.68.35 1.16.35m-12.2-3.17h4.07L7.5 8.29l-2.04 5.42M6.64 6h1.72l4.71 12h-1.93l-.97-2.57H4.82L3.86 18H1.93L6.64 6Z"/>',
    },
    'format-letter-matches': {
      body: '<path fill="currentColor" d="M11.14 4L6.43 16h1.93l.96-2.57h5.35l.97 2.57h1.93L12.86 4M12 6.29l2.03 5.42H9.96M20 14v4H4v-3H2v5h20v-6Z"/>',
    },
    regex: {
      body: '<path fill="currentColor" d="M16 16.92c-.33.05-.66.08-1 .08c-.34 0-.67-.03-1-.08v-3.51l-2.5 2.48c-.5-.39-1-.89-1.39-1.39l2.48-2.5H9.08c-.05-.33-.08-.66-.08-1c0-.34.03-.67.08-1h3.51l-2.48-2.5c.19-.25.39-.5.65-.74c.24-.26.49-.46.74-.65L14 8.59V5.08c.33-.05.66-.08 1-.08c.34 0 .67.03 1 .08v3.51l2.5-2.48c.5.39 1 .89 1.39 1.39L17.41 10h3.51c.05.33.08.66.08 1c0 .34-.03.67-.08 1h-3.51l2.48 2.5c-.19.25-.39.5-.65.74c-.24.26-.49.46-.74.65L16 13.41v3.51M5 19a2 2 0 0 1 2-2a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2Z"/>',
    },
    'arrow-up': {
      body: '<path fill="currentColor" d="M13 20h-2V8l-5.5 5.5l-1.42-1.42L12 4.16l7.92 7.92l-1.42 1.42L13 8v12Z"/>',
    },
    'arrow-down': {
      body: '<path fill="currentColor" d="M11 4h2v12l5.5-5.5l1.42 1.42L12 19.84l-7.92-7.92L5.5 10.5L11 16V4Z"/>',
    },
    'cloud-outline': {
      body: '<path fill="currentColor" d="M19 18H6a4 4 0 0 1-4-4a4 4 0 0 1 4-4h.71C7.37 7.69 9.5 6 12 6a5.5 5.5 0 0 1 5.5 5.5v.5H19a3 3 0 0 1 3 3a3 3 0 0 1-3 3m.35-7.97A7.49 7.49 0 0 0 12 4C9.11 4 6.6 5.64 5.35 8.03A6.004 6.004 0 0 0 0 14a6 6 0 0 0 6 6h13a5 5 0 0 0 5-5c0-2.64-2.05-4.78-4.65-4.97Z"/>',
    },
    folder: {
      body: '<path fill="currentColor" d="M10 4H4c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-8l-2-2Z"/>',
    },
    'circle-slice-2': {
      body: '<path fill="currentColor" d="M12 2c5.5 0 10 4.5 10 10s-4.5 10-10 10S2 17.5 2 12S6.5 2 12 2m0 2c-4.42 0-8 3.58-8 8s3.58 8 8 8s8-3.58 8-8s-3.58-8-8-8m0 1c3.87 0 7 3.13 7 7h-7V5Z"/>',
    },
    home: {
      body: '<path fill="currentColor" d="M10 20v-6h4v6h5v-8h3L12 3L2 12h3v8h5Z"/>',
    },
    'plus-circle': {
      body: '<path fill="currentColor" d="M17 13h-4v4h-2v-4H7v-2h4V7h2v4h4m-5-9A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2Z"/>',
    },
    tune: {
      body: '<path fill="currentColor" d="M3 17v2h6v-2H3M3 5v2h10V5H3m10 16v-2h8v-2h-8v-2h-2v6h2M7 9v2H3v2h4v2h2V9H7m14 4v-2H11v2h10m-6-4h2V7h4V5h-4V3h-2v6Z"/>',
    },
    database: {
      body: '<path fill="currentColor" d="M12 3C7.58 3 4 4.79 4 7s3.58 4 8 4s8-1.79 8-4s-3.58-4-8-4M4 9v3c0 2.21 3.58 4 8 4s8-1.79 8-4V9c0 2.21-3.58 4-8 4s-8-1.79-8-4m0 5v3c0 2.21 3.58 4 8 4s8-1.79 8-4v-3c0 2.21-3.58 4-8 4s-8-1.79-8-4Z"/>',
    },
    'folder-network-outline': {
      body: '<path fill="currentColor" d="M15 20c0-.55-.45-1-1-1h-1v-2h6c1.11 0 2-.89 2-2V7a2 2 0 0 0-2-2h-6l-2-2H5c-1.1 0-2 .9-2 2v10a2 2 0 0 0 2 2h6v2h-1c-.55 0-1 .45-1 1H2v2h7c0 .55.45 1 1 1h4c.55 0 1-.45 1-1h7v-2h-7M5 15V7h14v8H5Z"/>',
    },
    'hexagon-multiple-outline': {
      body: '<path fill="currentColor" d="m9.37 4l1.41 2.5L9.37 9H6.63l-1.4-2.5L6.63 4h2.74m.88-2h-4.5c-.19 0-.36.11-.44.26L3.09 6.22L3 6.5l.09.28l2.22 3.96c.08.15.25.26.44.26h4.5c.19 0 .36-.11.44-.26l2.22-3.96l.09-.28l-.09-.28l-2.22-3.96a.505.505 0 0 0-.44-.26m8.37 7.5L20 12l-1.38 2.5h-2.74L14.5 12l1.38-2.5h2.74m.88-2H15c-.19 0-.36.11-.44.26l-2.22 3.96l-.09.28l.09.28l2.22 3.96c.08.15.25.26.44.26h4.5c.19 0 .36-.11.44-.26l2.22-3.96l.09-.28l-.09-.28l-2.22-3.96a.505.505 0 0 0-.44-.26M9.37 15l1.41 2.5L9.37 20H6.63l-1.4-2.5l1.4-2.5h2.74m.88-2h-4.5c-.19 0-.36.11-.44.26l-2.22 3.96l-.09.28l.09.28l2.22 3.96c.08.15.25.26.44.26h4.5c.19 0 .36-.11.44-.26l2.22-3.96l.09-.28l-.09-.28l-2.22-3.96a.505.505 0 0 0-.44-.26Z"/>',
    },
    lock: {
      body: '<path fill="currentColor" d="M12 17a2 2 0 0 0 2-2a2 2 0 0 0-2-2a2 2 0 0 0-2 2a2 2 0 0 0 2 2m6-9a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2h1V6a5 5 0 0 1 5-5a5 5 0 0 1 5 5v2h1m-6-5a3 3 0 0 0-3 3v2h6V6a3 3 0 0 0-3-3Z"/>',
    },
  },
  aliases: {
    'more-vert': {
      parent: 'dots-vertical',
    },
    add: {
      parent: 'plus',
    },
    'check-box-outline': {
      parent: 'checkbox-outline',
    },
    search: {
      parent: 'magnify',
    },
  },
  lastModified: 1661493445,
  width: 24,
  height: 24,
  not_found: ['pauseIcon'],
};

/**
  fluent:chevron-down-16-regular
  fluent:chevron-right-16-regular
  fluent:pin-16-regular
  fluent:pin-off-16-regular
  fluent:info-28-regular
  fluent:chevron-down-16-regular
  https://api.iconify.design/fluent.json?icons=chevron-down-16-regular,chevron-right-16-regular,pin-16-regular,pin-off-16-regular,info-28-regular,chevron-down-16-regular
 */
const fluentIcons = {
  prefix: 'fluent',
  icons: {
    'chevron-down-16-regular': {
      body: '<path fill="currentColor" d="M3.146 5.646a.5.5 0 0 1 .708 0L8 9.793l4.146-4.147a.5.5 0 0 1 .708.708l-4.5 4.5a.5.5 0 0 1-.708 0l-4.5-4.5a.5.5 0 0 1 0-.708Z"/>',
      width: 16,
      height: 16,
    },
    'chevron-right-16-regular': {
      body: '<path fill="currentColor" d="M5.646 3.146a.5.5 0 0 0 0 .708L9.793 8l-4.147 4.146a.5.5 0 0 0 .708.708l4.5-4.5a.5.5 0 0 0 0-.708l-4.5-4.5a.5.5 0 0 0-.708 0Z"/>',
      width: 16,
      height: 16,
    },
    'pin-16-regular': {
      body: '<path fill="currentColor" d="M10.059 2.445a1.5 1.5 0 0 0-2.386.354l-2.02 3.79l-2.811.937a.5.5 0 0 0-.196.828L4.793 10.5l-2.647 2.647L2 14l.854-.146L5.5 11.207l2.146 2.147a.5.5 0 0 0 .828-.196l.937-2.81l3.779-2.024a1.5 1.5 0 0 0 .354-2.38l-3.484-3.5Zm-1.504.824a.5.5 0 0 1 .796-.118l3.485 3.498a.5.5 0 0 1-.118.794L8.764 9.559a.5.5 0 0 0-.238.283l-.744 2.233l-3.856-3.856l2.232-.744a.5.5 0 0 0 .283-.24L8.555 3.27Z"/>',
      width: 16,
      height: 16,
    },
    'pin-off-16-regular': {
      body: '<path fill="currentColor" d="m9.56 10.267l4.586 4.587a.5.5 0 0 0 .708-.708l-13-13a.5.5 0 1 0-.708.708l4.586 4.585l-.08.15l-2.81.937a.5.5 0 0 0-.196.828L4.793 10.5l-2.647 2.646L2 14l.854-.146L5.5 11.207l2.146 2.147a.5.5 0 0 0 .828-.196l.937-2.811l.15-.08Zm-.739-.739l-.057.031a.5.5 0 0 0-.238.283l-.744 2.232L3.926 8.22l2.232-.745a.5.5 0 0 0 .283-.239l.03-.056l2.35 2.35Zm3.897-2.085l-2.054 1.1l.738.738l1.788-.957a1.5 1.5 0 0 0 .354-2.381L10.06 2.445a1.5 1.5 0 0 0-2.386.353l-.957 1.796l.739.74l1.1-2.065a.5.5 0 0 1 .796-.118l3.485 3.498a.5.5 0 0 1-.118.794Z"/>',
      width: 16,
      height: 16,
    },
    'info-28-regular': {
      body: '<path fill="currentColor" d="M15 8a1 1 0 1 1-2 0a1 1 0 0 1 2 0Zm-1.75 3.75v7.5a.75.75 0 0 0 1.5 0v-7.5a.75.75 0 0 0-1.5 0ZM2 14C2 7.373 7.373 2 14 2s12 5.373 12 12s-5.373 12-12 12S2 20.627 2 14ZM14 3.5C8.201 3.5 3.5 8.201 3.5 14S8.201 24.5 14 24.5S24.5 19.799 24.5 14S19.799 3.5 14 3.5Z"/>',
      width: 28,
      height: 28,
    },
  },
  lastModified: 1661146680,
  width: 20,
  height: 20,
};

/**
 * fa6-regular:circle-user
 * https://api.iconify.design/fa6-regular.json?icons=circle-user
 */
const fa6RegularIcons = {
  prefix: 'fa6-regular',
  icons: {
    'circle-user': {
      body: '<path fill="currentColor" d="M256 112c-48.6 0-88 39.4-88 88s39.4 88 88 88s88-39.4 88-88s-39.4-88-88-88zm0 128c-22.06 0-40-17.95-40-40c0-22.1 17.9-40 40-40s40 17.94 40 40c0 22.1-17.9 40-40 40zm0-240C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zm0 464c-46.73 0-89.76-15.68-124.5-41.79C148.8 389 182.4 368 220.2 368h71.69c37.75 0 71.31 21.01 88.68 54.21C345.8 448.3 302.7 464 256 464zm160.2-75.5c-27-42.2-73-68.5-124.4-68.5h-71.6c-51.36 0-97.35 26.25-124.4 68.48C65.96 352.5 48 306.3 48 256c0-114.7 93.31-208 208-208s208 93.31 208 208c0 50.3-18 96.5-47.8 132.5z"/>',
    },
  },
  lastModified: 1658815514,
  width: 512,
  height: 512,
};

/**
 * akar-icons:copy
 * https://api.iconify.design/akar-icons.json?icons=copy
 */
const akarIcons = {
  prefix: 'akar-icons',
  icons: {
    copy: {
      body: '<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M8 4v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7.242a2 2 0 0 0-.602-1.43L16.083 2.57A2 2 0 0 0 14.685 2H10a2 2 0 0 0-2 2Z"/><path d="M16 18v2a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h2"/></g>',
    },
  },
  lastModified: 1658898241,
  width: 24,
  height: 24,
};

/**
 * carbon:kubernetes
 * https://api.iconify.design/carbon.json?icons=kubernetes
 */
const carbonIcons = {
  prefix: 'carbon',
  icons: {
    kubernetes: {
      body: '<path fill="currentColor" d="m29.223 17.964l-3.304-.754a9.784 9.784 0 0 0-1.525-6.625l2.54-2.025l-1.247-1.564l-2.539 2.024A9.97 9.97 0 0 0 17 6.05V3h-2v3.05a9.97 9.97 0 0 0-6.148 2.97l-2.54-2.024L5.066 8.56l2.54 2.025a9.784 9.784 0 0 0-1.524 6.625l-3.304.754l.446 1.95l3.297-.753a10.036 10.036 0 0 0 4.269 5.358l-1.33 2.763l1.802.867l1.329-2.76a9.811 9.811 0 0 0 6.82 0l1.33 2.76l1.802-.868l-1.33-2.762a10.036 10.036 0 0 0 4.269-5.358l3.297.752ZM24 16c0 .257-.015.511-.039.763l-5-1.142a2.966 2.966 0 0 0-.137-.594l3.996-3.187A7.94 7.94 0 0 1 24 16Zm-9 0a1 1 0 1 1 1 1a1 1 0 0 1-1-1Zm6.576-5.726l-3.996 3.187a3.003 3.003 0 0 0-.58-.277V8.07a7.976 7.976 0 0 1 4.576 2.205ZM15 8.07v5.115a3.003 3.003 0 0 0-.58.277l-3.996-3.187A7.976 7.976 0 0 1 15 8.07ZM8 16a7.94 7.94 0 0 1 1.18-4.16l3.996 3.187a2.966 2.966 0 0 0-.137.594l-5 1.141A8.072 8.072 0 0 1 8 16Zm.483 2.712l4.976-1.136a3.013 3.013 0 0 0 .414.537L11.66 22.71a8.031 8.031 0 0 1-3.176-3.998ZM16 24a7.968 7.968 0 0 1-2.54-.42l2.22-4.612A2.999 2.999 0 0 0 16 19a2.999 2.999 0 0 0 .319-.032l2.221 4.612A7.955 7.955 0 0 1 16 24Zm4.34-1.29l-2.213-4.598a3.013 3.013 0 0 0 .414-.536l4.976 1.136a8.031 8.031 0 0 1-3.176 3.998Z"/>',
    },
  },
  lastModified: 1658726829,
  width: 32,
  height: 32,
};

/**
 * clarity:namespace-line
 * https://api.iconify.design/clarity.json?icons=namespace-line
 */
const clarityIcons = {
  prefix: 'clarity',
  icons: {
    'namespace-line': {
      body: '<path fill="currentColor" d="M27 4.18a1 1 0 1 0-1 1.73l6 3.47v17.24l-6 3.47a1 1 0 0 0-.37 1.36a1 1 0 0 0 1.37.37l7-4.05V8.23ZM9.68 29.9L4 26.62V9.38L9.68 6.1a1 1 0 1 0-1-1.73L2 8.23v19.54l6.68 3.86a1 1 0 0 0 1.37-.37a1 1 0 0 0-.37-1.36Z"/><path fill="currentColor" d="M10 12v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V12a2 2 0 0 0-2-2H12a2 2 0 0 0-2 2Zm7 0v5h-5v-5Zm-5 7h5v5h-5Zm7 5v-5h5v5Zm5-7h-5v-5h5Z"/>',
    },
  },
  lastModified: 1656181600,
  width: 36,
  height: 36,
};

/**
 * eos-icons:cluster-management-outlined
 * https://api.iconify.design/eos-icons.json?icons=cluster-management-outlined
 */
const eosIcons = {
  prefix: 'eos-icons',
  icons: {
    'cluster-management-outlined': {
      body: '<path fill="currentColor" d="m22.69 18.37l1.14-1l-1-1.73l-1.45.49a3.647 3.647 0 0 0-1.08-.63L20 14h-2l-.3 1.49a3.646 3.646 0 0 0-1.08.63l-1.45-.49l-1 1.73l1.14 1a3.337 3.337 0 0 0 0 1.26l-1.14 1l1 1.73l1.45-.49a3.645 3.645 0 0 0 1.08.63L18 24h2l.3-1.49a3.646 3.646 0 0 0 1.08-.63l1.45.49l1-1.73l-1.14-1a3.39 3.39 0 0 0 0-1.27ZM19 21a2 2 0 1 1 2-2a2.006 2.006 0 0 1-2 2Zm4-10H1V1h22ZM3 9h18V3H3Zm10-4H4v2h9Zm3 0a1 1 0 1 0 1 1a1 1 0 0 0-1-1Zm3 0a1 1 0 1 0 1 1a1 1 0 0 0-1-1Z"/><path fill="currentColor" d="M12.294 21H3v-6h10.26a7.026 7.026 0 0 1 2.148-2H1v10h12.26a6.962 6.962 0 0 1-.966-2Z"/><path fill="currentColor" d="M4 19h8a6.994 6.994 0 0 1 .294-2H4Z"/>',
    },
  },
  lastModified: 1656181815,
  width: 24,
  height: 24,
};

/**
 * simple-icons:grafana
 * https://api.iconify.design/simple-icons.json?icons=grafana
 */
const simpleIcons = {
  prefix: 'simple-icons',
  icons: {
    grafana: {
      body: '<path fill="currentColor" d="M23.02 10.59a8.578 8.578 0 0 0-.862-3.034a8.911 8.911 0 0 0-1.789-2.445c.337-1.342-.413-2.505-.413-2.505c-1.292-.08-2.113.4-2.416.62c-.052-.02-.102-.044-.154-.064c-.22-.089-.446-.172-.677-.247c-.231-.073-.47-.14-.711-.197a9.867 9.867 0 0 0-.875-.161C14.557.753 12.94 0 12.94 0c-1.804 1.145-2.147 2.744-2.147 2.744l-.018.093c-.098.029-.2.057-.298.088c-.138.042-.275.094-.413.143c-.138.055-.275.107-.41.166a8.869 8.869 0 0 0-1.557.87l-.063-.029c-2.497-.955-4.716.195-4.716.195c-.203 2.658.996 4.33 1.235 4.636a11.608 11.608 0 0 0-.607 2.635C1.636 12.677.953 15.014.953 15.014c1.926 2.214 4.171 2.351 4.171 2.351c.003-.002.006-.002.006-.005c.285.509.615.994.986 1.446c.156.19.32.371.488.548c-.704 2.009.099 3.68.099 3.68c2.144.08 3.553-.937 3.849-1.173a9.784 9.784 0 0 0 3.164.501h.08l.055-.003l.107-.002l.103-.005l.003.002c1.01 1.44 2.788 1.646 2.788 1.646c1.264-1.332 1.337-2.653 1.337-2.94v-.058c0-.02-.003-.039-.003-.06c.265-.187.52-.387.758-.6a7.875 7.875 0 0 0 1.415-1.7c1.43.083 2.437-.885 2.437-.885c-.236-1.49-1.085-2.216-1.264-2.354l-.018-.013l-.016-.013a.217.217 0 0 1-.031-.02c.008-.092.016-.18.02-.27c.011-.162.016-.323.016-.48v-.253l-.005-.098l-.008-.135a1.891 1.891 0 0 0-.01-.13c-.003-.042-.008-.083-.013-.125l-.016-.124l-.018-.122a6.215 6.215 0 0 0-2.032-3.73a6.015 6.015 0 0 0-3.222-1.46a6.292 6.292 0 0 0-.85-.048l-.107.002h-.063l-.044.003l-.104.008a4.777 4.777 0 0 0-3.335 1.695c-.332.4-.592.84-.768 1.297a4.594 4.594 0 0 0-.312 1.817l.003.091c.005.055.007.11.013.164a3.615 3.615 0 0 0 .698 1.82a3.53 3.53 0 0 0 1.827 1.282c.33.098.66.14.971.137c.039 0 .078 0 .114-.002l.063-.003c.02 0 .041-.003.062-.003c.034-.002.065-.007.099-.01c.007 0 .018-.003.028-.003l.031-.005l.06-.008a1.18 1.18 0 0 0 .112-.02c.036-.008.072-.013.109-.024a2.634 2.634 0 0 0 .914-.415c.028-.02.056-.041.085-.065a.248.248 0 0 0 .039-.35a.244.244 0 0 0-.309-.06l-.078.042c-.09.044-.184.083-.283.116a2.476 2.476 0 0 1-.475.096c-.028.003-.054.006-.083.006l-.083.002c-.026 0-.054 0-.08-.002l-.102-.006h-.012l-.024.006c-.016-.003-.031-.003-.044-.006c-.031-.002-.06-.007-.091-.01a2.59 2.59 0 0 1-.724-.213a2.557 2.557 0 0 1-.667-.438a2.52 2.52 0 0 1-.805-1.475a2.306 2.306 0 0 1-.029-.444l.006-.122v-.023l.002-.031c.003-.021.003-.04.005-.06a3.163 3.163 0 0 1 1.352-2.29a3.12 3.12 0 0 1 .937-.43a2.946 2.946 0 0 1 .776-.101h.06l.07.002l.045.003h.026l.07.005a4.041 4.041 0 0 1 1.635.49a3.94 3.94 0 0 1 1.602 1.662a3.77 3.77 0 0 1 .397 1.414l.005.076l.003.075c.002.026.002.05.002.075c0 .024.003.052 0 .07v.065l-.002.073l-.008.174a6.195 6.195 0 0 1-.08.639a5.1 5.1 0 0 1-.267.927a5.31 5.31 0 0 1-.624 1.13a5.052 5.052 0 0 1-3.237 2.014a4.82 4.82 0 0 1-.649.066l-.039.003h-.287a6.607 6.607 0 0 1-1.716-.265a6.776 6.776 0 0 1-3.4-2.274a6.75 6.75 0 0 1-.746-1.15a6.616 6.616 0 0 1-.714-2.596l-.005-.083l-.002-.02v-.056l-.003-.073v-.096l-.003-.104v-.07l.003-.163c.008-.22.026-.45.054-.678a8.707 8.707 0 0 1 .28-1.355c.128-.444.286-.872.473-1.277a7.04 7.04 0 0 1 1.456-2.1a5.925 5.925 0 0 1 .953-.763c.169-.111.343-.213.524-.306c.089-.05.182-.091.273-.135c.047-.02.093-.042.138-.062a7.177 7.177 0 0 1 .714-.267l.145-.045c.049-.015.098-.026.148-.041c.098-.029.197-.052.296-.076c.049-.013.1-.02.15-.033l.15-.032l.151-.028l.076-.013l.075-.01l.153-.024c.057-.01.114-.013.171-.023l.169-.021c.036-.003.073-.008.106-.01l.073-.008l.036-.003l.042-.002c.057-.003.114-.008.171-.01l.086-.006h.023l.037-.003l.145-.007a7.999 7.999 0 0 1 1.708.125a7.917 7.917 0 0 1 2.048.68a8.253 8.253 0 0 1 1.672 1.09l.09.077l.089.078c.06.052.114.107.171.159c.057.052.112.106.166.16c.052.055.107.107.159.164a8.671 8.671 0 0 1 1.41 1.978c.012.026.028.052.04.078l.04.078l.075.156c.023.051.05.1.07.153l.065.15a8.848 8.848 0 0 1 .45 1.34a.19.19 0 0 0 .201.142a.186.186 0 0 0 .172-.184c.01-.246.002-.532-.024-.856z"/>',
    },
  },
  lastModified: 1661751507,
  width: 24,
  height: 24,
};

// Load icons
addCollection(mdiIcons);
addCollection(fluentIcons);
addCollection(fluentIcons);
addCollection(fa6RegularIcons);
addCollection(akarIcons);
addCollection(carbonIcons);
addCollection(clarityIcons);
addCollection(eosIcons);
addCollection(simpleIcons);