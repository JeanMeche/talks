import antfu from '@antfu/eslint-config';

export default antfu({
  stylistic: {
    semi: true,
  },
  vue: true,
  formatters: {
    css: true,
    // markdown: true,
    // slidev: {
    //   files: [
    //     '*/src/slides.md',
    //   ],
    // },
  },
  ignores: [
    '**/demo/eslint/**',
  ],
});
