import 'autotrack';

/**
 * Please replace GOOGLE_ANALYTICS_ID by an id valid
 */
// eslint-disable-next-line
ga('create', 'GOOGLE_ANALYTICS_ID', 'auto');

window.ga_debug = {trace: true};

// eslint-disable-next-line
ga('require', 'urlChangeTracker');

// eslint-disable-next-line
ga('require', 'mediaQueryTracker', {
  definitions: [
    {
      name: 'Breakpoint',
      dimensionIndex: 1,
      items: [
        {name: 'sm', media: 'all'},
        {name: 'md', media: '(min-width: 30em)'},
        {name: 'lg', media: '(min-width: 48em)'},
      ],
    },
    {
      name: 'Pixel Density',
      dimensionIndex: 2,
      items: [
        {name: '1x', media: 'all'},
        {name: '1.5x', media: '(min-resolution: 144dpi)'},
        {name: '2x', media: '(min-resolution: 192dpi)'},
      ],
    },
    {
      name: 'Orientation',
      dimensionIndex: 3,
      items: [
        {name: 'landscape', media: '(orientation: landscape)'},
        {name: 'portrait', media: '(orientation: portrait)'},
      ],
    },
  ],
});

// eslint-disable-next-line
ga('send', 'pageview');
