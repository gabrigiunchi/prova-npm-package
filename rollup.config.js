import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import image from '@rollup/plugin-image';
import json from '@rollup/plugin-json';

export default {
    input: 'src/lib/index.js',
    output: [
        {
            file: 'dist/index.js',
            format: 'cjs',
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
