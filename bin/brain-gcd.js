#!/usr/bin/env node
import gameArchitecture from '../src/index.js';
import { taskToGcd, nod, gcdQuestion } from '../src/game/gcd.js';

gameArchitecture(gcdQuestion, nod, taskToGcd);
