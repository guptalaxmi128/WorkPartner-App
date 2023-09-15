import React, { useState, useEffect } from "react";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabNavigator from "./navigation/TabNavigator";
import Main from "./screens/Main";
import LoginScreen from "./screens/LoginScreen";
import SignUp from "./screens/SignUp";
import OtpScreen from "./screens/OtpScreen";
import SplashScreen from "./screens/SplashScreen";
import WorkingHours from "./components/WorkingHours";
import ChildSnaglist from "./components/ChildSnaglist";
import NewSnaglist from "./components/NewSnaglist";
import MyDetails from "./components/MyDetails";
import BankDetails from "./components/BankDetails";
import PersonalDetails from "./components/PersonalDetails";
import Organization from "./components/Organization";
import KYC from "./components/KYC";
import WorkType from "./components/WorkType";
import thunk from "redux-thunk";
import { createStore, applyMiddleware, compose } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { Provider } from "react-redux";
import { reducers } from "./reducers";
import Notifications from "./components/Notifications";
import MyOrders from "./components/MyOrders";
import MoreDetails from "./components/MoreDetails";
import UpdateStatusParent from "./components/UpdateStatusParent";
import MoreSnaglist from "./components/MoreSnaglist";
import HistorySection from "./components/HistorySection";
import Wallet from "./components/Wallet";
import Withdraw from "./components/Withdraw";
import CreateTeam from "./components/CreateTeam";
// import { useDispatch } from 'react-redux';
import { store } from "./store/store";
import ShowTeamTables from "./components/ShowTeamTables";
import UpdateKYC from "./components/UpdateKYC";
import UpdateBankDetail from "./components/UpdateBankDetail";
import UpdateOrganization from "./components/UpdateOrganization";
import EditOrganization from "./components/EditOrganization";
import EditKYC from "./components/EditKYC";
import EditBankdetails from "./components/EditBankdetails";
import HireMeModal from "./components/HireMeModal";

const Stack = createNativeStackNavigator();
// const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));
// export default function App (){
function App() {
  const [loaded] = useFonts({
    Poppins: require("./assets/fonts/Poppins-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Splash"
          component={SplashScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Main"
          component={Main}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Sign Up"
          component={SignUp}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="TabNavigator"
          component={TabNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Otp"
          component={OtpScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Working hours"
          component={WorkingHours}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="New Snaglist"
          component={ChildSnaglist}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="BtnSnaglist"
          component={NewSnaglist}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MyDetails"
          component={MyDetails}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="BankDetails"
          component={BankDetails}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="PersonalDetails"
          component={PersonalDetails}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Organization"
          component={Organization}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="KYC"
          component={KYC}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="WorkType"
          component={WorkType}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Notifications"
          component={Notifications}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="UpdateStatus"
          component={UpdateStatusParent}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MoreDetails"
          component={MoreDetails}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MoreDetailsSnaglist"
          component={MoreSnaglist}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="HistorySection"
          component={HistorySection}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MyOrders"
          component={MyOrders}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Wallet"
          component={Wallet}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Withdraw"
          component={Withdraw}
          options={{ headerShown: false }}
        />
         <Stack.Screen
          name="CreateTeam"
          component={CreateTeam}
          options={{ headerShown: false }}
        />
         <Stack.Screen
          name="ShowTable"
          component={ShowTeamTables}
          options={{ headerShown: false }}
        />
         <Stack.Screen
          name="UpdateKYC"
          component={UpdateKYC}
          options={{ headerShown: false }}
        />
          <Stack.Screen
          name="UpdateBankDetail"
          component={UpdateBankDetail}
          options={{ headerShown: false }}
        />
          <Stack.Screen
          name="UpdateOrganization"
          component={UpdateOrganization}
          options={{ headerShown: false }}
        />
          <Stack.Screen
          name="EditOrganization"
          component={EditOrganization}
          options={{ headerShown: false }}
        />
         <Stack.Screen
          name="EditKYC"
          component={EditKYC}
          options={{ headerShown: false }}
        />
          <Stack.Screen
          name="EditBankdetails"
          component={EditBankdetails}
          options={{ headerShown: false }}
        />
           <Stack.Screen
          name="HireMeModal"
          component={HireMeModal}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};
