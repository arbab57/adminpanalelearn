import React, { useEffect } from "react";
import UseFetch from "../../hooks/useFetch";
import { useRef } from "react";
import { useState } from "react";
import PatchData from "../../hooks/patchData";
import {
  convertTimestampToHours,
  convertTimestampToMinutes,
  convertTimestampToTime,
} from "../../utils/utils";
import UpdImg from "./UpdImg";
import UpdateLesson from "./updateLesson";
const UpdateCourse = ({ course, setShowUpdate, setShowToast }) => {
  const titleRef = useRef(null);
  const categoryeRef = useRef(null);
  const desciptRef = useRef(null);
  const imgRef = useRef(null);
  const mentorRef = useRef(null);
  const priceRef = useRef(null);
  const hourRef = useRef(null);
  const minRef = useRef(null);
  const [showLessonUpd, setShowLessonUpd] = useState(false);
  const [categories, setCategories] = useState([
    "Web Development",
    "UI/Ux Design",
    "Data Science",
    "DevOps",
    "Graphic Design",
    "Backend Development",
    "Cyber Security",
  ]);
  const [mentors, setMentors] = useState([
    {
        "_id": "66dfc952436086f433fbf3af",
        "name": "John Doe",
        "image": "https://plus.unsplash.com/premium_photo-1689977968861-9c91dbb16049?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "about": "I am a dedicated software engineer with a passion for building scalable, efficient, and innovative solutions. With a strong foundation in computer science and extensive experience in full-stack development, I specialize in designing and implementing software systems that address real-world challenges.",
        "title": "Software Engineer",
        "reviews": [
            {
                "rating": 5,
                "review": "John's expertise in software engineering is truly exceptional. His ability to break down complex topics into manageable pieces was incredibly helpful. His deep understanding of both theoretical concepts and practical applications made each session highly informative and engaging. I feel much more confident in my coding skills thanks to his guidance.",
                "_id": "66dfc952436086f433fbf3b0",
                "date": 1725942098880,
                "user": "66dfc953436086f433fbf8dd"
            },
            {
                "rating": 4,
                "review": "John is an excellent mentor with a wealth of knowledge in software engineering. His real-world examples and hands-on approach to teaching have provided me with a strong foundation in the field. While his sessions were incredibly beneficial, I sometimes found the pace a bit fast, but overall, his guidance was invaluable.",
                "_id": "66dfc952436086f433fbf3b1",
                "date": 1725942098881,
                "user": "66dfc954436086f433fbf8ed"
            },
            {
                "rating": 5,
                "review": "Mentoring style is incredibly supportive and encouraging. His feedback was always constructive and aimed at helping me grow as a developer. His detailed explanations and patience made complex topics easier to understand. I greatly appreciate his dedication and the confidence he helped me build in my coding abilities.",
                "_id": "66dfc952436086f433fbf3b2",
                "date": 1725942098881,
                "user": "66dfc953436086f433fbf8c5"
            },
            {
                "rating": 4,
                "review": "I had a great experience with John as my mentor. His sessions were full of valuable insights and practical advice. He made sure to address all my questions and provided thoughtful responses. Occasionally, I felt that more time could be spent on certain topics, but his overall mentoring approach was very effective.",
                "_id": "66dfc952436086f433fbf3b3",
                "date": 1725942098881,
                "user": "66dfc954436086f433fbf8f5"
            },
            {
                "rating": 5,
                "review": "John's extensive industry experience and real-world examples made his sessions incredibly valuable. His ability to relate theoretical concepts to practical applications helped me grasp complex ideas more easily. His supportive and detailed feedback has significantly enhanced my programming skills and understanding of software engineering.",
                "_id": "66dfc952436086f433fbf3b4",
                "date": 1725942098881,
                "user": "66dfc953436086f433fbf8cb"
            }
        ],
        "courses": [
            "66dfc952436086f433fbf44e",
            "66dfc952436086f433fbf441",
            "66dfc952436086f433fbf477",
            "66dfc952436086f433fbf461",
            "66dfc952436086f433fbf48c",
            "66dfc952436086f433fbf497"
        ],
        "numOfCourses": 6,
        "socialMedia": [
            {
                "platform": "LinkedIn",
                "link": "https://linkedin.com/in/johndoe",
                "_id": "66dfc952436086f433fbf3b5"
            },
            {
                "platform": "Twitter",
                "link": "https://twitter.com/johndoe",
                "_id": "66dfc952436086f433fbf3b6"
            },
            {
                "platform": "facebook",
                "link": "https://facebook.com/johndoe",
                "_id": "66dfc952436086f433fbf3b7"
            },
            {
                "platform": "linkdin",
                "link": "https://linkdin.com/johndoe",
                "_id": "66dfc952436086f433fbf3b8"
            }
        ],
        "__v": 0,
        "numOfReviews": 5
    },
    {
        "_id": "66dfc952436086f433fbf3b9",
        "name": "Jane Smith",
        "image": "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "about": "I am a seasoned data scientist and machine learning expert with a deep passion for extracting valuable insights from complex datasets and creating intelligent systems. With a robust background in statistics, mathematics, and computer science, I specialize in developing data-driven solutions that drive business growth and innovation.",
        "title": "Data Scientist",
        "reviews": [
            {
                "rating": 5,
                "review": "Jane's deep knowledge of data science and her effective teaching methods make learning complex topics much more manageable. Her ability to explain intricate concepts with clarity and her hands-on approach to problem-solving have greatly enhanced my understanding of data analysis and machine learning. Jane's mentoring has been a key factor in my progress in the field.",
                "_id": "66dfc952436086f433fbf3ba",
                "date": 1725942098883,
                "user": "66dfc954436086f433fbf8fd"
            },
            {
                "rating": 4,
                "review": "She is an exceptional mentor who provides insightful and practical feedback. Her expertise in data science and machine learning is evident in her teaching. While her sessions are generally very helpful, occasionally the topics covered could benefit from a bit more depth. Nonetheless, her guidance has been instrumental in my learning journey.",
                "_id": "66dfc952436086f433fbf3bb",
                "date": 1725942098883,
                "user": "66dfc953436086f433fbf8e1"
            },
            {
                "rating": 5,
                "review": "With Jane's guidance, I've been able to tackle challenging data science problems with confidence. Her thorough explanations and encouragement have made complex subjects more accessible. Jane's mentorship has not only improved my technical skills but also my overall approach to data-driven problem solving.",
                "_id": "66dfc952436086f433fbf3bc",
                "date": 1725942098883,
                "user": "66dfc954436086f433fbf8f9"
            },
            {
                "rating": 4,
                "review": "Jane offers a wealth of knowledge and practical insights into data science and machine learning. Her feedback is always detailed and aimed at helping me improve. Sometimes, the pace of the sessions felt a bit rushed, but her expertise and support have been greatly beneficial to my learning experience.",
                "_id": "66dfc952436086f433fbf3bd",
                "date": 1725942098883,
                "user": "66dfc953436086f433fbf8db"
            },
            {
                "rating": 5,
                "review": "The mentorship has been invaluable in my journey through data science. Her ability to connect theoretical knowledge with practical applications has greatly enhanced my learning. Her supportive approach and willingness to go the extra mile to ensure I understand the material have made a significant impact on my progress.",
                "_id": "66dfc952436086f433fbf3be",
                "date": 1725942098883,
                "user": "66dfc954436086f433fbf8fd"
            }
        ],
        "courses": [
            "66dfc952436086f433fbf4f6",
            "66dfc952436086f433fbf501",
            "66dfc952436086f433fbf50d",
            "66dfc952436086f433fbf51b",
            "66dfc952436086f433fbf532"
        ],
        "numOfCourses": 5,
        "socialMedia": [
            {
                "platform": "LinkedIn",
                "link": "https://linkedin.com/in/janesmith",
                "_id": "66dfc952436086f433fbf3bf"
            },
            {
                "platform": "Twitter",
                "link": "https://twitter.com/janesmith",
                "_id": "66dfc952436086f433fbf3c0"
            },
            {
                "platform": "facebook",
                "link": "https://facebook.com/janesmith",
                "_id": "66dfc952436086f433fbf3c1"
            },
            {
                "platform": "linkdin",
                "link": "https://linkdin.com/janesmith",
                "_id": "66dfc952436086f433fbf3c2"
            }
        ],
        "__v": 0,
        "numOfReviews": 5
    },
    {
        "_id": "66dfc952436086f433fbf3c3",
        "name": "Mike Johnson",
        "image": "https://images.unsplash.com/photo-1534308143481-c55f00be8bd7?q=80&w=1930&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "about": "Beyond coding, I find immense satisfaction in teaching and mentoring aspiring developers. I believe in the power of sharing knowledge and helping others unlock their potential. Whether through one-on-one mentorship, conducting workshops, or creating educational content, my goal is to make complex concepts accessible and engaging for learners of all levels.",
        "title": "Full-Stack Web Developer",
        "reviews": [
            {
                "rating": 5,
                "review": "His approach to teaching web design is both innovative and practical. His lessons are well-structured and cover a broad range of topics, from the basics of HTML and CSS to advanced design principles. His feedback is always constructive, and his passion for design is evident in every session. I've gained a lot of valuable skills through his mentorship.",
                "_id": "66dfc952436086f433fbf3c4",
                "date": 1725942098884,
                "user": "66dfc953436086f433fbf8e1"
            },
            {
                "rating": 4,
                "review": "This course provides a comprehensive overview of web design concepts. His practical examples and design challenges are particularly useful for understanding how to apply theoretical knowledge. Occasionally, I found the sessions a bit intense, but overall, his guidance has been instrumental in improving my design skills.",
                "_id": "66dfc952436086f433fbf3c5",
                "date": 1725942098884,
                "user": "66dfc954436086f433fbf8e9"
            },
            {
                "rating": 5,
                "review": "Michael is a fantastic mentor with a deep understanding of web design. His ability to break down complex design principles into manageable lessons has greatly enhanced my learning experience. His constructive feedback and encouragement have been crucial in helping me develop my skills and confidence as a designer.",
                "_id": "66dfc952436086f433fbf3c6",
                "date": 1725942098884,
                "user": "66dfc953436086f433fbf8cf"
            },
            {
                "rating": 4,
                "review": "The lessons in web design are engaging and informative. He covers a wide range of topics, and his practical approach helps in applying design concepts effectively. While some sessions felt a bit rushed, his overall mentoring approach is very effective and has significantly improved my web design skills.",
                "_id": "66dfc952436086f433fbf3c7",
                "date": 1725942098884,
                "user": "66dfc953436086f433fbf8cb"
            },
            {
                "rating": 5,
                "review": "Michael's expertise in web design has been incredibly valuable to me. His ability to teach complex concepts in a clear and understandable way has made a significant impact on my learning. His feedback is always detailed and aimed at helping me grow as a designer, and I appreciate his dedication and support.",
                "_id": "66dfc952436086f433fbf3c8",
                "date": 1725942098884,
                "user": "66dfc954436086f433fbf8f1"
            }
        ],
        "courses": [
            "66dfc952436086f433fbf5cd",
            "66dfc952436086f433fbf5dc",
            "66dfc952436086f433fbf5fa",
            "66dfc952436086f433fbf60c",
            "66dfc952436086f433fbf5ef"
        ],
        "numOfCourses": 5,
        "socialMedia": [
            {
                "platform": "Twitter",
                "link": "https://twitter.com/mikejohnson",
                "_id": "66dfc952436086f433fbf3c9"
            },
            {
                "platform": "Twitter",
                "link": "https://twitter.com/mikejhonson",
                "_id": "66dfc952436086f433fbf3ca"
            },
            {
                "platform": "facebook",
                "link": "https://facebook.com/mikejhonson",
                "_id": "66dfc952436086f433fbf3cb"
            },
            {
                "platform": "linkdin",
                "link": "https://linkdin.com/mikejhonson",
                "_id": "66dfc952436086f433fbf3cc"
            }
        ],
        "__v": 0,
        "numOfReviews": 5
    },
    {
        "_id": "66dfc952436086f433fbf3cd",
        "name": "Emily Davis",
        "image": "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "about": "In my role as a front-end developer, I specialize in crafting responsive and dynamic web applications using modern technologies like HTML, CSS, JavaScript, and frameworks such as React and Vue.js. My focus is on ensuring that every interaction is smooth, every page loads efficiently, and every design element serves a clear purpose.",
        "title": "Front-end developer and UX/UI designer.",
        "reviews": [
            {
                "rating": 5,
                "review": "The insights into UX design are both deep and practical. Her sessions cover a wide range of topics and include hands-on exercises that help reinforce learning. Her feedback is always thoughtful and aimed at helping me improve my design skills. Sarah's mentorship has been a key factor in my growth as a UX designer.",
                "_id": "66dfc952436086f433fbf3ce",
                "date": 1725942098885,
                "user": "66dfc953436086f433fbf8db"
            },
            {
                "rating": 4,
                "review": "This provides a thorough understanding of UX design principles. Her lessons are well-organized, and her feedback is constructive. While some topics could benefit from more in-depth exploration, her overall approach to teaching UX design is highly effective and has helped me enhance my skills.",
                "_id": "66dfc952436086f433fbf3cf",
                "date": 1725942098885,
                "user": "66dfc954436086f433fbf8ff"
            },
            {
                "rating": 5,
                "review": "That is an excellent mentor with a deep passion for UX design. Her sessions are informative and engaging, and her feedback helps in refining my design approach. Her support and guidance have greatly contributed to my development as a UX designer, and I highly value her expertise.",
                "_id": "66dfc952436086f433fbf3d0",
                "date": 1725942098885,
                "user": "66dfc953436086f433fbf8c9"
            },
            {
                "rating": 4,
                "review": "The lessons in UX design are both practical and insightful. Her ability to provide constructive feedback and her focus on real-world applications have been very beneficial. Although some topics felt a bit rushed, her overall mentoring approach has significantly improved my understanding of UX design.",
                "_id": "66dfc952436086f433fbf3d1",
                "date": 1725942098885,
                "user": "66dfc953436086f433fbf8cd"
            },
            {
                "rating": 5,
                "review": "Mentorship in UX design has been outstanding. Her lessons are well-structured and cover essential topics in great detail. Her feedback is always aimed at helping me grow as a designer, and her supportive approach has made a significant difference in my learning experience.",
                "_id": "66dfc952436086f433fbf3d2",
                "date": 1725942098885,
                "user": "66dfc954436086f433fbf8f5"
            }
        ],
        "courses": [
            "66dfc952436086f433fbf4a9",
            "66dfc952436086f433fbf4c6",
            "66dfc952436086f433fbf4d8",
            "66dfc952436086f433fbf4e2",
            "66dfc952436086f433fbf4b2"
        ],
        "numOfCourses": 5,
        "socialMedia": [
            {
                "platform": "LinkedIn",
                "link": "https://linkedin.com/in/emilydavis",
                "_id": "66dfc952436086f433fbf3d3"
            },
            {
                "platform": "Instagram",
                "link": "https://instagram.com/emilydavis",
                "_id": "66dfc952436086f433fbf3d4"
            },
            {
                "platform": "facebook",
                "link": "https://facebook.com/emilydavis",
                "_id": "66dfc952436086f433fbf3d5"
            },
            {
                "platform": "linkdin",
                "link": "https://linkdin.com/emilydavis",
                "_id": "66dfc952436086f433fbf3d6"
            }
        ],
        "__v": 0,
        "numOfReviews": 5
    },
    {
        "_id": "66dfc952436086f433fbf3d7",
        "name": "Robert Brown",
        "image": "https://plus.unsplash.com/premium_photo-1710911199022-9faa1c04dc0c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "about": "With a solid foundation in both software development and system administration, I am skilled in implementing and managing CI/CD pipelines, automating infrastructure provisioning, and monitoring system performance. I leverage tools and technologies such as Docker, Kubernetes, Jenkins, Terraform, and Ansible to facilitate seamless integration and deployment processes, ensuring that code changes are delivered efficiently and with high quality",
        "title": "DevOps engineer",
        "reviews": [
            {
                "rating": 5,
                "review": "Their approach to teaching machine learning is both comprehensive and engaging. Her lessons cover a wide range of topics and include practical exercises that reinforce learning. Her feedback is insightful, and her passion for the subject is evident in every session. Emily's guidance has greatly enhanced my understanding of machine learning.",
                "_id": "66dfc952436086f433fbf3d8",
                "date": 1725942098885,
                "user": "66dfc954436086f433fbf8f7"
            },
            {
                "rating": 4,
                "review": "The course provides a thorough understanding of machine learning concepts. Her lessons are well-organized, and her feedback is constructive. Although some topics could benefit from additional depth, her overall approach to teaching is very effective and has contributed significantly to my learning.",
                "_id": "66dfc952436086f433fbf3d9",
                "date": 1725942098885,
                "user": "66dfc953436086f433fbf8db"
            },
            {
                "rating": 5,
                "review": "This machine learning has been exceptional. Her ability to explain complex concepts clearly and her practical approach to teaching have been invaluable. Her feedback is always aimed at helping me improve my skills, and her support has greatly enhanced my knowledge in the field.",
                "_id": "66dfc952436086f433fbf3da",
                "date": 1725942098885,
                "user": "66dfc953436086f433fbf8c7"
            },
            {
                "rating": 4,
                "review": "they offer a detailed and practical understanding of machine learning. Her sessions are informative, and her feedback is always constructive. While some aspects of the course could be expanded, her overall mentoring approach has been very effective in advancing my knowledge in machine learning.",
                "_id": "66dfc952436086f433fbf3db",
                "date": 1725942098885,
                "user": "66dfc953436086f433fbf8d9"
            },
            {
                "rating": 5,
                "review": "the sessions on machine learning are engaging and full of valuable insights. Her ability to break down complex topics and provide practical examples has been incredibly helpful. Her guidance and feedback have been instrumental in my growth as a machine learning practitioner.",
                "_id": "66dfc952436086f433fbf3dc",
                "date": 1725942098886,
                "user": "66dfc954436086f433fbf8e9"
            }
        ],
        "courses": [
            "66dfc952436086f433fbf53b",
            "66dfc952436086f433fbf546",
            "66dfc952436086f433fbf556",
            "66dfc952436086f433fbf561",
            "66dfc952436086f433fbf578"
        ],
        "numOfCourses": 5,
        "socialMedia": [
            {
                "platform": "LinkedIn",
                "link": "https://linkedin.com/in/robertbrown",
                "_id": "66dfc952436086f433fbf3dd"
            },
            {
                "platform": "GitHub",
                "link": "https://github.com/robertbrown",
                "_id": "66dfc952436086f433fbf3de"
            },
            {
                "platform": "facebook",
                "link": "https://facebook.com/robertbrown",
                "_id": "66dfc952436086f433fbf3df"
            },
            {
                "platform": "linkdin",
                "link": "https://linkdin.com/robertbrown",
                "_id": "66dfc952436086f433fbf3e0"
            }
        ],
        "__v": 0,
        "numOfReviews": 5
    },
    {
        "_id": "66dfc952436086f433fbf3e1",
        "name": "Alice Johnson",
        "image": "https://images.unsplash.com/photo-1506863530036-1efeddceb993?q=80&w=1944&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "about": "I am a creative graphic designer with a passion for crafting visually stunning and impactful designs. With a solid background in visual communication and design principles, I specialize in creating engaging graphics, brand identities, and user interfaces that resonate with audiences. My goal is to transform ideas into compelling visual stories.",
        "title": "Graphic Designer",
        "reviews": [
            {
                "rating": 5,
                "review": "His expertise in DevOps is evident in his well-structured and practical lessons. His approach to teaching containerization and infrastructure management is both thorough and engaging. His feedback is always constructive, and his support has been crucial in helping me understand and apply DevOps principles effectively.",
                "_id": "66dfc952436086f433fbf3e2",
                "date": 1725942098886,
                "user": "66dfc953436086f433fbf8e3"
            },
            {
                "rating": 4,
                "review": "That provides a comprehensive overview of DevOps practices. His lessons on containerization and monitoring are particularly useful. Occasionally, the pace of the sessions felt a bit quick, but his overall guidance has been very helpful in advancing my DevOps skills.",
                "_id": "66dfc952436086f433fbf3e3",
                "date": 1725942098886,
                "user": "66dfc954436086f433fbf8f9"
            },
            {
                "rating": 5,
                "review": "their mentorship in DevOps is exceptional. His ability to explain complex concepts clearly and his hands-on approach to teaching have been incredibly valuable. His feedback is always aimed at helping me improve, and his support has greatly enhanced my understanding of DevOps practices.",
                "_id": "66dfc952436086f433fbf3e4",
                "date": 1725942098886,
                "user": "66dfc953436086f433fbf8d7"
            },
            {
                "rating": 4,
                "review": "the course offers a detailed and practical approach to DevOps. His lessons are informative, and his feedback is constructive. While some sessions could benefit from more depth, his overall mentoring approach has been effective in helping me grasp essential DevOps concepts.",
                "_id": "66dfc952436086f433fbf3e5",
                "date": 1725942098886,
                "user": "66dfc953436086f433fbf8c7"
            },
            {
                "rating": 5,
                "review": "the sessions on DevOps are engaging and insightful. His expertise in containerization and infrastructure management has been invaluable. His constructive feedback and supportive approach have greatly contributed to my learning and application of DevOps principles.",
                "_id": "66dfc952436086f433fbf3e6",
                "date": 1725942098886,
                "user": "66dfc953436086f433fbf8e1"
            }
        ],
        "courses": [
            "66dfc952436086f433fbf589",
            "66dfc952436086f433fbf59c",
            "66dfc952436086f433fbf5a6",
            "66dfc952436086f433fbf5b1",
            "66dfc952436086f433fbf5ba"
        ],
        "numOfCourses": 5,
        "socialMedia": [
            {
                "platform": "LinkedIn",
                "link": "https://linkedin.com/in/alicejohnson",
                "_id": "66dfc952436086f433fbf3e7"
            },
            {
                "platform": "Twitter",
                "link": "https://twitter.com/alicejohnson",
                "_id": "66dfc952436086f433fbf3e8"
            },
            {
                "platform": "Facebook",
                "link": "https://facebook.com/alicejohnson",
                "_id": "66dfc952436086f433fbf3e9"
            },
            {
                "platform": "Dribbble",
                "link": "https://dribbble.com/alicejohnson",
                "_id": "66dfc952436086f433fbf3ea"
            }
        ],
        "__v": 0,
        "numOfReviews": 5
    },
    {
        "_id": "66dfc952436086f433fbf3eb",
        "name": "Michael Lee",
        "image": "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "about": "I am a dedicated cyber security expert with extensive experience in protecting systems and data from cyber threats. With a deep understanding of security protocols, risk management, and threat analysis, I specialize in developing strategies to safeguard digital assets and ensure robust security measures. My mission is to create secure environments where organizations can thrive without fear of cyber attacks.",
        "title": "Cyber Security Expert",
        "reviews": [
            {
                "rating": 5,
                "review": "their approach to teaching graphic design is both creative and practical. Her lessons cover a wide range of design principles and techniques, and her feedback is always constructive. Her passion for design is evident in her sessions, and her guidance has been instrumental in developing my skills in graphic design.",
                "_id": "66dfc952436086f433fbf3ec",
                "date": 1725942098886,
                "user": "66dfc954436086f433fbf8fb"
            },
            {
                "rating": 4,
                "review": "this provides a thorough understanding of graphic design concepts. Her lessons are well-structured, and her practical approach helps in applying design principles effectively. Occasionally, some topics felt a bit rushed, but her overall mentoring has been very beneficial.",
                "_id": "66dfc952436086f433fbf3ed",
                "date": 1725942098886,
                "user": "66dfc953436086f433fbf8d1"
            },
            {
                "rating": 5,
                "review": "Mentorship in graphic design has been exceptional. Her ability to explain complex design concepts clearly and her hands-on approach to teaching have been incredibly valuable. Her feedback is always aimed at helping me improve, and her support has greatly enhanced my skills as a designer.",
                "_id": "66dfc952436086f433fbf3ee",
                "date": 1725942098886,
                "user": "66dfc953436086f433fbf8e1"
            },
            {
                "rating": 4,
                "review": "the sessions on graphic design are engaging and informative. Her expertise and practical examples have been very helpful. While some topics could be explored in more depth, her overall approach to teaching design principles has significantly improved my skills.",
                "_id": "66dfc952436086f433fbf3ef",
                "date": 1725942098886,
                "user": "66dfc953436086f433fbf8d5"
            },
            {
                "rating": 5,
                "review": "their expertise in graphic design is evident in her well-organized and creative lessons. Her feedback is constructive and aimed at helping me refine my design skills. Her guidance has been instrumental in developing my understanding of graphic design principles and techniques.",
                "_id": "66dfc952436086f433fbf3f0",
                "date": 1725942098886,
                "user": "66dfc953436086f433fbf8e5"
            }
        ],
        "courses": [
            "66dfc952436086f433fbf620",
            "66dfc952436086f433fbf636",
            "66dfc952436086f433fbf64a",
            "66dfc952436086f433fbf658",
            "66dfc952436086f433fbf665",
            "66dfc952436086f433fbf674"
        ],
        "numOfCourses": 6,
        "socialMedia": [
            {
                "platform": "LinkedIn",
                "link": "https://linkedin.com/in/michaellee",
                "_id": "66dfc952436086f433fbf3f1"
            },
            {
                "platform": "Twitter",
                "link": "https://twitter.com/michaellee",
                "_id": "66dfc952436086f433fbf3f2"
            },
            {
                "platform": "Facebook",
                "link": "https://facebook.com/michaellee",
                "_id": "66dfc952436086f433fbf3f3"
            },
            {
                "platform": "GitHub",
                "link": "https://github.com/michaellee",
                "_id": "66dfc952436086f433fbf3f4"
            }
        ],
        "__v": 0,
        "numOfReviews": 5
    }
])
  const lessonWithKeys = course?.data?.lessons?.map((lesson, index) => {
    lesson.key = lesson.title + index;
    return lesson;
  });
  const [lessonsState, setLessonsState] = useState(lessonWithKeys);

  const baseURL = import.meta.env.VITE_baseURL;
  // const [categories, laoding, error] = UseFetch(
  //   `${baseURL}/admin/categories`,
  //   []
  // );
  // const [mentors, laoding1, error1] = UseFetch(
  //   `${baseURL}/admin/mentors/get`,
  //   []
  // );

  const handleUpdate = async () => {
    const durationInMS =
      (Number(hourRef.current.value) * 60 + Number(minRef.current.value)) *
      60 *
      1000;

    const updatedCourse = {
      category: categoryeRef.current.value,
      title: titleRef.current.value,
      price: priceRef.current.value,
      img: imgRef.current.value,
      duration: durationInMS,
      description: desciptRef.current.value,
      mentor: mentorRef.current.value,
      lessons: lessonsState,
    };
    const response = await PatchData(
      `${baseURL}/admin/courses/${course.id}/update`,
      "PATCH",
      updatedCourse
    );
    setShowToast(true);
    setShowUpdate(false);
  };

  return (
    <div className="w-screen h-screen bg-black bg-opacity-45 flex items-center justify-center fixed top-0 left-0 z-40">
      <div className="bg-white shadow-md rounded-lg p-6 space-y-6 md:w-[95%] md:h-[95%] w-full h-full overflow-auto">
        <h2 className="text-2xl font-bold text-gray-800">Update Course</h2>

        <div className="flex flex-col lg:flex-row gap-8">
          <UpdImg
            imgRef={imgRef}
            course={course}
            image={course.data.details.img}
          />

          <div className="flex flex-col w-full gap-y-8">
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Title
              </label>
              <input
                ref={titleRef}
                type="text"
                defaultValue={course.data.details.title}
                className="block w-full p-3 text-gray-900 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Category
              </label>
              <select
                className="py-2 border w-full border-gray-300 rounded-md"
                ref={categoryeRef}
                name=""
                id=""
              >
                {categories.map((category, index) => {
                  return (
                    <option
                      selected={
                        category.toLowerCase() ===
                        course.data?.details?.category?.toLowerCase()
                      }
                      key={index}
                      value={category}
                    >
                      {category}
                    </option>
                  );
                })}
              </select>
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Description
              </label>
              <textarea
                ref={desciptRef}
                defaultValue={course.data.description}
                className="block w-full p-3 text-gray-900 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows="4"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Mentor
              </label>
              <select
                className="py-2 border w-full border-gray-300 rounded-md"
                ref={mentorRef}
                name=""
                id=""
              >
                {mentors.map((mentor, index) => {
                  return (
                    <option
                      selected={mentor?._id === course?.data?.mentor?._id}
                      key={index}
                      value={mentor._id}
                    >
                      {mentor.name} / {mentor.title}
                    </option>
                  );
                })}
              </select>
            </div>

            <div className="flex flex-col lg:flex-row gap-6">
              <div className="w-full lg:w-1/3">
                <label className="block text-gray-600 font-medium mb-2">
                  Duration
                </label>

                <div className="flex gap-2 items-center">
                  <input
                    ref={hourRef}
                    type="number"
                    defaultValue={convertTimestampToHours(course.data.duration)}
                    className="block w-full p-3 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                  <p className="text-gray-600">Hours</p>
                </div>

                <div className="flex gap-2 items-center mt-2">
                  <input
                    ref={minRef}
                    type="number"
                    defaultValue={convertTimestampToMinutes(
                      course.data.duration
                    )}
                    className="block w-full p-3 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                  <p className="text-gray-600">Minutes</p>
                </div>
              </div>

              <div className="w-full lg:w-1/3">
                <label className="block text-gray-700 font-semibold mb-2">
                  Price
                </label>
                <input
                  ref={priceRef}
                  type="number"
                  defaultValue={course.data.details.price}
                  className="block w-full p-3 text-gray-900 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div>
              <button
                onClick={() => setShowLessonUpd(true)}
                className="px-3 py-2 rounded-sm bg-blue-500 text-white"
              >
                Update Lessons
              </button>
            </div>

            {showLessonUpd && (
              <UpdateLesson
                lessons={lessonsState}
                setShowLessonUpd={setShowLessonUpd}
                setLessonsState={setLessonsState}
              />
            )}
          </div>
        </div>

        <div className="flex justify-end space-x-1">
          <button
            onClick={() => {
              setShowUpdate(false);
            }}
            className="bg-red-500 text-white py-2 px-6 rounded-lg hover:bg-red-600 transition"
          >
            Cancel
          </button>
          <button
            onClick={handleUpdate}
            className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 transition"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdateCourse;
