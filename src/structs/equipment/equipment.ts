import Property from "../property"
import Gemstone from "./gemstone"

// 武器
export const vaildWeaponPropertyKeys = [
    "命中", "伤害",
    "体力", "魔力", "力量", "敏捷", "耐力",
]
export const vaildWeaponGemstoneKeys = [
    "红玛瑙", "太阳石", "神秘石"
]
// 衣服
export const vaildClothesPropertyKeys = [
    "防御",
    "体力", "魔力", "力量", "敏捷", "耐力",
]
export const vaildClothesGemstoneKeys = [
    "月亮石", "舍利子", "光芒石", "翡翠石"
]
// 头盔
export const vaildHelmetPropertyKeys = [
    "防御", "魔法"
]
export const vaildHelmetGemstoneKeys = [
    "红玛瑙", "太阳石", "月亮石"
]
// 项链
export const vaildNecklacePropertyKeys = [
    "灵力"
]
export const vaildNecklaceGemstoneKeys = [
    "舍利子"
]
// 腰带
export const vaildBeltPropertyKeys = [
    "气血", "防御"
]
export const vaildBeltGemstoneKeys = [
    "光芒石", "黑宝石", "神秘石"
]
// 鞋子
export const vaildShoesPropertyKeys = [
    "敏捷", "防御"
]
export const vaildShoesGemstoneKeys = [
    "黑宝石", "神秘石"
]


export class Equipment {
    name: string = ''

    base: Property = new Property()    // 基础属性
    extra: Property = new Property()   // 额外属性

    gemstone: Gemstone = new Gemstone() // 宝石

    calc(): Property {
        const property = new Property()
        property.merge(this.base, this.extra, this.gemstone.calc())
        return property
    }
}