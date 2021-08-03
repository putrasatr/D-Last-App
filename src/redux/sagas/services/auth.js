import { put, call } from 'redux-saga/effects';
import { storeData, removeToken } from '../../../helpers/AsyncStorage';
import * as actions from '../../../actions/menu';

//Login
export function* login(payload) {
    const { email, password, navigation } = payload;
    try {
        const data = yield call(postLogin, `${PATH}/member/login`, { email, password })
        const token = data.token
        if (data.msg === 'not exist') return yield put(actions.loginFailure(data.msg))
        storeData(token)
        yield put(actions.loginSuccess(data.data))
        navigation.reset({
            index: 0,
            routes: [{ name: 'HomeScreen' }],
        })
    } catch (error) {
        console.log(error)
        yield put(actions.loginFailure(email))
    }
}
//Register
export function* register(payload) {
    const { email, password, repassword, navigation, username } = payload;
    try {
        const data = yield call(postLogin, `${PATH}/member/register`, { email, password, repassword, username })
        const token = data.token
        if (data.msg === 'Email already exists' || data.msg === 'Password not match') {
            yield put(actions.registerFailure(data.msg))
        } else {
            storeData(token)
            const datas = [{ email, password, username }]
            yield put(actions.registerSuccess(datas))
            navigation.reset({
                index: 0,
                routes: [{ name: 'Login Screen' }],
            })
        }
    } catch (error) {
        yield put(actions.registerFailure(email))
    }
}
export function* logout(payload) {
    const { navigation, token } = payload
    try {
        removeToken()
        yield call(getLogout, `${PATH}/member/logout`, { token })
        navigation.reset({
            index: 0,
            routes: [{ name: 'Login Screen' }],
        })
    } catch (error) {
        yield put(actions.logoutFailure())
    }
}