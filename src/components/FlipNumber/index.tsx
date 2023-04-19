/* eslint-disable @next/next/no-img-element */
import React from "react";
import FlipNumbers from "react-flip-numbers";

import { FlipWrapper, FlipNumberStyles, commaStyles } from "./styles";
/**
 * @name CharPageTurn
 * Vertical page turn effect for a current character and next character
 * @param {number}  number - current character
 * @param {number}  index - current character index
 * @param {boolean} commasOn - whether to show commas every hundred (3 digits)
 */

interface CharPageTurnProps {
  digit: string;
  index: number;
  commasOn?: boolean;
}

const FlipNumber: React.FC<CharPageTurnProps> = ({
  digit,
  index,
  commasOn = false,
}) => {
  return (
    <>
      <FlipWrapper>
        <FlipNumbers
          play
          color="#fff"
          width={50}
          height={100}
          // @ts-ignore
          numberStyle={FlipNumberStyles}
          numbers={digit}
        />
      </FlipWrapper>
      {(index + 1) % 3 == 0 && index! < 14 && commasOn && (
        <img src="/images/comma.svg" alt="styled-comma" style={commaStyles} />
      )}
    </>
  );
};

export default FlipNumber;
