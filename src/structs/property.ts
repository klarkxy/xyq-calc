export const vaildPropertyKeys = [
    '体质', '魔力', '力量', '敏捷', '耐力',
    '命中', '伤害', '防御', '速度', '法伤', '法防', "气血", "魔法", "躲避",
    '灵力', '物理暴击等级', '穿刺等级', '狂暴等级', '法术暴击等级',
    '法术伤害结果', '封印命中等级', '治疗能力', '固定伤害'
]

const sameName: { [key: string]: string } = {
    "法术伤害": "法伤",
    "法术防御": "法防",
}

export default class Property {
    property: { [key: string]: number } = {}

    constructor(p: { [key: string]: number } = {}) {
        this.property = p
    }

    has(key: string): boolean {
        return this.property[key] !== undefined
    }

    get(key: string): number {
        return this.property[key] || 0
    }

    set(key: string, value: number) {
        if (sameName[key]) {
            this.property[sameName[key]] = value
        } else {
            this.property[key] = value
        }
    }

    add(key: string, value: number) {
        this.property[key] = this.get(key) + value
    }

    merge(...anothers: Property[]) {
        for (const another of anothers) {
            for (const key of vaildPropertyKeys) {
                if (another.property[key] || this.property[key]) {
                    this.property[key] = this.get(key) + another.get(key)
                }
            }
        }
    }

    reset() {
        this.property = {}
    }
}