import React from 'react';
/**
 * 全局跳转工具类
 *
 * @export
 * @class NavigatorUtil
 */
export default class NavigatorUtil {
  static navigation?: any;

  /**
   * 跳转指定页面
   *
   * @static
   * @param {String} page 页面路由名
   * @param {*} params 参数
   * @memberof NavigatorUtils
   */
  static goPage(page: string, params) {
    const navigation = NavigatorUtil.navigation;
    if (!navigation) {
      console.log('navigation is null!');
      return;
    }
    navigation.navigate(page, {
      ...params,
    });
  }
}
