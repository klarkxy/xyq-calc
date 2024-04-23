import property from "./property"


export default class Character {
    name: string = ''   // 名字
    school: string = '' // 门派 

    // 基础属性，仅包含体质、魔力、力量、敏捷、耐力
    base: property = new property()
    // 额外属性，用于调整计算值和实际值之间的差异
    extra: property = new property()
}