// Global structured data configuration
const SITE_CONFIG = {
  name: "OrbiPath Practice",
  description: "Practice questions and study materials for university courses",
  url: "https://practice.orbipath.com",
  organization: {
    name: "OrbiPath",
    url: "https://orbipath.com",
    description: "Educational technology platform providing practice questions and study materials",
    logo: "https://practice.orbipath.com/logo.png", // Add your actual logo URL
    sameAs: [
      "https://practice.orbipath.com"
    ]
  }
};

// Base structured data that's included on every page
const getBaseStructuredData = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": SITE_CONFIG.name,
  "description": SITE_CONFIG.description,
  "url": SITE_CONFIG.url,
  "publisher": {
    "@type": "Organization",
    "name": SITE_CONFIG.organization.name,
    "url": SITE_CONFIG.organization.url,
    "description": SITE_CONFIG.organization.description,
    "logo": {
      "@type": "ImageObject",
      "url": SITE_CONFIG.organization.logo
    },
    "sameAs": SITE_CONFIG.organization.sameAs
  }
});

// Types for page-specific structured data
export interface PageStructuredData {
  type?: 'Course' | 'EducationalOrganization' | 'ItemList' | 'BreadcrumbList' | 'WebPage';
  name?: string;
  description?: string;
  url?: string;
  breadcrumbs?: Array<{ name: string; url: string; position: number }>;
  itemList?: Array<{ name: string; url: string; position: number; type?: string }>;
  courseData?: {
    provider?: { name: string; url?: string };
    prerequisites?: string;
    educationalLevel?: string;
  };
  organizationData?: {
    mainEntity?: Record<string, unknown>;
  };
}

// Main function to generate consolidated structured data
export const generateStructuredData = (pageData?: PageStructuredData): string => {
  const baseData = getBaseStructuredData();
  
  if (!pageData) {
    return JSON.stringify(baseData);
  }

  // Create the main structured data object based on page type
  const mainStructuredData: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": pageData.type || "WebPage",
    "name": pageData.name || SITE_CONFIG.name,
    "description": pageData.description || SITE_CONFIG.description,
    "url": pageData.url || SITE_CONFIG.url,
    "publisher": baseData.publisher
  };

  // Add course-specific data
  if (pageData.type === 'Course' && pageData.courseData) {
    if (pageData.courseData.provider) {
      mainStructuredData.provider = {
        "@type": "EducationalOrganization",
        "name": pageData.courseData.provider.name,
        ...(pageData.courseData.provider.url && { "url": pageData.courseData.provider.url })
      };
    }
    if (pageData.courseData.prerequisites) {
      mainStructuredData.coursePrerequisites = {
        "@type": "Course",
        "name": pageData.courseData.prerequisites
      };
    }
    if (pageData.courseData.educationalLevel) {
      mainStructuredData.educationalLevel = pageData.courseData.educationalLevel;
    }
  }

  // Add organization-specific data
  if (pageData.type === 'EducationalOrganization' && pageData.organizationData?.mainEntity) {
    mainStructuredData.mainEntity = pageData.organizationData.mainEntity;
  }

  // Add breadcrumbs if provided
  if (pageData.breadcrumbs && pageData.breadcrumbs.length > 0) {
    mainStructuredData.breadcrumb = {
      "@type": "BreadcrumbList",
      "itemListElement": pageData.breadcrumbs.map(breadcrumb => ({
        "@type": "ListItem",
        "position": breadcrumb.position,
        "name": breadcrumb.name,
        "item": breadcrumb.url
      }))
    };
  }

  // Add item list if provided
  if (pageData.itemList && pageData.itemList.length > 0) {
    mainStructuredData.mainEntity = {
      "@type": "ItemList",
      "name": `${pageData.name || 'Items'} List`,
      "numberOfItems": pageData.itemList.length,
      "itemListElement": pageData.itemList.map(item => ({
        "@type": "ListItem",
        "position": item.position,
        "item": {
          "@type": item.type || "WebPage",
          "name": item.name,
          "url": item.url
        }
      }))
    };
  }

  return JSON.stringify(mainStructuredData);
};

