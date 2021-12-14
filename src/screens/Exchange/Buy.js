// @flow

import React, {useCallback, useState} from "react";
import {View, StyleSheet, Platform} from "react-native";
import SafeAreaView from "react-native-safe-area-view";
import { useTranslation } from "react-i18next";
import { useNavigation, useTheme } from "@react-navigation/native";
import extraStatusBarPadding from "../../logic/extraStatusBarPadding";
import TrackScreen from "../../analytics/TrackScreen";
import Button from "../../components/Button";
import { NavigatorName, ScreenName } from "../../const";
import LText from "../../components/LText";
import BuyOption from "./BuyOption";
import MoonPay from "../../icons/providers/MoonPay";
import Coinify from "../../icons/providers/Coinify";

const forceInset = { bottom: "always" };

type Provider = "moonpay" | "coinify" | null;

export default function Buy() {
  const { t } = useTranslation();
  const navigation = useNavigation();
  const { colors } = useTheme();

  const [provider, setProvider] = useState<Provider>(null)

  const navigateToMoonPay = useCallback(() => {
    navigation.navigate(NavigatorName.Platform, {
      screen: ScreenName.PlatformCatalog,
      params: {
        platform: "moonpay",
      }
    });
  })

  const navigateToCoinify = useCallback(() => {
    navigation.navigate(ScreenName.Coinify);
  })

  const onContinue = () => {
    provider === "moonpay" ? navigateToMoonPay() : navigateToCoinify();
  }

  const moonPayIcon = <MoonPay size={40} />
  const coinifyIcon = <Coinify size={40} />

  return (
    <SafeAreaView
      style={[
        styles.root,
        {
          backgroundColor: colors.card,
          paddingTop: extraStatusBarPadding,
        },
      ]}
      forceInset={forceInset}
    >
      <TrackScreen category="Buy Crypto" />
      <View style={styles.body}>
        <LText semiBold>{t("exchange.buy.title")}</LText>
        <View style={styles.providers}>
          <BuyOption name={"MoonPay"} icon={moonPayIcon} supportedCoinsCount={40} onPress={() => setProvider("moonpay")} isActive={provider === "moonpay"} />
          <BuyOption name={"Coinify"} icon={coinifyIcon} supportedCoinsCount={10} onPress={() => setProvider("coinify")} isActive={provider === "coinify"} />
        </View>
      </View>
      <View style={[styles.footer, {
        ...Platform.select({
          android: {
            borderTopColor: "rgba(20, 37, 51, 0.1)",
            borderTopWidth: 1
          },
          ios: {
            shadowColor: "rgba(20, 37, 51, 0.04)",
            shadowRadius: 14,
            shadowOffset: "0px, -4px"
          },
        }),
      }]}>
        <Button containerStyle={styles.button} type={"primary"} title={t("common.continue")} onPress={() => onContinue()} disabled={!provider}/>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  body: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: 16,
  },
  providers: {
    flex: 1,
    marginTop: 8
  },
  footer: {
    marginTop: 40,
    padding: 16
  },
  button: {
    alignSelf: "stretch",
    minWidth: "100%"
  }
});
