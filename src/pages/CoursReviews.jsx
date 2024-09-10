import React, { useState, useEffect } from "react";
import UseFetch from "../hooks/useFetch";
import Search from "../components/mainPage/search";
import Pagination from "../components/mainPage/pagination";
import Review from "../components/reviews/Review";
import ClockLoader from "../components/general/ClockLoader";

const CourseReviews = () => {
  const baseURL = import.meta.env.VITE_baseURL;
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(15);
  const [search, setSearch] = useState("");
  const [reviews, setReviews] = useState({
    "totalResults": 391,
    "totalPages": 27,
    "page": 1,
    "limit": 15,
    "results": [
        {
            "rating": 4,
            "review": "Good course with useful material. A few more examples and hands-on activities would make it even better.",
            "_id": "66dfc952436086f433fbf442",
            "date": 1725942098914,
            "user": {
                "_id": "66dfc954436086f433fbf8f7",
                "name": "user-25",
                "email": "user-25@gmail.com"
            },
            "course": "66dfc952436086f433fbf441"
        },
        {
            "rating": 4,
            "review": "A solid course with good content. The pace was good, but a few more interactive elements would enhance learning.",
            "_id": "66dfc952436086f433fbf443",
            "date": 1725942098914,
            "user": {
                "_id": "66dfc953436086f433fbf8e1",
                "name": "user-14",
                "email": "user-14@gmail.com"
            },
            "course": "66dfc952436086f433fbf441"
        },
        {
            "rating": 5,
            "review": "Excellent course! The content was clear, and the projects were highly beneficial for applying what was learned.",
            "_id": "66dfc952436086f433fbf444",
            "date": 1725942098914,
            "user": {
                "_id": "66dfc954436086f433fbf8fd",
                "name": "user-28",
                "email": "user-28@gmail.com"
            },
            "course": "66dfc952436086f433fbf441"
        },
        {
            "rating": 5,
            "review": "Highly recommend this course! The instructor was engaging, and the content was relevant and practical.",
            "_id": "66dfc952436086f433fbf445",
            "date": 1725942098914,
            "user": {
                "_id": "66dfc953436086f433fbf8d7",
                "name": "user-9",
                "email": "user-9@gmail.com"
            },
            "course": "66dfc952436086f433fbf441"
        },
        {
            "rating": 4,
            "review": "Great course with a lot of valuable information. The pacing was good, but some sections could use more examples.",
            "_id": "66dfc952436086f433fbf446",
            "date": 1725942098914,
            "user": {
                "_id": "66dfc953436086f433fbf8e5",
                "name": "user-16",
                "email": "user-16@gmail.com"
            },
            "course": "66dfc952436086f433fbf441"
        },
        {
            "rating": 3,
            "review": "The course was decent but could benefit from more interactive content and practical examples.",
            "_id": "66dfc952436086f433fbf447",
            "date": 1725942098914,
            "user": {
                "_id": "66dfc953436086f433fbf8e5",
                "name": "user-16",
                "email": "user-16@gmail.com"
            },
            "course": "66dfc952436086f433fbf441"
        },
        {
            "rating": 5,
            "review": "One of the best courses I've taken. The content was relevant and the teaching style was engaging.",
            "_id": "66dfc952436086f433fbf448",
            "date": 1725942098914,
            "user": {
                "_id": "66dfc953436086f433fbf8e5",
                "name": "user-16",
                "email": "user-16@gmail.com"
            },
            "course": "66dfc952436086f433fbf441"
        },
        {
            "rating": 4,
            "review": "A solid course that provides a good foundation. The real-world examples were especially helpful.",
            "_id": "66dfc952436086f433fbf449",
            "date": 1725942098914,
            "user": {
                "_id": "66dfc954436086f433fbf8e9",
                "name": "user-18",
                "email": "user-18@gmail.com"
            },
            "course": "66dfc952436086f433fbf441"
        },
        {
            "rating": 4,
            "review": "Good course with useful material. A few more examples and hands-on activities would make it even better.",
            "_id": "66dfc952436086f433fbf44f",
            "date": 1725942098916,
            "user": {
                "_id": "66dfc954436086f433fbf8f5",
                "name": "user-24",
                "email": "user-24@gmail.com"
            },
            "course": "66dfc952436086f433fbf44e"
        },
        {
            "rating": 4,
            "review": "Very good course with useful material. A few more examples and hands-on activities would improve it further.",
            "_id": "66dfc952436086f433fbf450",
            "date": 1725942098916,
            "user": {
                "_id": "66dfc953436086f433fbf8d9",
                "name": "user-10",
                "email": "user-10@gmail.com"
            },
            "course": "66dfc952436086f433fbf44e"
        },
        {
            "rating": 5,
            "review": "Highly recommended! The course was well-organized, and the instructor's teaching style was very effective.",
            "_id": "66dfc952436086f433fbf451",
            "date": 1725942098916,
            "user": {
                "_id": "66dfc953436086f433fbf8e5",
                "name": "user-16",
                "email": "user-16@gmail.com"
            },
            "course": "66dfc952436086f433fbf44e"
        },
        {
            "rating": 5,
            "review": "Excellent course! The content was detailed, and the instructor provided valuable feedback throughout.",
            "_id": "66dfc952436086f433fbf452",
            "date": 1725942098916,
            "user": {
                "_id": "66dfc953436086f433fbf8d5",
                "name": "user-8",
                "email": "user-8@gmail.com"
            },
            "course": "66dfc952436086f433fbf44e"
        },
        {
            "rating": 3,
            "review": "The course was decent but lacked engagement. More interactive elements would enhance the learning experience.",
            "_id": "66dfc952436086f433fbf453",
            "date": 1725942098916,
            "user": {
                "_id": "66dfc954436086f433fbf8e9",
                "name": "user-18",
                "email": "user-18@gmail.com"
            },
            "course": "66dfc952436086f433fbf44e"
        },
        {
            "rating": 4,
            "review": "Very informative course. The material was relevant, though some sections felt a bit rushed.",
            "_id": "66dfc952436086f433fbf454",
            "date": 1725942098916,
            "user": {
                "_id": "66dfc954436086f433fbf8e9",
                "name": "user-18",
                "email": "user-18@gmail.com"
            },
            "course": "66dfc952436086f433fbf44e"
        },
        {
            "rating": 3,
            "review": "The course was decent but could benefit from more interactive content and practical examples.",
            "_id": "66dfc952436086f433fbf455",
            "date": 1725942098916,
            "user": {
                "_id": "66dfc953436086f433fbf8df",
                "name": "user-13",
                "email": "user-13@gmail.com"
            },
            "course": "66dfc952436086f433fbf44e"
        }
    ]
})

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 600)
  })

  // const fetchUrl = `${baseURL}/admin/courses/reviews?page=${currentPage}&limit=${pageSize}&search=${encodeURIComponent(
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
    const baseURL = import.meta.env.VITE_baseURL;
    const response = await fetch(
      `${baseURL}/admin/courses/${review.course}/del-review/${review._id}`,
      {
        method: "DELETE",
        headers: {
          "Content-type": "application/json",
        },
        credentials: "include"
      }
    );
  };

  return (
    <div className="w-full">
      <div className="flex justify-between items-end sm:px-3 px-2 ">
        <h1 className="text-5xl font-semibold text-[#212529] underline">
          Course Reviews
        </h1>
        <Search search={search} handleSearchChange={handleSearchChange} />
      </div>

      <div className="sm:px-3 px-2 py-4 min-h-screen grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-3 overflow-x-hidden my-4">
        {loading ? (
          <ClockLoader />
        ) : (
          reviews.results?.map((review, index) => {
            return (
              <Review
                key={index}
                review={review}
                handleDelete={handleDelete}
              />
            );
          })
        )}
      </div>

      {reviews.results ? (
        <Pagination
          handlePageChange={handlePageChange}
          currentPage={currentPage}
          data={reviews}
        />
      ) : null}
    </div>
  );
};

export default CourseReviews;
