const fs = require('fs');
const path = require('path');

// Read and parse the current questionBank TypeScript file
function loadQuestionBank() {
    const questionBankPath = path.join(__dirname, '..', 'data', 'questionBank.ts');
    const content = fs.readFileSync(questionBankPath, 'utf8');
    
    // Extract the questionBank object using regex (simplified approach)
    // This assumes the export const questionBank = { ... }; structure
    const match = content.match(/export const questionBank = ({[\s\S]*});?\s*$/m);
    if (!match) {
        throw new Error('Could not find questionBank export in the file');
    }
    
    // Use eval to parse the JavaScript object (safe in this controlled environment)
    const questionBankCode = `const questionBank = ${match[1]}; questionBank;`;
    return eval(questionBankCode);
}

// Create directory recursively
function ensureDir(dirPath) {
    if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true });
    }
}

// Generate TypeScript interface definitions
function generateTypes() {
    const typesContent = `// Generated type definitions
export interface MCQ {
    question: string;
    codeBlock?: string;
    language?: string;
    options: string[];
    answer: string;
    explanation?: string;
}

export interface Brief {
    question: string;
    codeBlock?: string;
    language?: string;
    answer: string;
}

export interface CaseStudy {
    title: string;
    description: string;
    codeBlock?: string;
    language?: string;
    mcq: MCQ[];
    brief: Brief[];
}

export interface Module {
    id: string;
    name: string;
    mcq: MCQ[];
    brief: Brief[];
    case_study: CaseStudy[];
}

export interface Subject {
    id: string;
    name: string;
    modules: Module[];
}

export interface Semester {
    id: string;
    name: string;
    subjects: Subject[];
}

export interface Course {
    id: string;
    name: string;
    semesters: Semester[];
}

export interface University {
    id: string;
    name: string;
    courses: Course[];
}

export interface QuestionBank {
    universities: University[];
}
`;

    const typesPath = path.join(__dirname, '..', 'data', 'types', 'index.ts');
    ensureDir(path.dirname(typesPath));
    fs.writeFileSync(typesPath, typesContent);
    console.log('✓ Created data/types/index.ts');
}

// Generate content files for a module
function generateModuleFiles(module, modulePath) {
    // Create MCQ file
    if (module.mcq && module.mcq.length > 0) {
        const mcqContent = `import { MCQ } from '../../../../../../types';

export const mcq: MCQ[] = ${JSON.stringify(module.mcq, null, 2)};
`;
        fs.writeFileSync(path.join(modulePath, 'mcq.ts'), mcqContent);
    } else {
        const mcqContent = `import { MCQ } from '../../../../../../types';

export const mcq: MCQ[] = [];
`;
        fs.writeFileSync(path.join(modulePath, 'mcq.ts'), mcqContent);
    }

    // Create Brief file
    if (module.brief && module.brief.length > 0) {
        const briefContent = `import { Brief } from '../../../../../../types';

export const brief: Brief[] = ${JSON.stringify(module.brief, null, 2)};
`;
        fs.writeFileSync(path.join(modulePath, 'brief.ts'), briefContent);
    } else {
        const briefContent = `import { Brief } from '../../../../../../types';

export const brief: Brief[] = [];
`;
        fs.writeFileSync(path.join(modulePath, 'brief.ts'), briefContent);
    }

    // Create Case Study file
    if (module.case_study && module.case_study.length > 0) {
        const caseStudyContent = `import { CaseStudy } from '../../../../../../types';

export const case_study: CaseStudy[] = ${JSON.stringify(module.case_study, null, 2)};
`;
        fs.writeFileSync(path.join(modulePath, 'case-study.ts'), caseStudyContent);
    } else {
        const caseStudyContent = `import { CaseStudy } from '../../../../../../types';

export const case_study: CaseStudy[] = [];
`;
        fs.writeFileSync(path.join(modulePath, 'case-study.ts'), caseStudyContent);
    }

    // Create module index file
    const moduleIndexContent = `import { Module } from '../../../../../../types';
import { mcq } from './mcq';
import { brief } from './brief';
import { case_study } from './case-study';

export const ${toValidIdentifier(module.id)}: Module = {
    id: "${module.id}",
    name: "${module.name}",
    mcq,
    brief,
    case_study
};
`;
    fs.writeFileSync(path.join(modulePath, 'index.ts'), moduleIndexContent);
}

