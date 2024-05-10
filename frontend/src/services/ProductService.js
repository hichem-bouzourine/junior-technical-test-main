import LocalAxios from './httpService';

export const getProducts = async () => {
    return await LocalAxios.get('/products');
}