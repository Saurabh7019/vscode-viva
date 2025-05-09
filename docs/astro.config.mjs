// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
	base: '/vscode-viva/',
	output: 'static',
	integrations: [
		starlight({
			title: 'SPFx Toolkit',
			description: 'SPFx Toolkit is a Visual Studio Code extension that helps you build and manage SharePoint Framework projects with ease.',
			logo: {
				src: './../assets/logo.svg',
			},
			customCss: ['./src/styles/docs.css'],
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/pnp/vscode-viva' },
				{ icon: 'discord', label: 'Discord', href: 'https://discord.gg/YtYrav2VGW' }
			],
			sidebar: [
				{
					label: 'Home',
					link: '/',
				},
				{
					label: 'Get Started',
					link: 'guides/getting-started',
				},
				{
					label: 'Marketing Resources',
					link: 'reference/marketing-resources',
				},
				{
					label: 'Technical reference & contributing guidance',
					link: 'guides/contributing-guidance',
				},
				{
					label: 'Welcome Experience',
					link: 'guides/welcome-experience',
				},
				{
					label: 'Toolkit Features',
					items: [
						{ label: 'Validate and set up a local workspace', link: 'features/setup-workspace' },
						{ label: 'Scaffolding', link: 'features/scaffolding' },
						{ label: 'Login to your tenant & retrieve environment details', link: 'features/login-tenant' },
						{ label: 'Gulp Tasks', link: 'features/gulp-tasks' },
						{ label: 'Actions', link: 'features/actions' },
						{ label: 'App Management', link: 'features/app-management' }
					],
				},
				{
					label: 'SPFx Toolkit Chat Participant',
					link: 'guides/chat-participant',
				},
				{
					label: 'Help & Feedback',
					link: 'guides/help-feedback',
				},
				{
					label: 'Teams Toolkit Integration',
					link: 'guides/teams-toolkit',
				},
				{
					label: 'Coding Snippets',
					link: 'guides/snippets',
				}
			],
		}),
		tailwind({ applyBaseStyles: false }),
	],
});