// Generate subject index file
function generateSubjectIndex(subject, subjectPath, modules) {
    const moduleImports = modules.map(module => 
        `import { ${toValidIdentifier(module.id)} } from './${module.id}';`
    ).join('\n');

    const moduleExports = modules.map(module => toValidIdentifier(module.id)).join(', ');

    const subjectIndexContent = `import { Subject } from '../../../../../types';
${moduleImports}

export const ${toValidIdentifier(subject.id)}: Subject = {
    id: "${subject.id}",
    name: "${subject.name}",
    modules: [${moduleExports}]
};
`;
    fs.writeFileSync(path.join(subjectPath, 'index.ts'), subjectIndexContent);
}

// Generate semester index file
function generateSemesterIndex(semester, semesterPath, subjects) {
    const subjectImports = subjects.map(subject => 
        `import { ${toValidIdentifier(subject.id)} } from './${subject.id}';`
    ).join('\n');

    const subjectExports = subjects.map(subject => toValidIdentifier(subject.id)).join(', ');

    const semesterIndexContent = `import { Semester } from '../../../../types';
${subjectImports}

export const ${toValidIdentifier(semester.id)}: Semester = {
    id: "${semester.id}",
    name: "${semester.name}",
    subjects: [${subjectExports}]
};
`;
    fs.writeFileSync(path.join(semesterPath, 'index.ts'), semesterIndexContent);
}

// Generate course index file
function generateCourseIndex(course, coursePath, semesters) {
    const semesterImports = semesters.map(semester => 
        `import { ${toValidIdentifier(semester.id)} } from './${semester.id}';`
    ).join('\n');

    const semesterExports = semesters.map(semester => toValidIdentifier(semester.id)).join(', ');

    const courseIndexContent = `import { Course } from '../../../types';
${semesterImports}

export const ${toValidIdentifier(course.id)}: Course = {
    id: "${course.id}",
    name: "${course.name}",
    semesters: [${semesterExports}]
};
`;
    fs.writeFileSync(path.join(coursePath, 'index.ts'), courseIndexContent);
}

// Generate university index file
function generateUniversityIndex(university, universityPath, courses) {
    const courseImports = courses.map(course => 
        `import { ${toValidIdentifier(course.id)} } from './${course.id}';`
    ).join('\n');

    const courseExports = courses.map(course => toValidIdentifier(course.id)).join(', ');

    const universityIndexContent = `import { University } from '../../types';
${courseImports}

export const ${toValidIdentifier(university.id)}: University = {
    id: "${university.id}",
    name: "${university.name}",
    courses: [${courseExports}]
};
`;
    fs.writeFileSync(path.join(universityPath, 'index.ts'), universityIndexContent);
}

// Convert kebab-case to camelCase and handle numbers
function toCamelCase(str) {
    return str.replace(/-([a-z0-9])/g, (g) => g[1].toUpperCase())
              .replace(/^([0-9])/, (g) => '_' + g); // Prefix numbers with underscore
}

// Create valid JavaScript identifier
function toValidIdentifier(str) {
    return str.replace(/-/g, '_').replace(/[^a-zA-Z0-9_]/g, '_');
}

