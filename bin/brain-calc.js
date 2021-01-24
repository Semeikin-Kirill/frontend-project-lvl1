#!/usr/bin/env node
import { taskToCalc, calcQuestion, calcAnswer } from '../src/game/calc.js';
import gameArchitecture from '../src/index.js';

gameArchitecture(calcQuestion, calcAnswer, taskToCalc);
