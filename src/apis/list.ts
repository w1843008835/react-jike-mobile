import {http} from '@/utils'
import type {ResType} from './share'


type ChanelItem = {
    id:string
    name:string
}

type ChanelRes = {
    chanels:ChanelItem[]
}

export function fetchChanelAPI(){
    http.request<ResType<ChanelRes>>({
        url:'/data'
    })
}