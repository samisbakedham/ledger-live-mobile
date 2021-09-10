import { useCallback, useEffect, useMemo } from "react";
import { useSelector } from "react-redux";
import BigNumber from "bignumber.js";
import { setItem, reloadAllTimelines } from "react-native-widgetkit";
import { formatCurrencyUnit } from "@ledgerhq/live-common/lib/currencies/formatCurrencyUnit";
import { counterValueCurrencySelector } from "../reducers/settings";
import { usePortfolio } from "../actions/portfolio";

const formatConfig = {
  disableRounding: true,
  showCode: true,
  discreet: false, // We could have this too
};
/**
 * TODO define what data we want to expose to the Android/iOS world,
 */
const useWidget = () => {
  const counterValueCurrency = useSelector(counterValueCurrencySelector);
  const portfolio = usePortfolio();

  const { countervalueChange } = portfolio;

  const data = useMemo(() => {
    // Calculate the total balance to show, formatted already
    const rawBalance = new BigNumber(
      portfolio.balanceHistory[portfolio.balanceHistory.length - 1].value,
    );
    const totalBalance = formatCurrencyUnit(
      counterValueCurrency.units[0],
      rawBalance,
      formatConfig,
    );

    // Format the delta from the portfolio as a human readable value
    let delta = "0%";
    if (countervalueChange.percentage) {
      const p = countervalueChange.percentage;
      delta = `${p > 0 ? "⬈" : "⬊"} ${(p * 100).toFixed(2)}%`;
    }

    // Share whatever data we want with the widget
    return {
      totalBalance,
      delta,
      // distribution: formatDistributionData(distribution),
    };
  }, [
    counterValueCurrency.units,
    countervalueChange.percentage,
    portfolio.balanceHistory,
  ]);

  const update = useCallback(() => {
    // Invoke NativeModule for iOS
    const setItems = async () => {
      try {
        await Promise.all(
          Object.entries(data).map(([key, val]) =>
            setItem(key, val, "group.com.kvn"),
          ),
        );
        await reloadAllTimelines();
      } catch (e) {
        console.log("err", e);
      }
    };
    setItems();
  }, [data]);

  useEffect(update, [data, update]);

  return [update]; // Expose the update callback in case we want to manually trigger
};
export default useWidget;
