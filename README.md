# Svelte i18n Example

This is a demo to use Svelte with `Svelte i18n`,
and uses localStorage to remember the last language selection

You can change the lang with the select: `Idioma/Language`
Options: 
- English
- Español

## Execute
```
npm install

npm run dev
```

## Basic Structure 

- `public/lang/en.json`
```
{
    "home": {
        "topic": "Hi welcome to our website!",
        "label": "Services",
        "services": {
            "web": "Web application development",
            "backend": "Backend development"
        }
    },
    "switch": {
        "lang": "Language"
    }
}
```
### New languages
- Added `public/lang/es.json` for spanish

### Select for languages
- `LocalSwitcher.svelte` contains the select for the languages


