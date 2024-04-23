import Property from "../property";

export class Rune {
    name: string
    color: string
    property: Property

    constructor(name: string, color: string, property: Property) {
        this.name = name
        this.color = color
        this.property = property
    }
}

const runes: Map<string, Rune> = new Map()
runes.set("冰符石", new Rune("冰符石", "红", new Property({ "体质": 1 })))
runes.set("土符石", new Rune("土符石", "红", new Property({ "耐力": 1 })))
runes.set("雷符石", new Rune("雷符石", "红", new Property({ "敏捷": 1 })))
runes.set("电符石", new Rune("电符石", "红", new Property({ "法术防御": 1 })))
runes.set("风符石", new Rune("风符石", "黄", new Property({ "魔力": 1 })))
runes.set("炎符石", new Rune("炎符石", "黄", new Property({ "力量": 1 })))
runes.set("火符石", new Rune("火符石", "黄", new Property({ "法术伤害": 1 })))

runes.set("红云符石", new Rune("红云符石", "红", new Property({ "气血": 10 })))
runes.set("碧玉符石", new Rune("碧玉符石", "红", new Property({ "防御": 3 })))
runes.set("金光符石", new Rune("金光符石", "蓝", new Property({ "命中": 4 })))
runes.set("天神符石", new Rune("天神符石", "蓝", new Property({ "伤害": 1.5 })))
runes.set("飘渺符石", new Rune("飘渺符石", "绿", new Property({ "灵力": 1.5 })))
runes.set("天仙符石", new Rune("天仙符石", "绿", new Property({ "魔法": 6 })))
runes.set("霞光符石", new Rune("霞光符石", "绿", new Property({ "速度": 1.5 })))

