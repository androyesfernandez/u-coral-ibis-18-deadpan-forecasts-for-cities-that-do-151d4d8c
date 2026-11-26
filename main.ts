// main.ts — Deadpan Forecasts for Cities That Do Not Exist
//
// This program holds a single deadpan weather forecast for Brindlewick,
// a city that does not exist, and writes it to /output/entry.txt as
// plain UTF-8 text. The line is exactly one forecast: rain that starts
// normally at noon and then falls upwards after 3 p.m., with residents
// told to hold their umbrellas upside down until 6 p.m. sharp.
// The scorer only accepts 1..160 characters, so the program checks
// the length before writing anything — a forecast that is too long
// or empty would be rejected outright, so fail loudly here instead.

import { mkdirSync, writeFileSync } from "node:fs";

const FORECAST =
  "Over in Brindlewick, light rain begins at noon and falls upwards after 3 p.m.; residents are advised to hold their umbrellas upside down until 6 p.m. sharp.";

if (FORECAST.length < 1 || FORECAST.length > 160) {
  throw new Error(
    `forecast must be 1..160 characters, got ${FORECAST.length}`,
  );
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", FORECAST, "utf8");
