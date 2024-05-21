import { Dimensions } from "react-native";


const widthScreen = Dimensions.get('window').width
const heightScreen = Dimensions.get('window').height
const ratioHeight = heightScreen / widthScreen
const ratioHwidth = widthScreen / heightScreen
export {widthScreen,heightScreen,ratioHeight,ratioHwidth}