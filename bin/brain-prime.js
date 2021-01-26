#!/usr/bin/env node
import gameArchitecture from '../src/index.js';
import { questionPrime, yesOrNo, taskToPrime } from '../src/game/prime.js';

gameArchitecture(questionPrime, yesOrNo, taskToPrime);
