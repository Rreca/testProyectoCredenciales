import { Dispatch, SetStateAction } from "react";
import {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from "react-native-simple-radio-button";
import { AppColors } from "../../../../constants/AppColors";
import { styles } from "./RadioButton.styles";

interface IRadioButtonCustom {
  i: number;
  checkedName: string;
  setCheckedName: Dispatch<SetStateAction<string>>;
  obj: any;
}

export const RadioButtonCustom = ({
  i,
  checkedName,
  setCheckedName,
  obj,
}: IRadioButtonCustom) => {
  return (
    <RadioButton labelHorizontal={true}>
      {/*  You can set RadioButtonLabel before RadioButtonInput */}
      <RadioButtonInput
        obj={obj}
        index={i}
        isSelected={checkedName === obj.value}
        onPress={(value) => setCheckedName(value)}
        // borderWidth={1}
        buttonInnerColor={AppColors.main}
        buttonOuterColor={
          checkedName === obj.value ? AppColors.main : AppColors.black
        }
        buttonSize={15}
        buttonOuterSize={25}
        buttonStyle={styles.button}
        buttonWrapStyle={styles.buttonWrap}
      />
      <RadioButtonLabel
        obj={obj}
        index={i}
        labelHorizontal={true}
        onPress={(value) => setCheckedName(value)}
        labelStyle={styles.label}
        labelWrapStyle={{}}
      />
    </RadioButton>
  );
};
