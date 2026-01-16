import { Course } from '../../../types';
import { semester_1 } from './semester-1';
import { semester_2 } from './semester-2';
import { semester_3 } from './semester-3';

export const bca: Course = {
    id: "bca",
    name: "BCA",
    semesters: [semester_1, semester_2, semester_3]
};
