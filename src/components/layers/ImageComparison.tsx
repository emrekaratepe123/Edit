"use client";

import { Layer } from "@/lib/layer-store";
import React from "react";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";

function ImageComparison({ layers }: { layers: Layer[] }) {
  if (layers.length === 0) return <div>No layers selected for comparison</div>;
  if (layers.length === 1)
    return (
      <div className="h-full w-full">
        <ReactCompareSliderImage
          src={layers[0].url || ""}
          srcSet={layers[0].url || ""}
          alt={layers[0].name || "Single Image"}
          className="rounded-lg object-contain"
        />
      </div>
    );

  return (
    <ReactCompareSlider
      className="w-full h-full"
      itemOne={
        <ReactCompareSliderImage
          src={layers[0].url || ""}
          srcSet={layers[0].url || ""}
          alt={layers[0].name || "Image One"}
        />
      }
      itemTwo={
        <ReactCompareSliderImage
          src={layers[1].url || ""}
          srcSet={layers[1].url || ""}
          alt={layers[1].name || "Image Two"}
        />
      }
    />
  );
}

export default ImageComparison;
