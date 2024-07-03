import convert, { Unit } from "convert";
import { ChangeEvent, useEffect, useState } from "react";

import SelectUnit from "./SelectUnit.tsx";
import SelectMeasure from "./SelectMeasure.tsx";
import InputField from "./InputField.tsx";
import ResultField from "./ResultField.tsx";
import ClearAllEntries from "./ClearAllEntries.tsx";
import SwitchButton from "./SwitchButton.tsx";
import Divider from "./Divider.tsx";
import {
  KindByMeasure,
  UnitsByMeasure,
  kindByMeasure,
  unitsByMeasure,
} from "../../../data/converterData.tsx";

const Converter = () => {
  const [fromArray, setFromArray] = useState<string[]>([]);
  const [fromUnit, setFromUnit] = useState<string>("");
  const [toArray, setToArray] = useState<string[]>([]);
  const [toUnit, setToUnit] = useState<string>("");
  const [measure, setMeasure] = useState<string>("");
  const [hasError, setHasError] = useState<boolean>(false);
  const [input, setInput] = useState<string>("");
  const [result, setResult] = useState<string>("");

  const findArrayWithNumber = (data: UnitsByMeasure[], index: number) => {
    const measure = data.find((measure) => measure.index === index);
    return measure ? measure.units : [];
  };

  const handleKindChange = (measure: KindByMeasure) => {
    setMeasure(measure.kind);
    setFromArray(findArrayWithNumber(unitsByMeasure, measure.index));
    setFromUnit("");
    setToUnit("");
    setResult("");
    setInput("");
  };

  const handleFromUnitChange = (unit: string) => {
    const selectedUnit = unit;
    setFromUnit(selectedUnit);
    const newToArray = fromArray.filter((unit) => unit !== selectedUnit); // Filter out the selected unit
    setToArray(newToArray);
    // setToUnit("");
  };

  const handleToUnitChange = (unit: string) => {
    setToUnit(unit);
  };

  const validateInput = (entry: string): boolean => {
    // Regular expression to match only numbers and a single decimal point
    const regex = /^$|^(\d+\,?\d*)$/;
    return regex.test(entry);
  };

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    if (validateInput(newValue)) {
      setInput(newValue);
      setHasError(false);
    } else {
      setHasError(true);
    }
  };

  const calcResult = (input: string, fromUnit: string, toUnit: string) => {
    var adjInput = input.replace(/,/g, `.`);

    setResult(
      new Intl.NumberFormat("de-DE").format(
        convert(Number(adjInput), fromUnit as Unit).to(toUnit as Unit)
      )
    );
  };

  const clearAll = () => {
    setMeasure("");
    setFromArray([]);
    setFromUnit("");
    setToArray([]);
    setToUnit("");
    setInput("");
    setResult("");
  };

  useEffect(() => {
    if (fromUnit && toUnit && input) {
      calcResult(input, fromUnit, toUnit);
    }

    if (input == "") {
      setResult("");
    }
  }, [fromUnit, toUnit, input]);

  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-col gap-4 w-11/12 max-w-[420px] my-12 contentContainer">
        <div className="text-center text-accent text-2xl font-extrabold">
          Unit converter
        </div>
        <div className="w-full border-b-2 border-accent rounded-full mb-2"></div>
        <SelectMeasure
          handleChange={handleKindChange}
          measure={measure}
          array={kindByMeasure}
        />
        <div className="flex bg-base-300 rounded-lg p-4 gap-4">
          <SwitchButton
            fromUnit={fromUnit}
            setFromUnit={setFromUnit}
            toUnit={toUnit}
            setToUnit={setToUnit}
          />
          <div className="py-2 px-1 bg-base-200 rounded-lg">
            <div className="flex h-8">
              <InputField
                hasError={hasError}
                input={input}
                handleInput={handleInput}
              />
              <Divider />
              <SelectUnit
                handleChange={handleFromUnitChange}
                unit={fromUnit}
                array={fromArray}
              />
            </div>
            <div className="h-8"></div>
            <div className="flex h-8">
              <ResultField result={result} />
              <Divider />
              <SelectUnit
                handleChange={handleToUnitChange}
                unit={toUnit}
                array={toArray}
              />
            </div>
          </div>
        </div>
        <ClearAllEntries clearAll={clearAll} />
      </div>
    </div>
  );
};

export default Converter;
