import React, { useEffect, useState } from "react";
import { StyleSheet, FlatList, SafeAreaView, View } from "react-native";
/* lib */
import { getShops } from "../lib/firebase";
/* components */
import { ShopReviewItem } from "../components/ShopReviewItem";
/* types */
import { Shop } from "../types/shop";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../types/navigation";

type Props = {
  navigation: StackNavigationProp<RootStackParamList, "Home">;
};

export const HomeScreen = ({ navigation }: Props) => {
  const [shops, setShops] = useState<Shop[]>([]);

  useEffect(() => {
    getFirebaseItems();
  }, []);

  const getFirebaseItems = async () => {
    const shops = await getShops();
    setShops(shops);
    console.log(shops);
  };

  // navigation.navigateの説明  https://reactnavigation.org/docs/params/ 
  const onPressShop = (shop: Shop) => {
    navigation.navigate("Shop", { shop });
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={shops}
        renderItem={({ item }: { item: Shop }) => (
          <ShopReviewItem shop={item} onPress={() => onPressShop(item)} />
        )}
        // keyExtractorで番号を指定することでデータのidなどに沿ってitemを並び替えられる。 データがidなどのindexを持つときは、map関数のように第２引数にindexを取ることで自動でカウントしてくれる stringで指定する必要があるので注意
        keyExtractor={(item, index) => index.toString()}
        numColumns={2}
      /> 
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
