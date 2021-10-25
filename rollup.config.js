import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import image from '@rollup/plugin-image';
import json from '@rollup/plugin-json';
import replace from '@rollup/plugin-replace';
import {nodeResolve} from '@rollup/plugin-node-resolve';

const environment = process.env.NODE_ENV;
let path = '.env';
if (environment) {
    path += `.${environment}`
}
require('dotenv').config({path});
const replaceVariables = Object.entries(process.env)
    .map(entry => ({[`process.env.${entry[0]}`]: entry[1]}))
    .reduce((a, b) => ({...a, ...b}), {});

const packageJson = require('./package.json');

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    input: 'src/lib/index.js',
    output: [
        {
            file: packageJson.main,
            format: 'esm'
        }
    ],
    plugins: [
        nodeResolve({extensions: ['.js']}),
        replace({
            preventAssignment: true,
            ...replaceVariables,
        }),
        babel({
            babelHelpers: 'bundled'
        }),
        commonjs(),
        json(),
        image(),
    ]
};