// Main splitting function
function splitQuestionBank() {
    console.log('🚀 Starting QuestionBank splitting...');

    // Load the question bank data
    const questionBank = loadQuestionBank();
    console.log(`✓ Loaded questionBank with ${questionBank.universities.length} universities`);

    // Generate types
    generateTypes();

    const universities = [];

    // Process each university
    questionBank.universities.forEach(university => {
        console.log(`\n📚 Processing university: ${university.name}`);
        
        const universityPath = path.join(__dirname, '..', 'data', 'universities', university.id);
        ensureDir(universityPath);

        const courses = [];

        university.courses.forEach(course => {
            console.log(`  📖 Processing course: ${course.name}`);
            
            const coursePath = path.join(universityPath, course.id);
            ensureDir(coursePath);

            const semesters = [];

            course.semesters.forEach(semester => {
                console.log(`    📅 Processing semester: ${semester.name}`);
                
                const semesterPath = path.join(coursePath, semester.id);
                ensureDir(semesterPath);

                const subjects = [];

                semester.subjects.forEach(subject => {
                    console.log(`      📚 Processing subject: ${subject.name}`);
                    
                    const subjectPath = path.join(semesterPath, subject.id);
                    ensureDir(subjectPath);

                    const modules = [];

                    subject.modules.forEach(module => {
                        console.log(`        📄 Processing module: ${module.name}`);
                        
                        const modulePath = path.join(subjectPath, module.id);
                        ensureDir(modulePath);

                        // Generate module files
                        generateModuleFiles(module, modulePath);
                        modules.push(module);

                        console.log(`          ✓ Created module files for ${module.id}`);
                    });

                    // Generate subject index
                    generateSubjectIndex(subject, subjectPath, modules);
                    subjects.push(subject);
                    console.log(`        ✓ Created subject index for ${subject.id}`);
                });

                // Generate semester index
                generateSemesterIndex(semester, semesterPath, subjects);
                semesters.push(semester);
                console.log(`      ✓ Created semester index for ${semester.id}`);
            });

            // Generate course index
            generateCourseIndex(course, coursePath, semesters);
            courses.push(course);
            console.log(`    ✓ Created course index for ${course.id}`);
        });

        // Generate university index
        generateUniversityIndex(university, universityPath, courses);
        universities.push(university);
        console.log(`  ✓ Created university index for ${university.id}`);
    });

    // Update main questionBank.ts
    const universityImports = universities.map(university => 
        `import { ${toValidIdentifier(university.id)} } from './universities/${university.id}';`
    ).join('\n');

    const universityExports = universities.map(university => toValidIdentifier(university.id)).join(',\n        ');

    const newQuestionBankContent = `// Generated QuestionBank - imports from split files
import { QuestionBank } from './types';
${universityImports}

export const questionBank: QuestionBank = {
    universities: [
        ${universityExports}
    ]
};
`;

    // Backup original file
    const originalPath = path.join(__dirname, '..', 'data', 'questionBank.ts');
    const backupPath = path.join(__dirname, '..', 'data', 'questionBank.original.ts');
    
    if (fs.existsSync(originalPath)) {
        fs.copyFileSync(originalPath, backupPath);
        console.log('✓ Created backup: data/questionBank.original.ts');
    }

    fs.writeFileSync(originalPath, newQuestionBankContent);
    console.log('✓ Updated data/questionBank.ts');

    console.log('\n🎉 QuestionBank splitting completed successfully!');
    console.log('\n📊 Summary:');
    console.log(`   • Universities: ${universities.length}`);
    console.log(`   • Total courses: ${universities.reduce((acc, u) => acc + u.courses.length, 0)}`);
    console.log(`   • Total semesters: ${universities.reduce((acc, u) => acc + u.courses.reduce((acc2, c) => acc2 + c.semesters.length, 0), 0)}`);
    console.log(`   • Total subjects: ${universities.reduce((acc, u) => acc + u.courses.reduce((acc2, c) => acc2 + c.semesters.reduce((acc3, s) => acc3 + s.subjects.length, 0), 0), 0)}`);
    console.log(`   • Total modules: ${universities.reduce((acc, u) => acc + u.courses.reduce((acc2, c) => acc2 + c.semesters.reduce((acc3, s) => acc3 + s.subjects.reduce((acc4, sub) => acc4 + sub.modules.length, 0), 0), 0), 0)}`);
}

// Run the script
if (require.main === module) {
    try {
        splitQuestionBank();
    } catch (error) {
        console.error('❌ Error during splitting:', error);
        process.exit(1);
    }
}

module.exports = { splitQuestionBank };