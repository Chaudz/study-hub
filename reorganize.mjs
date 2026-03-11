import fs from "fs";
import path from "path";

const homeDir =
  "/Users/buivanchau/WorkSpace/hub-stydy-lyson/hub-lyson/app/home";
const appDir = "/Users/buivanchau/WorkSpace/hub-stydy-lyson/hub-lyson/app";

// Move types, data, config
fs.renameSync(path.join(appDir, "types.ts"), path.join(homeDir, "types.ts"));
fs.renameSync(path.join(appDir, "data.ts"), path.join(homeDir, "data.ts"));
fs.renameSync(path.join(appDir, "config.ts"), path.join(homeDir, "config.ts"));

// Move page.tsx to home/page.tsx and update its imports
let pageContent = fs.readFileSync(path.join(appDir, "page.tsx"), "utf-8");
pageContent = pageContent.replace(
  'import { ExerciseCard, SubjectTab, StatsCard, FilterBtn } from "./components";',
  `import { ExerciseCard } from "./ExerciseCard";
import { SubjectTab } from "./SubjectTab";
import { StatsCard } from "./StatsCard";
import { FilterBtn } from "./FilterBtn";`,
);
fs.writeFileSync(path.join(homeDir, "page.tsx"), pageContent);

// Restore app/page.tsx as a simple redicrect or just keep it minimal
fs.writeFileSync(
  path.join(appDir, "page.tsx"),
  `"use client";\nimport { redirect } from 'next/navigation';\nexport default function Page() { redirect('/home'); }`,
);

// Split components.tsx
const compContent = fs.readFileSync(
  path.join(appDir, "components.tsx"),
  "utf-8",
);
const lines = compContent.split("\n");

const exIdx = lines.findIndex((l) => l.includes("// ── Exercise Card ──"));
const subjectIdx = lines.findIndex((l) => l.includes("// ── Subject Tab "));
const statsIdx = lines.findIndex((l) => l.includes("// ── Stats Card ──"));
const filterIdx = lines.findIndex((l) => l.includes("// ── Filter Button ──"));

const exLines = lines.slice(exIdx, subjectIdx);
const subjLines = lines.slice(subjectIdx, statsIdx);
const statsLines = lines.slice(statsIdx, filterIdx);
const filterLines = lines.slice(filterIdx);

fs.writeFileSync(
  path.join(homeDir, "ExerciseCard.tsx"),
  `"use client";\nimport { useState } from "react";\nimport { Exercise } from "./types";\nimport { diffConfig, typeConfig } from "./config";\n\n` +
    exLines.join("\n"),
);
fs.writeFileSync(
  path.join(homeDir, "SubjectTab.tsx"),
  `import { Subject } from "./types";\n\n` + subjLines.join("\n"),
);
fs.writeFileSync(path.join(homeDir, "StatsCard.tsx"), statsLines.join("\n"));
fs.writeFileSync(path.join(homeDir, "FilterBtn.tsx"), filterLines.join("\n"));

// Remove old components.tsx
fs.unlinkSync(path.join(appDir, "components.tsx"));
