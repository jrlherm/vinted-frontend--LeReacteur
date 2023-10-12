import React from "react";
import { Range, getTrackBackground } from "react-range";

const STEP = 1;
const MIN = 0;
const MAX = 1000;

const LabeledTwoThumbs = ({
  rtl,
  priceRange,
  setPriceRange,
  setMinPrice,
  setMaxPrice,
}) => {
  const [values, setValues] = React.useState([0, 1000]);
  // console.log("priceRange =>", priceRange);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        width: "480px",
        margin: "0 auto",
      }}
    >
      <Range
        values={priceRange}
        step={STEP}
        min={MIN}
        max={MAX}
        rtl={rtl}
        onChange={(newRange) => {
          setPriceRange(newRange);
          setMinPrice(newRange[0]);
          setMaxPrice(newRange[1]);
        }}
        renderTrack={({ props, children }) => (
          <div
            onMouseDown={props.onMouseDown}
            onTouchStart={props.onTouchStart}
            style={{
              ...props.style,
              height: "36px",
              display: "flex",
              width: "100%",
            }}
          >
            <div
              ref={props.ref}
              style={{
                height: "5px",
                width: "100%",
                borderRadius: "4px",
                background: getTrackBackground({
                  values,
                  colors: ["#ccc", "#2FB0BA", "#ccc"],
                  min: MIN,
                  max: MAX,
                  rtl,
                }),
                alignSelf: "center",
              }}
            >
              {children}
            </div>
          </div>
        )}
        renderThumb={({ index, props, isDragged }) => (
          <div
            {...props}
            style={{
              ...props.style,
              height: "12px",
              width: "12px",
              borderRadius: "50%",
              backgroundColor: "#FFF",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              boxShadow: "0px 2px 6px #AAA",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "-28px",
                color: "#fff",
                fontWeight: "bold",
                fontSize: "10px",
                fontFamily: "Arial,Helvetica Neue,Helvetica,sans-serif",
                padding: "4px",
                borderRadius: "4px",
                backgroundColor: "#2FB0BA",
              }}
            >
              {priceRange[index].toFixed(1)}
            </div>
            <div
              style={{
                height: "16px",
                width: "5px",
                backgroundColor: isDragged ? "#2FB0BA" : "#CCC",
              }}
            />
          </div>
        )}
      />
    </div>
  );
};

export default LabeledTwoThumbs;
