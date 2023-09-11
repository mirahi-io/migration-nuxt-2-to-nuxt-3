// userStore.ts
import { defineStore } from 'pinia';

export const useUserStore = defineStore({
    id: 'user',

    state: () => ({
        _id: 0,
        name: '',
    }),

    actions: {
        load() {
            return new Promise<void>(resolve => {
                setTimeout(() => {
                    this.update({ _id: 1, name: 'Ben' });
                    resolve();
                }, 1000);
            });
        },

        update(user: { _id: number; name: string; }) {
            Object.assign(this, user);
        }
    }
});
