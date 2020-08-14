import React, { useEffect, useLayoutEffect, useState } from "react";
import { Linking, StyleSheet, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Icon } from "react-native-elements";
import firestore from "@react-native-firebase/firestore";
import { startOfToday } from "date-fns";

import AccordionItem from "../components/atoms/AccordionItem";
import Button from "../components/atoms/Button";
import ImageHeader from "../components/atoms/ImageHeader";
import { fontStyles } from "../../styles/global";

const GivingScreen = ({ navigation }) => {
  const [verse, setVerse] = useState("");
  const [verseReference, setVerseReference] = useState("");

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Icon
          color="transparent"
          name="chevron-left"
          onPress={() => navigation.navigate("Home")}
          reverse
          type="font-awesome-5"
        />
      ),
      headerTintColor: "white",
      headerTransparent: true,
    });
  }, [navigation]);

  useEffect(() => {
    const query = async () => {
      return firestore()
        .collection("giving")
        .orderBy("date", "desc")
        .where("date", "<=", startOfToday())
        .limit(1)
        .get()
        .then((data) => {
          data.forEach((doc) => {
            setVerse(doc.data().verse);
            setVerseReference(doc.data().verseReference);
          });
        });
    };
    query();
  }, []);

  return (
    <View style={styles.container}>
      <ImageHeader
        height={350}
        source={require("../../../assets/img/giving.png")}
      >
        <View style={styles.emptyContainer} />
        <View style={styles.verseContainer}>
          <View style={styles.verseTextContainer}>
            <Text style={styles.verseText}>{verse}</Text>
          </View>
          <View style={styles.verseReferenceTextContainer}>
            <Text style={styles.verseReferenceText}>{verseReference}</Text>
          </View>
        </View>
      </ImageHeader>
      <ScrollView bounces={false} showsVerticalScrollIndicator={false}>
        <View style={styles.headerContainer}>
          <Text style={fontStyles.primaryHeading}>Ways To Give</Text>
          <Text>
            Giving is an expression of thankfulness, worship, and an act of
            faith. For more information, check out{" "}
            <Text
              onPress={() => Linking.openURL("https://hongkong.hmcc.net")}
              style={fontStyles.linkText}
            >
              our website
            </Text>
            .
          </Text>
        </View>
        <AccordionItem
          leftIcon={{ name: "bank", type: "material-community" }}
          title="Bank Transfer"
        >
          <View style={styles.accordionContainer}>
            <Text>You may use the following information:</Text>
            <View style={styles.paddingContainer} />
            <Text>
              <Text style={fontStyles.boldText}>Bank Name</Text>: China
              Construction Bank (Asia) Corporation Limited
            </Text>
            <Text>
              <Text style={fontStyles.boldText}>Bank Code</Text>: 009
            </Text>
            <Text>
              <Text style={fontStyles.boldText}>Branch Code</Text>: 845
            </Text>
            <Text>
              <Text style={fontStyles.boldText}>Account Name</Text>: Harvest
              Mission Community Church HK
            </Text>
            <Text>
              <Text style={fontStyles.boldText}>Account Number</Text>: 13012090
            </Text>
            <View style={styles.paddingContainer} />
            <Text>
              <Text style={fontStyles.boldText}>Transfer Remarks</Text>: Please
              indicate the giving type (Weekly Offering, Tithe, HMI, or Other)
              and write down the giving date (e.g. Weekly Offering 2019-11-03)
            </Text>
            <View style={styles.paddingContainer} />
            <Text>
              Please{" "}
              <Text style={fontStyles.boldText}>
                email a copy of your transfer receipt{" "}
              </Text>
              along with your full name within two weeks to{" "}
              <Text style={fontStyles.highlightText}>
                stewardship@hongkong.hmcc.net
              </Text>
              .
            </Text>
          </View>
        </AccordionItem>
        <AccordionItem
          expanded
          leftIcon={{ name: "credit-card", type: "octicon" }}
          title="Online Giving"
        >
          <View style={styles.accordionContainer}>
            <Text>
              Kindly note that 3.5% + HKD$2.35 will be deducted as a service
              fee. If you wish for 100% of your contribution to go towards our
              church's ministry work, please consider either selecting the
              "cover fees" option on the giving site or choosing another option.
            </Text>
            <View style={styles.paddingContainer} />
            <View style={styles.buttonContainer}>
              <Button title="Give Online" />
            </View>
          </View>
        </AccordionItem>
        <AccordionItem
          leftIcon={{ name: "cash-sharp", type: "ionicon" }}
          title="Cash"
        >
          <View style={styles.accordionContainer}>
            <Text>
              You may give to our church by cash or by check in an offering
              envelope at Sunday Celebration.
            </Text>
          </View>
        </AccordionItem>
        <AccordionItem
          leftIcon={{ name: "cash-usd", type: "material-community" }}
          title="Check"
        >
          <View style={styles.accordionContainer}>
            <Text>
              All checks should be made out to{" "}
              <Text style={fontStyles.boldText}>
                Harvest Mission Community Church (Hong Kong) Limited
              </Text>
              . You may also mail your checks or donations to
            </Text>
            <View style={styles.paddingContainer} />
            <Text>PO Box 101</Text>
            <Text>Shatin Central Post Office</Text>
            <Text>Shatin, New Territories, Hong Kong</Text>
          </View>
        </AccordionItem>
        <AccordionItem
          leftIcon={{ name: "system-update", type: "material" }}
          title="Financial Updates"
        >
          <View style={styles.accordionContainer}>
            <Text>
              Get a breakdown of our church's finances this past month.
            </Text>
            <View style={styles.paddingContainer} />
            <View style={styles.buttonContainer}>
              <Button title="Go to Financial Updates" />
            </View>
          </View>
        </AccordionItem>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
  },
  emptyContainer: {
    flexBasis: 75,
  },
  verseContainer: {
    alignItems: "center",
    flex: 1,
    justifyContent: "flex-end",
  },
  verseTextContainer: {
    flexGrow: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 40,
  },
  verseText: {
    color: "white",
    fontSize: 14,
    fontStyle: "italic",
    textAlign: "center",
  },
  verseReferenceTextContainer: {
    flexGrow: 1,
    paddingTop: 10,
  },
  verseReferenceText: {
    color: "rgba(255,255,255,0.8)",
    textTransform: "uppercase",
  },
  headerContainer: {
    paddingBottom: 25,
    paddingHorizontal: 20,
  },
  accordionContainer: {
    paddingBottom: 15,
    paddingHorizontal: 30,
  },
  paddingContainer: {
    paddingBottom: 10,
  },
  buttonContainer: {
    alignItems: "flex-start",
  },
});

export default GivingScreen;
