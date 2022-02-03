import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import { useFonts } from "expo-font";

//React Navigation
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import WelcomeScreen from "./src/Auth/WelcomeScreen";
import { useMemo, useState } from "react";
import HomeScreen from "./src/App/HomeScreen";
import { LogBox } from "react-native";
import SplashScreen from "./src/SplashScreen";
import LoginScreen from "./src/Auth/LoginScreen";

//Ignore warning logs
LogBox.ignoreLogs([
	//Firestore issue
	"Setting a timer",
	//Auth issue
	"AsyncStorage has been extracted from react-native core and will be removed in a future release.",
]);

const AuthStack = createStackNavigator();
const AuthStackScreen = () => (
	<AuthStack.Navigator screenOptions={{ headerShown: false }}>
		<AuthStack.Screen name="WelcomeScreen" component={WelcomeScreen} />
		<AuthStack.Screen name="LoginScreen" component={LoginScreen} />
	</AuthStack.Navigator>
);

const AppStack = createStackNavigator();
const AppStackScreen = () => (
	<AppStack.Navigator screenOptions={{ headerShown: false }}>
		<AppStack.Screen name="HomeScreen" component={HomeScreen} />
	</AppStack.Navigator>
);

const RootStack = createStackNavigator();
const RootStackScreen = ({ currUser }) => (
	<RootStack.Navigator screenOptions={{ headerShown: false }}>
		{currUser?.displayName ? (
			<RootStack.Screen name="App" component={AppStackScreen} />
		) : (
			<RootStack.Screen name="Auth" component={AuthStackScreen} />
		)}
	</RootStack.Navigator>
);

export default function App() {
	const [fonts] = useFonts({
		Oswald: require("./assets/fonts/Oswald-VariableFont_wght.ttf"),
	});
	const [currUser, setCurrUser] = useState();
	const [isLoading, setIsLoading] = useState(true);

	useMemo(() => {
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			if (user) {
				setCurrUser(user);
			}
			setIsLoading(false);
		});

		return () => unsubscribe;
	}, []);

	if (isLoading || !fonts) {
		return <SplashScreen />;
	}

	return (
		<NavigationContainer>
			<RootStackScreen currUser={currUser} />
		</NavigationContainer>
	);
}
