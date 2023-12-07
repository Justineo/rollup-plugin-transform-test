import resolve from '@rollup/plugin-node-resolve'
import postcss from 'rollup-plugin-postcss'

function myPlugin () {
  return {
    transform (code, id) {
      if (id.endsWith('?a=1')) {
        return `${code}\n@color: blue;`
      }
      return null;
    }
  };
}

export default {
  input: 'index.js',
  output: {
    file: 'dist/index.js',
    format: 'umd'
  },
  plugins: [
    resolve(),
    myPlugin(),
    postcss()
  ]
}