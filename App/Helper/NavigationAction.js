import {StackActions, CommonActions} from '@react-navigation/native';

export default class NavigationAction {
  static openRootPage(navigation, routeName, params = {}) {
    const resetAction = StackActions.reset({
      index: 0,
      actions: [
        CommonActions.navigate({
          routeName,
          params: {
            ...params,
            previousRoute: route && route !== null ? route.name : null,
          },
        }),
      ],
    });
    if (navigation == null) {
      navigation = this.savedNavigation;
    }
    navigation.dispatch(resetAction);
  }

  static openPage(navigation, routeName, params = {}, route) {
    const pushAction = StackActions.push(routeName, {
      ...params,
      previousRoute: route && route !== null ? route.name : null,
    });
    navigation.dispatch(pushAction);
  }

  static backToPreviousPage(navigation) {
    const popAction = StackActions.pop(1);
    navigation.dispatch(popAction);
  }

  static resetStack(navigation, routes) {
    if (routes.length > 1) {
      const {routeName} = routes[0];
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [CommonActions.navigate({routeName})],
        }),
      );
    }
  }
}