runes.set("地炎符石", new Rune("地炎符石", "黑", new Property({ "力量": 1, "气血": 10 })))
runes.set("素影符石", new Rune("素影符石", "黑", new Property({ "力量": 1, "魔法": 6 })))
runes.set("燕灵符石", new Rune("燕灵符石", "黑", new Property({ "力量": 1, "防御": 3 })))
runes.set("降龙符石", new Rune("降龙符石", "黑", new Property({ "力量": 1, "速度": 1.5 })))
runes.set("苍玉符石", new Rune("苍玉符石", "黑", new Property({ "力量": 1, "躲避": 3 })))
runes.set("流魂符石", new Rune("流魂符石", "黑", new Property({ "力量": 1, "灵力": 1.5 })))
runes.set("九凤符石", new Rune("九凤符石", "黑", new Property({ "力量": 1, "法术防御": 2 })))
runes.set("墨陀符石", new Rune("墨陀符石", "黑", new Property({ "力量": 1, "法术伤害": 2 })))
runes.set("男夕符石", new Rune("男夕符石", "黑", new Property({ "力量": 1, "固定伤害": 2 })))
runes.set("引幽符石", new Rune("引幽符石", "紫", new Property({ "敏捷": 1, "气血": 10 })))
runes.set("波涛符石", new Rune("波涛符石", "紫", new Property({ "敏捷": 1, "魔法": 6 })))
runes.set("玲星符石", new Rune("玲星符石", "紫", new Property({ "敏捷": 1, "命中": 4 })))
runes.set("狂念符石", new Rune("狂念符石", "紫", new Property({ "敏捷": 1, "伤害": 1.5 })))
runes.set("乱花符石", new Rune("乱花符石", "紫", new Property({ "敏捷": 1, "灵力": 1.5 })))
runes.set("幽月符石", new Rune("幽月符石", "紫", new Property({ "敏捷": 1, "法术伤害": 2 })))
runes.set("两仪符石", new Rune("两仪符石", "紫", new Property({ "敏捷": 1, "法术防御": 2 })))
runes.set("七情符石", new Rune("七情符石", "紫", new Property({ "敏捷": 1, "固定伤害": 2 })))
runes.set("召影符石", new Rune("召影符石", "紫", new Property({ "敏捷": 1, "防御": 3 })))
runes.set("虹珀符石", new Rune("虹珀符石", "蓝", new Property({ "体质": 1, "魔法": 6 })))
runes.set("陌影符石", new Rune("陌影符石", "蓝", new Property({ "体质": 1, "命中": 4 })))
runes.set("北冥符石", new Rune("北冥符石", "蓝", new Property({ "体质": 1, "伤害": 1.5 })))
runes.set("灵月符石", new Rune("灵月符石", "蓝", new Property({ "体质": 1, "防御": 3 })))
runes.set("锦瑟符石", new Rune("锦瑟符石", "蓝", new Property({ "体质": 1, "速度": 1.5 })))
runes.set("银光符石", new Rune("银光符石", "蓝", new Property({ "体质": 1, "躲避": 3 })))
runes.set("清心符石", new Rune("清心符石", "蓝", new Property({ "体质": 1, "灵力": 1.5 })))
runes.set("星辰符石", new Rune("星辰符石", "蓝", new Property({ "体质": 1, "法术伤害": 2 })))
runes.set("雪月符石", new Rune("雪月符石", "蓝", new Property({ "体质": 1, "法术防御": 2 })))
runes.set("玄魂符石", new Rune("玄魂符石", "蓝", new Property({ "体质": 1, "固定伤害": 2 })))
runes.set("乾坤符石", new Rune("乾坤符石", "蓝", new Property({ "体质": 1, "气血": 10 })))
runes.set("珍珀符石", new Rune("珍珀符石", "蓝", new Property({ "体质": 1, "魔法": 6 })))
runes.set("银竹符石", new Rune("银竹符石", "蓝", new Property({ "体质": 1, "命中": 4 })))
runes.set("神川符石", new Rune("神川符石", "蓝", new Property({ "体质": 1, "伤害": 1.5 })))
runes.set("玲珑符石", new Rune("玲珑符石", "蓝", new Property({ "体质": 1, "速度": 1.5 })))
runes.set("幕影符石", new Rune("幕影符石", "蓝", new Property({ "体质": 1, "躲避": 3 })))
runes.set("天珍符石", new Rune("天珍符石", "蓝", new Property({ "体质": 1, "灵力": 1.5 })))
runes.set("九影符石", new Rune("九影符石", "蓝", new Property({ "体质": 1, "法术伤害": 2 })))
runes.set("百冥符石", new Rune("百冥符石", "蓝", new Property({ "体质": 1, "法术防御": 2 })))
runes.set("莫念符石", new Rune("莫念符石", "蓝", new Property({ "体质": 1, "固定伤害": 2 })))
runes.set("醉魂符石", new Rune("醉魂符石", "白", new Property({ "魔力": 1, "气血": 10 })))
runes.set("玄羽符石", new Rune("玄羽符石", "白", new Property({ "魔力": 1, "命中": 4 })))
runes.set("霸风符石", new Rune("霸风符石", "白", new Property({ "魔力": 1, "伤害": 1.5 })))
runes.set("无相符石", new Rune("无相符石", "白", new Property({ "魔力": 1, "防御": 3 })))
runes.set("无极符石", new Rune("无极符石", "白", new Property({ "魔力": 1, "速度": 1.5 })))
runes.set("紫晶符石", new Rune("紫晶符石", "白", new Property({ "魔力": 1, "躲避": 3 })))
runes.set("圣火符石", new Rune("圣火符石", "白", new Property({ "魔力": 1, "固定伤害": 2 })))
runes.set("昔光符石", new Rune("昔光符石", "白", new Property({ "魔力": 1, "魔法": 6 })))
runes.set("子蚀符石", new Rune("子蚀符石", "白", new Property({ "魔力": 1, "法术防御": 2 })))
runes.set("流风符石", new Rune("流风符石", "白", new Property({ "魔力": 1, "法术伤害": 2 })))

runes.set("阴仪符石", new Rune("阴仪符石", "黑", new Property({ "气血": 15, "速度": 1.5 })))
runes.set("太极符石", new Rune("太极符石", "紫", new Property({ "气血": 15, "速度": 1.5 })))
runes.set("太阳符石", new Rune("太阳符石", "红", new Property({ "气血": 15, "速度": 1.5 })))
runes.set("少阳符石", new Rune("少阳符石", "黄", new Property({ "气血": 15, "速度": 1.5 })))
runes.set("少阴符石", new Rune("少阴符石", "蓝", new Property({ "气血": 15, "速度": 1.5 })))
runes.set("太阴符石", new Rune("太阴符石", "绿", new Property({ "气血": 15, "速度": 1.5 })))
runes.set("阳仪符石", new Rune("阳仪符石", "白", new Property({ "气血": 15, "速度": 1.5 })))

export default runes