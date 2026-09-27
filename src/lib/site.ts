import crest from "@/assets/brand/crest.png.asset.json";
import primaryLogo from "@/assets/brand/primary-logo.png.asset.json";
import reverseLogo from "@/assets/brand/reverse-logo.png.asset.json";
import wordmark from "@/assets/brand/wordmark.png.asset.json";

export const brand = {
  crest: crest.url,
  primaryLogo: primaryLogo.url,
  reverseLogo: reverseLogo.url,
  wordmark: wordmark.url,
};

export const primaryNav = [
  { label: "The Academy", to: "/the-academy" },
  { label: "Learning", to: "/learning" },
  { label: "Sport & Life", to: "/sport-life" },
  { label: "Character & Leadership", to: "/character-leadership" },
  { label: "Admissions", to: "/admissions" },
  { label: "Founding Class 2027", to: "/founding-class-2027" },
];

/**
 * Editable placeholder content. Replace when confirmed by the Academy.
 * Nothing in this block is public policy until verified.
 */
export const placeholders = {
  dayTimeline: [
    { time: "07:20", title: "Arrival", note: "Students arrive and prepare for the day." },
    { time: "08:00", title: "Learning", note: "Focused lessons and guided study." },
    { time: "10:30", title: "Break", note: "Rest, conversation and fresh air." },
    { time: "12:30", title: "Lunch", note: "A shared meal as a community." },
    { time: "14:00", title: "Sport / Activities", note: "Training, movement and teamwork." },
    { time: "15:30", title: "Clubs / Community", note: "Interests, service and leadership." },
    { time: "16:30", title: "Departure", note: "The day closes." },
  ],
  entryYears: ["2027"],
  grades: ["To be confirmed"],
};
