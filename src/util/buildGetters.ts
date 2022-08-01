import store from 'Store';

export const buildGetters = <T>(object: T, name: string) => {
    return Object.keys(object).reduce((acc, key) => {
        return {
            ...acc,
            [`get${key.replace(/^[a-z]/, key[0].toUpperCase())}`]: () => {
                // @ts-ignore
                // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-return
                return store.getState()[name][key as keyof typeof object];
            }
        };
    }, { ...object });
};

export default buildGetters;