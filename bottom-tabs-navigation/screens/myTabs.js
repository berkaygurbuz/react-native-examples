import * as React from "react"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./Home"
import Settings from "./Settings.js"


const Tab = createBottomTabNavigator();

export default function MyTabs() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Settings" component={Settings} />
        </Tab.Navigator>
    )
}
