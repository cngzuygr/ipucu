import { View, Text, ActivityIndicator } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

export default function SplashScreen() {
	return (
		<SafeAreaView
			style={{
				alignItems: "center",
				justifyContent: "center",
				flex: 1,
				backgroundColor: "#101010",
			}}
		>
			<ActivityIndicator size="large" color="yellow" />
			<StatusBar style="dark" />
		</SafeAreaView>
	);
}
