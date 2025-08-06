import { Module } from '../../../../../../types';
import { mcq } from './mcq';
import { brief } from './brief';
import { case_study } from './case-study';

export const module_1_introduction_to_data_structures: Module = {
    id: "module-1-introduction-to-data-structures",
    name: "Module 1: Introduction to Data Structures",
    mcq,
    brief,
    case_study
};
