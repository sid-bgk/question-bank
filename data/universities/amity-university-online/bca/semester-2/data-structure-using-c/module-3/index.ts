import { Module } from '../../../../../../types';
import { mcq } from './mcq';
import { brief } from './brief';
import { case_study } from './case-study';

export const module_3: Module = {
    id: "module-3",
    name: "Module 3: Programming with Linked Lists",
    mcq,
    brief,
    case_study
};
