export const useFetch = () => {
    return async (url = '/', method = 'POST', fetchOptions = {}) => {
        const request = await fetch(url, {
            method,
            headers: {
                'Content-Type': 'application/json',
            },
            ...fetchOptions,
        });
        const data = await request.json();

        return data;
    };
};