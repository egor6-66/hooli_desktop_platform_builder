import { themes, localstorage } from '../constanst';

function useTheme(theme: keyof typeof themes.dictionary) {
    const ls = window.localStorage;
    const check = ls.getItem(localstorage.theme);
    if (!check) {
        document.documentElement.dataset.theme = themes.dark;
        ls.setItem(localstorage.theme, themes.dark);
    } else {
        document.documentElement.dataset.theme = theme;
        ls.setItem(localstorage.theme, theme);
    }
}

export default useTheme;
