import { CaseStudy } from '../../../../../../types';

export const case_study: CaseStudy[] = [
  {
    "title": "Case Study: Managing Software Maintenance in a Legacy System",
    "description": "This case study examines a mid-sized software company that has been maintaining a legacy payroll system for over a decade. Initially, the system was developed to handle basic payroll processing, including salary calculations, tax deductions, and report generation. However, over time, multiple requests from various departments and external compliance requirements have led to continuous updates and modifications. These updates include integrating new tax rules, enhancing reporting functionalities, and ensuring compatibility with updated operating systems.\n\nAs the system aged, the company noticed that a significant portion of its development resources was dedicated to maintenance activities rather than new development. The maintenance team faced challenges such as fixing residual bugs reported by end users, adapting the system to new platforms, and improving its performance to meet modern expectations.\n\nThe company’s project manager initiated a thorough analysis of maintenance activities to identify inefficiencies. They categorized maintenance tasks into four types: corrective maintenance (bug fixes), adaptive maintenance (environment changes), perfective maintenance (enhancing features), and preventive maintenance (reducing future risks). Using this classification, they developed a maintenance plan that allocated resources strategically and reduced ad-hoc quick fixes that could degrade system stability over time.\n\nThe maintenance process included regular baseline reviews and configuration management practices to ensure that any change was formally evaluated, documented, and tested. Additionally, a small team was dedicated to preventive maintenance, focusing on cleaning up legacy code and improving documentation, thereby reducing the long-term cost of maintenance.\n\nThis structured approach improved the stability of the legacy system, minimized the risk of introducing new bugs, and optimized resource allocation. As a result, the company could maintain the legacy system’s relevance while allocating more resources to new product development, striking a balance between innovation and reliable service delivery.",
    "codeBlock": "",
    "language": "",
    "mcq": [
      {
        "question": "What is the main purpose of preventive maintenance in the case study?",
        "codeBlock": "",
        "language": "",
        "options": [
          "To fix bugs identified by end users",
          "To proactively reduce future software risks and maintain system relevance",
          "To adapt the software to new hardware platforms",
          "To create new user features on demand"
        ],
        "answer": "To proactively reduce future software risks and maintain system relevance"
      },
      {
        "question": "Which maintenance type involves modifying the system for new compliance and environment changes?",
        "codeBlock": "",
        "language": "",
        "options": [
          "Corrective maintenance",
          "Adaptive maintenance",
          "Preventive maintenance",
          "Perfective maintenance"
        ],
        "answer": "Adaptive maintenance"
      },
      {
        "question": "In the case study, what was a direct result of implementing a structured maintenance approach?",
        "codeBlock": "",
        "language": "",
        "options": [
          "Increased project complexity and resource usage",
          "Reduced stability of the system and increased bug frequency",
          "Improved stability and optimized resource allocation",
          "A complete rewrite of the legacy system"
        ],
        "answer": "Improved stability and optimized resource allocation"
      },
      {
        "question": "What was a key challenge faced by the maintenance team in the case study?",
        "codeBlock": "",
        "language": "",
        "options": [
          "Excessive new feature development demands",
          "Frequent changes in team leadership",
          "Balancing maintenance work with new development priorities",
          "Lack of tools for project planning and documentation"
        ],
        "answer": "Balancing maintenance work with new development priorities"
      }
    ],
    "briefs": [
      {
        "question": "Discuss the significance of configuration management practices in managing software maintenance, as applied in the case study.",
        "answer": "Configuration management (CM) plays a pivotal role in effectively managing software maintenance, as highlighted in this case study. CM ensures that every change made to the software is systematically controlled, documented, and evaluated for its impact. In the case study, the maintenance team was responsible for making continuous updates and modifications to the legacy payroll system, often driven by compliance changes, new feature requests, and user feedback. Without a robust configuration management process, these updates could have led to version conflicts, untracked changes, and overall system instability.\n\nBy implementing CM practices, the team could establish baselines for the software at critical points, which served as stable reference points for further changes. This meant that any new updates or fixes were compared against an established baseline, ensuring that changes did not inadvertently reintroduce bugs or conflicts with existing functionality. CM also involved tracking software configuration items (SCIs), such as code modules, documentation, and test cases, to maintain a comprehensive record of the system’s evolution.\n\nIn the case study, CM practices also included change control procedures. This meant that any proposed change had to be formally evaluated, discussed, and approved before it was implemented. This controlled approach reduced the risk of unauthorized or poorly planned changes, which can be particularly detrimental in legacy systems that have complex interdependencies and limited documentation.\n\nAdditionally, CM supported better communication within the maintenance team and with other stakeholders, as everyone could reference standardized records of what had been changed and why. This transparency was essential for both day-to-day maintenance and long-term planning, as it provided a clear picture of how the system had evolved over time.\n\nUltimately, the structured application of CM in the case study contributed to the improved stability and reliability of the legacy system, which was critical for meeting ongoing business needs while minimizing the cost and risk of software maintenance.",
        "codeBlock": "",
        "language": ""
      },
      {
        "question": "Why is it important to classify maintenance activities into corrective, adaptive, perfective, and preventive categories, as done in the case study?",
        "answer": "Classifying maintenance activities into corrective, adaptive, perfective, and preventive categories is a crucial step in effective software maintenance management. In the case study, this classification allowed the project manager and maintenance team to develop a structured approach to handling a diverse set of maintenance tasks for the legacy payroll system.\n\n**Corrective maintenance** focuses on fixing defects that are reported by users or discovered after the software has been deployed. These bugs can impact system functionality, making quick resolution essential. **Adaptive maintenance** addresses changes in the external environment, such as updates to compliance regulations or new hardware platforms, ensuring the software remains relevant and compatible. **Perfective maintenance** aims to enhance software performance or add new features based on user feedback or evolving business requirements, increasing user satisfaction and system efficiency. Finally, **preventive maintenance** proactively seeks to reduce future issues by improving the codebase and documentation, thus extending the system’s life span and minimizing long-term maintenance costs.\n\nBy explicitly categorizing maintenance activities, the team in the case study could allocate resources and prioritize work more effectively. For example, corrective maintenance often has high urgency, requiring immediate attention to keep systems running smoothly. Adaptive and perfective maintenance typically involves more planned updates, while preventive maintenance can be scheduled in quieter periods.\n\nThis categorization also supports better communication and reporting to stakeholders. When maintenance efforts are broken down in this way, it’s easier to explain how resources are being used and to justify investments in proactive tasks like preventive maintenance.\n\nMoreover, using these categories helps ensure that no type of maintenance is overlooked. In the case study, focusing solely on corrective fixes could have led to a buildup of technical debt, making the system harder to maintain in the long run. Instead, the balanced approach fostered by this classification ensured that the legacy system remained stable, up-to-date, and cost-effective to maintain.",
        "codeBlock": "",
        "language": ""
      }
    ]
  },
  {
    "title": "Case Study: Applying the COCOMO Model for Effort Estimation in a Software Project",
    "description": "A software development company has been tasked with building a web-based sales management system for a large retailer. The project is moderately complex, involving both online ordering and inventory tracking modules. The team estimates that the system will have about 50,000 lines of code, with an experienced but relatively small team. The project manager is evaluating how to estimate the effort required for this system using the COCOMO model.\n\nInitially, the team applies the **Basic COCOMO** model to get a high-level estimate of person-months required. They calculate the effort using the formula:  \n```plaintext\nE = a × (KLOC)^b\n```\nwhere `KLOC` is 50, and the project is identified as semi-detached due to the team’s moderate experience and the software’s partial novelty. The appropriate constants for semi-detached systems are applied to get an initial estimate.\n\nTo refine the estimate, the project manager moves to the **Intermediate COCOMO** model, introducing cost drivers. They identify attributes like product complexity, required reliability, team experience, and hardware constraints. Each of these is scored, and an Effort Adjustment Factor (EAF) is calculated. This factor is used to adjust the basic estimate, providing a more realistic picture of the project effort.\n\nFinally, for a detailed plan, the team considers using the **Detailed COCOMO** model, which breaks the project down into phases such as requirements analysis, design, implementation, testing, and maintenance. By applying effort multipliers to each phase, the team can identify which phases might need more resources or attention, enabling better planning and risk mitigation.\n\nBy using the three levels of the COCOMO model, the project manager can refine estimates as the project progresses, ensuring accurate resource allocation and stakeholder communication. This approach helps the company meet deadlines and budget constraints while minimizing risks associated with complex software development projects.",
    "codeBlock": "```plaintext\nE = a × (KLOC)^b\n```",
    "language": "plaintext",
    "mcq": [
      {
        "question": "What is the main purpose of using the COCOMO model in the case study?",
        "codeBlock": "",
        "language": "",
        "options": [
          "To track project testing efforts only",
          "To estimate software development effort and schedule accurately",
          "To measure system reliability after deployment",
          "To calculate lines of code directly"
        ],
        "answer": "To estimate software development effort and schedule accurately"
      },
      {
        "question": "Which level of the COCOMO model includes consideration of cost drivers?",
        "codeBlock": "",
        "language": "",
        "options": [
          "Basic COCOMO",
          "Detailed COCOMO",
          "Intermediate COCOMO",
          "None of the above"
        ],
        "answer": "Intermediate COCOMO"
      },
      {
        "question": "Why was the project classified as semi-detached in the case study?",
        "codeBlock": "",
        "language": "",
        "options": [
          "The project was extremely simple and had a small team",
          "The project had a mix of familiar and novel elements with a moderately experienced team",
          "The project was highly complex with large team size",
          "The project had no clear boundaries or structure"
        ],
        "answer": "The project had a mix of familiar and novel elements with a moderately experienced team"
      },
      {
        "question": "Which of the following is a key benefit of using Detailed COCOMO in the case study?",
        "codeBlock": "",
        "language": "",
        "options": [
          "It ignores the impact of different project phases",
          "It provides phase-wise estimates for better planning and risk control",
          "It only works for small, organic projects",
          "It requires no input from the project team"
        ],
        "answer": "It provides phase-wise estimates for better planning and risk control"
      }
    ],
    "briefs": [
      {
        "question": "Discuss the importance of identifying the correct COCOMO project category (organic, semi-detached, or embedded) when estimating effort, as seen in the case study.",
        "answer": "Identifying the correct COCOMO project category—organic, semi-detached, or embedded—is critical for accurate effort estimation and project planning, as highlighted in the case study. Each category reflects distinct characteristics regarding team experience, project complexity, and development environment, which significantly impact the coefficients and exponents in the COCOMO equations.\n\n**Organic projects** are typically small, straightforward applications developed by experienced teams familiar with the project domain. Estimations for these projects generally result in lower effort and cost because of the simplicity and familiarity involved.\n\n**Semi-detached projects**, as in the case study, lie between organic and embedded types. These projects have a moderate level of complexity and involve teams with mixed experience. Choosing this category ensures that the effort multipliers used in calculations accurately reflect the additional challenges and partial novelty of the project. In the case study, selecting semi-detached as the project type led to a more balanced estimate that acknowledged both the team’s expertise and the need to learn new aspects of the system.\n\n**Embedded projects** are the most complex, requiring substantial coordination, compliance, and creativity from larger teams. Misclassifying a project as organic or embedded when it is semi-detached can lead to underestimation or overestimation of effort, which in turn affects resource allocation, budgeting, and timeline predictions.\n\nThe case study demonstrates that identifying the correct category is more than a procedural step—it ensures that the resulting estimates align with project realities. It empowers project managers to plan resources effectively, manage stakeholder expectations, and reduce the risks of project overruns. Without this alignment, even the most detailed COCOMO calculations can fail to provide realistic insights for successful project management.",
        "codeBlock": "",
        "language": ""
      },
      {
        "question": "How does the introduction of cost drivers in Intermediate COCOMO improve upon the Basic COCOMO model, as seen in the case study?",
        "answer": "The introduction of cost drivers in the Intermediate COCOMO model represents a major enhancement over the Basic COCOMO model, as it allows for a more nuanced and realistic estimation of effort. The Basic COCOMO relies solely on program size—measured in KLOC (thousands of lines of code)—and applies fixed coefficients based on project type. While this provides a general estimate, it does not account for the unique characteristics of the project environment, team capabilities, or product complexity.\n\nIn the case study, the Intermediate COCOMO’s cost drivers addressed this limitation by introducing 15 factors spanning product, hardware, personnel, and project attributes. For example, if the project requires high reliability or involves volatile hardware environments, these factors would increase the estimated effort beyond what size alone might suggest. Conversely, experienced developers and advanced tools can reduce effort estimates.\n\nThe inclusion of cost drivers enables a dynamic and tailored estimation process. In the case study, the project manager used these cost drivers to calculate an Effort Adjustment Factor (EAF), which directly influenced the final effort estimation. This allowed them to consider not just the size but also the risk factors and potential productivity enhancements within the project.\n\nUltimately, the use of cost drivers in Intermediate COCOMO transformed the estimation process from a static, one-size-fits-all calculation to a customized model reflecting the project’s specific needs. This adjustment was critical for more accurate planning, resource allocation, and risk mitigation. By using cost drivers, the project team in the case study gained a more comprehensive view of the effort required, ensuring that estimates were grounded in reality and adapted to the actual work environment.",
        "codeBlock": "",
        "language": ""
      }
    ]
  }
];
