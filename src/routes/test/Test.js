import React from 'react';
import Page from 'components/layout';
import Button, { MusicIconButton } from 'components/button';
import { ICON_SIZES, MUSIC_ICON_TYPES } from 'constants/icon';
import {
  barTypes,
  noteModifierTypes,
  noteTypes,
  restTypes,
  pedalTypes,
  ottavaTypes,
  crescendoTypes
} from 'constants/musicnotation';

const Test = () => {
  const renderCrescendoSymbol = crescendoTypes.map(item => {
    return (
      <MusicIconButton
        key={item.key}
        type={item.key}
        onClick={() => { console.log(item.value); }}
      />
    );
  }).filter(Boolean);

  const renderOttavaSymbol = ottavaTypes.map(item => {
    return (
      <MusicIconButton
        key={item.key}
        type={item.key}
        onClick={() => { console.log(item.value); }}
      />
    );
  }).filter(Boolean);

  const renderPedalSymbol = pedalTypes.map(item => {
    return (
      <MusicIconButton
        key={item.key}
        type={item.key}
        onClick={() => { console.log(item.value); }}
      />
    );
  }).filter(Boolean);

  const renderBarSymbol = barTypes.map(item => {
    return (
      <MusicIconButton
        key={item.key}
        type={item.key}
        onClick={() => { console.log(item.value); }}
      />
    );
  }).filter(Boolean);

  const renderModifierSymbol = noteModifierTypes.map(item => {
    return (
      <MusicIconButton
        key={item.key}
        type={item.key}
        onClick={() => { console.log(item.value); }}
      />
    );
  }).filter(Boolean);

  const renderNoteSymbol = noteTypes.map(item => {
    return (
      <MusicIconButton
        key={item.key}
        type={item.key}
        onClick={() => { console.log(item.value); }}
      />
    );
  }).filter(Boolean);

  const renderRestSymbol = restTypes.map(item => {
    return (
      <MusicIconButton
        key={item.key}
        type={item.key}
        onClick={() => { console.log(item.value); }}
      />
    );
  }).filter(Boolean);

  return (
    <Page>
      {renderCrescendoSymbol}
      {renderOttavaSymbol}
      {renderPedalSymbol}
      {renderBarSymbol}
      {renderModifierSymbol}
      {renderNoteSymbol}
      {renderRestSymbol}
    </Page>
  );
};

export default Test;
