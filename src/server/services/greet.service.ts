export const makeGreet = async (name: string): Promise<string> => {
    return new Promise<string>(resolve => {
       setTimeout(() => resolve(`Hello ${name}`), 2000)
    });
}
