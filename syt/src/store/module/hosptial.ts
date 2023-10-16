


import { defineStore } from 'pinia'
import { reqHospital } from '@/api/home'



export const useDefineStore = defineStore('hosptial', {

    state: () => {
        return {
            datahosp:{}
        }
    },
    getters: {},
    actions: {
        async getHosp(a: Number, b: Number) {
            const data = await reqHospital(a, b)
            this.datahosp = data.data
            console.log(data, 'data');

        }

    }


})

