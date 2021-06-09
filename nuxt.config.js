export default {

	// Build Configuration: https://go.nuxtjs.dev/config-build
	build: {

		babel: {
			babelrc:  false,

			presets: [
				// "@nuxt/babel-preset-app"
			],
			plugins: [
				["@babel/plugin-proposal-decorators", { legacy: false, decoratorsBeforeExport: true }],
				["@babel/plugin-transform-flow-strip-types"],
				["@babel/plugin-proposal-class-properties", { loose: true }],
				["@babel/plugin-proposal-private-methods", { loose: true }],
				
				["@babel/plugin-transform-runtime"],
				
				["@babel/plugin-syntax-class-properties"],
				["@babel/plugin-transform-modules-commonjs"],
				["babel-plugin-dynamic-import-node"],
				["babel-plugin-transform-import-meta"],
				["@babel/plugin-transform-typescript", {
					strictMode: false,
				}],
			]
		},

	},

	// Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
	buildModules: [
		// https://go.nuxtjs.dev/typescript
		'@nuxt/typescript-build',
	],

	// Auto import components: https://go.nuxtjs.dev/config-components
	components: true,

	// Global CSS: https://go.nuxtjs.dev/config-css
	css: [
		"~/assets/scss/main.scss"
	],

	// Global page headers: https://go.nuxtjs.dev/config-head
	head: {
		title: 'laguerredelanneau',
		htmlAttrs: {
			lang: 'en',
		},
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: '' },
		],
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
			// { rel: "stylesheet", href: "https://unpkg.com/leaflet@1.7.1/dist/leaflet.css" },
		],
		script: [
			// { src: "https://unpkg.com/leaflet@1.7.1/dist/leaflet.js", crossorigin: "anonymous" },
		],
	},

	modules: [
	],

	// Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
	plugins: [
	],

	// Modules: https://go.nuxtjs.dev/config-modules

	server: {
		port: 80,
		host: "0.0.0.0"
	},

	serverMiddleware: [
		"~/server-middleware/api",
	]
};
