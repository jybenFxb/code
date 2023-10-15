

import request from "@/utils/request";
import type { RootObject } from "./type";

// TS 枚举
enum API {
    HOSPITAL_URL = '/hosp/hospital/'
}

export const reqHospital = (page: Number, limit: Number) => request.get<any,RootObject>(API.HOSPITAL_URL + `${page}/${limit}`) 