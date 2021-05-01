import { TextStyle, StyleSheet } from "react-native";

interface Style {
  textStyle: TextStyle;
}

export default StyleSheet.create<Style>({
  textStyle: {
    color: "red",
    fontSize: 18,
    marginRight: 16,
    textAlign: "right",
  },
});
