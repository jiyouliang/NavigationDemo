## NavigationDemo

### 1、Screenshot

![](/screenshot/navigator1.gif) ![](/screenshot/navigator2.gif) ![](/screenshot/navigator3.gif)



### 2、Running ReactNative Application

    yarn install
    # or 
    # npm install


    # optional:maybe
    # cd ios && pod install


    # ios
    react-native run-ios


    # andorid
    react-native run-android



### 3、Important code

* The Global navigation fun:

        // NavigationUtil.tsx
        static navigation?: any;

        static goPage(page) {
            navigation.navigate(page);
        }


* Init NavigationUtil.navigation object:

        //HomeScreen.tsx
        NavigatorUtil.navigation = this.props.navigation;


* call navigator in Tab or normal Compoment:

        // AndroidTab.tsx
        NavigatorUtil.goPage('DetailScreen');




