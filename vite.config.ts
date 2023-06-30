import { resolve } from 'node:path';
import { defineConfig } from 'vitest/config';

export default defineConfig({
    build: {
        lib: {
            entry: [resolve(__dirname, 'src/main.ts')],
            name: 'Freddy',
            formats: ['es'],
        },
        target: 'modules',
    },
    test: {
        include: ['tests/**/*.test.ts'],
        watch: false,
        coverage: {
            provider: 'v8',
            include: ['src/*.ts'],
            exclude: ['tests/**/*.test.ts'],
            all: true,
        },
    },
});
