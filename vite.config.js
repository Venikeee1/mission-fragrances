import { resolve } from 'path';
import { defineConfig } from 'vite';
import StylelintPlugin from '@frsource/vite-plugin-stylelint';
import { createHtmlPlugin } from 'vite-plugin-html';
import handlebars from 'vite-plugin-handlebars';
import { handleBarsContext } from './src/handleBarsContext';

const nodeEnv = process.env.BASE_ENV ?? 'dev';
const basePath = nodeEnv === 'deployGh' ? '/mission-fragrances/' : '/';
const root = resolve(__dirname, 'src');

export default defineConfig({
	root: 'src',
	base: basePath,
	plugins: [
		StylelintPlugin({ fix: true }),
		handlebars({
			context: handleBarsContext,
			partialDirectory: resolve(__dirname, 'src/views'),
		}),
		createHtmlPlugin({
			minify: false,
			entry: resolve(root, 'main.js'),
		}),
	],
	build: {
		emptyOutDir: true,
		rollupOptions: {
			input: {
				main: resolve(root, 'index.html'),
			},
		},
	},
});
