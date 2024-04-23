import { error } from "console"
import Property from "../property"
/*
光芒石：一段的光芒石可以增加40点气血值。
太阳石：一段的太阳石可以提高8点的伤害。
月亮石：一段的月亮石可以增加12点防御。
黑宝石：一段的黑宝石可以增加8点的速度。
红玛瑙：一段的红玛瑙可以增加25点命中。
舍利子：一段的舍利子可以增加6点灵力。
翡翠石：一段的翡翠石可以增加12点法术防御。
神秘石：一段的翡翠石可以提高20点躲避力。
 */

export default class Gemstone {
    stoneLevel: { [key: string]: number } = {}

    calc(): Property {
        const property = new Property()
        for (const key in this.stoneLevel) {
            switch (key) {
                case '光芒石':
                    property.set('气血', this.stoneLevel[key] * 40)
                    break
                case '太阳石':
                    property.set('伤害', this.stoneLevel[key] * 8)
                    break
                case '月亮石':
                    property.set('防御', this.stoneLevel[key] * 12)
                    break
                case '黑宝石':
                    property.set('速度', this.stoneLevel[key] * 8)
                    break
                case '红玛瑙':
                    property.set('命中', this.stoneLevel[key] * 25)
                    break
                case '舍利子':
                    property.set('灵力', this.stoneLevel[key] * 6)
                    break
                case '翡翠石':
                    property.set('法术防御', this.stoneLevel[key] * 12)
                    break
                case '神秘石':
                    property.set('躲避', this.stoneLevel[key] * 20)
                    break
                default:
                    error(`未知的宝石类型：${key}`)
            }
        }
        return property
    }
}