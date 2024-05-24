import resolve from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';
import minifyHTML from 'rollup-plugin-html-literals';
import summary from 'rollup-plugin-summary';

export default {
  input: 'baseline-status.js',
  output: { dir: 'dist' },
  plugins: [
    resolve(),
    minifyHTML(),
    terser({
      compress: {
        drop_console: true
      }
    }),
    summary(),
  ],
};