import React, { useState, useEffect } from "react";
import UseFetch from "../hooks/useFetch";
import Search from "../components/mainPage/search";
import Pagination from "../components/mainPage/pagination";
import CourseCard from "../components/coursePage/courseCard";
import ClockLoader from "../components/general/ClockLoader"

const UsersPage = () => {
  const baseURL = import.meta.env.VITE_baseURL;
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [search, setSearch] = useState("");
  const [courses, setCourses] = useState({
    "page": 1,
    "limit": 10,
    "totalResults": 37,
    "totalPages": 4,
    "results": [
        {
            "id": "66dfc952436086f433fbf441",
            "data": {
                "details": {
                    "category": "Web Development",
                    "title": "Introduction to HTML & CSS",
                    "price": 99.99,
                    "rating": 4.3,
                    "numOfReviews": 8,
                    "img": "https://plus.unsplash.com/premium_photo-1678566154673-a728037f3f00?q=80&w=1902&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                },
                "mentor": "66dfc952436086f433fbf3af",
                "duration": 45642919,
                "description": "Master the basics of web development with HTML and CSS, learning how to create structured web pages and apply styling to elements. You'll gain a solid understanding of web design principles and the foundational skills needed to build visually appealing websites.",
                "reviews": [
                    {
                        "rating": 4,
                        "review": "Good course with useful material. A few more examples and hands-on activities would make it even better.",
                        "_id": "66dfc952436086f433fbf442",
                        "date": 1725942098914,
                        "user": "66dfc954436086f433fbf8f7"
                    },
                    {
                        "rating": 4,
                        "review": "A solid course with good content. The pace was good, but a few more interactive elements would enhance learning.",
                        "_id": "66dfc952436086f433fbf443",
                        "date": 1725942098914,
                        "user": "66dfc953436086f433fbf8e1"
                    },
                    {
                        "rating": 5,
                        "review": "Excellent course! The content was clear, and the projects were highly beneficial for applying what was learned.",
                        "_id": "66dfc952436086f433fbf444",
                        "date": 1725942098914,
                        "user": "66dfc954436086f433fbf8fd"
                    },
                    {
                        "rating": 5,
                        "review": "Highly recommend this course! The instructor was engaging, and the content was relevant and practical.",
                        "_id": "66dfc952436086f433fbf445",
                        "date": 1725942098914,
                        "user": "66dfc953436086f433fbf8d7"
                    },
                    {
                        "rating": 4,
                        "review": "Great course with a lot of valuable information. The pacing was good, but some sections could use more examples.",
                        "_id": "66dfc952436086f433fbf446",
                        "date": 1725942098914,
                        "user": "66dfc953436086f433fbf8e5"
                    },
                    {
                        "rating": 3,
                        "review": "The course was decent but could benefit from more interactive content and practical examples.",
                        "_id": "66dfc952436086f433fbf447",
                        "date": 1725942098914,
                        "user": "66dfc953436086f433fbf8e5"
                    },
                    {
                        "rating": 5,
                        "review": "One of the best courses I've taken. The content was relevant and the teaching style was engaging.",
                        "_id": "66dfc952436086f433fbf448",
                        "date": 1725942098914,
                        "user": "66dfc953436086f433fbf8e5"
                    },
                    {
                        "rating": 4,
                        "review": "A solid course that provides a good foundation. The real-world examples were especially helpful.",
                        "_id": "66dfc952436086f433fbf449",
                        "date": 1725942098914,
                        "user": "66dfc954436086f433fbf8e9"
                    }
                ],
                "lessons": [
                    {
                        "title": "Introduction to HTML",
                        "desc": "Basics of HTML and its structure",
                        "duration": 3600000,
                        "img": "https://example.com/html-intro.jpg",
                        "video": "66dfc952436086f433fbf438",
                        "_id": "66dfc952436086f433fbf44a"
                    },
                    {
                        "title": "HTML Elements and Attributes",
                        "desc": "Understanding different HTML elements and their attributes",
                        "duration": 5400000,
                        "img": "https://example.com/html-elements.jpg",
                        "video": "66dfc952436086f433fbf438",
                        "_id": "66dfc952436086f433fbf44b"
                    },
                    {
                        "title": "CSS Basics",
                        "desc": "Introduction to CSS for styling web pages",
                        "duration": 7200000,
                        "img": "https://example.com/css-basics.jpg",
                        "video": "66dfc952436086f433fbf438",
                        "_id": "66dfc952436086f433fbf44c"
                    },
                    {
                        "title": "CSS Layout Techniques",
                        "desc": "Advanced CSS layout techniques and responsive design",
                        "duration": 10800000,
                        "img": "https://example.com/css-layout.jpg",
                        "video": "66dfc952436086f433fbf438",
                        "_id": "66dfc952436086f433fbf44d"
                    }
                ]
            }
        },
        {
            "id": "66dfc952436086f433fbf44e",
            "data": {
                "details": {
                    "category": "Web Development",
                    "title": "JavaScript Essentials",
                    "price": 119.99,
                    "rating": 4.4,
                    "numOfReviews": 14,
                    "img": "https://plus.unsplash.com/premium_photo-1663050633633-2856e875dcc7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                },
                "mentor": "66dfc952436086f433fbf3af",
                "duration": 34171370,
                "description": "Dive into JavaScript to grasp essential programming concepts such as variables, functions, loops, and events. This course is tailored to help you build a strong foundation in JavaScript, equipping you with the skills to create interactive and dynamic web applications.",
                "reviews": [
                    {
                        "rating": 4,
                        "review": "Good course with useful material. A few more examples and hands-on activities would make it even better.",
                        "_id": "66dfc952436086f433fbf44f",
                        "date": 1725942098916,
                        "user": "66dfc954436086f433fbf8f5"
                    },
                    {
                        "rating": 4,
                        "review": "Very good course with useful material. A few more examples and hands-on activities would improve it further.",
                        "_id": "66dfc952436086f433fbf450",
                        "date": 1725942098916,
                        "user": "66dfc953436086f433fbf8d9"
                    },
                    {
                        "rating": 5,
                        "review": "Highly recommended! The course was well-organized, and the instructor's teaching style was very effective.",
                        "_id": "66dfc952436086f433fbf451",
                        "date": 1725942098916,
                        "user": "66dfc953436086f433fbf8e5"
                    },
                    {
                        "rating": 5,
                        "review": "Excellent course! The content was detailed, and the instructor provided valuable feedback throughout.",
                        "_id": "66dfc952436086f433fbf452",
                        "date": 1725942098916,
                        "user": "66dfc953436086f433fbf8d5"
                    },
                    {
                        "rating": 3,
                        "review": "The course was decent but lacked engagement. More interactive elements would enhance the learning experience.",
                        "_id": "66dfc952436086f433fbf453",
                        "date": 1725942098916,
                        "user": "66dfc954436086f433fbf8e9"
                    },
                    {
                        "rating": 4,
                        "review": "Very informative course. The material was relevant, though some sections felt a bit rushed.",
                        "_id": "66dfc952436086f433fbf454",
                        "date": 1725942098916,
                        "user": "66dfc954436086f433fbf8e9"
                    },
                    {
                        "rating": 3,
                        "review": "The course was decent but could benefit from more interactive content and practical examples.",
                        "_id": "66dfc952436086f433fbf455",
                        "date": 1725942098916,
                        "user": "66dfc953436086f433fbf8df"
                    },
                    {
                        "rating": 5,
                        "review": "Excellent course! The content was detailed, and the instructor provided valuable feedback throughout.",
                        "_id": "66dfc952436086f433fbf456",
                        "date": 1725942098916,
                        "user": "66dfc954436086f433fbf8ed"
                    },
                    {
                        "rating": 5,
                        "review": "Excellent course! The material was well-organized and the instructor provided valuable feedback.",
                        "_id": "66dfc952436086f433fbf457",
                        "date": 1725942098916,
                        "user": "66dfc954436086f433fbf8f1"
                    },
                    {
                        "rating": 5,
                        "review": "Highly recommended! The course was well-organized, and the instructor's teaching style was very effective.",
                        "_id": "66dfc952436086f433fbf458",
                        "date": 1725942098916,
                        "user": "66dfc953436086f433fbf8dd"
                    },
                    {
                        "rating": 4,
                        "review": "Good course with practical examples. The pacing was generally good, though some sections felt a bit slow.",
                        "_id": "66dfc952436086f433fbf459",
                        "date": 1725942098916,
                        "user": "66dfc954436086f433fbf8e7"
                    },
                    {
                        "rating": 5,
                        "review": "Excellent course! The content was detailed, and the instructor provided valuable feedback throughout.",
                        "_id": "66dfc952436086f433fbf45a",
                        "date": 1725942098916,
                        "user": "66dfc953436086f433fbf8cd"
                    },
                    {
                        "rating": 4,
                        "review": "Very informative course. The material was relevant, though some sections felt a bit rushed.",
                        "_id": "66dfc952436086f433fbf45b",
                        "date": 1725942098916,
                        "user": "66dfc954436086f433fbf8fd"
                    },
                    {
                        "rating": 5,
                        "review": "The best course I've taken! The instructor's expertise and the detailed content made complex topics easy to understand.",
                        "_id": "66dfc952436086f433fbf45c",
                        "date": 1725942098916,
                        "user": "66dfc954436086f433fbf8f5"
                    }
                ],
                "lessons": [
                    {
                        "title": "JavaScript Basics",
                        "desc": "Introduction to JavaScript and its syntax",
                        "duration": 3600000,
                        "img": "https://example.com/js-basics.jpg",
                        "video": "66dfc952436086f433fbf438",
                        "_id": "66dfc952436086f433fbf45d"
                    },
                    {
                        "title": "JavaScript Functions",
                        "desc": "Creating and using functions in JavaScript",
                        "duration": 5400000,
                        "img": "https://example.com/js-functions.jpg",
                        "video": "66dfc952436086f433fbf438",
                        "_id": "66dfc952436086f433fbf45e"
                    },
                    {
                        "title": "DOM Manipulation",
                        "desc": "Interacting with the Document Object Model (DOM)",
                        "duration": 7200000,
                        "img": "https://example.com/dom-manipulation.jpg",
                        "video": "66dfc952436086f433fbf438",
                        "_id": "66dfc952436086f433fbf45f"
                    },
                    {
                        "title": "JavaScript ES6 Features",
                        "desc": "Understanding new features introduced in ES6",
                        "duration": 10800000,
                        "img": "https://example.com/es6-features.jpg",
                        "video": "66dfc952436086f433fbf438",
                        "_id": "66dfc952436086f433fbf460"
                    }
                ]
            }
        },
        {
            "id": "66dfc952436086f433fbf461",
            "data": {
                "details": {
                    "category": "Web Development",
                    "title": "Responsive Web Design",
                    "price": 149.99,
                    "rating": 4.1,
                    "numOfReviews": 17,
                    "img": "https://images.unsplash.com/photo-1583508915901-b5f84c1dcde1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                },
                "mentor": "66dfc952436086f433fbf3af",
                "duration": 37878922,
                "description": "Explore techniques for making websites responsive and adaptable to various screen sizes and devices. Learn how to use flexible grids, media queries, and other responsive design principles to ensure a consistent and optimal user experience across different platforms.",
                "reviews": [
                    {
                        "rating": 4,
                        "review": "Great course overall. Some topics were covered in more detail than others, but it was very informative.",
                        "_id": "66dfc952436086f433fbf462",
                        "date": 1725942098917,
                        "user": "66dfc954436086f433fbf8ed"
                    },
                    {
                        "rating": 4,
                        "review": "Great course with practical insights. The material was well-presented, though some topics could be more detailed.",
                        "_id": "66dfc952436086f433fbf463",
                        "date": 1725942098917,
                        "user": "66dfc954436086f433fbf8f1"
                    },
                    {
                        "rating": 5,
                        "review": "Highly recommended! The course material was well-organized and the instructor was very knowledgeable.",
                        "_id": "66dfc952436086f433fbf464",
                        "date": 1725942098917,
                        "user": "66dfc953436086f433fbf8c9"
                    },
                    {
                        "rating": 5,
                        "review": "Outstanding course! The practical projects were very helpful in applying the concepts learned.",
                        "_id": "66dfc952436086f433fbf465",
                        "date": 1725942098917,
                        "user": "66dfc954436086f433fbf8e7"
                    },
                    {
                        "rating": 5,
                        "review": "The best course I've taken! The instructor's expertise and the detailed content made complex topics easy to understand.",
                        "_id": "66dfc952436086f433fbf466",
                        "date": 1725942098917,
                        "user": "66dfc954436086f433fbf8ff"
                    },
                    {
                        "rating": 3,
                        "review": "The course provided useful information but lacked depth in certain areas. More detailed content would be helpful.",
                        "_id": "66dfc952436086f433fbf467",
                        "date": 1725942098917,
                        "user": "66dfc954436086f433fbf8ef"
                    },
                    {
                        "rating": 3,
                        "review": "The course was decent but lacked engagement. More interactive elements would enhance the learning experience.",
                        "_id": "66dfc952436086f433fbf468",
                        "date": 1725942098917,
                        "user": "66dfc954436086f433fbf8ef"
                    },
                    {
                        "rating": 4,
                        "review": "Very informative with practical examples. A few more advanced topics would be a great addition.",
                        "_id": "66dfc952436086f433fbf469",
                        "date": 1725942098917,
                        "user": "66dfc953436086f433fbf8e5"
                    },
                    {
                        "rating": 3,
                        "review": "The course was helpful but needed more engaging content and practical examples to reinforce learning.",
                        "_id": "66dfc952436086f433fbf46a",
                        "date": 1725942098917,
                        "user": "66dfc954436086f433fbf8eb"
                    },
                    {
                        "rating": 5,
                        "review": "Highly recommend this course! The clear explanations and practical exercises made learning enjoyable.",
                        "_id": "66dfc952436086f433fbf46b",
                        "date": 1725942098918,
                        "user": "66dfc954436086f433fbf8ff"
                    },
                    {
                        "rating": 4,
                        "review": "Well-structured and informative. Some areas could use more depth, but overall a great learning experience.",
                        "_id": "66dfc952436086f433fbf46c",
                        "date": 1725942098918,
                        "user": "66dfc953436086f433fbf8e5"
                    },
                    {
                        "rating": 5,
                        "review": "The best course I've taken! The instructor's expertise and the detailed content made complex topics easy to understand.",
                        "_id": "66dfc952436086f433fbf46d",
                        "date": 1725942098918,
                        "user": "66dfc954436086f433fbf8f3"
                    },
                    {
                        "rating": 3,
                        "review": "The course provided useful information but lacked depth in certain areas. More detailed content would be helpful.",
                        "_id": "66dfc952436086f433fbf46e",
                        "date": 1725942098918,
                        "user": "66dfc954436086f433fbf8e9"
                    },
                    {
                        "rating": 5,
                        "review": "One of the best courses I've taken. The content was relevant and the teaching style was engaging.",
                        "_id": "66dfc952436086f433fbf46f",
                        "date": 1725942098918,
                        "user": "66dfc953436086f433fbf8c9"
                    },
                    {
                        "rating": 3,
                        "review": "The course provided useful information but lacked depth in certain areas. More detailed content would be helpful.",
                        "_id": "66dfc952436086f433fbf470",
                        "date": 1725942098918,
                        "user": "66dfc953436086f433fbf8d9"
                    },
                    {
                        "rating": 4,
                        "review": "Great course with a lot of valuable information. The pacing was good, but some sections could use more examples.",
                        "_id": "66dfc952436086f433fbf471",
                        "date": 1725942098918,
                        "user": "66dfc954436086f433fbf8fb"
                    },
                    {
                        "rating": 5,
                        "review": "Excellent course! The content was detailed, and the instructor provided valuable feedback throughout.",
                        "_id": "66dfc952436086f433fbf472",
                        "date": 1725942098918,
                        "user": "66dfc953436086f433fbf8d1"
                    }
                ],
                "lessons": [
                    {
                        "title": "Responsive Design Principles",
                        "desc": "Fundamentals of creating responsive web designs",
                        "duration": 3600000,
                        "img": "https://example.com/responsive-principles.jpg",
                        "video": "66dfc952436086f433fbf438",
                        "_id": "66dfc952436086f433fbf473"
                    },
                    {
                        "title": "Fluid Layouts",
                        "desc": "Designing fluid and adaptive layouts",
                        "duration": 5400000,
                        "img": "https://example.com/fluid-layouts.jpg",
                        "video": "66dfc952436086f433fbf438",
                        "_id": "66dfc952436086f433fbf474"
                    },
                    {
                        "title": "Media Queries",
                        "desc": "Using media queries for responsive design",
                        "duration": 7200000,
                        "img": "https://example.com/media-queries.jpg",
                        "video": "66dfc952436086f433fbf438",
                        "_id": "66dfc952436086f433fbf475"
                    },
                    {
                        "title": "Responsive Typography",
                        "desc": "Adjusting typography for different screen sizes",
                        "duration": 10800000,
                        "img": "https://example.com/responsive-typography.jpg",
                        "video": "66dfc952436086f433fbf438",
                        "_id": "66dfc952436086f433fbf476"
                    }
                ]
            }
        },
        {
            "id": "66dfc952436086f433fbf477",
            "data": {
                "details": {
                    "category": "Web Development",
                    "title": "Modern JavaScript Frameworks",
                    "price": 179.99,
                    "rating": 4.4,
                    "numOfReviews": 16,
                    "img": "https://images.unsplash.com/photo-1457305237443-44c3d5a30b89?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                },
                "mentor": "66dfc952436086f433fbf3af",
                "duration": 28772753,
                "description": "Get acquainted with modern JavaScript frameworks like React, Vue, and Angular. This course covers how these frameworks can streamline the development of dynamic and interactive web applications, including state management, component-based architecture, and routing.",
                "reviews": [
                    {
                        "rating": 5,
                        "review": "An exceptional learning experience! The course was well-organized and provided in-depth knowledge on the topic.",
                        "_id": "66dfc952436086f433fbf478",
                        "date": 1725942098919,
                        "user": "66dfc954436086f433fbf8f3"
                    },
                    {
                        "rating": 4,
                        "review": "Great course overall. Some topics were covered in more detail than others, but it was very informative.",
                        "_id": "66dfc952436086f433fbf479",
                        "date": 1725942098919,
                        "user": "66dfc954436086f433fbf8ff"
                    },
                    {
                        "rating": 5,
                        "review": "One of the best courses I've taken. The content was relevant and the teaching style was engaging.",
                        "_id": "66dfc952436086f433fbf47a",
                        "date": 1725942098919,
                        "user": "66dfc954436086f433fbf8fb"
                    },
                    {
                        "rating": 4,
                        "review": "Great course with a lot of valuable information. The pacing was good, but some sections could use more examples.",
                        "_id": "66dfc952436086f433fbf47b",
                        "date": 1725942098919,
                        "user": "66dfc953436086f433fbf8c9"
                    },
                    {
                        "rating": 4,
                        "review": "Good course overall. The instructor was clear and concise, though some areas felt a bit rushed.",
                        "_id": "66dfc952436086f433fbf47c",
                        "date": 1725942098919,
                        "user": "66dfc953436086f433fbf8d5"
                    },
                    {
                        "rating": 5,
                        "review": "Excellent course! The content was well-structured and the instructor's expertise was evident.",
                        "_id": "66dfc952436086f433fbf47d",
                        "date": 1725942098919,
                        "user": "66dfc953436086f433fbf8e1"
                    },
                    {
                        "rating": 5,
                        "review": "Fantastic course! The hands-on projects and quizzes really helped reinforce the concepts learned.",
                        "_id": "66dfc952436086f433fbf47e",
                        "date": 1725942098919,
                        "user": "66dfc954436086f433fbf8f3"
                    },
                    {
                        "rating": 5,
                        "review": "An outstanding course with clear explanations and practical applications. I feel much more confident in the subject.",
                        "_id": "66dfc952436086f433fbf47f",
                        "date": 1725942098919,
                        "user": "66dfc954436086f433fbf8ff"
                    },
                    {
                        "rating": 4,
                        "review": "Good course with clear explanations. Additional interactive elements would improve the overall experience.",
                        "_id": "66dfc952436086f433fbf480",
                        "date": 1725942098919,
                        "user": "66dfc954436086f433fbf8f7"
                    },
                    {
                        "rating": 4,
                        "review": "Great course with a lot of valuable information. The pacing was good, but some sections could use more examples.",
                        "_id": "66dfc952436086f433fbf481",
                        "date": 1725942098919,
                        "user": "66dfc953436086f433fbf8db"
                    },
                    {
                        "rating": 4,
                        "review": "A comprehensive course with useful content. The instructor was knowledgeable, though some topics were a bit brief.",
                        "_id": "66dfc952436086f433fbf482",
                        "date": 1725942098919,
                        "user": "66dfc954436086f433fbf8fb"
                    },
                    {
                        "rating": 5,
                        "review": "Exceptional course! The instructor was knowledgeable, and the content was well-organized and relevant.",
                        "_id": "66dfc952436086f433fbf483",
                        "date": 1725942098919,
                        "user": "66dfc953436086f433fbf8cd"
                    },
                    {
                        "rating": 4,
                        "review": "A solid course with good content. The pace was good, but a few more interactive elements would enhance learning.",
                        "_id": "66dfc952436086f433fbf484",
                        "date": 1725942098919,
                        "user": "66dfc954436086f433fbf8ef"
                    },
                    {
                        "rating": 4,
                        "review": "Great course overall. Some topics were covered in more detail than others, but it was very informative.",
                        "_id": "66dfc952436086f433fbf485",
                        "date": 1725942098919,
                        "user": "66dfc954436086f433fbf8f1"
                    },
                    {
                        "rating": 5,
                        "review": "Incredible course with practical insights and clear instruction. I learned a lot and feel confident in the subject.",
                        "_id": "66dfc952436086f433fbf486",
                        "date": 1725942098919,
                        "user": "66dfc953436086f433fbf8e3"
                    },
                    {
                        "rating": 3,
                        "review": "Useful content, but the course could benefit from a faster pace and more engaging delivery.",
                        "_id": "66dfc952436086f433fbf487",
                        "date": 1725942098919,
                        "user": "66dfc953436086f433fbf8d1"
                    }
                ],
                "lessons": [
                    {
                        "title": "Introduction to Frameworks",
                        "desc": "Overview of modern JavaScript frameworks",
                        "duration": 3600000,
                        "img": "https://example.com/frameworks-intro.jpg",
                        "video": "66dfc952436086f433fbf438",
                        "_id": "66dfc952436086f433fbf488"
                    },
                    {
                        "title": "React Basics",
                        "desc": "Getting started with React framework",
                        "duration": 5400000,
                        "img": "https://example.com/react-basics.jpg",
                        "video": "66dfc952436086f433fbf438",
                        "_id": "66dfc952436086f433fbf489"
                    },
                    {
                        "title": "Vue.js Fundamentals",
                        "desc": "Introduction to Vue.js and its features",
                        "duration": 7200000,
                        "img": "https://example.com/vue-fundamentals.jpg",
                        "video": "66dfc952436086f433fbf438",
                        "_id": "66dfc952436086f433fbf48a"
                    },
                    {
                        "title": "Angular Essentials",
                        "desc": "Understanding the core concepts of Angular",
                        "duration": 10800000,
                        "img": "https://example.com/angular-essentials.jpg",
                        "video": "66dfc952436086f433fbf438",
                        "_id": "66dfc952436086f433fbf48b"
                    }
                ]
            }
        },
        {
            "id": "66dfc952436086f433fbf48c",
            "data": {
                "details": {
                    "category": "Web Development",
                    "title": "Building Web Applications",
                    "price": 199.99,
                    "rating": 3.8,
                    "numOfReviews": 6,
                    "img": "https://images.unsplash.com/photo-1561736778-92e52a7769ef?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                },
                "mentor": "66dfc952436086f433fbf3af",
                "duration": 27378586,
                "description": "Learn how to create comprehensive web applications from start to finish. This course addresses both front-end and back-end development, including setting up servers, managing databases, and deploying applications, providing a full-stack perspective on web development.",
                "reviews": [
                    {
                        "rating": 4,
                        "review": "A solid course with good content. The pace was good, but a few more interactive elements would enhance learning.",
                        "_id": "66dfc952436086f433fbf48d",
                        "date": 1725942098920,
                        "user": "66dfc954436086f433fbf8ef"
                    },
                    {
                        "rating": 4,
                        "review": "A good course overall. The material was useful, but a few more interactive elements would enhance the experience.",
                        "_id": "66dfc952436086f433fbf48e",
                        "date": 1725942098920,
                        "user": "66dfc953436086f433fbf8df"
                    },
                    {
                        "rating": 4,
                        "review": "Good course with useful material. A few more examples and hands-on activities would make it even better.",
                        "_id": "66dfc952436086f433fbf48f",
                        "date": 1725942098920,
                        "user": "66dfc954436086f433fbf8ef"
                    },
                    {
                        "rating": 3,
                        "review": "The course covered basic concepts but lacked depth in some areas. More detailed content would be useful.",
                        "_id": "66dfc952436086f433fbf490",
                        "date": 1725942098920,
                        "user": "66dfc953436086f433fbf8df"
                    },
                    {
                        "rating": 4,
                        "review": "Great course with practical insights. The material was well-presented, though some topics could be more detailed.",
                        "_id": "66dfc952436086f433fbf491",
                        "date": 1725942098920,
                        "user": "66dfc953436086f433fbf8df"
                    },
                    {
                        "rating": 4,
                        "review": "Great course overall. Some topics were covered in more detail than others, but it was very informative.",
                        "_id": "66dfc952436086f433fbf492",
                        "date": 1725942098920,
                        "user": "66dfc953436086f433fbf8d5"
                    }
                ],
                "lessons": [
                    {
                        "title": "Introduction to Web Applications",
                        "desc": "Basics of building web applications",
                        "duration": 3600000,
                        "img": "https://example.com/web-apps-intro.jpg",
                        "video": "66dfc952436086f433fbf438",
                        "_id": "66dfc952436086f433fbf493"
                    },
                    {
                        "title": "Frontend vs Backend",
                        "desc": "Understanding the difference between frontend and backend development",
                        "duration": 5400000,
                        "img": "https://example.com/frontend-backend.jpg",
                        "video": "66dfc952436086f433fbf438",
                        "_id": "66dfc952436086f433fbf494"
                    },
                    {
                        "title": "Building RESTful APIs",
                        "desc": "Creating RESTful APIs for web applications",
                        "duration": 7200000,
                        "img": "https://example.com/restful-apis.jpg",
                        "video": "66dfc952436086f433fbf438",
                        "_id": "66dfc952436086f433fbf495"
                    },
                    {
                        "title": "Deploying Web Applications",
                        "desc": "Deploying web applications to production environments",
                        "duration": 10800000,
                        "img": "https://example.com/deploying-web-apps.jpg",
                        "video": "66dfc952436086f433fbf438",
                        "_id": "66dfc952436086f433fbf496"
                    }
                ]
            }
        },
        {
            "id": "66dfc952436086f433fbf497",
            "data": {
                "details": {
                    "category": "Web Development",
                    "title": "Web Security Fundamentals",
                    "price": 159.99,
                    "rating": 3.8,
                    "numOfReviews": 13,
                    "img": "https://images.unsplash.com/photo-1457305237443-44c3d5a30b89?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                },
                "mentor": "66dfc952436086f433fbf3af",
                "duration": 37669194,
                "description": "Gain an understanding of the fundamental principles of web security. This course teaches how to protect web applications from common vulnerabilities such as cross-site scripting (XSS) and SQL injection, ensuring that your applications are secure and resilient against attacks.",
                "reviews": [
                    {
                        "rating": 4,
                        "review": "A solid course that provides a good foundation. The real-world examples were especially helpful.",
                        "_id": "66dfc952436086f433fbf498",
                        "date": 1725942098921,
                        "user": "66dfc953436086f433fbf8d9"
                    },
                    {
                        "rating": 4,
                        "review": "Good course with relevant information. The pace was steady, though some sections could be more engaging.",
                        "_id": "66dfc952436086f433fbf499",
                        "date": 1725942098921,
                        "user": "66dfc954436086f433fbf8e9"
                    },
                    {
                        "rating": 3,
                        "review": "The course was adequate but lacked interactive components. More hands-on activities would be beneficial.",
                        "_id": "66dfc952436086f433fbf49a",
                        "date": 1725942098921,
                        "user": "66dfc953436086f433fbf8cb"
                    },
                    {
                        "rating": 4,
                        "review": "Good course with relevant information. The pace was steady, though some sections could be more engaging.",
                        "_id": "66dfc952436086f433fbf49b",
                        "date": 1725942098921,
                        "user": "66dfc954436086f433fbf8ff"
                    },
                    {
                        "rating": 5,
                        "review": "The best course I've taken! The instructor's expertise and the detailed content made complex topics easy to understand.",
                        "_id": "66dfc952436086f433fbf49c",
                        "date": 1725942098921,
                        "user": "66dfc953436086f433fbf8cd"
                    },
                    {
                        "rating": 3,
                        "review": "The course was helpful but needed more engaging content and practical examples to reinforce learning.",
                        "_id": "66dfc952436086f433fbf49d",
                        "date": 1725942098921,
                        "user": "66dfc954436086f433fbf8ff"
                    },
                    {
                        "rating": 5,
                        "review": "Highly recommend this course! The instructor was engaging, and the content was relevant and practical.",
                        "_id": "66dfc952436086f433fbf49e",
                        "date": 1725942098921,
                        "user": "66dfc953436086f433fbf8df"
                    },
                    {
                        "rating": 4,
                        "review": "A comprehensive course with useful content. The instructor was knowledgeable, though some topics were a bit brief.",
                        "_id": "66dfc952436086f433fbf49f",
                        "date": 1725942098921,
                        "user": "66dfc953436086f433fbf8d9"
                    },
                    {
                        "rating": 3,
                        "review": "The course was decent but could benefit from more interactive content and practical examples.",
                        "_id": "66dfc952436086f433fbf4a0",
                        "date": 1725942098921,
                        "user": "66dfc953436086f433fbf8db"
                    },
                    {
                        "rating": 4,
                        "review": "Good course with relevant information. The pace was steady, though some sections could be more engaging.",
                        "_id": "66dfc952436086f433fbf4a1",
                        "date": 1725942098921,
                        "user": "66dfc953436086f433fbf8d3"
                    },
                    {
                        "rating": 4,
                        "review": "Well-structured and informative. Some areas could use more depth, but overall a great learning experience.",
                        "_id": "66dfc952436086f433fbf4a2",
                        "date": 1725942098921,
                        "user": "66dfc954436086f433fbf8f5"
                    },
                    {
                        "rating": 4,
                        "review": "Great course with a lot of valuable information. The pacing was good, but some sections could use more examples.",
                        "_id": "66dfc952436086f433fbf4a3",
                        "date": 1725942098921,
                        "user": "66dfc953436086f433fbf8cd"
                    },
                    {
                        "rating": 3,
                        "review": "The course covered basic concepts but lacked depth in some areas. More detailed content would be useful.",
                        "_id": "66dfc952436086f433fbf4a4",
                        "date": 1725942098921,
                        "user": "66dfc953436086f433fbf8d3"
                    }
                ],
                "lessons": [
                    {
                        "title": "Web Security Basics",
                        "desc": "Introduction to web security concepts",
                        "duration": 3600000,
                        "img": "https://example.com/web-security-basics.jpg",
                        "video": "66dfc952436086f433fbf438",
                        "_id": "66dfc952436086f433fbf4a5"
                    },
                    {
                        "title": "Common Security Vulnerabilities",
                        "desc": "Understanding common web security vulnerabilities",
                        "duration": 5400000,
                        "img": "https://example.com/security-vulnerabilities.jpg",
                        "video": "66dfc952436086f433fbf438",
                        "_id": "66dfc952436086f433fbf4a6"
                    },
                    {
                        "title": "Secure Coding Practices",
                        "desc": "Best practices for writing secure code",
                        "duration": 7200000,
                        "img": "https://example.com/secure-coding.jpg",
                        "video": "66dfc952436086f433fbf438",
                        "_id": "66dfc952436086f433fbf4a7"
                    },
                    {
                        "title": "Web Application Firewalls",
                        "desc": "Configuring and using web application firewalls",
                        "duration": 10800000,
                        "img": "https://example.com/web-firewalls.jpg",
                        "video": "66dfc952436086f433fbf438",
                        "_id": "66dfc952436086f433fbf4a8"
                    }
                ]
            }
        },
        {
            "id": "66dfc952436086f433fbf4a9",
            "data": {
                "details": {
                    "category": "UI/UX Design",
                    "title": "Introduction to UX Design",
                    "price": 129.99,
                    "rating": 4.8,
                    "numOfReviews": 4,
                    "img": "https://images.unsplash.com/photo-1561736778-92e52a7769ef?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                },
                "mentor": "66dfc952436086f433fbf3cd",
                "duration": 37748027,
                "description": "Explore the principles of user experience (UX) design, focusing on how to create user-friendly interfaces. The course covers user research, usability testing, and designing intuitive user experiences to enhance overall satisfaction and effectiveness.",
                "reviews": [
                    {
                        "rating": 5,
                        "review": "Exceptional course! The instructor was knowledgeable, and the content was well-organized and relevant.",
                        "_id": "66dfc952436086f433fbf4aa",
                        "date": 1725942098922,
                        "user": "66dfc954436086f433fbf8eb"
                    },
                    {
                        "rating": 4,
                        "review": "A comprehensive course with useful content. The instructor was knowledgeable, though some topics were a bit brief.",
                        "_id": "66dfc952436086f433fbf4ab",
                        "date": 1725942098922,
                        "user": "66dfc953436086f433fbf8df"
                    },
                    {
                        "rating": 5,
                        "review": "Fantastic learning experience! The course was well-structured, and the practical exercises were very helpful.",
                        "_id": "66dfc952436086f433fbf4ac",
                        "date": 1725942098922,
                        "user": "66dfc954436086f433fbf8ff"
                    },
                    {
                        "rating": 5,
                        "review": "Highly recommend this course! The clear explanations and practical exercises made learning enjoyable.",
                        "_id": "66dfc952436086f433fbf4ad",
                        "date": 1725942098922,
                        "user": "66dfc954436086f433fbf8fd"
                    }
                ],
                "lessons": [
                    {
                        "title": "UX Design Overview",
                        "desc": "Introduction to UX design principles",
                        "duration": 3600000,
                        "img": "https://example.com/ux-design-overview.jpg",
                        "video": "66dfc952436086f433fbf438",
                        "_id": "66dfc952436086f433fbf4ae"
                    },
                    {
                        "title": "User Research Methods",
                        "desc": "Techniques for conducting user research",
                        "duration": 5400000,
                        "img": "https://example.com/user-research.jpg",
                        "video": "66dfc952436086f433fbf438",
                        "_id": "66dfc952436086f433fbf4af"
                    },
                    {
                        "title": "Usability Testing",
                        "desc": "Methods for testing usability in UX design",
                        "duration": 7200000,
                        "img": "https://example.com/usability-testing.jpg",
                        "video": "66dfc952436086f433fbf438",
                        "_id": "66dfc952436086f433fbf4b0"
                    },
                    {
                        "title": "Design Thinking Approach",
                        "desc": "Applying design thinking in UX design",
                        "duration": 10800000,
                        "img": "https://example.com/design-thinking.jpg",
                        "video": "66dfc952436086f433fbf438",
                        "_id": "66dfc952436086f433fbf4b1"
                    }
                ]
            }
        },
        {
            "id": "66dfc952436086f433fbf4b2",
            "data": {
                "details": {
                    "category": "UI/UX Design",
                    "title": "UI Design Basics",
                    "price": 139.99,
                    "rating": 4.1,
                    "numOfReviews": 15,
                    "img": "https://plus.unsplash.com/premium_photo-1661692759400-15aa4e2de6c3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                },
                "mentor": "66dfc952436086f433fbf3cd",
                "duration": 36562130,
                "description": "Delve into the basics of user interface (UI) design, including color theory, typography, layout design, and visual hierarchy. This course provides the foundational knowledge needed to design aesthetically pleasing and functional user interfaces for various applications.",
                "reviews": [
                    {
                        "rating": 4,
                        "review": "Great course with practical insights. The material was well-presented, though some topics could be more detailed.",
                        "_id": "66dfc952436086f433fbf4b3",
                        "date": 1725942098923,
                        "user": "66dfc954436086f433fbf8eb"
                    },
                    {
                        "rating": 5,
                        "review": "The best course I've taken! The instructor's expertise and the detailed content made complex topics easy to understand.",
                        "_id": "66dfc952436086f433fbf4b4",
                        "date": 1725942098923,
                        "user": "66dfc953436086f433fbf8d5"
                    },
                    {
                        "rating": 4,
                        "review": "Great course overall. Some topics were covered in more detail than others, but it was very informative.",
                        "_id": "66dfc952436086f433fbf4b5",
                        "date": 1725942098923,
                        "user": "66dfc954436086f433fbf8f1"
                    },
                    {
                        "rating": 4,
                        "review": "Great course with a lot of valuable information. The pacing was good, but some sections could use more examples.",
                        "_id": "66dfc952436086f433fbf4b6",
                        "date": 1725942098923,
                        "user": "66dfc953436086f433fbf8cf"
                    },
                    {
                        "rating": 3,
                        "review": "The course was useful but needed more detailed explanations and examples for better understanding.",
                        "_id": "66dfc952436086f433fbf4b7",
                        "date": 1725942098923,
                        "user": "66dfc954436086f433fbf8f3"
                    },
                    {
                        "rating": 3,
                        "review": "The course was decent but lacked engagement. More interactive elements would enhance the learning experience.",
                        "_id": "66dfc952436086f433fbf4b8",
                        "date": 1725942098923,
                        "user": "66dfc953436086f433fbf8d5"
                    },
                    {
                        "rating": 5,
                        "review": "Fantastic course! The hands-on projects and quizzes really helped reinforce the concepts learned.",
                        "_id": "66dfc952436086f433fbf4b9",
                        "date": 1725942098923,
                        "user": "66dfc954436086f433fbf8f7"
                    },
                    {
                        "rating": 4,
                        "review": "The course covered a lot of material, but a few topics could have been explained in more detail.",
                        "_id": "66dfc952436086f433fbf4ba",
                        "date": 1725942098923,
                        "user": "66dfc954436086f433fbf8e7"
                    },
                    {
                        "rating": 3,
                        "review": "The course was decent but lacked engagement. More interactive elements would enhance the learning experience.",
                        "_id": "66dfc952436086f433fbf4bb",
                        "date": 1725942098923,
                        "user": "66dfc953436086f433fbf8c5"
                    },
                    {
                        "rating": 5,
                        "review": "The best course I've taken! The instructor's expertise and the detailed content made complex topics easy to understand.",
                        "_id": "66dfc952436086f433fbf4bc",
                        "date": 1725942098923,
                        "user": "66dfc953436086f433fbf8c9"
                    },
                    {
                        "rating": 5,
                        "review": "Incredible course with detailed content and practical applications. The instructor did an excellent job.",
                        "_id": "66dfc952436086f433fbf4bd",
                        "date": 1725942098923,
                        "user": "66dfc954436086f433fbf8f7"
                    },
                    {
                        "rating": 3,
                        "review": "The course was helpful but needed more engaging content and practical examples to reinforce learning.",
                        "_id": "66dfc952436086f433fbf4be",
                        "date": 1725942098923,
                        "user": "66dfc953436086f433fbf8cd"
                    },
                    {
                        "rating": 4,
                        "review": "Great course overall. The material was useful, but a few more interactive elements would enhance the experience.",
                        "_id": "66dfc952436086f433fbf4bf",
                        "date": 1725942098923,
                        "user": "66dfc953436086f433fbf8d9"
                    },
                    {
                        "rating": 5,
                        "review": "Incredible course with practical insights and clear instruction. I learned a lot and feel confident in the subject.",
                        "_id": "66dfc952436086f433fbf4c0",
                        "date": 1725942098923,
                        "user": "66dfc953436086f433fbf8cd"
                    },
                    {
                        "rating": 4,
                        "review": "Good course with practical examples. The pacing was generally good, though some sections felt a bit slow.",
                        "_id": "66dfc952436086f433fbf4c1",
                        "date": 1725942098923,
                        "user": "66dfc953436086f433fbf8db"
                    }
                ],
                "lessons": [
                    {
                        "title": "Introduction to UI Design",
                        "desc": "Basics of UI design principles",
                        "duration": 3600000,
                        "img": "https://example.com/ui-design-intro.jpg",
                        "video": "66dfc952436086f433fbf438",
                        "_id": "66dfc952436086f433fbf4c2"
                    },
                    {
                        "title": "Design Patterns in UI",
                        "desc": "Common design patterns used in UI design",
                        "duration": 5400000,
                        "img": "https://example.com/ui-design-patterns.jpg",
                        "video": "66dfc952436086f433fbf438",
                        "_id": "66dfc952436086f433fbf4c3"
                    },
                    {
                        "title": "UI Design Tools",
                        "desc": "Tools and software for UI design",
                        "duration": 7200000,
                        "img": "https://example.com/ui-design-tools.jpg",
                        "video": "66dfc952436086f433fbf438",
                        "_id": "66dfc952436086f433fbf4c4"
                    },
                    {
                        "title": "Creating Interactive UI",
                        "desc": "Designing interactive elements for user interfaces",
                        "duration": 10800000,
                        "img": "https://example.com/interactive-ui.jpg",
                        "video": "66dfc952436086f433fbf438",
                        "_id": "66dfc952436086f433fbf4c5"
                    }
                ]
            }
        },
        {
            "id": "66dfc952436086f433fbf4c6",
            "data": {
                "details": {
                    "category": "UI/UX Design",
                    "title": "Wireframing and Prototyping",
                    "price": 149.99,
                    "rating": 4.2,
                    "numOfReviews": 13,
                    "img": "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                },
                "mentor": "66dfc952436086f433fbf3cd",
                "duration": 59665463,
                "description": "Learn the techniques of wireframing and prototyping to visualize and test design concepts before development. The course covers creating wireframes, building interactive prototypes, and iterating on design ideas to ensure they meet user needs and expectations.",
                "reviews": [
                    {
                        "rating": 3,
                        "review": "The course was okay but lacked depth in some areas. More detailed explanations would be helpful.",
                        "_id": "66dfc952436086f433fbf4c7",
                        "date": 1725942098924,
                        "user": "66dfc953436086f433fbf8e5"
                    },
                    {
                        "rating": 4,
                        "review": "Great course overall. The material was useful, but a few more interactive elements would enhance the experience.",
                        "_id": "66dfc952436086f433fbf4c8",
                        "date": 1725942098924,
                        "user": "66dfc953436086f433fbf8c7"
                    },
                    {
                        "rating": 3,
                        "review": "The course was adequate but lacked interactive components. More hands-on activities would be beneficial.",
                        "_id": "66dfc952436086f433fbf4c9",
                        "date": 1725942098924,
                        "user": "66dfc953436086f433fbf8e5"
                    },
                    {
                        "rating": 5,
                        "review": "The best course I've taken! The instructor's expertise and the detailed content made complex topics easy to understand.",
                        "_id": "66dfc952436086f433fbf4ca",
                        "date": 1725942098925,
                        "user": "66dfc954436086f433fbf8fb"
                    },
                    {
                        "rating": 5,
                        "review": "Highly recommended! The course was well-organized, and the instructor's teaching style was very effective.",
                        "_id": "66dfc952436086f433fbf4cb",
                        "date": 1725942098925,
                        "user": "66dfc953436086f433fbf8cf"
                    },
                    {
                        "rating": 4,
                        "review": "A solid course with good content. The pace was good, but a few more interactive elements would enhance learning.",
                        "_id": "66dfc952436086f433fbf4cc",
                        "date": 1725942098925,
                        "user": "66dfc954436086f433fbf8f9"
                    },
                    {
                        "rating": 4,
                        "review": "Very good course. The material was relevant, but a few sections could have been more engaging.",
                        "_id": "66dfc952436086f433fbf4cd",
                        "date": 1725942098925,
                        "user": "66dfc954436086f433fbf8e7"
                    },
                    {
                        "rating": 4,
                        "review": "A solid course that provides a good foundation. The real-world examples were especially helpful.",
                        "_id": "66dfc952436086f433fbf4ce",
                        "date": 1725942098925,
                        "user": "66dfc953436086f433fbf8cb"
                    },
                    {
                        "rating": 5,
                        "review": "Exceptional course! The instructor was knowledgeable, and the content was well-organized and relevant.",
                        "_id": "66dfc952436086f433fbf4cf",
                        "date": 1725942098925,
                        "user": "66dfc953436086f433fbf8d7"
                    },
                    {
                        "rating": 5,
                        "review": "Excellent course! The content was clear, and the projects were highly beneficial for applying what was learned.",
                        "_id": "66dfc952436086f433fbf4d0",
                        "date": 1725942098925,
                        "user": "66dfc953436086f433fbf8e1"
                    },
                    {
                        "rating": 5,
                        "review": "The best course I've taken! The instructor's expertise and the detailed content made complex topics easy to understand.",
                        "_id": "66dfc952436086f433fbf4d1",
                        "date": 1725942098925,
                        "user": "66dfc954436086f433fbf8f7"
                    },
                    {
                        "rating": 3,
                        "review": "The course was decent but could benefit from more interactive content and practical examples.",
                        "_id": "66dfc952436086f433fbf4d2",
                        "date": 1725942098925,
                        "user": "66dfc954436086f433fbf8f7"
                    },
                    {
                        "rating": 4,
                        "review": "Well-structured and informative. Some areas could use more depth, but overall a great learning experience.",
                        "_id": "66dfc952436086f433fbf4d3",
                        "date": 1725942098925,
                        "user": "66dfc954436086f433fbf8e9"
                    }
                ],
                "lessons": [
                    {
                        "title": "Wireframing Basics",
                        "desc": "Introduction to wireframing techniques",
                        "duration": 3600000,
                        "img": "https://example.com/wireframing-basics.jpg",
                        "video": "66dfc952436086f433fbf438",
                        "_id": "66dfc952436086f433fbf4d4"
                    },
                    {
                        "title": "Creating Prototypes",
                        "desc": "Building prototypes for user testing",
                        "duration": 5400000,
                        "img": "https://example.com/creating-prototypes.jpg",
                        "video": "66dfc952436086f433fbf438",
                        "_id": "66dfc952436086f433fbf4d5"
                    },
                    {
                        "title": "Wireframing Tools",
                        "desc": "Tools used for creating wireframes",
                        "duration": 7200000,
                        "img": "https://example.com/wireframing-tools.jpg",
                        "video": "66dfc952436086f433fbf438",
                        "_id": "66dfc952436086f433fbf4d6"
                    },
                    {
                        "title": "Prototyping Best Practices",
                        "desc": "Best practices for creating effective prototypes",
                        "duration": 10800000,
                        "img": "https://example.com/prototyping-best-practices.jpg",
                        "video": "66dfc952436086f433fbf438",
                        "_id": "66dfc952436086f433fbf4d7"
                    }
                ]
            }
        },
        {
            "id": "66dfc952436086f433fbf4d8",
            "data": {
                "details": {
                    "category": "UI/UX Design",
                    "title": "User Journey Mapping",
                    "price": 159.99,
                    "rating": 4.8,
                    "numOfReviews": 5,
                    "img": "https://images.unsplash.com/photo-1586717799252-bd134ad00e26?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                },
                "mentor": "66dfc952436086f433fbf3cd",
                "duration": 69105877,
                "description": "Understand how to map out user journeys to identify pain points and opportunities for improvement. This course teaches you to create user personas and journey maps, helping you enhance the overall user experience by addressing specific user needs and behaviors.",
                "reviews": [
                    {
                        "rating": 5,
                        "review": "Highly recommend this course! The instructor was engaging, and the content was relevant and practical.",
                        "_id": "66dfc952436086f433fbf4d9",
                        "date": 1725942098926,
                        "user": "66dfc953436086f433fbf8df"
                    },
                    {
                        "rating": 4,
                        "review": "Great course overall. Some topics were covered in more detail than others, but it was very informative.",
                        "_id": "66dfc952436086f433fbf4da",
                        "date": 1725942098926,
                        "user": "66dfc953436086f433fbf8c9"
                    },
                    {
                        "rating": 5,
                        "review": "Excellent course! The content was detailed, and the instructor provided valuable feedback throughout.",
                        "_id": "66dfc952436086f433fbf4db",
                        "date": 1725942098926,
                        "user": "66dfc954436086f433fbf8e7"
                    },
                    {
                        "rating": 5,
                        "review": "Outstanding course! The practical projects were very helpful in applying the concepts learned.",
                        "_id": "66dfc952436086f433fbf4dc",
                        "date": 1725942098926,
                        "user": "66dfc953436086f433fbf8d5"
                    },
                    {
                        "rating": 5,
                        "review": "Incredible course with practical insights and clear instruction. I learned a lot and feel confident in the subject.",
                        "_id": "66dfc952436086f433fbf4dd",
                        "date": 1725942098926,
                        "user": "66dfc954436086f433fbf8ed"
                    }
                ],
                "lessons": [
                    {
                        "title": "User Journey Mapping Basics",
                        "desc": "Introduction to mapping user journeys",
                        "duration": 3600000,
                        "img": "https://example.com/user-journey-mapping.jpg",
                        "video": "66dfc952436086f433fbf438",
                        "_id": "66dfc952436086f433fbf4de"
                    },
                    {
                        "title": "Creating User Personas",
                        "desc": "Developing user personas for UX design",
                        "duration": 5400000,
                        "img": "https://example.com/user-personas.jpg",
                        "video": "66dfc952436086f433fbf438",
                        "_id": "66dfc952436086f433fbf4df"
                    },
                    {
                        "title": "Mapping User Flows",
                        "desc": "Creating user flows for better user experience",
                        "duration": 7200000,
                        "img": "https://example.com/user-flows.jpg",
                        "video": "66dfc952436086f433fbf438",
                        "_id": "66dfc952436086f433fbf4e0"
                    },
                    {
                        "title": "Analyzing User Journeys",
                        "desc": "Techniques for analyzing user journeys and improving UX",
                        "duration": 10800000,
                        "img": "https://example.com/analyzing-user-journeys.jpg",
                        "video": "66dfc952436086f433fbf438",
                        "_id": "66dfc952436086f433fbf4e1"
                    }
                ]
            }
        }
    ]
})


  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 600)
  })
  // const fetchUrl = `${baseURL}/admin/courses/search?page=${currentPage}&limit=${pageSize}&query=${encodeURIComponent(
  //   search
  // )}`;
  // const [courses, error, loading, reFetch] = UseFetch(
  //   fetchUrl,
  //   [],
  //   [currentPage, search]
  // );

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
    setCurrentPage(1);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="w-full">
      <div className="flex justify-between items-end sm:px-3 px-2">
      
        <h1 className=" text-5xl font-semibold text-[#212529] underline">
          Courses
        </h1>
        <Search search={search} handleSearchChange={handleSearchChange} />
      </div>

      <div className="flex sm:px-3 px-2 min-h-screen py-4 flex-col gap-1 overflow-x-hidden my-4">
        {loading ? (
          <ClockLoader />
        ) : (
          courses.results?.map((course, index) => {
            return <CourseCard key={index} course={course}/>
          })
        )}
      </div>

        {courses.results ?    <Pagination
        handlePageChange={handlePageChange}
        currentPage={currentPage}
        data={courses}
      /> : null}
    </div>
  );
};

export default UsersPage;
