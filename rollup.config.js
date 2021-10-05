import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import image from '@rollup/plugin-image';
import json from '@rollup/plugin-json';
import nodeResolve from "@rollup/plugin-node-resolve";

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
            babelHelpers: 'bundled',
            presets: ["@babel/preset-react"],
        }),
        nodeResolve({extensions: [".js"]}),
        commonjs(),
        json(),
        image(),
    ]
};
