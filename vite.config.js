import { resolve } from 'path';
import { defineConfig } from 'vite';
import StylelintPlugin from '@frsource/vite-plugin-stylelint';
import { createHtmlPlugin } from 'vite-plugin-html';
import handlebars from 'vite-plugin-handlebars';
import { handleBarsContext } from './src/handleBarsContext';

// const nodeEnv = process.env.BASE_ENV ?? 'dev';
// const basePath = nodeEnv === 'deployGh' ? '/occurai/' : '/';

export default defineConfig({
	root: 'src',
	// base: basePath,
	plugins: [
		StylelintPlugin({ fix: true }),
		handlebars({
			context: handleBarsContext,
			partialDirectory: resolve(__dirname, 'src/views'),
		}),
		createHtmlPlugin({
			minify: true,
			entry: 'main.js',
			inject: {
				data: {
					description: 'description',
				},
			},
		}),
	],
});
