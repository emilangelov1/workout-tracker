import { BlurView } from "expo-blur";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { COLORS } from "../constants/colors";
import { FontAwesome } from "@expo/vector-icons";
import { useState } from "react";

const IncreaseDecreaseButtons = ({ setsArr }) => {
  const [reps, setReps] = useState(1);
  return (
    <View style={styles.repSetsContainer}>
      <Text>#{setsArr.length}</Text>
      <TouchableOpacity
        style={styles.plusMinusButton}
        onPress={() =>
          setReps((prev) => {
            if (prev === 1) {
              return prev;
            }
            return prev - 1;
          })
        }
      >
        -
      </TouchableOpacity>
      <Text>{reps}</Text>
      <TouchableOpacity
        style={styles.plusMinusButton}
        onPress={() => setReps((prev) => prev + 1)}
      >
        +
      </TouchableOpacity>
      <Text>REPS</Text>
      <WeightInput />
    </View>
  );
};

const WeightInput = () => {
  return (
    <View style={{ display: "flex", flexDirection: "row", gap: 15 }}>
      <TextInput style={styles.kgInput} placeholder="20" />
      <Text>KG</Text>
    </View>
  );
};

export const Card = ({
  exerciseName,
  sets,
  reps,
  weight,
}: {
  exerciseName: string;
  sets: number;
  reps: number;
  weight: string;
}) => {
  const setsArr = [
    {
      id: 0,
      sets,
      reps,
      weight,
    },
  ];
  return (
    <BlurView intensity={70} tint="dark" style={styles.card}>
      <View style={styles.topFlex}>
        <Text style={styles.exercise}>{exerciseName}</Text>
        <FontAwesome style={styles.exercise} name="trash-o"></FontAwesome>
      </View>

      {setsArr.map((e) => {
        return <IncreaseDecreaseButtons setsArr={setsArr} />;
      })}
    </BlurView>
  );
};

const styles = StyleSheet.create({
  card: {
    width: "90%",
    minHeight: 150,
    borderRadius: 10,
    borderColor: COLORS.ACCENT,
    backgroundColor: COLORS.LIGHTER_BG,
    borderWidth: 2,
    padding: 20,
    gap: 15,
  },
  exercise: {
    fontFamily: "Karla-Bold",
    fontSize: 20,
    color: "white",
  },
  topFlex: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  repSetsContainer: {
    backgroundColor: COLORS.ACCENT,
    borderRadius: 7,
    width: "100%",
    minHeight: 75,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
    padding: 10,
    fontFamily: "Klara-Bold",
  },
  repsSetsText: {},
  plusMinusButton: {
    width: 50,
    height: "80%",
    backgroundColor: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    fontFamily: "Klara-Bold",
    fontSize: 20,
  },
  kgInput: {
    width: "100%",
    height: "100%",
    backgroundColor: "white",
    borderRadius: 15,
    padding: 10,
  },
});
