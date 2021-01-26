#!/usr/bin/env node
import gameArchitecture from '../src/index.js';
import {
  taskToProgression,
  progressionQuestion,
  progressionAnswer,
} from '../src/game/progression.js';

gameArchitecture(progressionQuestion, progressionAnswer, taskToProgression);
