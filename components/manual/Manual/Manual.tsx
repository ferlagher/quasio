import { ScrollView, Text } from "react-native";

import { ButtonIcon } from "../ButtonIcon/ButtonIcon";
import React from "react";
import { styles } from "./styles";

const ManualBasic = () => {
  return (
    <ScrollView contentContainerStyle={styles.content} style={styles.container}>
      <Text style={styles.title}>Basic calculations</Text>
      <Text style={styles.paragraph}>
        Before starting any calculation, press <ButtonIcon text="CA" /> to make sure memory is
        reset.
      </Text>
      <Text style={styles.paragraph}>
        Important: This calculator operates like and adding machine. This means that some operations
        like addition and subtraction works different than a regular calculator.
      </Text>
      <Text style={styles.subtitle}>Addition and subtraction</Text>
      <Text style={styles.paragraph}>
        Digit the number followed by its sign <ButtonIcon text="⩲" /> <ButtonIcon text="-" /> to add
        it to the memory. Then press the total key <ButtonIcon text="*" /> to print the result and
        add it to the grand total memory.
      </Text>
      <Text style={styles.paragraph}>
        You can print the grand total using the key <ButtonIcon text="G*" />.
      </Text>
      <Text style={styles.paragraph}>
        To print the actual subtotal during a sum, use <ButtonIcon text="♢/#" />.
      </Text>
      <Text style={styles.subtitle}>Multiplication and division</Text>
      <Text style={styles.paragraph}>
        Digit the number followed by the multiplication <ButtonIcon text="×" /> or division{" "}
        <ButtonIcon text="÷" /> key, then digit the next number and press <ButtonIcon text="⩲" /> to
        add it or <ButtonIcon text="-" /> to subtract it to the total. You can also multiply or
        divide the previous total.
      </Text>
    </ScrollView>
  );
};

const ManualMemory = () => {
  return (
    <ScrollView contentContainerStyle={styles.content} style={styles.container}>
      <Text style={styles.title}>Memory</Text>
      <Text style={styles.paragraph}>
        To use the independent memory, press <ButtonIcon text="M+" /> or <ButtonIcon text="M-" />{" "}
        instead of <ButtonIcon text="⩲" /> or <ButtonIcon text="-" /> after a multiplication or
        division to add the result to the memory. Use
        <ButtonIcon text="M♢" /> to print the current subtotal and <ButtonIcon text="M*" /> to print
        the total and clear the memory.
      </Text>
    </ScrollView>
  );
};

const ManualPercentage = () => {
  return (
    <ScrollView contentContainerStyle={styles.content} style={styles.container}>
      <Text style={styles.title}>Percentage</Text>
      <Text style={styles.paragraph}>
        To find the percentage of a number, digit that number followed by the multiplication key{" "}
        <ButtonIcon text="×" />, then digit the percentage value and press the percent key{" "}
        <ButtonIcon text="%" />.
      </Text>
      <Text style={styles.paragraph}>
        To find what percent of a number is another number, use the division key{" "}
        <ButtonIcon text="÷" /> instead.
      </Text>
      <Text style={styles.title}>Mark up</Text>
      <Text style={styles.paragraph}>
        To mark up a price, digit the price followed by the multiplication key
        <ButtonIcon text="×" />, then digit the profit percentage and press{" "}
        <ButtonIcon text="MD/MU" />.
      </Text>
    </ScrollView>
  );
};

export { ManualBasic, ManualMemory, ManualPercentage };
