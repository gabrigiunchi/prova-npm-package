import babel from '@rollup/plugin-babel';
import {nodeResolve} from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import image from '@rollup/plugin-image';
import resolve from '@rollup/plugin-node-resolve';

export default {
    input: 'src/lib/index.js',
    output: {
        file: 'dist/index.js',
        format: 'cjs'
    },
    plugins: [
        resolve(),
        image(),
        nodeResolve(),
        babel({
            presets: ["@babel/preset-react"],
        }),
        commonjs(),
    ]
};
