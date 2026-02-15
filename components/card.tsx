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

const AddNewSet = ({ onTouch }) => {
  return (
    <TouchableOpacity onPress={onTouch} style={styles.addNewSet}>
      <Text>
        <FontAwesome name="plus" size={20} /> Add New Set
      </Text>
    </TouchableOpacity>
  );
};

const IncreaseDecreaseButtons = ({ setsArr, set, setSet }) => {
  const [reps, setReps] = useState(1);
  return (
    <View style={styles.repSetsContainer}>
      <Text style={styles.setNumberText}>#{setsArr.length}</Text>
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
        <Text style={styles.buttonText}>-</Text>
      </TouchableOpacity>
      <Text style={styles.repsNumberText}>{reps}</Text>
      <TouchableOpacity
        style={styles.plusMinusButton}
        onPress={() => setReps((prev) => prev + 1)}
      >
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>
      <Text style={styles.repsLabelText}>REPS</Text>
      <WeightInput />
      <View style={styles.spacer} />
      <FontAwesome
        style={styles.closeIcon}
        name="close"
        onPress={() => setSet(set.pop())}
      />
    </View>
  );
};

const WeightInput = () => {
  return (
    <View style={styles.weightContainer}>
      <TextInput style={styles.kgInput} placeholder="20" />
      <Text style={styles.weightText}>KG</Text>
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
  const [set, setSet] = useState(setsArr);
  console.log(set);
  return (
    <BlurView intensity={70} tint="dark" style={styles.card}>
      <View style={styles.topFlex}>
        <Text style={styles.exercise}>{exerciseName}</Text>
        <FontAwesome style={styles.exercise} name="trash-o" />
      </View>
      {set.map((e) => {
        return (
          <IncreaseDecreaseButtons set={set} setSet={setSet} setsArr={set} />
        );
      })}
      <AddNewSet onTouch={() => setSet((prev) => [...prev, setsArr[0]])} />
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
    justifyContent: "space-between",
    flexDirection: "row",
  },
  repSetsContainer: {
    backgroundColor: COLORS.ACCENT,
    borderRadius: 7,
    width: "100%",
    minHeight: 50,
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    paddingVertical: 8,
    paddingHorizontal: 10,
  },
  plusMinusButton: {
    width: 40,
    height: 40,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  kgInput: {
    width: 60,
    height: 40,
    backgroundColor: "white",
    borderRadius: 10,
    paddingHorizontal: 8,
    textAlign: "center",
  },
  weightContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  weightText: {
    fontFamily: "Karla-Bold",
    fontSize: 12,
    color: "white",
  },
  setNumberText: {
    fontFamily: "Karla-Bold",
    fontSize: 14,
    color: "white",
  },
  repsNumberText: {
    fontFamily: "Karla-Bold",
    fontSize: 16,
    color: "white",
  },
  repsLabelText: {
    fontFamily: "Karla-Bold",
    fontSize: 12,
    color: "white",
  },
  buttonText: {
    fontFamily: "Karla-Bold",
    fontSize: 18,
    color: "black",
  },
  spacer: {
    flex: 1,
  },
  closeIcon: {
    fontSize: 18,
    color: "white",
  },
  addNewSet: {
    width: "100%",
    height: 50,
    borderWidth: 2,
    borderStyle: "dotted",
    borderColor: COLORS.ACCENT,
    borderRadius: 7,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: 20,
  },
});
