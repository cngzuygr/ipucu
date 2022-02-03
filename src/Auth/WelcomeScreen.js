import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { TextInput } from "react-native-paper";
import { AntDesign, FontAwesome } from "@expo/vector-icons";

export default function WelcomeScreen({ navigation }) {
	const [name, setName] = useState("Cengiz Uygur");
	const [email, setEmail] = useState("cengiz-uygur11@hotmail.com");
	const [password, setPassword] = useState("");

	const scrollRef = useRef();

	useEffect(() => {
		scrollRef.current?.scrollToEnd({ animated: true });
	}, [password]);

	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: "#101020" }}>
			<ScrollView
				ref={scrollRef}
				style={{ width: "100%" }}
				keyboardShouldPersistTaps="never"
				keyboardDismissMode="on-drag"
			>
				<Text
					style={{
						color: "white",
						fontSize: 36,
						fontFamily: "Oswald",
						alignSelf: "center",
					}}
				>
					Kayıt Ol
				</Text>
				<Text
					style={{
						fontSize: 16,
						fontFamily: "Oswald",
						color: "gray",
						marginTop: 20,
						marginLeft: 20,
					}}
				>
					Aşağıdaki seçeneklerden biriyle kaydol.
				</Text>
				<View
					style={{
						flexDirection: "row",
						justifyContent: "space-around",
						marginTop: 20,
					}}
				>
					<TouchableOpacity
						style={{
							width: "40%",
							height: 60,
							backgroundColor: "#212138",
							alignItems: "center",
							justifyContent: "center",
							borderRadius: 15,
							borderRadius: 15,
							borderWidth: 2,
							borderColor: "pink",
						}}
					>
						<AntDesign name="google" size={24} color="white" />
					</TouchableOpacity>
					<TouchableOpacity
						style={{
							width: "40%",
							height: 60,
							backgroundColor: "#212138",
							alignItems: "center",
							justifyContent: "center",
							borderRadius: 15,
							borderWidth: 2,
							borderColor: "pink",
						}}
					>
						<FontAwesome name="facebook" size={24} color="white" />
					</TouchableOpacity>
				</View>
				<Text
					style={{
						fontSize: 16,
						fontFamily: "Oswald",
						color: "white",
						marginTop: 20,
						marginLeft: 20,
						letterSpacing: 1,
					}}
				>
					İsim
				</Text>
				<TextInput
					mode="outlined"
					value={name}
					maxLength={32}
					onChangeText={(text) => setName(text)}
					activeOutlineColor="pink"
					style={{ marginTop: 5, width: "90%", alignSelf: "center" }}
					right={
						name.length > 5 ? (
							<TextInput.Icon name="check" color="green" />
						) : (
							<TextInput.Icon name="alert-circle" color="red" />
						)
					}
				/>
				<Text
					style={{
						fontSize: 16,
						fontFamily: "Oswald",
						color: "white",
						marginTop: 10,
						marginLeft: 20,
						letterSpacing: 1,
					}}
				>
					Email
				</Text>
				<TextInput
					mode="outlined"
					value={email}
					maxLength={32}
					activeOutlineColor="pink"
					onChangeText={(text) => setEmail(text)}
					style={{
						width: "90%",
						alignSelf: "center",
						marginTop: 5,
					}}
					right={
						email.includes("@") ? (
							<TextInput.Icon name="check" color="green" />
						) : (
							<TextInput.Icon name="alert-circle" color="red" />
						)
					}
				/>
				<Text
					style={{
						fontSize: 16,
						fontFamily: "Oswald",
						color: "white",
						marginTop: 10,
						marginLeft: 20,
						letterSpacing: 1,
					}}
				>
					Şifre
				</Text>
				<TextInput
					mode="outlined"
					value={password}
					maxLength={16}
					activeOutlineColor="pink"
					secureTextEntry={true}
					onChangeText={(text) => setPassword(text)}
					style={{
						width: "90%",
						alignSelf: "center",
						marginTop: 5,
					}}
					right={
						password.length > 4 ? (
							<TextInput.Icon name="check" color="green" />
						) : (
							<TextInput.Icon name="alert-circle" color="red" />
						)
					}
				/>
				<TouchableOpacity
					style={{
						width: "60%",
						height: 50,
						alignSelf: "center",
						backgroundColor: "purple",
						marginTop: 40,
						marginBottom: 20,
						alignItems: "center",
						justifyContent: "center",
						borderRadius: 15,
					}}
				>
					<Text style={{ fontSize: 20, fontFamily: "Oswald", color: "white" }}>
						Kaydol
					</Text>
				</TouchableOpacity>
				<View
					style={{
						justifyContent: "center",
						flexDirection: "row",
						marginBottom: 20,
					}}
				>
					<Text
						style={{
							fontFamily: "Oswald",
							fontSize: 16,
							color: "white",
						}}
					>
						Zaten bir hesabın var mı?
					</Text>
					<Text
						onPress={() => navigation.navigate("LoginScreen")}
						style={{
							fontFamily: "Oswald",
							fontSize: 16,
							color: "orange",
							marginLeft: 5,
						}}
					>
						Giriş Yap.
					</Text>
				</View>
			</ScrollView>
			<StatusBar />
		</SafeAreaView>
	);
}
