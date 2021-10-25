import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import image from '@rollup/plugin-image';
import json from '@rollup/plugin-json';
import replace from '@rollup/plugin-replace';
import resolve from '@rollup/plugin-node-resolve';
import dotenv from 'dotenv';

const environment = process.env.NODE_ENV;
let path = '.env';
if (environment) {
    path += `.${environment}`
}
dotenv.config({path});
const replaceVariables = Object.entries(process.env)
    .filter(entry => entry[0].startsWith('REACT_APP'))
    .map(entry => ({[`process.env.${entry[0]}`]: entry[1]}))
    .reduce((a, b) => ({...a, ...b}), {})

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
        replace({
            preventAssignment: true,
            ...replaceVariables
        }),
        resolve(),
        commonjs(),
        babel({
            babelHelpers: 'bundled'
        }),
        json(),
        image(),
    ]
};
