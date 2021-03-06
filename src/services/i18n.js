import { derived } from 'svelte/store';
import { dictionary, locale, _, date, time, number } from 'svelte-i18n';

const MESSAGE_FILE_URL_TEMPLATE = '/lang/{locale}.json';

let cachedLocale;

function setupI18n({ withLocale: _locale } = { withLocale: 'en' }) {
    const messsagesFileUrl = MESSAGE_FILE_URL_TEMPLATE.replace('{locale}', _locale);

    return fetch(messsagesFileUrl)
        .then(response => response.json())
        .then((messages) => {
            dictionary.set({ [_locale]: messages });

            cachedLocale = _locale;

            locale.set(_locale);
        });
}


const isLocaleLoaded = derived(locale, $locale => typeof $locale === 'string');

const dir = derived(locale, $locale => $locale === 'ar' ? 'rtl' : 'ltr');

export { _, locale, dir, setupI18n, isLocaleLoaded, date, time, number };