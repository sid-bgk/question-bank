import { Module } from '../../../../../../types';
import { mcq } from './mcq';
import { brief } from './brief';
import { case_study } from './case-study';

export const module_1: Module = {
    id: "module-1",
    name: "Module 1: Introduction",
    mcq,
    brief,
    case_study
};
