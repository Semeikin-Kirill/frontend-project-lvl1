#!/usr/bin/env node
import gameArchitecture from '../src/index.js';
import { yesOrNo, evenQuestion, taskToEven } from '../src/game/even.js';

gameArchitecture(evenQuestion, yesOrNo, taskToEven);
