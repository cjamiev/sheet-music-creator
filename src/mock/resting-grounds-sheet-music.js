/* eslint-disable max-lines */
/* eslint-disable no-magic-numbers */
import { mapStaccatoPosition, mapDottedPosition, mapNotePosition } from 'constants';
import { mapStaffLines } from 'constants/stafflines';
import {
  STAFF_LINE_WIDTH,
  MEASURE_BOTH_STAFFS_HEIGHT,
  MEASURE_SINGLE_STAFF_HEIGHT,
  STAFF_LINE_HEIGHT,
  HEIGHT_BETWEEN_ROWS
} from 'constants/svgattributes';
const BASS_GAP = MEASURE_BOTH_STAFFS_HEIGHT - MEASURE_SINGLE_STAFF_HEIGHT - 0.66;

const hollowKnightRestingGroundsDataPageOneLineOne = [
  { component:'Title', transform:'translate(0,0)', conditions:{}, subcomponents:[],
    content: { name: 'Hollow Knight', subname: 'Resting Grounds', author: 'Christopher Larkin', tempo: 'Moderate' } },
  { component:'Clef', transform:'translate(0,0)', conditions:{},
    subcomponents:[{ component:'MeasureStart', transform:'translate(0,0)', conditions:{showClefBrace:true}},
      { component:'Treble', transform:'translate(0,0)', conditions:{}},
      { component:'Bass', transform:'translate(0,0)', conditions:{}}] },
  { component:'KeySignature', transform:'translate(0,0)', conditions:{},
    subcomponents:[{ component:'FlatKeySignature', transform:'translate(0,0)',
      conditions:{showAFlat:true,showEFlat:true,showBFlat:true}}]},
  { component:'KeySignature', transform:`translate(0,${BASS_GAP})`, conditions:{},
    subcomponents:[{ component:'FlatKeySignature', transform:'translate(0,0)',
      conditions:{showAFlat:true,showEFlat:true,showBFlat:true}}]},
  { component:'TimeSignature', transform:'translate(0,0)', conditions:{},
    subcomponents:[
      { component:'TimeValue', transform:'translate(0,0)', conditions:{}, content: { value: 3 }},
      { component:'TimeValue', transform:'translate(0,10.04)', conditions:{}, content: { value: 4 } }] },
  { component:'TimeSignature', transform:`translate(0,${BASS_GAP})`, conditions:{},
    subcomponents:[
      { component:'TimeValue', transform:'translate(0,0)', conditions:{}, content: { value: 3 }},
      { component:'TimeValue', transform:'translate(0,10.04)', conditions:{}, content: { value: 4 } }] },
  { component:'Note', transform:`translate(${STAFF_LINE_WIDTH},0)`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['C6']},
      { component:'StemmedNoteFlipped', transform:`translate(0,${mapNotePosition['C6']})`, conditions:{ showNoteStemFlipped: true }}
    ]},
  { component:'Rest', transform:`translate(${STAFF_LINE_WIDTH},${BASS_GAP})`,
    conditions:{showQuarterRest:true}, subcomponents:[] },
  { component:'Note', transform:`translate(${2*STAFF_LINE_WIDTH},0)`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['G5']},
      { component:'StemmedNoteFlipped', transform:`translate(0,${mapNotePosition['G5']})`, conditions:{ showNoteStemFlipped: true }}
    ]},
  { component:'Rest', transform:`translate(${2*STAFF_LINE_WIDTH},${BASS_GAP})`,
    conditions:{showQuarterRest:true}, subcomponents:[] },
  { component:'Note', transform:`translate(${3*STAFF_LINE_WIDTH},0)`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['B6']},
      { component:'StemmedNoteFlipped', transform:`translate(0,${mapNotePosition['B6']})`, conditions:{ showNoteStemFlipped: true }}
    ]},
  { component:'Rest', transform:`translate(${3*STAFF_LINE_WIDTH},${BASS_GAP})`,
    conditions:{showQuarterRest:true}, subcomponents:[] },
  { component:'Measure', transform:`translate(${3*STAFF_LINE_WIDTH},0)`, conditions:{showStaffBassMeasure:true},
    subcomponents:[{ component:'MeasureEnd', transform:'translate(0,0)', conditions:{}}] },
  { component:'Note', transform:`translate(${4*STAFF_LINE_WIDTH},0)`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['C5']},
      { component:'StemmedNoteFlipped', transform:`translate(0,${mapNotePosition['C5']})`, conditions:{ showNoteStemFlipped: true }}
    ]},
  { component:'Rest', transform:`translate(${4*STAFF_LINE_WIDTH},${BASS_GAP})`,
    conditions:{showQuarterRest:true}, subcomponents:[] },
  { component:'Note', transform:`translate(${5*STAFF_LINE_WIDTH},0)`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['G5']},
      { component:'StemmedNoteFlipped', transform:`translate(0,${mapNotePosition['G5']})`, conditions:{ showNoteStemFlipped: true }}
    ]},
  { component:'Rest', transform:`translate(${5*STAFF_LINE_WIDTH},${BASS_GAP})`,
    conditions:{showQuarterRest:true}, subcomponents:[] },
  { component:'Note', transform:`translate(${6*STAFF_LINE_WIDTH},0)`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['B6']},
      { component:'StemmedNoteFlipped', transform:`translate(0,${mapNotePosition['B6']})`, conditions:{ showNoteStemFlipped: true }}
    ]},
  { component:'Rest', transform:`translate(${6*STAFF_LINE_WIDTH},${BASS_GAP})`,
    conditions:{showQuarterRest:true}, subcomponents:[] },
  { component:'Measure', transform:`translate(${6*STAFF_LINE_WIDTH},0)`, conditions:{showStaffBassMeasure:true},
    subcomponents:[{ component:'MeasureEnd', transform:'translate(0,0)', conditions:{}}] },
  { component:'Note', transform:`translate(${7*STAFF_LINE_WIDTH},0)`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['C5']},
      { component:'StemmedNoteFlipped', transform:`translate(0,${mapNotePosition['C5']})`, conditions:{ showNoteStemFlipped: true }}
    ]},
  { component:'Rest', transform:`translate(${7*STAFF_LINE_WIDTH},${BASS_GAP})`,
    conditions:{showQuarterRest:true}, subcomponents:[] },
  { component:'Note', transform:`translate(${8*STAFF_LINE_WIDTH},0)`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['G5']},
      { component:'StemmedNoteFlipped', transform:`translate(0,${mapNotePosition['G5']})`, conditions:{ showNoteStemFlipped: true }}
    ]},
  { component:'Rest', transform:`translate(${8*STAFF_LINE_WIDTH},${BASS_GAP})`,
    conditions:{showQuarterRest:true}, subcomponents:[] },
  { component:'Note', transform:`translate(${9*STAFF_LINE_WIDTH},0)`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['A6']},
      { component:'StemmedNoteFlipped', transform:`translate(0,${mapNotePosition['A6']})`, conditions:{ showNoteStemFlipped: true }}
    ]},
  { component:'Rest', transform:`translate(${9*STAFF_LINE_WIDTH},${BASS_GAP})`,
    conditions:{showQuarterRest:true}, subcomponents:[] },
  { component:'Measure', transform:`translate(${9*STAFF_LINE_WIDTH},0)`, conditions:{showStaffBassMeasure:true},
    subcomponents:[{ component:'MeasureEnd', transform:'translate(0,0)', conditions:{}}] },
  { component:'Note', transform:`translate(${10*STAFF_LINE_WIDTH},0)`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['C5']},
      { component:'StemmedNoteFlipped', transform:`translate(0,${mapNotePosition['C5']})`, conditions:{ showNoteStemFlipped: true }}
    ]},
  { component:'Rest', transform:`translate(${10*STAFF_LINE_WIDTH},${BASS_GAP})`,
    conditions:{showQuarterRest:true}, subcomponents:[] },
  { component:'Note', transform:`translate(${11*STAFF_LINE_WIDTH},0)`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['G5']},
      { component:'StemmedNoteFlipped', transform:`translate(0,${mapNotePosition['G5']})`, conditions:{ showNoteStemFlipped: true }}
    ]},
  { component:'Rest', transform:`translate(${11*STAFF_LINE_WIDTH},${BASS_GAP})`,
    conditions:{showQuarterRest:true}, subcomponents:[] },
  { component:'Note', transform:`translate(${12*STAFF_LINE_WIDTH},0)`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['A6']},
      { component:'StemmedNoteFlipped', transform:`translate(0,${mapNotePosition['A6']})`, conditions:{ showNoteStemFlipped: true }}
    ]},
  { component:'Rest', transform:`translate(${12*STAFF_LINE_WIDTH},${BASS_GAP})`,
    conditions:{showQuarterRest:true}, subcomponents:[] },
  { component:'Measure', transform:`translate(${12*STAFF_LINE_WIDTH},0)`, conditions:{showStaffBassMeasure:true},
    subcomponents:[{ component:'MeasureEnd', transform:'translate(0,0)', conditions:{}}] }
];
const hollowKnightRestingGroundsDataPageOneLineTwo = [
  { component:'Clef', transform:`translate(0,${MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS})`, conditions:{},
    subcomponents:[{ component:'MeasureStart', transform:'translate(0,0)', conditions:{showClefBrace:true}},
      { component:'Treble', transform:'translate(0,0)', conditions:{}},
      { component:'Bass', transform:'translate(0,0)', conditions:{}}] },
  { component:'KeySignature', transform:`translate(0,${MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS})`, conditions:{},
    subcomponents:[{ component:'FlatKeySignature', transform:'translate(0,0)',
      conditions:{showAFlat:true,showEFlat:true,showBFlat:true}}]},
  { component:'KeySignature', transform:`translate(0,${BASS_GAP+MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS})`, conditions:{},
    subcomponents:[{ component:'FlatKeySignature', transform:'translate(0,0)',
      conditions:{showAFlat:true,showEFlat:true,showBFlat:true}}]},
  { component:'Note', transform:`translate(0,${MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS})`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['C5']},
      { component:'StemmedNoteFlipped', transform:`translate(0,${mapNotePosition['C5']})`, conditions:{ showNoteStemFlipped: true }}
    ]},
  { component:'Rest', transform:`translate(0,${BASS_GAP+MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS})`,
    conditions:{showQuarterRest:true}, subcomponents:[] },
  { component:'Note', transform:`translate(${STAFF_LINE_WIDTH},${MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS})`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['F5']},
      { component:'StemmedNoteFlipped', transform:`translate(0,${mapNotePosition['F5']})`, conditions:{ showNoteStemFlipped: true }}
    ]},
  { component:'Rest', transform:`translate(${STAFF_LINE_WIDTH},${BASS_GAP+MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS})`,
    conditions:{showQuarterRest:true}, subcomponents:[] },
  { component:'Note', transform:`translate(${2*STAFF_LINE_WIDTH},${MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS})`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['G5']},
      { component:'StemmedNoteFlipped', transform:`translate(0,${mapNotePosition['G5']})`, conditions:{ showNoteStemFlipped: true }}
    ]},
  { component:'Rest', transform:`translate(${2*STAFF_LINE_WIDTH},${BASS_GAP+MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS})`,
    conditions:{showQuarterRest:true}, subcomponents:[] },
  { component:'Measure', transform:`translate(${2*STAFF_LINE_WIDTH},${MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS})`, conditions:{showStaffBassMeasure:true},
    subcomponents:[{ component:'MeasureEnd', transform:'translate(0,0)', conditions:{}}] },
  { component:'Note', transform:`translate(${3*STAFF_LINE_WIDTH},${MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS})`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['C5']},
      { component:'StemmedNoteFlipped', transform:`translate(0,${mapNotePosition['C5']})`, conditions:{ showNoteStemFlipped: true }}
    ]},
  { component:'Rest', transform:`translate(${3*STAFF_LINE_WIDTH},${BASS_GAP+MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS})`,
    conditions:{showQuarterRest:true}, subcomponents:[] },
  { component:'Note', transform:`translate(${4*STAFF_LINE_WIDTH},${MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS})`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['F5']},
      { component:'StemmedNoteFlipped', transform:`translate(0,${mapNotePosition['F5']})`, conditions:{ showNoteStemFlipped: true }}
    ]},
  { component:'Rest', transform:`translate(${4*STAFF_LINE_WIDTH},${BASS_GAP+MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS})`,
    conditions:{showQuarterRest:true}, subcomponents:[] },
  { component:'Note', transform:`translate(${5*STAFF_LINE_WIDTH},${MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS})`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['G5']},
      { component:'StemmedNoteFlipped', transform:`translate(0,${mapNotePosition['G5']})`, conditions:{ showNoteStemFlipped: true }}
    ]},
  { component:'Rest', transform:`translate(${5*STAFF_LINE_WIDTH},${BASS_GAP+MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS})`,
    conditions:{showQuarterRest:true}, subcomponents:[] },
  { component:'Measure', transform:`translate(${5*STAFF_LINE_WIDTH},${MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS})`, conditions:{showStaffBassMeasure:true},
    subcomponents:[{ component:'MeasureEnd', transform:'translate(0,0)', conditions:{}}] },
  { component:'Note', transform:`translate(${6*STAFF_LINE_WIDTH},${MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS})`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['C5']},
      { component:'StemmedNoteFlipped', transform:`translate(0,${mapNotePosition['C5']})`, conditions:{ showNoteStemFlipped: true }}
    ]},
  { component:'Rest', transform:`translate(${6*STAFF_LINE_WIDTH},${BASS_GAP+MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS})`,
    conditions:{showQuarterRest:true}, subcomponents:[] },
  { component:'Note', transform:`translate(${7*STAFF_LINE_WIDTH},${MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS})`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['E5']},
      { component:'StemmedNoteFlipped', transform:`translate(0,${mapNotePosition['E5']})`, conditions:{ showNoteStemFlipped: true }}
    ]},
  { component:'Rest', transform:`translate(${7*STAFF_LINE_WIDTH},${BASS_GAP+MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS})`,
    conditions:{showQuarterRest:true}, subcomponents:[] },
  { component:'Note', transform:`translate(${8*STAFF_LINE_WIDTH},${MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS})`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['F5']},
      { component:'StemmedNoteFlipped', transform:`translate(0,${mapNotePosition['F5']})`, conditions:{ showNoteStemFlipped: true }}
    ]},
  { component:'Rest', transform:`translate(${8*STAFF_LINE_WIDTH},${BASS_GAP+MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS})`,
    conditions:{showQuarterRest:true}, subcomponents:[] },
  { component:'Measure', transform:`translate(${8*STAFF_LINE_WIDTH},${MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS})`, conditions:{showStaffBassMeasure:true},
    subcomponents:[{ component:'MeasureEnd', transform:'translate(0,0)', conditions:{}}] },
  { component:'Note', transform:`translate(${9*STAFF_LINE_WIDTH},${MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS})`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['C5']},
      { component:'StemmedNoteFlipped', transform:`translate(0,${mapNotePosition['C5']})`, conditions:{ showNoteStemFlipped: true }}
    ]},
  { component:'Rest', transform:`translate(${9*STAFF_LINE_WIDTH},${BASS_GAP+MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS})`,
    conditions:{showQuarterRest:true}, subcomponents:[] },
  { component:'Note', transform:`translate(${10*STAFF_LINE_WIDTH},${MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS})`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['D5']},
      { component:'StemmedNoteFlipped', transform:`translate(0,${mapNotePosition['D5']})`, conditions:{ showNoteStemFlipped: true }}
    ]},
  { component:'Rest', transform:`translate(${10*STAFF_LINE_WIDTH},${BASS_GAP+MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS})`,
    conditions:{showQuarterRest:true}, subcomponents:[] },
  { component:'Note', transform:`translate(${11*STAFF_LINE_WIDTH},${MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS})`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['E5']},
      { component:'StemmedNoteFlipped', transform:`translate(0,${mapNotePosition['E5']})`, conditions:{ showNoteStemFlipped: true }}
    ]},
  { component:'Rest', transform:`translate(${11*STAFF_LINE_WIDTH},${BASS_GAP+MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS})`,
    conditions:{showQuarterRest:true}, subcomponents:[] },
  { component:'Measure', transform:`translate(${11*STAFF_LINE_WIDTH},${MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS})`, conditions:{showStaffBassMeasure:true},
    subcomponents:[{ component:'MeasureEnd', transform:'translate(0,0)', conditions:{}}] }
];
const hollowKnightRestingGroundsDataPageOneLineThree = [
  { component:'Clef', transform:`translate(0,${2*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{},
    subcomponents:[{ component:'MeasureStart', transform:'translate(0,0)', conditions:{showClefBrace:true}},
      { component:'Treble', transform:'translate(0,0)', conditions:{}},
      { component:'Bass', transform:'translate(0,0)', conditions:{}}] },
  { component:'KeySignature', transform:`translate(0,${2*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{},
    subcomponents:[{ component:'FlatKeySignature', transform:'translate(0,0)',
      conditions:{showAFlat:true,showEFlat:true,showBFlat:true}}]},
  { component:'KeySignature', transform:`translate(0,${BASS_GAP+2*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{},
    subcomponents:[{ component:'FlatKeySignature', transform:'translate(0,0)',
      conditions:{showAFlat:true,showEFlat:true,showBFlat:true}}]},
  { component:'Note', transform:`translate(0,${2*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['C5']},
      { component:'StemmedNoteFlipped', transform:`translate(0,${mapNotePosition['C5']})`, conditions:{ showNoteStemFlipped: true }}
    ]},
  { component:'Note', transform:`translate(0,${BASS_GAP+2*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['A6']},
      { component:'StemmedNoteFlipped', transform:`translate(0,${mapNotePosition['A6']})`, conditions:{ showNoteStemFlipped: true }}
    ]},
  { component:'Note', transform:`translate(${STAFF_LINE_WIDTH},${2*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['G5']},
      { component:'StemmedNoteFlipped', transform:`translate(0,${mapNotePosition['G5']})`, conditions:{ showNoteStemFlipped: true }}
    ]},
  { component:'Rest', transform:`translate(${STAFF_LINE_WIDTH},${BASS_GAP+2*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`,
    conditions:{showQuarterRest:true}, subcomponents:[] },
  { component:'Note', transform:`translate(${2*STAFF_LINE_WIDTH},${2*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['B6']},
      { component:'StemmedNoteFlipped', transform:`translate(0,${mapNotePosition['B6']})`, conditions:{ showNoteStemFlipped: true }}
    ]},
  { component:'Rest', transform:`translate(${2*STAFF_LINE_WIDTH},${BASS_GAP+2*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`,
    conditions:{showQuarterRest:true}, subcomponents:[] },
  { component:'Measure', transform:`translate(${2*STAFF_LINE_WIDTH},${2*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{showStaffBassMeasure:true},
    subcomponents:[{ component:'MeasureEnd', transform:'translate(0,0)', conditions:{}}] },
  { component:'Note', transform:`translate(${3*STAFF_LINE_WIDTH},${2*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['C5']},
      { component:'StemmedNoteFlipped', transform:`translate(0,${mapNotePosition['C5']})`, conditions:{ showNoteStemFlipped: true }}
    ]},
  { component:'Rest', transform:`translate(${3*STAFF_LINE_WIDTH},${BASS_GAP+2*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`,
    conditions:{showQuarterRest:true}, subcomponents:[] },
  { component:'Note', transform:`translate(${4*STAFF_LINE_WIDTH},${2*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['G5']},
      { component:'StemmedNoteFlipped', transform:`translate(0,${mapNotePosition['G5']})`, conditions:{ showNoteStemFlipped: true }}
    ]},
  { component:'Rest', transform:`translate(${4*STAFF_LINE_WIDTH},${BASS_GAP+2*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`,
    conditions:{showQuarterRest:true}, subcomponents:[] },
  { component:'Note', transform:`translate(${5*STAFF_LINE_WIDTH},${2*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['B6']},
      { component:'StemmedNoteFlipped', transform:`translate(0,${mapNotePosition['B6']})`, conditions:{ showNoteStemFlipped: true }}
    ]},
  { component:'Rest', transform:`translate(${5*STAFF_LINE_WIDTH},${BASS_GAP+2*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`,
    conditions:{showQuarterRest:true}, subcomponents:[] },
  { component:'Measure', transform:`translate(${5*STAFF_LINE_WIDTH},${2*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{showStaffBassMeasure:true},
    subcomponents:[{ component:'MeasureEnd', transform:'translate(0,0)', conditions:{}}] },
  { component:'Note', transform:`translate(${6*STAFF_LINE_WIDTH},${2*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['C5']},
      { component:'StemmedNoteFlipped', transform:`translate(0,${mapNotePosition['C5']})`, conditions:{ showNoteStemFlipped: true }}
    ]},
  { component:'Rest', transform:`translate(${6*STAFF_LINE_WIDTH},${BASS_GAP+2*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`,
    conditions:{showQuarterRest:true}, subcomponents:[] },
  { component:'Note', transform:`translate(${7*STAFF_LINE_WIDTH},${2*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['G5']},
      { component:'StemmedNoteFlipped', transform:`translate(0,${mapNotePosition['G5']})`, conditions:{ showNoteStemFlipped: true }}
    ]},
  { component:'Rest', transform:`translate(${7*STAFF_LINE_WIDTH},${BASS_GAP+2*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`,
    conditions:{showQuarterRest:true}, subcomponents:[] },
  { component:'Note', transform:`translate(${8*STAFF_LINE_WIDTH},${2*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['A6']},
      { component:'StemmedNoteFlipped', transform:`translate(0,${mapNotePosition['A6']})`, conditions:{ showNoteStemFlipped: true }}
    ]},
  { component:'Rest', transform:`translate(${8*STAFF_LINE_WIDTH},${BASS_GAP+2*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`,
    conditions:{showQuarterRest:true}, subcomponents:[] },
  { component:'Measure', transform:`translate(${8*STAFF_LINE_WIDTH},${2*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{showStaffBassMeasure:true},
    subcomponents:[{ component:'MeasureEnd', transform:'translate(0,0)', conditions:{}}] },
  { component:'Note', transform:`translate(${9*STAFF_LINE_WIDTH},${2*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['C5']},
      { component:'StemmedNoteFlipped', transform:`translate(0,${mapNotePosition['C5']})`, conditions:{ showNoteStemFlipped: true }}
    ]},
  { component:'Rest', transform:`translate(${9*STAFF_LINE_WIDTH},${BASS_GAP+2*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`,
    conditions:{showQuarterRest:true}, subcomponents:[] },
  { component:'Note', transform:`translate(${10*STAFF_LINE_WIDTH},${2*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['G5']},
      { component:'StemmedNoteFlipped', transform:`translate(0,${mapNotePosition['G5']})`, conditions:{ showNoteStemFlipped: true }}
    ]},
  { component:'Rest', transform:`translate(${10*STAFF_LINE_WIDTH},${BASS_GAP+2*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`,
    conditions:{showQuarterRest:true}, subcomponents:[] },
  { component:'Note', transform:`translate(${11*STAFF_LINE_WIDTH},${2*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['A6']},
      { component:'StemmedNoteFlipped', transform:`translate(0,${mapNotePosition['A6']})`, conditions:{ showNoteStemFlipped: true }}
    ]},
  { component:'Rest', transform:`translate(${11*STAFF_LINE_WIDTH},${BASS_GAP+2*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`,
    conditions:{showQuarterRest:true}, subcomponents:[] },
  { component:'Measure', transform:`translate(${11*STAFF_LINE_WIDTH},${2*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{showStaffBassMeasure:true},
    subcomponents:[{ component:'MeasureEnd', transform:'translate(0,0)', conditions:{}}] }
];
const hollowKnightRestingGroundsDataPageOneLineFour = [
  { component:'Clef', transform:`translate(0,${3*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{},
    subcomponents:[{ component:'MeasureStart', transform:'translate(0,0)', conditions:{showClefBrace:true}},
      { component:'Treble', transform:'translate(0,0)', conditions:{}},
      { component:'Bass', transform:'translate(0,0)', conditions:{}}] },
  { component:'KeySignature', transform:`translate(0,${3*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{},
    subcomponents:[{ component:'FlatKeySignature', transform:'translate(0,0)',
      conditions:{showAFlat:true,showEFlat:true,showBFlat:true}}]},
  { component:'KeySignature', transform:`translate(0,${BASS_GAP+3*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{},
    subcomponents:[{ component:'FlatKeySignature', transform:'translate(0,0)',
      conditions:{showAFlat:true,showEFlat:true,showBFlat:true}}]},
  { component:'Note', transform:`translate(0,${3*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['C5']},
      { component:'StemmedNoteFlipped', transform:`translate(0,${mapNotePosition['C5']})`, conditions:{ showNoteStemFlipped: true }}
    ]},
  { component:'Note', transform:`translate(0,${BASS_GAP+3*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['A6']},
      { component:'StemmedNoteFlipped', transform:`translate(0,${mapNotePosition['A6']})`, conditions:{ showNoteStemFlipped: true }}
    ]},
  { component:'Note', transform:`translate(${STAFF_LINE_WIDTH},${3*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['F5']},
      { component:'StemmedNoteFlipped', transform:`translate(0,${mapNotePosition['F5']})`, conditions:{ showNoteStemFlipped: true }}
    ]},
  { component:'Rest', transform:`translate(${STAFF_LINE_WIDTH},${BASS_GAP+3*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`,
    conditions:{showQuarterRest:true}, subcomponents:[] },
  { component:'Note', transform:`translate(${2*STAFF_LINE_WIDTH},${3*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['G5']},
      { component:'StemmedNoteFlipped', transform:`translate(0,${mapNotePosition['G5']})`, conditions:{ showNoteStemFlipped: true }}
    ]},
  { component:'Rest', transform:`translate(${2*STAFF_LINE_WIDTH},${BASS_GAP+3*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`,
    conditions:{showQuarterRest:true}, subcomponents:[] },
  { component:'Measure', transform:`translate(${2*STAFF_LINE_WIDTH},${3*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{showStaffBassMeasure:true},
    subcomponents:[{ component:'MeasureEnd', transform:'translate(0,0)', conditions:{}}] },
  { component:'Note', transform:`translate(${3*STAFF_LINE_WIDTH},${3*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['C5']},
      { component:'StemmedNoteFlipped', transform:`translate(0,${mapNotePosition['C5']})`, conditions:{ showNoteStemFlipped: true }}
    ]},
  { component:'Rest', transform:`translate(${3*STAFF_LINE_WIDTH},${BASS_GAP+3*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`,
    conditions:{showQuarterRest:true}, subcomponents:[] },
  { component:'Note', transform:`translate(${4*STAFF_LINE_WIDTH},${3*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['F5']},
      { component:'StemmedNoteFlipped', transform:`translate(0,${mapNotePosition['F5']})`, conditions:{ showNoteStemFlipped: true }}
    ]},
  { component:'Rest', transform:`translate(${4*STAFF_LINE_WIDTH},${BASS_GAP+3*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`,
    conditions:{showQuarterRest:true}, subcomponents:[] },
  { component:'Note', transform:`translate(${5*STAFF_LINE_WIDTH},${3*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['G5']},
      { component:'StemmedNoteFlipped', transform:`translate(0,${mapNotePosition['G5']})`, conditions:{ showNoteStemFlipped: true }}
    ]},
  { component:'Rest', transform:`translate(${5*STAFF_LINE_WIDTH},${BASS_GAP+3*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`,
    conditions:{showQuarterRest:true}, subcomponents:[] },
  { component:'Measure', transform:`translate(${5*STAFF_LINE_WIDTH},${3*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{showStaffBassMeasure:true},
    subcomponents:[{ component:'MeasureEnd', transform:'translate(0,0)', conditions:{}}] },
  { component:'Note', transform:`translate(${6*STAFF_LINE_WIDTH},${3*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['C5']},
      { component:'StemmedNoteFlipped', transform:`translate(0,${mapNotePosition['C5']})`, conditions:{ showNoteStemFlipped: true }}
    ]},
  { component:'Rest', transform:`translate(${6*STAFF_LINE_WIDTH},${BASS_GAP+3*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`,
    conditions:{showQuarterRest:true}, subcomponents:[] },
  { component:'Note', transform:`translate(${7*STAFF_LINE_WIDTH},${3*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['E5']},
      { component:'StemmedNoteFlipped', transform:`translate(0,${mapNotePosition['E5']})`, conditions:{ showNoteStemFlipped: true }}
    ]},
  { component:'Rest', transform:`translate(${7*STAFF_LINE_WIDTH},${BASS_GAP+3*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`,
    conditions:{showQuarterRest:true}, subcomponents:[] },
  { component:'Note', transform:`translate(${8*STAFF_LINE_WIDTH},${3*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['F5']},
      { component:'StemmedNoteFlipped', transform:`translate(0,${mapNotePosition['F5']})`, conditions:{ showNoteStemFlipped: true }}
    ]},
  { component:'Rest', transform:`translate(${8*STAFF_LINE_WIDTH},${BASS_GAP+3*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`,
    conditions:{showQuarterRest:true}, subcomponents:[] },
  { component:'Measure', transform:`translate(${8*STAFF_LINE_WIDTH},${3*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{showStaffBassMeasure:true},
    subcomponents:[{ component:'MeasureEnd', transform:'translate(0,0)', conditions:{}}] },
  { component:'Note', transform:`translate(${9*STAFF_LINE_WIDTH},${3*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['C5']},
      { component:'StemmedNoteFlipped', transform:`translate(0,${mapNotePosition['C5']})`, conditions:{ showNoteStemFlipped: true }}
    ]},
  { component:'Rest', transform:`translate(${9*STAFF_LINE_WIDTH},${BASS_GAP+3*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`,
    conditions:{showQuarterRest:true}, subcomponents:[] },
  { component:'Note', transform:`translate(${10*STAFF_LINE_WIDTH},${3*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['D5']},
      { component:'StemmedNoteFlipped', transform:`translate(0,${mapNotePosition['D5']})`, conditions:{ showNoteStemFlipped: true }}
    ]},
  { component:'Rest', transform:`translate(${10*STAFF_LINE_WIDTH},${BASS_GAP+3*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`,
    conditions:{showQuarterRest:true}, subcomponents:[] },
  { component:'Note', transform:`translate(${11*STAFF_LINE_WIDTH},${3*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['E5']},
      { component:'StemmedNoteFlipped', transform:`translate(0,${mapNotePosition['E5']})`, conditions:{ showNoteStemFlipped: true }}
    ]},
  { component:'Rest', transform:`translate(${11*STAFF_LINE_WIDTH},${BASS_GAP+3*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`,
    conditions:{showQuarterRest:true}, subcomponents:[] },
  { component:'Measure', transform:`translate(${11*STAFF_LINE_WIDTH},${3*(MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS)})`, conditions:{showStaffBassMeasure:true},
    subcomponents:[{ component:'MeasureEnd', transform:'translate(0,0)', conditions:{}}] }
];
const hollowKnightRestingGroundsDataPageOne = [
  ...hollowKnightRestingGroundsDataPageOneLineOne,
  ...hollowKnightRestingGroundsDataPageOneLineTwo,
  ...hollowKnightRestingGroundsDataPageOneLineThree,
  ...hollowKnightRestingGroundsDataPageOneLineFour
];
const hollowKnightRestingGroundsDataPageTwoLineOne = [
  { component:'Clef', transform:`translate(0,${MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS})`, conditions:{},
    subcomponents:[{ component:'MeasureStart', transform:'translate(0,0)', conditions:{showClefBrace:true}},
      { component:'Treble', transform:'translate(0,0)', conditions:{}},
      { component:'Bass', transform:'translate(0,0)', conditions:{}}] },
  { component:'KeySignature', transform:`translate(0,${MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS})`, conditions:{},
    subcomponents:[{ component:'FlatKeySignature', transform:'translate(0,0)',
      conditions:{showAFlat:true,showEFlat:true,showBFlat:true}}]},
  { component:'KeySignature', transform:`translate(0,${BASS_GAP+MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS})`, conditions:{},
    subcomponents:[{ component:'FlatKeySignature', transform:'translate(0,0)',
      conditions:{showAFlat:true,showEFlat:true,showBFlat:true}}]},
  { component:'Note', transform:`translate(0,${MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS})`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['C5']},
      { component:'StemmedNoteFlipped', transform:`translate(0,${mapNotePosition['C5']})`, conditions:{ showNoteStemFlipped: true }}
    ]},
  { component:'Note', transform:`translate(0,${BASS_GAP+MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS})`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['C5']},
      { component:'StemmedNoteFlipped', transform:`translate(0,${mapNotePosition['C5']})`, conditions:{ showNoteStemFlipped: true }}
    ]},
  { component:'Rest', transform:`translate(${STAFF_LINE_WIDTH},${MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS})`,
    conditions:{showQuarterRest:true}, subcomponents:[] },
  { component:'Note', transform:`translate(${STAFF_LINE_WIDTH},${BASS_GAP+MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS})`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['E5']},
      { component:'StemmedNoteFlipped', transform:`translate(0,${mapNotePosition['E5']})`, conditions:{ showNoteStemFlipped: true }}
    ]},
  { component:'Rest', transform:`translate(${2*STAFF_LINE_WIDTH},${MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS})`,
    conditions:{showQuarterRest:true}, subcomponents:[] },
  { component:'Note', transform:`translate(${2*STAFF_LINE_WIDTH},${BASS_GAP+MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS})`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['G5']},
      { component:'StemmedNoteFlipped', transform:`translate(0,${mapNotePosition['G5']})`, conditions:{ showNoteStemFlipped: true }}
    ]},
  { component:'Measure', transform:`translate(${2*STAFF_LINE_WIDTH},${MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS})`, conditions:{showStaffBassMeasure:true},
    subcomponents:[{ component:'MeasureEnd', transform:'translate(0,0)', conditions:{}}] },
  { component:'Note', transform:`translate(${3*STAFF_LINE_WIDTH},${MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS})`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['G4']},
      { component:'StemmedNoteFlipped', transform:`translate(0,${mapNotePosition['G4']})`, conditions:{ showNoteStemFlipped: true }}
    ]},
  { component:'Note', transform:`translate(${3*STAFF_LINE_WIDTH},${BASS_GAP+MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS})`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['C5']},
      { component:'StemmedNoteFlipped', transform:`translate(0,${mapNotePosition['C5']})`, conditions:{ showNoteStemFlipped: true }}
    ]},
  { component:'Rest', transform:`translate(${4*STAFF_LINE_WIDTH},${MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS})`,
    conditions:{showQuarterRest:true}, subcomponents:[] },
  { component:'Note', transform:`translate(${4*STAFF_LINE_WIDTH},${BASS_GAP+MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS})`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['E5']},
      { component:'StemmedNoteFlipped', transform:`translate(0,${mapNotePosition['E5']})`, conditions:{ showNoteStemFlipped: true }}
    ]},
  { component:'Rest', transform:`translate(${5*STAFF_LINE_WIDTH},${MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS})`,
    conditions:{showQuarterRest:true}, subcomponents:[] },
  { component:'Note', transform:`translate(${5*STAFF_LINE_WIDTH},${BASS_GAP+MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS})`, conditions:{},
    subcomponents:[
      { component:'Staff', transform:'translate(0,0)', conditions:mapStaffLines['G5']},
      { component:'StemmedNoteFlipped', transform:`translate(0,${mapNotePosition['G5']})`, conditions:{ showNoteStemFlipped: true }}
    ]},
  { component:'Measure', transform:`translate(${5*STAFF_LINE_WIDTH},${MEASURE_BOTH_STAFFS_HEIGHT+HEIGHT_BETWEEN_ROWS})`, conditions:{showStaffBassMeasure:true},
    subcomponents:[{ component:'MeasureEnd', transform:'translate(0,0)', conditions:{}}] }
];
const hollowKnightRestingGroundsDataPageTwo = [
  ...hollowKnightRestingGroundsDataPageTwoLineOne
];
export const hollowKnightRestingGroundsData = [
  ...hollowKnightRestingGroundsDataPageTwo
];