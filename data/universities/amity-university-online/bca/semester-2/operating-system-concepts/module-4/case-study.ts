import { CaseStudy } from '../../../../../../types';

export const case_study: CaseStudy[] = [
  {
    "title": "Optimising Disk Scheduling for Enhanced System Performance",
    "description": "In modern computer systems, disk I/O performance significantly impacts overall system efficiency and user experience. Disk scheduling algorithms determine how read and write requests are serviced, optimising seek times and throughput. In this case study, consider a large-scale file server handling thousands of simultaneous read and write requests from multiple users. The server uses traditional FCFS (First-Come, First-Served) scheduling, but administrators have observed high seek times and frequent delays during peak load times.\n\nThe team explores different disk scheduling algorithms such as SSTF (Shortest Seek Time First), SCAN, LOOK, C-SCAN, and C-LOOK to improve performance. They analyse the trade-offs of each algorithm: FCFS is simple but inefficient; SSTF reduces seek times but may cause starvation of distant requests. SCAN and LOOK balance performance and fairness by sweeping the disk in one direction, while C-SCAN and C-LOOK provide uniform wait times by servicing requests in a circular fashion.\n\nAfter simulations, the team implements the LOOK algorithm, which dynamically adjusts head movement based on the farthest request in each direction. The implementation results in a significant reduction in average seek time, eliminating unnecessary head travel to disk ends when no requests are pending there. User applications see faster response times, and the overall throughput of the file server improves.\n\nThis case study highlights how careful selection and implementation of disk scheduling algorithms can lead to measurable performance gains in systems that rely heavily on disk I/O, showcasing the importance of understanding these algorithms in the context of real-world computing environments.",
    "codeBlock": "",
    "language": "",
    "mcq": [
      {
        "question": "Which disk scheduling algorithm was ultimately implemented in the case study to improve performance?",
        "codeBlock": "",
        "language": "",
        "options": [
          "LOOK",
          "FCFS",
          "SSTF",
          "C-SCAN"
        ],
        "answer": "LOOK"
      },
      {
        "question": "What is a primary disadvantage of the SSTF algorithm mentioned in the case study?",
        "codeBlock": "",
        "language": "",
        "options": [
          "Potential starvation of distant requests",
          "Lack of compatibility with modern hardware",
          "Inability to handle simultaneous requests",
          "Excessive head movement to disk ends"
        ],
        "answer": "Potential starvation of distant requests"
      },
      {
        "question": "Why was FCFS considered inefficient in this scenario?",
        "codeBlock": "",
        "language": "",
        "options": [
          "Because it services requests in arrival order without optimising head movement",
          "Because it cannot handle simultaneous I/O requests",
          "Because it uses encryption on the disk",
          "Because it supports only sequential file access"
        ],
        "answer": "Because it services requests in arrival order without optimising head movement"
      },
      {
        "question": "What improvement was observed after implementing the LOOK algorithm?",
        "codeBlock": "",
        "language": "",
        "options": [
          "Reduced average seek time",
          "Higher disk fragmentation",
          "Increased CPU usage",
          "Reduced file size"
        ],
        "answer": "Reduced average seek time"
      }
    ],
    "briefs": [
      {
        "question": "Discuss how the LOOK disk scheduling algorithm enhances system performance compared to FCFS and SSTF, especially in high-load environments.",
        "answer": "The LOOK disk scheduling algorithm offers significant advantages over FCFS and SSTF, particularly in high-load environments where multiple simultaneous disk I/O requests occur. FCFS processes requests in the order they arrive, leading to potential inefficiencies in head movement as the disk head may need to traverse large distances unnecessarily. This is especially problematic in high-load scenarios, where request order can be highly random, causing frequent long seek times and reduced throughput.\n\nSSTF improves upon FCFS by selecting the request closest to the current head position, minimising the seek distance and generally improving response times. However, SSTF can cause starvation for requests that are far from the current head position. In systems with heavy and diverse workloads, this can lead to unfair access and uneven response times.\n\nLOOK addresses these challenges by moving the disk head only as far as the last request in a given direction before reversing, instead of moving all the way to the disk's end as SCAN does. This reduces unnecessary head movement, leading to faster average seek times and more balanced service of requests. By avoiding the end-of-disk traversal, the LOOK algorithm limits wear on the disk head and improves the overall throughput and reliability of the disk system.\n\nIn the case study scenario, the implementation of LOOK resulted in substantial performance improvements. It provided predictable and efficient handling of simultaneous I/O requests, significantly reducing the average seek time. Applications running on the file server experienced faster data access and smoother performance, highlighting the practical benefits of selecting a disk scheduling algorithm tailored to workload characteristics.\n\nBy striking a balance between performance, fairness, and reduced head movement, the LOOK algorithm demonstrates its effectiveness in dynamic, high-load computing environments. Its implementation in this case study underscores the importance of algorithm selection in optimising system performance and ensuring high user satisfaction in data-intensive applications.",
        "codeBlock": "",
        "language": ""
      },
      {
        "question": "Why is the selection of a disk scheduling algorithm critical in file servers and similar high-traffic environments?",
        "answer": "The selection of a disk scheduling algorithm in file servers and high-traffic environments is critical because disk I/O operations are a major bottleneck in system performance. In these environments, multiple users and applications generate simultaneous read and write requests, creating a complex workload that can overwhelm the disk subsystem if not managed effectively.\n\nThe choice of scheduling algorithm determines how efficiently these requests are handled. Algorithms like FCFS, which do not consider head movement, can lead to significant delays as the head moves back and forth inefficiently, increasing overall seek time and reducing throughput. This results in slow response times for user applications, decreased productivity, and potential dissatisfaction for users relying on real-time access to data.\n\nIn contrast, algorithms such as LOOK or SCAN optimise head movement by servicing requests in a logical order based on their physical location on the disk. This minimises unnecessary travel of the disk head, reduces average seek time, and balances the service of requests to prevent starvation. In high-traffic environments, where efficient disk access is essential, these improvements translate directly into faster application response times and better overall system performance.\n\nMoreover, effective disk scheduling reduces hardware wear and tear by limiting excessive head movement, extending the lifespan of disk drives and improving system reliability. It also ensures fairness in servicing requests, which is vital in multi-user environments where unequal service can lead to user complaints and workflow disruptions.\n\nOverall, selecting the appropriate disk scheduling algorithm is not just a performance decision—it impacts reliability, user experience, and operational costs. As highlighted in the case study, implementing the LOOK algorithm in a file server context significantly improved performance and user satisfaction, underscoring the importance of understanding and applying these concepts in real-world scenarios.",
        "codeBlock": "",
        "language": ""
      }
    ]
  },
  {
    "title": "Implementing File Protection Mechanisms in a Healthcare Records System",
    "description": "In a modern healthcare facility, electronic medical records (EMRs) store sensitive patient data including medical history, treatment plans, and insurance details. As the volume and sensitivity of data increase, ensuring the confidentiality, integrity, and availability of these records becomes critical. In this case study, the facility's IT team implements robust file protection mechanisms to meet regulatory compliance and protect patient privacy.\n\nThe team adopts a multi-layered approach. They implement **access control**, defining precise permissions for doctors, nurses, administrative staff, and IT personnel. Doctors have full access to patient records, while administrative staff have restricted viewing rights. Nurses can update treatment plans but cannot access billing details.\n\n**Authentication** is reinforced with multi-factor authentication (MFA), ensuring that only authorised staff can access the system. **Encryption** is deployed for sensitive data at rest and in transit, ensuring that even if data is intercepted, it remains unreadable. The team also configures **audit trails** to log all file access and modification activities. These logs help detect suspicious access patterns and support forensic analysis in case of security incidents.\n\nRegular **file integrity checks** are implemented to ensure that records are not tampered with. The IT team schedules automatic backups and secure archiving to ensure data availability during hardware failures or cyber-attacks.\n\nBy adopting these measures, the facility not only secures patient data but also ensures compliance with data protection regulations like HIPAA. This comprehensive file protection system enhances patient trust and the reliability of the healthcare delivery system.",
    "codeBlock": "",
    "language": "",
    "mcq": [
      {
        "question": "What is the primary objective of implementing file protection in the healthcare system described?",
        "codeBlock": "",
        "language": "",
        "options": [
          "To ensure patient data confidentiality, integrity, and availability",
          "To make files smaller and easier to transfer",
          "To create multiple copies of patient records for easy sharing",
          "To support random access to patient records"
        ],
        "answer": "To ensure patient data confidentiality, integrity, and availability"
      },
      {
        "question": "Which of the following mechanisms ensures that only authorised staff can access patient records?",
        "codeBlock": "",
        "language": "",
        "options": [
          "Authentication",
          "Random access",
          "File compression",
          "Fragmentation reduction"
        ],
        "answer": "Authentication"
      },
      {
        "question": "What role do audit trails play in this healthcare data protection scenario?",
        "codeBlock": "",
        "language": "",
        "options": [
          "They log all file access and modification activities",
          "They reduce file sizes",
          "They remove duplicate records",
          "They convert files to a different format"
        ],
        "answer": "They log all file access and modification activities"
      },
      {
        "question": "How is data integrity ensured in the system implemented by the IT team?",
        "codeBlock": "",
        "language": "",
        "options": [
          "File integrity checks",
          "Sequential access",
          "Linked allocation",
          "Disk scheduling algorithms"
        ],
        "answer": "File integrity checks"
      }
    ],
    "briefs": [
      {
        "question": "Explain why file protection is particularly critical in healthcare environments and how it aligns with legal and ethical responsibilities.",
        "answer": "File protection is crucial in healthcare environments because medical records contain highly sensitive personal data, including medical history, diagnoses, and financial information. Breaches of this data can have severe consequences for patients, including identity theft, discrimination, and financial loss. Healthcare facilities have both legal and ethical obligations to safeguard this information, ensuring patient privacy and trust in the healthcare system.\n\nLegally, healthcare providers in many countries must comply with data protection regulations like the Health Insurance Portability and Accountability Act (HIPAA) in the US. HIPAA mandates that healthcare entities implement administrative, technical, and physical safeguards to protect patient health information. Failure to comply can result in significant penalties and reputational damage.\n\nEthically, protecting patient data is a cornerstone of medical professionalism and patient trust. Patients disclose sensitive information with the expectation that it will be handled confidentially and responsibly. Violations of this trust can erode the provider-patient relationship, leading to reduced patient engagement and poorer health outcomes.\n\nThe case study illustrates how implementing access control ensures only those with a legitimate need can view or modify records. Authentication, especially with MFA, further verifies that access requests are legitimate. Encryption ensures that if data is intercepted during transmission or in storage, it remains unreadable to unauthorised users. Audit trails not only deter malicious activity by increasing accountability but also provide critical evidence in the event of a security breach.\n\nFile integrity checks detect unauthorised modifications, ensuring the accuracy of medical records—a vital factor for clinical decisions. Regular backups and secure archiving further protect data availability, ensuring patient care is not disrupted by technical issues.\n\nOverall, file protection in healthcare aligns with ethical duties of confidentiality, the legal framework set by data protection laws, and the practical need for reliable patient data. It is essential for upholding patient trust and ensuring the safe, compliant operation of modern healthcare systems.",
        "codeBlock": "",
        "language": ""
      },
      {
        "question": "Discuss how a comprehensive file protection approach can enhance trust and security in healthcare IT systems.",
        "answer": "A comprehensive file protection approach in healthcare IT systems directly impacts trust and security by providing multiple layers of defence against unauthorised access, data breaches, and accidental data loss. In an environment where medical data is constantly accessed by different healthcare professionals and administrative staff, robust protection mechanisms ensure that patient data remains secure and reliable.\n\nAccess control policies ensure that only authorised users can access specific data. For example, doctors may have full access to treatment plans, while administrative staff are limited to billing and scheduling information. This segmentation of access based on role reduces the risk of accidental or malicious exposure of sensitive information.\n\nAuthentication, including multi-factor authentication (MFA), adds an additional layer of security, verifying the identity of users before access is granted. This prevents unauthorised individuals from exploiting stolen credentials or guessing passwords to gain entry into critical systems.\n\nEncryption ensures that even if data is intercepted during transmission (for example, during remote consultations) or if storage devices are physically stolen, the information remains unreadable without the correct decryption keys. This is particularly important given the highly sensitive nature of patient records.\n\nAudit trails monitor all access and modification attempts, providing a transparent record of who accessed what data and when. This accountability discourages misuse and enables quick responses to potential security incidents.\n\nFile integrity checks are another crucial element, verifying that patient records are accurate and unaltered. Accurate records are essential for treatment decisions, and any data corruption can lead to life-threatening mistakes.\n\nCollectively, these mechanisms build a resilient security framework that not only complies with legal requirements but also reassures patients that their data is protected. This trust encourages patients to share accurate and complete information, which is essential for effective medical care.\n\nUltimately, comprehensive file protection reinforces the reliability and trustworthiness of healthcare IT systems, promoting secure, ethical, and efficient delivery of care in a data-driven world.",
        "codeBlock": "",
        "language": ""
      }
    ]
  },
  {
    "title": "Enhancing Data Security and File Access in a Cloud-Based Education Platform",
    "description": "In a cloud-based education platform serving universities worldwide, managing and securing vast amounts of digital content such as lecture notes, assignments, and multimedia files is essential. These files are accessed by thousands of students, faculty members, and administrative staff, often from different devices and locations. To ensure data integrity and secure access, the platform's administrators need to implement efficient file management and access methods.\n\nThe team adopts a robust **indexed allocation** method for storing files. This ensures that data blocks are efficiently located using index blocks, supporting both sequential and direct access. This method also addresses the issue of external fragmentation, commonly faced in traditional contiguous allocation systems.\n\nTo complement this, the platform deploys a **tree-structured directory** system. Directories are arranged hierarchically, grouping files by course, department, and year of study. This intuitive structure allows for efficient navigation and helps students and faculty quickly locate relevant materials.\n\nTo safeguard sensitive student data and intellectual property, the system incorporates **file protection mechanisms**. Access controls ensure that only authenticated and authorised users can view or modify course materials. Encryption is implemented for files in transit and at rest, ensuring secure content sharing across different geographic locations.\n\nRegular audits and file integrity checks are performed to detect and prevent unauthorised access or modifications. Additionally, device management strategies are applied to ensure secure interactions with peripherals like printers and scanners used by faculty and staff.\n\nBy combining these practices, the platform delivers a secure, reliable, and efficient experience for users, promoting academic integrity and smooth digital learning operations.",
    "codeBlock": "",
    "language": "",
    "mcq": [
      {
        "question": "What file allocation method was implemented to manage files efficiently in this cloud-based education platform?",
        "codeBlock": "",
        "language": "",
        "options": [
          "Indexed allocation",
          "Contiguous allocation",
          "Linked allocation",
          "Bitmap allocation"
        ],
        "answer": "Indexed allocation"
      },
      {
        "question": "How does the tree-structured directory system benefit users in this scenario?",
        "codeBlock": "",
        "language": "",
        "options": [
          "Provides an intuitive, hierarchical file organisation",
          "Eliminates the need for file protection",
          "Improves wireless device connectivity",
          "Ensures files are stored in contiguous memory blocks"
        ],
        "answer": "Provides an intuitive, hierarchical file organisation"
      },
      {
        "question": "What role do file protection mechanisms play in this system?",
        "codeBlock": "",
        "language": "",
        "options": [
          "Secure content sharing and control of data access",
          "Increase data redundancy",
          "Reduce data transmission speed",
          "Organise files for sequential access only"
        ],
        "answer": "Secure content sharing and control of data access"
      },
      {
        "question": "Why is indexed allocation preferred over contiguous allocation in this scenario?",
        "codeBlock": "",
        "language": "",
        "options": [
          "It eliminates external fragmentation",
          "It requires no metadata",
          "It only supports random access",
          "It reduces the number of file types supported"
        ],
        "answer": "It eliminates external fragmentation"
      }
    ],
    "briefs": [
      {
        "question": "Explain the significance of using indexed allocation in large-scale digital learning environments and its advantages over other allocation methods.",
        "answer": "In large-scale digital learning environments like cloud-based education platforms, the choice of file allocation method significantly impacts system performance, reliability, and user experience. Indexed allocation is particularly well-suited for such scenarios due to its ability to efficiently handle large numbers of files and dynamic data access patterns.\n\nUnlike contiguous allocation, which requires files to occupy continuous disk space, indexed allocation stores file pointers in a dedicated index block. This eliminates external fragmentation, a common problem in environments where files are frequently created, modified, and deleted. The index block structure allows the system to allocate any free data block on the disk, improving space utilisation and ensuring that new data can be stored even if contiguous space is unavailable.\n\nMoreover, indexed allocation supports both sequential and random file access. In educational platforms, where students and faculty might access lecture materials non-sequentially—such as jumping to specific topics in video lectures or referring to particular documents—this flexibility is crucial. It allows for faster retrieval of individual data blocks without traversing an entire linked list, as in linked allocation.\n\nIndexed allocation also enhances reliability by keeping data block pointers separate from the data itself, reducing the risk of data loss due to pointer corruption. With modern storage media capable of handling large index blocks, scalability is maintained even as file sizes and numbers grow.\n\nOverall, indexed allocation’s efficient space management, support for random and sequential access, and adaptability to dynamic workloads make it an ideal choice for cloud-based learning environments. It ensures that digital content can be quickly and reliably accessed, fostering a seamless and engaging academic experience for users worldwide.",
        "codeBlock": "",
        "language": ""
      },
      {
        "question": "Discuss how a tree-structured directory system supports effective learning and data management in cloud-based academic environments.",
        "answer": "A tree-structured directory system plays a critical role in supporting effective learning and data management in cloud-based academic environments by providing an organised, scalable, and intuitive way to store and access digital learning materials.\n\nIn such environments, vast amounts of data are generated and consumed daily, including lecture notes, recorded classes, assignments, and research papers. Without a well-organised system, students and faculty would face difficulties locating relevant materials, hindering the learning process.\n\nA tree-structured directory organises files hierarchically. At the top level, directories might represent broad categories like departments or academic years. Beneath these, subdirectories can be created for specific courses, and within those, further subdivisions can accommodate different types of content like readings, assignments, and multimedia resources. This hierarchy reflects the logical structure of academic workflows, enabling users to navigate intuitively through materials related to their courses and interests.\n\nMoreover, this organisation enhances searchability and minimises clutter. Users can quickly locate files by navigating through clearly labelled directories, reducing the time spent searching for materials and increasing overall productivity.\n\nFrom an administrative perspective, tree-structured directories support robust access control. Permissions can be assigned at various levels of the hierarchy, ensuring that only authorised users can access sensitive information. For instance, instructors might have full control over course directories, while students might have read-only access to course materials.\n\nThis model also supports scalability. As new courses are introduced or new materials are added, administrators can expand the hierarchy by adding subdirectories without disrupting the existing structure.\n\nIn summary, tree-structured directories provide a systematic framework that mirrors academic structures, enhances data accessibility, and supports collaborative, secure, and efficient digital learning. In the cloud-based education platform described, this approach complements other security and file management measures to ensure a reliable and engaging experience for all users.",
        "codeBlock": "",
        "language": ""
      }
    ]
  }
];
