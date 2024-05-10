import LocalAxios from './httpService';

export const getProducts = async () => {
    return await LocalAxios.get('/products');
}

export const getProduct = async (id) => {
    return await LocalAxios.get(`/products/${id}`);
}

export const deleteProduct = async (id) => {
    return await LocalAxios.delete(`/products/${id}`);
}