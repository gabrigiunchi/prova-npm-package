import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import image from '@rollup/plugin-image';
import json from '@rollup/plugin-json';

const packageJson = require('./package.json');

export default {
    input: 'src/lib/index.js',
    output: [
        {
            file: packageJson.main,
            format: 'cjs',
            sourcemap: true
        },
        {
            file: packageJson.main,
            format: 'esm',
            sourcemap: true
        }
    ],
    plugins: [
        babel({
            babelHelpers: 'bundled'
        }),
        commonjs(),
        json(),
        image(),
    ]
};
