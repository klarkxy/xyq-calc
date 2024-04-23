import Property from "../property";

// 1级星辉石能提供的前排属性
export const stoneFrontProperty: { [key: string]: number } = {
    "固定伤害": 4,
    "法术伤害": 4,
    "伤害": 4,
    "封印命中等级": 4,
    "法术暴击等级": 4,
    "物理暴击等级": 4,
    "狂暴等级": 3,
    "穿刺等级": 4,
    "法术伤害结果": 3,
    "治疗能力": 3,
    "速度": 3,
}
// 1级星辉石能提供的后排属性
export const stoneBackProperty: { [key: string]: number } = {
    "气血回复效果": 4,
    "气血": 4,
    "防御": 4,
    "抵抗封印等级": 4,
    "抗法术暴击等级": 4,
    "格挡值": 3,
    "法术防御": 4,
    "抗物理暴击等级": 4,
}

export class Ornament {
    name: string = ''
    stoneLevel: number = 0  // 星辉石等级

    suitLevel: number = 0   // 套装等级
    suitName: string = ''   // 套装名称

    base: Property = new Property()    // 基础属性 - 白字
    extra: Property = new Property()   // 额外属性 - 词条

    calc(): Property {
        const property = new Property()
        property.merge(this.base, this.extra)
        // 计算星辉石加成
        for (const key in stoneFrontProperty) {
            if (this.extra.has(key)) {
                property.add(key, stoneFrontProperty[key] * this.stoneLevel)
            }
        }
        return property
    }
}