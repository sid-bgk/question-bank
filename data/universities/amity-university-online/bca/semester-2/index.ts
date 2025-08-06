import { Semester } from '../../../../types';
import { individual_excellence_and_social_dynamic } from './individual-excellence-and-social-dynamic';
import { software_engineering_and_modeling } from './software-engineering-and-modeling';
import { operating_system_concepts } from './operating-system-concepts';
import { data_structure_using_c } from './data-structure-using-c';
import { environmental_studies } from './environmental-studies';

export const semester_2: Semester = {
    id: "semester-2",
    name: "Semester 2",
    subjects: [individual_excellence_and_social_dynamic, software_engineering_and_modeling, operating_system_concepts, data_structure_using_c, environmental_studies]
};
