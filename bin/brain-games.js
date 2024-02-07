#!/usr/bin/env node 
import readlineSync from 'readline-sync';
import {user} from '../src/cli.js'; 
const name = readlineSync.question('Your answer: ');
user();