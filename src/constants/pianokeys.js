const second = 2;
const third = 4;
const fourth = 5;
const fifth = 7;
const sixth = 9;
const seventh = 11;
const octave = 12;
const ninth = 14;

export const pianoKeyListWithoutAccidentals = [
  'C1', 'D1', 'E1', 'F1', 'G1', 'A2', 'B2',
  'C2', 'D2', 'E2', 'F2', 'G2', 'A3', 'B3',
  'C3', 'D3', 'E3', 'F3', 'G3', 'A4', 'B4',
  'C4', 'D4', 'E4', 'F4', 'G4', 'A5', 'B5',
  'C5', 'D5', 'E5', 'F5', 'G5', 'A6', 'B6',
  'C6', 'D6', 'E6', 'F6', 'G6', 'A7'
];

export const pianoKeyList = ['A3', 'A#3', 'B3',
  'C3', 'C#3', 'D3', 'D#3', 'E3', 'F3', 'F#3', 'G3', 'G#3', 'A4', 'A#4', 'B4',
  'C4', 'C#4', 'D4', 'D#4', 'E4', 'F4', 'F#4', 'G4', 'G#4', 'A5', 'A#5', 'B5',
  'C5', 'C#5', 'D5', 'D#5', 'E5', 'F5', 'F#5', 'G5', 'G#5', 'A6', 'A#6', 'B6',
  'C6', 'C#6', 'D6', 'D#6', 'E6', 'F6', 'F#6', 'G6', 'G#6', 'A7'
];

export const bassPianoKeyList = [
  'C1', 'C#1', 'D1', 'D#1', 'E1', 'F1', 'F#1', 'G1', 'G#1', 'A2', 'A#2', 'B2',
  'C2', 'C#2', 'D2', 'D#2', 'E2', 'F2', 'F#2', 'G2', 'G#2', 'A3', 'A#3', 'B3',
  'C3', 'C#3', 'D3', 'D#3', 'E3', 'F3', 'F#3', 'G3', 'G#3', 'A4', 'A#4', 'B4',
  'C4', 'C#4', 'D4', 'D#4', 'E4', 'F4', 'F#4', 'G4', 'G#4', 'A5', 'A#5', 'B5',
  'C5'
];

export const intervalList = [
  {label: '2nd', value: second },
  {label: '3rd', value: third },
  {label: '4rth', value: fourth },
  {label: '5th', value: fifth },
  {label: '6th', value: sixth },
  {label: '7th', value: seventh },
  {label: 'octave', value: octave },
  {label: '9th', value: ninth }
];

export const chordList = [
  {label: 'Minor', chord: [{ value: third, showNoteFlat: true },{ value: fifth }]},
  {label: 'Major', chord: [{ value: third }, { value: fifth }]},
  {label: 'Sus2', chord: [{ value: second }, { value: fifth }]},
  {label: 'Sus4', chord: [{ value: fourth }, { value: fifth }]},
  {label: 'Augmented', chord: [{ value: third }, { value: fifth, showNoteSharp: true }]},
  {label: 'Diminished', chord: [{ value: third, showNoteFlat: true }, { value: fifth, showNoteFlat: true }]},
  {label: 'm6', chord: [{ value: third }, { value: sixth }]},
  {label: 'M6', chord: [{ value: third }, { value: sixth }]},
  {label: 'Dominant 7th', chord: [{ value: third }, { value: fifth }, { value: seventh, showNoteFlat: true }]},
  {label: 'Major 7th', chord: [{ value: third }, { value: fifth }, { value: seventh }]},
  {label: 'Minor Major 7th', chord: [{ value: third, showNoteFlat: true }, { value: fifth }, { value: seventh }]},
  {label: 'Minor 7th', chord: [{ value: third, showNoteFlat: true }, { value: fifth }, { value: seventh, showNoteFlat: true }]},
  {label: 'Diminished 7th', chord: [{ value: third, showNoteFlat: true }, { value: fifth, showNoteFlat: true }, { value: seventh, conditions: { showNoteFlat: true } }]}
];
