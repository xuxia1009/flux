// state数据改变后通知view层
export var event = {
        eventObj: {},
        $on(eventName, fn) {
            if (this.eventObj[eventName] === undefined) {
                this.eventObj[eventName] = []
            }
            this.eventObj[eventName].push(fn)
        },
        $emit() {
            let eventName = arguments[0]
            let dataArr = [].concat(Array.prototype.slice(arguments, 1))
            this.eventObj[eventName].forEach(function(i) {
                i(...dataArr)
            }, this);
        },
        destroy(eventName) {
            if (this.eventObj[eventName] !== undefined) {
                delete this.eventObj[eventName]
            }
        }
    }
    // 数据存储层
export var state = {
        num: 1,
        getnum() {
            return this.num
        },
        addNum(i) {
            this.num += i
            console.log(this.num)
        }
    }
    // 事件的派发
export var dispatch = function(actions) {

        switch (actions.type) {
            case "addNum":
                {
                    state.addNum(actions.text)
                }
        }
        event.$emit("change")
    }
    // 事件触发
export var actions = {
    addNum(text) {
        dispatch({
            type: "addNum",
            text: text
        })
    }
}