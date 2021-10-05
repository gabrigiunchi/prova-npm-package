import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import image from '@rollup/plugin-image';
import json from '@rollup/plugin-json';

export default {
    input: 'src/lib/index.js',
    output: {
        file: 'dist/index.js',
        format: 'cjs'
    },
    plugins: [
        json(),
        resolve(),
        image(),
        babel({
            presets: ["@babel/preset-react", "@babel/env"],
        }),
        commonjs(),
    ]
};
