import { ScrollView, Text } from "react-native";

import { ButtonIcon } from "../ButtonIcon/ButtonIcon";
import React from "react";
import { styles } from "./styles";

const ManualBasic = () => {
  return (
    <ScrollView contentContainerStyle={styles.content} style={styles.container}>
      <Text style={styles.title}>Basic calculations</Text>
      <Text style={styles.paragraph}>
        Before starting any calculation, press <ButtonIcon text="CA" /> to make
        sure memory is reset.
      </Text>
      <Text style={styles.paragraph}>
        Important: This calculator operates like and adding machine. This means
        that some operations like addition and subtraction works different than
        a regular calculator.
      </Text>
      <Text style={styles.subtitle}>Addition and subtraction</Text>
      <Text style={styles.paragraph}>
        Digit the number followed by its sign <ButtonIcon text="⩲" />{" "}
        <ButtonIcon text="-" /> to add it to the memory. Then press the total
        key <ButtonIcon text="*" /> to print the result and add it to the grand
        total memory.
      </Text>
      <Text style={styles.paragraph}>
        You can print the grand total using the key <ButtonIcon text="G*" />.
      </Text>
      <Text style={styles.paragraph}>
        To print the actual subtotal during a sum, use <ButtonIcon text="♢/#" />
        .
      </Text>
      <Text style={styles.subtitle}>Multiplication and division</Text>
      <Text style={styles.paragraph}>
        Digit the number followed by the multiplication <ButtonIcon text="×" />{" "}
        or division <ButtonIcon text="÷" /> key, then digit the next number and
        press <ButtonIcon text="⩲" /> to add it or <ButtonIcon text="-" /> to
        subtract it to the total. You can also multiply or divide the previous
        total.
      </Text>
    </ScrollView>
  );
};

const ManualMemory = () => {
  return (
    <ScrollView contentContainerStyle={styles.content} style={styles.container}>
      <Text style={styles.title}>Memory</Text>
      <Text style={styles.paragraph}>
        To use the independent memory, press <ButtonIcon text="M+" /> or{" "}
        <ButtonIcon text="M-" /> instead of <ButtonIcon text="⩲" /> or{" "}
        <ButtonIcon text="-" /> after a multiplication or division to add the
        result to the memory. Use
        <ButtonIcon text="M♢" /> to print the current subtotal and{" "}
        <ButtonIcon text="M*" /> to print the total and clear the memory.
      </Text>
    </ScrollView>
  );
};

const ManualPercentage = () => {
  return (
    <ScrollView contentContainerStyle={styles.content} style={styles.container}>
      <Text style={styles.title}>Percentage</Text>
      <Text style={styles.paragraph}>
        To find the percentage of a number, digit that number followed by the
        multiplication key <ButtonIcon text="×" />, then digit the percentage
        value and press the percent key <ButtonIcon text="%" />. You can then
        add or subtract the result to the inital number pressing{" "}
        <ButtonIcon text="⩲" /> or <ButtonIcon text="-" />.
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
      <Text style={styles.title}>Tax calculations</Text>
      <Text style={styles.paragraph}>
        To add or subtract taxes to a price, digit the price followed by{" "}
        <ButtonIcon text="TAX+" /> or <ButtonIcon text="TAX-" /> respectively.
      </Text>
    </ScrollView>
  );
};

const ManualCost = () => {
  return (
    <ScrollView contentContainerStyle={styles.content} style={styles.container}>
      <Text style={styles.title}>Cost, sell and margin</Text>
      <Text style={styles.subtitle}>Calulating the cost</Text>
      <Text style={styles.paragraph}>
        Digit the sell price followed by the sell key <ButtonIcon text="SELL" />
        , then digit the margin rate followed by the margin key{" "}
        <ButtonIcon text="MAR" />. Press <ButtonIcon text="MAR" /> again to
        print the margin amount or <ButtonIcon text="COST" /> to print the cost.
      </Text>
      <Text style={styles.subtitle}>Calulating the sell price</Text>
      <Text style={styles.paragraph}>
        Digit the cost followed by the cost key <ButtonIcon text="COST" />, then
        digit the margin rate followed by the margin key{" "}
        <ButtonIcon text="MAR" />. Press <ButtonIcon text="MAR" /> again to
        print the margin amount or <ButtonIcon text="SELL" /> to print the sell
        price.
      </Text>
      <Text style={styles.subtitle}>Calulating the margin rate and amount</Text>
      <Text style={styles.paragraph}>
        Digit the cost followed by the cost key <ButtonIcon text="COST" />, then
        digit the sell price followed by the sell key <ButtonIcon text="SELL" />{" "}
        (order doesn't matter). Press <ButtonIcon text="MAR" /> to print the
        margin amount.
      </Text>
      <Text style={styles.title}>Average</Text>
      <Text style={styles.paragraph}>
        After an addition/subtraction, press the item key{" "}
        <ButtonIcon text="IT" /> to pritn the average off all items in the sum.
      </Text>
    </ScrollView>
  );
};

export { ManualBasic, ManualMemory, ManualPercentage, ManualCost };
