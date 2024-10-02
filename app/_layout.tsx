import { Stack } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function Layout() {
    return <GestureHandlerRootView>
      <Stack screenOptions={{ headerShown: false}}>
        <Stack.Screen name="(nobottom)/accinfo" 
        options={{headerShown: true, title: "Account"}}
        />
      </Stack>
    </GestureHandlerRootView>
}