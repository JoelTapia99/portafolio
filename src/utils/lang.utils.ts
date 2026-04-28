import { ui, type Lang, type TranslationKey } from '../i18n/ui.ts';
import {DEFAULT_LANG} from "../constants/app.constants.ts";

export function getLangFromUrl(url: URL): Lang {
    const [, lang] = url.pathname.split('/');
    if (lang in ui) return lang as Lang;
    return DEFAULT_LANG;
}

export function useTranslations(lang: Lang) {
    const translations = ui[lang] as Record<string, string>;
    const defaultTranslations = ui[DEFAULT_LANG] as Record<string, string>;

    return function t(key: TranslationKey): string {
        return translations[key] ?? defaultTranslations[key] ?? key;
    };
}

export function getLocalePath(lang: Lang, path: string = ''): string {
    if (lang === DEFAULT_LANG) return `/${path}`;
    return `/${lang}/${path}`;
}

