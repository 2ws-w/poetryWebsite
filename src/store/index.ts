import { defineStore } from 'pinia'
export const lilPinia = defineStore('玉玉菠萝', {
    state: () => {
        return {
            //类似data
            headerAndFooterVisible: true , // 公共 顶部栏和底部栏 是否显示
        }
    },
    getters: {
        //类似computed
        // 方法名(state) {
        //     return
        //     state.属性·······
        // }
    },
    actions: {
        //类似methods
        // 函数名(state: any) {
        //     // state.属性 =······
        // }
    }

})