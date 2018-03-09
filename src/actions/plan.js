/**
 * Created by zhuyu on 2018/3/8.
 */
import * as types from './action-type.js';
// 添加计划
export function addPlan(item) {
    return {
        type: types.ADD,
        item
    };
}
// 删除计划
export function deletePlan(id) {
    return {
        type: types.DELECT,
        id
    };
}
// 显示隐藏弹层
export function show(show) {
    return {
        type: types.SHOW,
        show
    };
}