// Helper functions for common page types
export const generateHomePageData = (universities: Array<{ id: string; name: string }>) => {
  return generateStructuredData({
    type: 'WebPage',
    name: 'Home',
    description: 'Practice questions and study materials for university courses',
    url: SITE_CONFIG.url,
    breadcrumbs: [
      { name: 'Home', url: SITE_CONFIG.url, position: 1 }
    ],
    itemList: universities.map((university, index) => ({
      name: university.name,
      url: `${SITE_CONFIG.url}/${university.id}`,
      position: index + 1,
      type: 'EducationalOrganization'
    }))
  });
};

export const generateUniversityPageData = (
  university: { id: string; name: string },
  courses: Array<{ id: string; name: string }>
) => {
  return generateStructuredData({
    type: 'EducationalOrganization',
    name: university.name,
    description: `Explore ${university.name} courses and practice questions. Access comprehensive study materials for various subjects and modules.`,
    url: `${SITE_CONFIG.url}/${university.id}`,
    breadcrumbs: [
      { name: 'Home', url: SITE_CONFIG.url, position: 1 },
      { name: university.name, url: `${SITE_CONFIG.url}/${university.id}`, position: 2 }
    ],
    organizationData: {
      mainEntity: {
        "@type": "ItemList",
        "name": `${university.name} Courses`,
        "description": `Available courses at ${university.name}`,
        "numberOfItems": courses.length,
        "itemListElement": courses.map((course, index) => ({
          "@type": "ListItem",
          "position": index + 1,
          "item": {
            "@type": "Course",
            "name": course.name,
            "url": `${SITE_CONFIG.url}/${university.id}/${course.id}`
          }
        }))
      }
    }
  });
};

export const generateCoursePageData = (
  course: { id: string; name: string },
  university: { id: string; name: string },
  semesters: Array<{ id: string; name: string }>
) => {
  return generateStructuredData({
    type: 'Course',
    name: course.name,
    description: `Explore ${course.name} at ${university.name}. Access semester-wise study materials, practice questions, and comprehensive learning resources.`,
    url: `${SITE_CONFIG.url}/${university.id}/${course.id}`,
    breadcrumbs: [
      { name: 'Home', url: SITE_CONFIG.url, position: 1 },
      { name: university.name, url: `${SITE_CONFIG.url}/${university.id}`, position: 2 },
      { name: course.name, url: `${SITE_CONFIG.url}/${university.id}/${course.id}`, position: 3 }
    ],
    courseData: {
      provider: { name: university.name, url: `${SITE_CONFIG.url}/${university.id}` }
    },
    itemList: semesters.map((semester, index) => ({
      name: semester.name,
      url: `${SITE_CONFIG.url}/${university.id}/${course.id}/${semester.id}`,
      position: index + 1,
      type: 'Course'
    }))
  });
};

export const generateModulePageData = (
  module: { id: string; name: string },
  subject: { id: string; name: string },
  university: { id: string; name: string },
  course: { id: string; name: string },
  semester: { id: string; name: string }
) => {
  return generateStructuredData({
    type: 'Course',
    name: module.name,
    description: `Practice ${module.name} questions for ${subject.name} at ${university.name}. Access MCQs, brief answers, and case studies for comprehensive exam preparation.`,
    url: `${SITE_CONFIG.url}/${university.id}/${course.id}/${semester.id}/${subject.id}/${module.id}`,
    breadcrumbs: [
      { name: 'Home', url: SITE_CONFIG.url, position: 1 },
      { name: university.name, url: `${SITE_CONFIG.url}/${university.id}`, position: 2 },
      { name: course.name, url: `${SITE_CONFIG.url}/${university.id}/${course.id}`, position: 3 },
      { name: semester.name, url: `${SITE_CONFIG.url}/${university.id}/${course.id}/${semester.id}`, position: 4 },
      { name: subject.name, url: `${SITE_CONFIG.url}/${university.id}/${course.id}/${semester.id}/${subject.id}`, position: 5 },
      { name: module.name, url: `${SITE_CONFIG.url}/${university.id}/${course.id}/${semester.id}/${subject.id}/${module.id}`, position: 6 }
    ],
    courseData: {
      provider: { name: university.name, url: `${SITE_CONFIG.url}/${university.id}` },
      prerequisites: subject.name
    }
  });
}; 