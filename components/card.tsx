import React, { useState } from "react";
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

const AddNewSet = ({ onTouch }: { onTouch: () => void }) => {
  return (
    <TouchableOpacity onPress={onTouch} style={styles.addNewSet}>
      <FontAwesome name="plus" size={18} color={COLORS.PRIMARY} />
      <Text style={styles.addNewSetText}>Add New Set</Text>
    </TouchableOpacity>
  );
};

interface SetItem {
  id: number;
  sets: number;
  reps: number;
  weight: string;
}

const IncreaseDecreaseButtons = ({
  id,
  setsArr,
  set,
  setSet,
  setNumber,
}: {
  id: number;
  setsArr: SetItem[];
  set: SetItem[];
  setSet: (value: SetItem[] | ((prev: SetItem[]) => SetItem[])) => void;
  setNumber: number;
}) => {
  const [reps, setReps] = useState(1);
  return (
    <View style={styles.repSetsContainer}>
      <Text style={styles.setNumberText}>#{setNumber}</Text>
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
        onPress={() => setSet((prev) => prev.filter((e) => e.id !== id))}
      />
    </View>
  );
};

const WeightInput = (): React.ReactElement => {
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
  const defaultSet = {
    id: 0,
    sets,
    reps,
    weight,
  };
  const [set, setSet] = useState();
  console.log(set);
  return (
    <BlurView intensity={70} tint="dark" style={styles.card}>
      <View style={styles.topFlex}>
        <Text style={styles.exercise}>{exerciseName}</Text>
        <FontAwesome style={styles.exercise} name="trash-o" />
      </View>
      {set?.map((e, index) => {
        return (
          <IncreaseDecreaseButtons
            key={e.id}
            set={set}
            setSet={setSet}
            setsArr={set}
            id={e.id}
            setNumber={index + 1}
          />
        );
      })}
      <AddNewSet
        onTouch={() =>
          setSet((prev) => [
            ...(prev ?? []),
            { ...(set?.[0] ?? defaultSet), id: Math.random() },
          ])
        }
      />
    </BlurView>
  );
};

const styles = StyleSheet.create({
  card: {
    width: "90%",
    minHeight: 150,
    borderRadius: 12,
    borderColor: COLORS.BORDER,
    backgroundColor: COLORS.SURFACE,
    borderWidth: 1,
    padding: 20,
    gap: 15,
  },
  exercise: {
    fontFamily: "Karla-Bold",
    fontSize: 20,
    color: COLORS.TEXT_PRIMARY,
  },
  topFlex: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
  repSetsContainer: {
    backgroundColor: COLORS.BACKGROUND,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: COLORS.BORDER,
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
    backgroundColor: COLORS.PRIMARY,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
  kgInput: {
    width: 60,
    height: 40,
    backgroundColor: COLORS.SURFACE,
    borderWidth: 1,
    borderColor: COLORS.BORDER,
    borderRadius: 8,
    paddingHorizontal: 8,
    textAlign: "center",
    color: COLORS.TEXT_PRIMARY,
    fontFamily: "Karla-Bold",
  },
  weightContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  weightText: {
    fontFamily: "Karla-Bold",
    fontSize: 12,
    color: COLORS.TEXT_SECONDARY,
  },
  setNumberText: {
    fontFamily: "Karla-Bold",
    fontSize: 14,
    color: COLORS.TEXT_MUTED,
  },
  repsNumberText: {
    fontFamily: "Karla-Bold",
    fontSize: 16,
    color: COLORS.TEXT_PRIMARY,
  },
  repsLabelText: {
    fontFamily: "Karla-Bold",
    fontSize: 12,
    color: COLORS.TEXT_SECONDARY,
  },
  buttonText: {
    fontFamily: "Karla-Bold",
    fontSize: 18,
    color: COLORS.TEXT_PRIMARY,
  },
  spacer: {
    flex: 1,
  },
  closeIcon: {
    fontSize: 18,
    color: COLORS.TEXT_SECONDARY,
  },
  addNewSet: {
    width: "100%",
    height: 50,
    borderWidth: 2,
    borderStyle: "dashed",
    borderColor: COLORS.BORDER,
    borderRadius: 8,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
  },
  addNewSetText: {
    fontFamily: "Karla-Bold",
    fontSize: 16,
    color: COLORS.TEXT_SECONDARY,
  },
});
