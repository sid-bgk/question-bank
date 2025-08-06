import { Module } from '../../../../../../types';
import { mcq } from './mcq';
import { brief } from './brief';
import { case_study } from './case-study';

export const module_2: Module = {
    id: "module-2",
    name: "Module 2: Anatomy and Billings",
    mcq,
    brief,
    case_study
};
