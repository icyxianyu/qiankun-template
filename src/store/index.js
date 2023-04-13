import {createStore} from 'vuex'
import { initGlobalState } from 'qiankun';
const   state={
    name: 'qiankun'
}
// 创建一个新的 store 实例
const store = createStore({
    state,
})

initGlobalState(state);

export default store
