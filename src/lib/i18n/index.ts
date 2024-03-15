import { init, register } from 'svelte-i18n';

const defaultLocale = 'ms';

register('ms', () => import('./locales/ms.json'));
register('en', () => import('./locales/en.json'));

init({
	fallbackLocale: defaultLocale,
	initialLocale: defaultLocale
});
