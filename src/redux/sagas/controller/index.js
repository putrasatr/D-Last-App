import request from '../../../actions/connect';

export const load = async (path) =>
    await request.get(path)
        .then(response => response.data)
        .catch(err => {
            throw err
        });

export const add = async (path, params) =>
    await request.post(path, params)
        .then(response => response.data)
        .catch(err => {
            throw err
        });

export const remove = async (path) =>
    await request.delete(path)
        .then(response => response.data)
        .catch(err => {
            throw err
        });

export const postLogin = async (path, params) =>
    await request.post(path, params)
        .then(response => response.data)
        .catch(err => {
            throw err
        });
export const getLogout = async (path, params) =>
    await request.put(path, params)
        .then(response => response.data)
        .catch(err => {
            throw err
        });
