#!/usr/bin/env node 
import readlineSync from 'readline-sync';
import {user} from '../src/cli.js'; 
console.log("Welcome to the brain games")
const name = readlineSync.question('Your answer: ');
user();