import { EMPTY_OBJECT } from "./constants";

export const withMods = (block = '', mods = EMPTY_OBJECT) => {
    const m: Array<any> = [];
    for (let key in mods) {
        if (mods[key] === true) {
            m.push(`${block}_${key}`)
        } else {
            m.push(`${block}_${key}_${mods[key]}`);
        }
    }
    return `${block} ${m.join(' ')}`.trim();
}

export const elem = (block = '', elem = '') => `${block}__${elem}`;

export const elemWithMods = (block = '', elem = '', mods = EMPTY_OBJECT) => {
    return `${block} ${withMods(`${block}__${elem}`, mods)}`;
}