var areaData = require("../assets/area/pca-code.json");

/**
 * 获取省市区
 */
export function getArea(code){

    if (!code) return
    if (code.length != 6) return

    let province = code.substring(0,2)
    let city     = code.substring(0,4)
    let country  = code

    let provinceData    = areaData.asEnumerable().where(x => x.code == province).first()
    let cityData        = provinceData.city.asEnumerable().where(x => x.code == city).first()
    let countryData     = cityData.county.asEnumerable().where(x => x.code == country).first()

    let provinceName    = provinceData.name
    let cityName        = cityData.name
    let countryName     = countryData.name

    return [provinceName, cityName, countryName]
}

/***
 * 显示周几
 */
export function getWeekDate(number){

    number = String(number)
    const days = {
        '1': "周一",
        '2': "周二",
        '3': "周三",
        '4': "周四",
        '5': "周五",
        '6': "周六",
        '0': "周日",
    }

    if(!number) return "未知"
    return days[number]
}

export function filter(str){
    return str.replace(/[\-\_\,\!\|\~\`\(\)\#\$\%\^\&\*\{\}\:\;\"\L\<\>\?]/g, '');
}