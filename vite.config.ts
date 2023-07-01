import { resolve } from 'node:path';
import { defineConfig } from 'vitest/config';
import { dependencies } from './package.json';

export default defineConfig({
    build: {
        lib: {
            entry: [resolve(__dirname, 'src/main.ts')],
            name: 'Freddy',
            formats: ['es'],
        },
        target: 'modules',
        rollupOptions: {
            external: [...Object.keys(dependencies), 'node:fs'],
        },
    },
    test: {
        include: ['tests/**/*.test.ts'],
        watch: false,
        coverage: {
            provider: 'v8',
            include: ['src/*.ts'],
            exclude: ['tests/**/*.test.ts'],
            all: true,
            reporter: [['lcov', { projectRoot: './src' }]],
        },
    },
});
