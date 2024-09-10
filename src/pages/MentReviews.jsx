import React, { useState, useEffect } from "react";
import UseFetch from "../hooks/useFetch";
import Search from "../components/mainPage/search";
import Pagination from "../components/mainPage/pagination";
import Review from "../components/reviews/Review";
import ClockLoader from "../components/general/ClockLoader";

const MentReviews = () => {
    const baseURL = import.meta.env.VITE_baseURL;
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(15);
    const [search, setSearch] = useState("");
  const [loading2, setLoading2] = useState(false)
  const [reviews, setReviews] = useState({
    "totalResults": 35,
    "totalPages": 3,
    "page": 1,
    "limit": 15,
    "results": [
        {
            "rating": 5,
            "review": "John's expertise in software engineering is truly exceptional. His ability to break down complex topics into manageable pieces was incredibly helpful. His deep understanding of both theoretical concepts and practical applications made each session highly informative and engaging. I feel much more confident in my coding skills thanks to his guidance.",
            "_id": "66dfc952436086f433fbf3b0",
            "date": 1725942098880,
            "user": {
                "_id": "66dfc953436086f433fbf8dd",
                "name": "user-12",
                "email": "user-12@gmail.com"
            },
            "mentor": "66dfc952436086f433fbf3af"
        },
        {
            "rating": 4,
            "review": "John is an excellent mentor with a wealth of knowledge in software engineering. His real-world examples and hands-on approach to teaching have provided me with a strong foundation in the field. While his sessions were incredibly beneficial, I sometimes found the pace a bit fast, but overall, his guidance was invaluable.",
            "_id": "66dfc952436086f433fbf3b1",
            "date": 1725942098881,
            "user": {
                "_id": "66dfc954436086f433fbf8ed",
                "name": "user-20",
                "email": "user-20@gmail.com"
            },
            "mentor": "66dfc952436086f433fbf3af"
        },
        {
            "rating": 5,
            "review": "Mentoring style is incredibly supportive and encouraging. His feedback was always constructive and aimed at helping me grow as a developer. His detailed explanations and patience made complex topics easier to understand. I greatly appreciate his dedication and the confidence he helped me build in my coding abilities.",
            "_id": "66dfc952436086f433fbf3b2",
            "date": 1725942098881,
            "user": {
                "_id": "66dfc953436086f433fbf8c5",
                "name": "user-0",
                "email": "user-0@gmail.com"
            },
            "mentor": "66dfc952436086f433fbf3af"
        },
        {
            "rating": 4,
            "review": "I had a great experience with John as my mentor. His sessions were full of valuable insights and practical advice. He made sure to address all my questions and provided thoughtful responses. Occasionally, I felt that more time could be spent on certain topics, but his overall mentoring approach was very effective.",
            "_id": "66dfc952436086f433fbf3b3",
            "date": 1725942098881,
            "user": {
                "_id": "66dfc954436086f433fbf8f5",
                "name": "user-24",
                "email": "user-24@gmail.com"
            },
            "mentor": "66dfc952436086f433fbf3af"
        },
        {
            "rating": 5,
            "review": "John's extensive industry experience and real-world examples made his sessions incredibly valuable. His ability to relate theoretical concepts to practical applications helped me grasp complex ideas more easily. His supportive and detailed feedback has significantly enhanced my programming skills and understanding of software engineering.",
            "_id": "66dfc952436086f433fbf3b4",
            "date": 1725942098881,
            "user": {
                "_id": "66dfc953436086f433fbf8cb",
                "name": "user-3",
                "email": "user-3@gmail.com"
            },
            "mentor": "66dfc952436086f433fbf3af"
        },
        {
            "rating": 5,
            "review": "Jane's deep knowledge of data science and her effective teaching methods make learning complex topics much more manageable. Her ability to explain intricate concepts with clarity and her hands-on approach to problem-solving have greatly enhanced my understanding of data analysis and machine learning. Jane's mentoring has been a key factor in my progress in the field.",
            "_id": "66dfc952436086f433fbf3ba",
            "date": 1725942098883,
            "user": {
                "_id": "66dfc954436086f433fbf8fd",
                "name": "user-28",
                "email": "user-28@gmail.com"
            },
            "mentor": "66dfc952436086f433fbf3b9"
        },
        {
            "rating": 4,
            "review": "She is an exceptional mentor who provides insightful and practical feedback. Her expertise in data science and machine learning is evident in her teaching. While her sessions are generally very helpful, occasionally the topics covered could benefit from a bit more depth. Nonetheless, her guidance has been instrumental in my learning journey.",
            "_id": "66dfc952436086f433fbf3bb",
            "date": 1725942098883,
            "user": {
                "_id": "66dfc953436086f433fbf8e1",
                "name": "user-14",
                "email": "user-14@gmail.com"
            },
            "mentor": "66dfc952436086f433fbf3b9"
        },
        {
            "rating": 5,
            "review": "With Jane's guidance, I've been able to tackle challenging data science problems with confidence. Her thorough explanations and encouragement have made complex subjects more accessible. Jane's mentorship has not only improved my technical skills but also my overall approach to data-driven problem solving.",
            "_id": "66dfc952436086f433fbf3bc",
            "date": 1725942098883,
            "user": {
                "_id": "66dfc954436086f433fbf8f9",
                "name": "user-26",
                "email": "user-26@gmail.com"
            },
            "mentor": "66dfc952436086f433fbf3b9"
        },
        {
            "rating": 4,
            "review": "Jane offers a wealth of knowledge and practical insights into data science and machine learning. Her feedback is always detailed and aimed at helping me improve. Sometimes, the pace of the sessions felt a bit rushed, but her expertise and support have been greatly beneficial to my learning experience.",
            "_id": "66dfc952436086f433fbf3bd",
            "date": 1725942098883,
            "user": {
                "_id": "66dfc953436086f433fbf8db",
                "name": "user-11",
                "email": "user-11@gmail.com"
            },
            "mentor": "66dfc952436086f433fbf3b9"
        },
        {
            "rating": 5,
            "review": "The mentorship has been invaluable in my journey through data science. Her ability to connect theoretical knowledge with practical applications has greatly enhanced my learning. Her supportive approach and willingness to go the extra mile to ensure I understand the material have made a significant impact on my progress.",
            "_id": "66dfc952436086f433fbf3be",
            "date": 1725942098883,
            "user": {
                "_id": "66dfc954436086f433fbf8fd",
                "name": "user-28",
                "email": "user-28@gmail.com"
            },
            "mentor": "66dfc952436086f433fbf3b9"
        },
        {
            "rating": 5,
            "review": "His approach to teaching web design is both innovative and practical. His lessons are well-structured and cover a broad range of topics, from the basics of HTML and CSS to advanced design principles. His feedback is always constructive, and his passion for design is evident in every session. I've gained a lot of valuable skills through his mentorship.",
            "_id": "66dfc952436086f433fbf3c4",
            "date": 1725942098884,
            "user": {
                "_id": "66dfc953436086f433fbf8e1",
                "name": "user-14",
                "email": "user-14@gmail.com"
            },
            "mentor": "66dfc952436086f433fbf3c3"
        },
        {
            "rating": 4,
            "review": "This course provides a comprehensive overview of web design concepts. His practical examples and design challenges are particularly useful for understanding how to apply theoretical knowledge. Occasionally, I found the sessions a bit intense, but overall, his guidance has been instrumental in improving my design skills.",
            "_id": "66dfc952436086f433fbf3c5",
            "date": 1725942098884,
            "user": {
                "_id": "66dfc954436086f433fbf8e9",
                "name": "user-18",
                "email": "user-18@gmail.com"
            },
            "mentor": "66dfc952436086f433fbf3c3"
        },
        {
            "rating": 5,
            "review": "Michael is a fantastic mentor with a deep understanding of web design. His ability to break down complex design principles into manageable lessons has greatly enhanced my learning experience. His constructive feedback and encouragement have been crucial in helping me develop my skills and confidence as a designer.",
            "_id": "66dfc952436086f433fbf3c6",
            "date": 1725942098884,
            "user": {
                "_id": "66dfc953436086f433fbf8cf",
                "name": "user-5",
                "email": "user-5@gmail.com"
            },
            "mentor": "66dfc952436086f433fbf3c3"
        },
        {
            "rating": 4,
            "review": "The lessons in web design are engaging and informative. He covers a wide range of topics, and his practical approach helps in applying design concepts effectively. While some sessions felt a bit rushed, his overall mentoring approach is very effective and has significantly improved my web design skills.",
            "_id": "66dfc952436086f433fbf3c7",
            "date": 1725942098884,
            "user": {
                "_id": "66dfc953436086f433fbf8cb",
                "name": "user-3",
                "email": "user-3@gmail.com"
            },
            "mentor": "66dfc952436086f433fbf3c3"
        },
        {
            "rating": 5,
            "review": "Michael's expertise in web design has been incredibly valuable to me. His ability to teach complex concepts in a clear and understandable way has made a significant impact on my learning. His feedback is always detailed and aimed at helping me grow as a designer, and I appreciate his dedication and support.",
            "_id": "66dfc952436086f433fbf3c8",
            "date": 1725942098884,
            "user": {
                "_id": "66dfc954436086f433fbf8f1",
                "name": "user-22",
                "email": "user-22@gmail.com"
            },
            "mentor": "66dfc952436086f433fbf3c3"
        }
    ]
})

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 600)
  })
    
  
    // const fetchUrl = `${baseURL}/admin/mentors/reviews?page=${currentPage}&limit=${pageSize}&search=${encodeURIComponent(
    //   search
    // )}`;
    // const [reviews, error, loading, reFetch] = UseFetch(
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

    const handleDelete = async (review) => {
      const baseURL = import.meta.env.VITE_baseURL
      const response = await fetch(`${baseURL}/admin/mentors/${review.mentor}/del-review/${review._id}`, {
        method: "DELETE",
        headers: {
          "Content-type": "application/json",
        },
        credentials: "include"
      });
    };
  return (
    <div className="w-full ">
    <div className="flex justify-between items-end sm:px-3 px-2 ">
      <h1 className=" text-5xl font-semibold text-[#212529] underline">
        Reviews
      </h1>
      <Search search={search} handleSearchChange={handleSearchChange} />
    </div>

    <div className="sm:px-3 px-2 py-4 min-h-screen grid xl:grid-cols-3  lg:grid-cols-2 grid-cols-1 gap-3  overflow-x-hidden my-4">
      {loading ? (
          <ClockLoader />
      ) : (
        reviews.results?.map((review, index) => {
          return <Review  key={index} review={review} handleDelete={handleDelete}/>
        })
      )}
    </div>

      {reviews.results ?    <Pagination
      handlePageChange={handlePageChange}
      currentPage={currentPage}
      data={reviews}
    /> : null}
  </div>
  )
}

export default MentReviews