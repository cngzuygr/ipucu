import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

export default function HomeScreen() {
	return (
		<SafeAreaView
			style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
		>
			<Text>HomeScreen</Text>
			<StatusBar />
		</SafeAreaView>
	);
}
