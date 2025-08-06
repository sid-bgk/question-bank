import { Module } from '../../../../../../types';
import { mcq } from './mcq';
import { brief } from './brief';
import { case_study } from './case-study';

export const module_2: Module = {
    id: "module-2",
    name: "Moudle 2: Motivation and Emotional Intelligence",
    mcq,
    brief,
    case_study
};
