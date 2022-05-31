import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import image from '@rollup/plugin-image';
import json from '@rollup/plugin-json';
import replace from '@rollup/plugin-replace';
import dotenv from 'dotenv';
import postcss from 'rollup-plugin-postcss';
import strip from '@rollup/plugin-strip';
import svgr from '@svgr/rollup'

const getVariablesToReplace = () => {
    const getEnvironmentVariables = (path) => {
        dotenv.config({path, override: true});
        return Object.entries(process.env)
            .map(([key, value]) => ({
                [`process.env.${key}`]: JSON.stringify(value)
            }))
            .reduce((a, b) => ({...a, ...b}), {})
    }

    const environment = process.env.NODE_ENV;
    let replaceVariables = getEnvironmentVariables('.env');

    if (environment) {
        replaceVariables = {
            ...replaceVariables,
            ...getEnvironmentVariables(`.env.${environment}`)
        }
    }

    return replaceVariables;
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    input: 'src/lib/index.js',
    output: [
        {
            dir: 'dist',
            format: 'esm',
            preserveModules: true,
            preserveModulesRoot: 'src/lib'
        }
    ],
    plugins: [
        replace({
            preventAssignment: true,
            ...getVariablesToReplace()
        }),
        babel({
            babelHelpers: 'bundled'
        }),
        strip(),
        commonjs(),
        svgr({ icon: true }),
        image(),
        json(),
        postcss({
            extract: false,
            autoModules: true
        })
    ],
    external: [
        'i18next',
        'react-i18next',
        'react',
        'react-redux',
        'redux'
    ]
};
