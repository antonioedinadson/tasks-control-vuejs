import { INotify } from "../interfaces/INotify"
import { store } from '../store/store';

export const notification = {
    data() {
        return {
            
        }
    },
    methods: {
        notify: (notify: INotify): void => {
            store.commit('NOTIFY', notify);
        }
    }
}