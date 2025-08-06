import { Semester } from '../../../../types';
import { programming_in_c } from './programming-in-c';
import { business_communication } from './business-communication';
import { human_computer_interaction } from './human-computer-interaction';
import { basic_mathematics_1 } from './basic-mathematics-1';
import { computer_and_information_technology } from './computer-and-information-technology';

export const semester_1: Semester = {
    id: "semester-1",
    name: "Semester 1",
    subjects: [programming_in_c, business_communication, human_computer_interaction, basic_mathematics_1, computer_and_information_technology]
};
