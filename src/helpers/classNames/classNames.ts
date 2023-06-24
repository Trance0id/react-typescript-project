type Mods = Record<string, string | boolean>;



export function classnames(cls: string, mods: Mods, additional: string[]): string {

    return [
        cls,
        ...additional,
        ...Object.keys(mods).filter(key => mods[key])
    ].join(' ');
}
