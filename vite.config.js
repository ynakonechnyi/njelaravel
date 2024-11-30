import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    base: '/',
    plugins: [
        laravel({
            input: [
                'public/resources/sass/app.scss',
                'public/resources/js/app.js',
            ],
            refresh: true,
        }),
    ],
});
