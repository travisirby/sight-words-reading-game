// Data and tiny helpers for the 5-step sight-word study loop:
// Hear it -> Map it -> Build it -> Use it -> Recognize it fast later.
//
// This module is deliberately DOM-free so gameplay can decide when to open
// the study UI without inheriting a sequencing/state-machine dependency.

import { getLevelWords } from './words.js';

export const WORD_STUDY_STEPS = [
  { key: 'hear', label: 'Hear it' },
  { key: 'map', label: 'Map it' },
  { key: 'build', label: 'Build it' },
  { key: 'use', label: 'Use it' },
  { key: 'fast', label: 'Recognize it fast' },
];

export const WORD_STUDY = {
  a: {
    id: 'a',
    displayWord: 'a',
    chunks: [
      {
        grapheme: 'a',
        sound: 'uh',
        soundLabel: 'says uh',
        tricky: true,
        note: 'In sentences, this word often sounds like "uh".',
      },
    ],
    buildLetters: ['a'],
    cloze: {
      text: 'I see ___ cat.',
      answer: 'a',
      choices: ['a', 'and', 'big'],
    },
  },
  and: {
    id: 'and',
    displayWord: 'and',
    chunks: [
      { grapheme: 'a', sound: 'short a', soundLabel: 'short a' },
      { grapheme: 'n', sound: 'n', soundLabel: 'nnn' },
      { grapheme: 'd', sound: 'd', soundLabel: 'd' },
    ],
    buildLetters: ['a', 'n', 'd'],
    cloze: {
      text: 'Mom ___ I run.',
      answer: 'and',
      choices: ['and', 'a', 'away'],
    },
  },
  away: {
    id: 'away',
    displayWord: 'away',
    chunks: [
      {
        grapheme: 'a',
        sound: 'uh',
        soundLabel: 'says uh',
        tricky: true,
        note: 'The first a is quick and soft.',
      },
      { grapheme: 'w', sound: 'w', soundLabel: 'w' },
      { grapheme: 'ay', sound: 'long a', soundLabel: 'long a' },
    ],
    buildLetters: ['a', 'w', 'a', 'y'],
    cloze: {
      text: 'Run ___ from the mud.',
      answer: 'away',
      choices: ['away', 'and', 'blue'],
    },
  },
  big: {
    id: 'big',
    displayWord: 'big',
    chunks: [
      { grapheme: 'b', sound: 'b', soundLabel: 'b' },
      { grapheme: 'i', sound: 'short i', soundLabel: 'short i' },
      { grapheme: 'g', sound: 'g', soundLabel: 'g' },
    ],
    buildLetters: ['b', 'i', 'g'],
    cloze: {
      text: 'The dog is ___.',
      answer: 'big',
      choices: ['big', 'blue', 'a'],
    },
  },
  blue: {
    id: 'blue',
    displayWord: 'blue',
    chunks: [
      { grapheme: 'b', sound: 'b', soundLabel: 'b' },
      { grapheme: 'l', sound: 'l', soundLabel: 'l' },
      {
        grapheme: 'ue',
        sound: 'oo',
        soundLabel: 'says oo',
        tricky: true,
        note: 'The ue team says "oo" in blue.',
      },
    ],
    buildLetters: ['b', 'l', 'u', 'e'],
    cloze: {
      text: 'I see a ___ car.',
      answer: 'blue',
      choices: ['blue', 'big', 'away'],
    },
  },
  said: {
    id: 'said',
    displayWord: 'said',
    chunks: [
      { grapheme: 's', sound: 's', soundLabel: 's' },
      {
        grapheme: 'ai',
        sound: 'short e',
        soundLabel: 'says short e',
        tricky: true,
        note: 'The ai looks different from the sound you hear.',
      },
      { grapheme: 'd', sound: 'd', soundLabel: 'd' },
    ],
    buildLetters: ['s', 'a', 'i', 'd'],
    cloze: {
      text: 'Dad ___ yes.',
      answer: 'said',
      choices: ['said', 'see', 'and'],
    },
  },
};

export function normalizeStudyWord(word) {
  return String(word || '').trim().toLowerCase();
}

export function hasWordStudy(word) {
  return !!WORD_STUDY[normalizeStudyWord(word)];
}

export function getWordStudy(word) {
  return WORD_STUDY[normalizeStudyWord(word)] || null;
}

export function getWordStudyForWords(words) {
  return words.map((word) => getWordStudy(word)).filter(Boolean);
}

export function getWordStudyForLevel(worldIdx, levelIdx, { includeSaidExample = true } = {}) {
  const words = getLevelWords(worldIdx, levelIdx) || [];
  const withExamples = words.slice();
  if (includeSaidExample && worldIdx === 0 && levelIdx === 0 && !withExamples.includes('said')) {
    withExamples.push('said');
  }
  return getWordStudyForWords(withExamples);
}

export const GRASS_PLAINS_LEVEL_1_STUDY = getWordStudyForLevel(0, 0);
