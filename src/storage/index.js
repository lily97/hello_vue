// 工具箱 怎么存取值

// import { delete } from "vue/types/umd";

/* storge封装 */
const STORAGE_KEY = 'hello_vue';
export default {
    //存储值
    setItem(key, value, module_name) {
        if (module_name) {
            let val = this.getItem(module_name);
            val[key] = value;
            this.setItem(module_name, val)
        } else {
            let val = this.getStorage();
            val[key] = value;
            window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(val))
        }

    },

    // 获取值
    // 获取某一个模块下面的属性user下面的userName
    getItem(key, module_name) {
        if (module_name) {
            let val = this.getItem(module_name);
            if (val) return val[key];
        }
        return this.getStorage()[key];
    },

    // 获取整个数据
    getStorage() {
        return JSON.parse(window.sessionStorage.getItem(STORAGE_KEY) || '{}');
    },

    // 清空所有数据
    clear(key, module_name) {
        // debugger
        let val = this.getStorage();
        if (module_name) {
            if(!val[module_name]) return;
            delete val[module_name][key]
        } else {
            delete val[key];
        }
        window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(val))
    }
}