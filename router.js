import React, { useCallback } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useNavigation } from "@react-navigation/native";
import {
  AntDesign,
  Feather,
  MaterialIcons,
  Ionicons,
} from "@expo/vector-icons";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";


import RegistrationScreen from "./Screens/RegistrationScreen";
import LoginScreen from "./Screens/LoginScreen";
import PostsScreen from "./Screens/PostsScreen";
import CreatePostsScreen from "./Screens/CreatePostsScreen";
import ProfileScreen from "./Screens/ProfileScreen";

const MainStack = createStackNavigator();
const MainTab = createBottomTabNavigator();

const CreatePostsHeaderLeft = () => {
  const navigation = useNavigation();

  const handleGoBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  return (
    <TouchableOpacity onPress={handleGoBack}>
      <Ionicons name="arrow-back" size={24} color="#212121" />
    </TouchableOpacity>
  );
};


export const useRoute = (isAuth) => {
    const navigation = useNavigation();

    const handleLogout = useCallback(() => {
      navigation.reset({
        index: 0,
        routes: [{ name: "Login" }]
      });
    }, [navigation]);

  if (!isAuth) {
    return (
      <MainStack.Navigator initialRouteName="Login">
        <MainStack.Screen
          name="Registration"
          component={RegistrationScreen}
          options={{
            headerShown: false,
          }}
        />
        <MainStack.Screen
          options={{
            headerShown: false,
          }}
          name="Login"
          component={LoginScreen}
        />
      </MainStack.Navigator>
    );
  }
  return (
    <MainTab.Navigator tabBarOptions={{ showLabel: false }}>
      <MainTab.Screen
        options={({ navigation }) => ({
          tabBarIcon: ({ focused, size, color }) => (
            <AntDesign name="appstore-o" size={24} color="#212121" />
          ),
          headerRight: ({ focused, size, color }) => (
            <TouchableOpacity onPress={handleLogout}>
              <MaterialIcons name="logout" size={24} color="#BDBDBD" />
            </TouchableOpacity>
          ),
          headerTitle: "Публикации",
          headerTitleAlign: "center",
          headerRightContainerStyle: {
            paddingRight: 10,
          },
        })}
        name="Posts"
        component={PostsScreen}
      />

      <MainTab.Screen
        options={{
          headerLeft: () => <CreatePostsHeaderLeft />,
          tabBarIcon: () => (
            <View style={styles.newBtn}>
              <Text style={styles.textNewBtn}>+</Text>
            </View>
          ),
          headerTitle: "Создать публикацию",
          headerTitleAlign: "center",
          headerLeftContainerStyle: {
            paddingLeft: 16,
          },
        }}
        name="Create"
        component={CreatePostsScreen}
      />
      
      <MainTab.Screen
        options={{
          tabBarIcon: ({ focused, size, color }) => (
            <Feather name="user" size={24} color="#212121" />
          ),
        }}
        name="Profile"
        component={ProfileScreen}
      />
    </MainTab.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  newBtn: {
    backgroundColor: "#FF6C00",
    borderRadius: 100,
    width: 70,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  textNewBtn: {
    color: "#fff",
    fontSize: 25,
    fontWeight: "200",
  },
});
