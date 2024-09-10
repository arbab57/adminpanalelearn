import React, { useEffect, useState } from "react";
import UseFetch from "../hooks/useFetch";
import UsersDisplay from "../components/mainPage/usersDisplay";
import Search from "../components/mainPage/search";
import Pagination from "../components/mainPage/pagination";
import ClockLoader from "../components/general/ClockLoader";

const UsersPage = () => {
  const baseURL = import.meta.env.VITE_baseURL;
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(15);
  const [search, setSearch] = useState("");
  const [usersData, setUsersData] = useState({
    "total": 30,
    "page": 1,
    "totalPages": 2,
    "results": [
        {
            "id": "66dfc953436086f433fbf8c5",
            "name": "user-0",
            "email": "user-0@gmail.com",
            "boughtCourse": [
                "66dfc952436086f433fbf5fa",
                "66dfc952436086f433fbf4a9",
                "66dfc952436086f433fbf4a9",
                "66dfc952436086f433fbf5ba",
                "66dfc952436086f433fbf5fa",
                "66dfc952436086f433fbf556",
                "66dfc952436086f433fbf589",
                "66dfc952436086f433fbf59c",
                "66dfc952436086f433fbf4a9",
                "66dfc952436086f433fbf51b",
                "66dfc952436086f433fbf578",
                "66dfc952436086f433fbf4b2",
                "66dfc952436086f433fbf477",
                "66dfc952436086f433fbf658",
                "66dfc952436086f433fbf4a9",
                "66dfc952436086f433fbf48c"
            ],
            "savedCourses": [
                "66dfc952436086f433fbf64a",
                "66dfc952436086f433fbf44e",
                "66dfc952436086f433fbf589",
                "66dfc952436086f433fbf60c",
                "66dfc952436086f433fbf636",
                "66dfc952436086f433fbf5a6",
                "66dfc952436086f433fbf60c",
                "66dfc952436086f433fbf636",
                "66dfc952436086f433fbf5dc",
                "66dfc952436086f433fbf4c6",
                "66dfc952436086f433fbf620",
                "66dfc952436086f433fbf674",
                "66dfc952436086f433fbf665",
                "66dfc952436086f433fbf532",
                "66dfc952436086f433fbf561"
            ],
            "completed": [],
            "noOfBoughtCourses": 16,
            "noOfSavedCourses": 15
        },
        {
            "id": "66dfc953436086f433fbf8c7",
            "name": "user-1",
            "email": "user-1@gmail.com",
            "boughtCourse": [
                "66dfc952436086f433fbf44e",
                "66dfc952436086f433fbf44e",
                "66dfc952436086f433fbf5cd",
                "66dfc952436086f433fbf532",
                "66dfc952436086f433fbf501",
                "66dfc952436086f433fbf589",
                "66dfc952436086f433fbf5a6",
                "66dfc952436086f433fbf578",
                "66dfc952436086f433fbf674",
                "66dfc952436086f433fbf4d8",
                "66dfc952436086f433fbf674"
            ],
            "savedCourses": [
                "66dfc952436086f433fbf665",
                "66dfc952436086f433fbf4b2",
                "66dfc952436086f433fbf60c",
                "66dfc952436086f433fbf461",
                "66dfc952436086f433fbf4c6",
                "66dfc952436086f433fbf64a",
                "66dfc952436086f433fbf556",
                "66dfc952436086f433fbf5ba"
            ],
            "completed": [],
            "noOfBoughtCourses": 11,
            "noOfSavedCourses": 8
        },
        {
            "id": "66dfc953436086f433fbf8c9",
            "name": "user-2",
            "email": "user-2@gmail.com",
            "boughtCourse": [
                "66dfc952436086f433fbf5ef",
                "66dfc952436086f433fbf5ef",
                "66dfc952436086f433fbf556",
                "66dfc952436086f433fbf497",
                "66dfc952436086f433fbf5ba",
                "66dfc952436086f433fbf501",
                "66dfc952436086f433fbf556",
                "66dfc952436086f433fbf48c",
                "66dfc952436086f433fbf53b"
            ],
            "savedCourses": [
                "66dfc952436086f433fbf5b1",
                "66dfc952436086f433fbf5cd",
                "66dfc952436086f433fbf5ef",
                "66dfc952436086f433fbf665",
                "66dfc952436086f433fbf50d",
                "66dfc952436086f433fbf48c",
                "66dfc952436086f433fbf48c",
                "66dfc952436086f433fbf4d8",
                "66dfc952436086f433fbf461",
                "66dfc952436086f433fbf5cd",
                "66dfc952436086f433fbf5ba",
                "66dfc952436086f433fbf5ef",
                "66dfc952436086f433fbf665"
            ],
            "completed": [],
            "noOfBoughtCourses": 9,
            "noOfSavedCourses": 13
        },
        {
            "id": "66dfc953436086f433fbf8cb",
            "name": "user-3",
            "email": "user-3@gmail.com",
            "boughtCourse": [
                "66dfc952436086f433fbf477",
                "66dfc952436086f433fbf53b",
                "66dfc952436086f433fbf51b",
                "66dfc952436086f433fbf51b",
                "66dfc952436086f433fbf461",
                "66dfc952436086f433fbf4d8",
                "66dfc952436086f433fbf64a",
                "66dfc952436086f433fbf589",
                "66dfc952436086f433fbf4b2",
                "66dfc952436086f433fbf4a9",
                "66dfc952436086f433fbf461",
                "66dfc952436086f433fbf477",
                "66dfc952436086f433fbf4a9"
            ],
            "savedCourses": [
                "66dfc952436086f433fbf658",
                "66dfc952436086f433fbf48c",
                "66dfc952436086f433fbf5b1",
                "66dfc952436086f433fbf477",
                "66dfc952436086f433fbf589",
                "66dfc952436086f433fbf441",
                "66dfc952436086f433fbf658",
                "66dfc952436086f433fbf665",
                "66dfc952436086f433fbf674",
                "66dfc952436086f433fbf4d8",
                "66dfc952436086f433fbf4e2",
                "66dfc952436086f433fbf5fa"
            ],
            "completed": [],
            "noOfBoughtCourses": 13,
            "noOfSavedCourses": 12
        },
        {
            "id": "66dfc953436086f433fbf8cd",
            "name": "user-4",
            "email": "user-4@gmail.com",
            "boughtCourse": [
                "66dfc952436086f433fbf5fa",
                "66dfc952436086f433fbf5fa",
                "66dfc952436086f433fbf5dc",
                "66dfc952436086f433fbf5cd",
                "66dfc952436086f433fbf578",
                "66dfc952436086f433fbf64a",
                "66dfc952436086f433fbf4a9",
                "66dfc952436086f433fbf532",
                "66dfc952436086f433fbf60c",
                "66dfc952436086f433fbf5b1",
                "66dfc952436086f433fbf5b1",
                "66dfc952436086f433fbf636",
                "66dfc952436086f433fbf59c",
                "66dfc952436086f433fbf658"
            ],
            "savedCourses": [
                "66dfc952436086f433fbf589",
                "66dfc952436086f433fbf4f6",
                "66dfc952436086f433fbf4a9",
                "66dfc952436086f433fbf48c",
                "66dfc952436086f433fbf5dc",
                "66dfc952436086f433fbf4b2",
                "66dfc952436086f433fbf4b2",
                "66dfc952436086f433fbf556",
                "66dfc952436086f433fbf658",
                "66dfc952436086f433fbf636",
                "66dfc952436086f433fbf532",
                "66dfc952436086f433fbf5dc",
                "66dfc952436086f433fbf532",
                "66dfc952436086f433fbf461",
                "66dfc952436086f433fbf5b1"
            ],
            "completed": [],
            "noOfBoughtCourses": 14,
            "noOfSavedCourses": 15
        },
        {
            "id": "66dfc953436086f433fbf8cf",
            "name": "user-5",
            "email": "user-5@gmail.com",
            "boughtCourse": [
                "66dfc952436086f433fbf461",
                "66dfc952436086f433fbf441",
                "66dfc952436086f433fbf532",
                "66dfc952436086f433fbf546",
                "66dfc952436086f433fbf4c6",
                "66dfc952436086f433fbf556",
                "66dfc952436086f433fbf561",
                "66dfc952436086f433fbf532",
                "66dfc952436086f433fbf546",
                "66dfc952436086f433fbf4c6",
                "66dfc952436086f433fbf658",
                "66dfc952436086f433fbf5cd",
                "66dfc952436086f433fbf5dc",
                "66dfc952436086f433fbf64a",
                "66dfc952436086f433fbf441",
                "66dfc952436086f433fbf44e",
                "66dfc952436086f433fbf636"
            ],
            "savedCourses": [
                "66dfc952436086f433fbf50d",
                "66dfc952436086f433fbf53b",
                "66dfc952436086f433fbf50d",
                "66dfc952436086f433fbf674",
                "66dfc952436086f433fbf53b",
                "66dfc952436086f433fbf51b",
                "66dfc952436086f433fbf51b",
                "66dfc952436086f433fbf5dc",
                "66dfc952436086f433fbf59c",
                "66dfc952436086f433fbf497"
            ],
            "completed": [],
            "noOfBoughtCourses": 17,
            "noOfSavedCourses": 10
        },
        {
            "id": "66dfc953436086f433fbf8d1",
            "name": "user-6",
            "email": "user-6@gmail.com",
            "boughtCourse": [
                "66dfc952436086f433fbf658",
                "66dfc952436086f433fbf5ef",
                "66dfc952436086f433fbf461",
                "66dfc952436086f433fbf477",
                "66dfc952436086f433fbf589",
                "66dfc952436086f433fbf48c",
                "66dfc952436086f433fbf665",
                "66dfc952436086f433fbf5fa",
                "66dfc952436086f433fbf5dc",
                "66dfc952436086f433fbf48c",
                "66dfc952436086f433fbf556"
            ],
            "savedCourses": [
                "66dfc952436086f433fbf561",
                "66dfc952436086f433fbf477",
                "66dfc952436086f433fbf658",
                "66dfc952436086f433fbf5ef",
                "66dfc952436086f433fbf532",
                "66dfc952436086f433fbf477"
            ],
            "completed": [],
            "noOfBoughtCourses": 11,
            "noOfSavedCourses": 6
        },
        {
            "id": "66dfc953436086f433fbf8d3",
            "name": "user-7",
            "email": "user-7@gmail.com",
            "boughtCourse": [
                "66dfc952436086f433fbf59c",
                "66dfc952436086f433fbf5ef",
                "66dfc952436086f433fbf501",
                "66dfc952436086f433fbf5ef",
                "66dfc952436086f433fbf5ef",
                "66dfc952436086f433fbf636",
                "66dfc952436086f433fbf546",
                "66dfc952436086f433fbf5fa",
                "66dfc952436086f433fbf5ba",
                "66dfc952436086f433fbf561",
                "66dfc952436086f433fbf4f6",
                "66dfc952436086f433fbf501",
                "66dfc952436086f433fbf53b",
                "66dfc952436086f433fbf5fa",
                "66dfc952436086f433fbf589",
                "66dfc952436086f433fbf4c6",
                "66dfc952436086f433fbf4e2"
            ],
            "savedCourses": [
                "66dfc952436086f433fbf5b1",
                "66dfc952436086f433fbf497",
                "66dfc952436086f433fbf44e",
                "66dfc952436086f433fbf5fa",
                "66dfc952436086f433fbf561",
                "66dfc952436086f433fbf497",
                "66dfc952436086f433fbf556",
                "66dfc952436086f433fbf556",
                "66dfc952436086f433fbf636",
                "66dfc952436086f433fbf441",
                "66dfc952436086f433fbf4f6",
                "66dfc952436086f433fbf5cd",
                "66dfc952436086f433fbf665",
                "66dfc952436086f433fbf51b",
                "66dfc952436086f433fbf5ef"
            ],
            "completed": [],
            "noOfBoughtCourses": 17,
            "noOfSavedCourses": 15
        },
        {
            "id": "66dfc953436086f433fbf8d5",
            "name": "user-8",
            "email": "user-8@gmail.com",
            "boughtCourse": [
                "66dfc952436086f433fbf5b1",
                "66dfc952436086f433fbf5b1",
                "66dfc952436086f433fbf5cd",
                "66dfc952436086f433fbf44e",
                "66dfc952436086f433fbf556",
                "66dfc952436086f433fbf5b1",
                "66dfc952436086f433fbf674"
            ],
            "savedCourses": [
                "66dfc952436086f433fbf532",
                "66dfc952436086f433fbf51b",
                "66dfc952436086f433fbf44e",
                "66dfc952436086f433fbf589",
                "66dfc952436086f433fbf501",
                "66dfc952436086f433fbf4b2",
                "66dfc952436086f433fbf50d",
                "66dfc952436086f433fbf4e2",
                "66dfc952436086f433fbf674",
                "66dfc952436086f433fbf44e",
                "66dfc952436086f433fbf477"
            ],
            "completed": [],
            "noOfBoughtCourses": 7,
            "noOfSavedCourses": 11
        },
        {
            "id": "66dfc953436086f433fbf8d7",
            "name": "user-9",
            "email": "user-9@gmail.com",
            "boughtCourse": [
                "66dfc952436086f433fbf5b1",
                "66dfc952436086f433fbf4f6",
                "66dfc952436086f433fbf50d",
                "66dfc952436086f433fbf4e2",
                "66dfc952436086f433fbf561",
                "66dfc952436086f433fbf636",
                "66dfc952436086f433fbf578",
                "66dfc952436086f433fbf4a9",
                "66dfc952436086f433fbf461",
                "66dfc952436086f433fbf4d8"
            ],
            "savedCourses": [
                "66dfc952436086f433fbf4c6",
                "66dfc952436086f433fbf4b2",
                "66dfc952436086f433fbf620",
                "66dfc952436086f433fbf4c6",
                "66dfc952436086f433fbf546",
                "66dfc952436086f433fbf665",
                "66dfc952436086f433fbf497",
                "66dfc952436086f433fbf5b1",
                "66dfc952436086f433fbf556",
                "66dfc952436086f433fbf51b",
                "66dfc952436086f433fbf636",
                "66dfc952436086f433fbf556",
                "66dfc952436086f433fbf5dc"
            ],
            "completed": [],
            "noOfBoughtCourses": 10,
            "noOfSavedCourses": 13
        },
        {
            "id": "66dfc953436086f433fbf8d9",
            "name": "user-10",
            "email": "user-10@gmail.com",
            "boughtCourse": [
                "66dfc952436086f433fbf665",
                "66dfc952436086f433fbf5ba",
                "66dfc952436086f433fbf620",
                "66dfc952436086f433fbf561",
                "66dfc952436086f433fbf4e2",
                "66dfc952436086f433fbf658",
                "66dfc952436086f433fbf636",
                "66dfc952436086f433fbf51b",
                "66dfc952436086f433fbf441",
                "66dfc952436086f433fbf64a",
                "66dfc952436086f433fbf674",
                "66dfc952436086f433fbf578",
                "66dfc952436086f433fbf620",
                "66dfc952436086f433fbf674",
                "66dfc952436086f433fbf461",
                "66dfc952436086f433fbf674"
            ],
            "savedCourses": [
                "66dfc952436086f433fbf5fa",
                "66dfc952436086f433fbf497",
                "66dfc952436086f433fbf5b1",
                "66dfc952436086f433fbf51b",
                "66dfc952436086f433fbf665",
                "66dfc952436086f433fbf64a",
                "66dfc952436086f433fbf441",
                "66dfc952436086f433fbf5ef",
                "66dfc952436086f433fbf561",
                "66dfc952436086f433fbf532",
                "66dfc952436086f433fbf441",
                "66dfc952436086f433fbf5cd",
                "66dfc952436086f433fbf4b2"
            ],
            "completed": [],
            "noOfBoughtCourses": 16,
            "noOfSavedCourses": 13
        },
        {
            "id": "66dfc953436086f433fbf8db",
            "name": "user-11",
            "email": "user-11@gmail.com",
            "boughtCourse": [
                "66dfc952436086f433fbf64a",
                "66dfc952436086f433fbf5b1",
                "66dfc952436086f433fbf4d8",
                "66dfc952436086f433fbf64a",
                "66dfc952436086f433fbf4d8",
                "66dfc952436086f433fbf497",
                "66dfc952436086f433fbf4b2",
                "66dfc952436086f433fbf51b",
                "66dfc952436086f433fbf5b1",
                "66dfc952436086f433fbf5ba",
                "66dfc952436086f433fbf5ef",
                "66dfc952436086f433fbf4c6",
                "66dfc952436086f433fbf658",
                "66dfc952436086f433fbf5cd",
                "66dfc952436086f433fbf546",
                "66dfc952436086f433fbf532"
            ],
            "savedCourses": [
                "66dfc952436086f433fbf497",
                "66dfc952436086f433fbf674",
                "66dfc952436086f433fbf50d",
                "66dfc952436086f433fbf5ba",
                "66dfc952436086f433fbf561",
                "66dfc952436086f433fbf4e2",
                "66dfc952436086f433fbf589",
                "66dfc952436086f433fbf501",
                "66dfc952436086f433fbf497",
                "66dfc952436086f433fbf556",
                "66dfc952436086f433fbf51b",
                "66dfc952436086f433fbf5cd",
                "66dfc952436086f433fbf532",
                "66dfc952436086f433fbf50d",
                "66dfc952436086f433fbf5b1",
                "66dfc952436086f433fbf50d",
                "66dfc952436086f433fbf4b2"
            ],
            "completed": [],
            "noOfBoughtCourses": 16,
            "noOfSavedCourses": 17
        },
        {
            "id": "66dfc953436086f433fbf8dd",
            "name": "user-12",
            "email": "user-12@gmail.com",
            "boughtCourse": [
                "66dfc952436086f433fbf4f6",
                "66dfc952436086f433fbf658",
                "66dfc952436086f433fbf5b1",
                "66dfc952436086f433fbf497",
                "66dfc952436086f433fbf5cd",
                "66dfc952436086f433fbf620",
                "66dfc952436086f433fbf64a",
                "66dfc952436086f433fbf5ef",
                "66dfc952436086f433fbf620",
                "66dfc952436086f433fbf60c",
                "66dfc952436086f433fbf532",
                "66dfc952436086f433fbf44e",
                "66dfc952436086f433fbf5ef",
                "66dfc952436086f433fbf51b"
            ],
            "savedCourses": [
                "66dfc952436086f433fbf53b",
                "66dfc952436086f433fbf589",
                "66dfc952436086f433fbf4c6",
                "66dfc952436086f433fbf4e2",
                "66dfc952436086f433fbf4c6",
                "66dfc952436086f433fbf64a",
                "66dfc952436086f433fbf51b",
                "66dfc952436086f433fbf51b",
                "66dfc952436086f433fbf4d8",
                "66dfc952436086f433fbf5cd",
                "66dfc952436086f433fbf5ba"
            ],
            "completed": [],
            "noOfBoughtCourses": 14,
            "noOfSavedCourses": 11
        },
        {
            "id": "66dfc953436086f433fbf8df",
            "name": "user-13",
            "email": "user-13@gmail.com",
            "boughtCourse": [
                "66dfc952436086f433fbf44e",
                "66dfc952436086f433fbf48c",
                "66dfc952436086f433fbf636",
                "66dfc952436086f433fbf546",
                "66dfc952436086f433fbf589",
                "66dfc952436086f433fbf578",
                "66dfc952436086f433fbf589",
                "66dfc952436086f433fbf51b",
                "66dfc952436086f433fbf501",
                "66dfc952436086f433fbf5fa",
                "66dfc952436086f433fbf5ba"
            ],
            "savedCourses": [
                "66dfc952436086f433fbf44e",
                "66dfc952436086f433fbf5fa",
                "66dfc952436086f433fbf4a9",
                "66dfc952436086f433fbf4d8",
                "66dfc952436086f433fbf4b2",
                "66dfc952436086f433fbf556",
                "66dfc952436086f433fbf4c6",
                "66dfc952436086f433fbf4c6",
                "66dfc952436086f433fbf5ef"
            ],
            "completed": [],
            "noOfBoughtCourses": 11,
            "noOfSavedCourses": 9
        },
        {
            "id": "66dfc953436086f433fbf8e1",
            "name": "user-14",
            "email": "user-14@gmail.com",
            "boughtCourse": [
                "66dfc952436086f433fbf48c",
                "66dfc952436086f433fbf48c",
                "66dfc952436086f433fbf5fa",
                "66dfc952436086f433fbf5fa",
                "66dfc952436086f433fbf4c6",
                "66dfc952436086f433fbf4d8",
                "66dfc952436086f433fbf5cd",
                "66dfc952436086f433fbf50d",
                "66dfc952436086f433fbf5fa"
            ],
            "savedCourses": [
                "66dfc952436086f433fbf4a9",
                "66dfc952436086f433fbf5b1",
                "66dfc952436086f433fbf532",
                "66dfc952436086f433fbf5ef",
                "66dfc952436086f433fbf620",
                "66dfc952436086f433fbf48c",
                "66dfc952436086f433fbf4e2",
                "66dfc952436086f433fbf64a"
            ],
            "completed": [],
            "noOfBoughtCourses": 9,
            "noOfSavedCourses": 8
        }
    ]
})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 600)
  })

  // const fetchUrl = `${baseURL}/admin/users?page=${currentPage}&limit=${pageSize}&search=${encodeURIComponent(
  //   search
  // )}`;
  // const [usersData, error, loading, reFetch] = UseFetch(
  //   fetchUrl,
  //   [],
  //   [currentPage, search]
  // )

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
    setCurrentPage(1);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="w-full ">
      <div className="flex justify-between items-end sm:px-3 px-2 ">
        <h1 className=" text-5xl font-semibold text-[#212529] underline">
          Users
        </h1>
        <Search search={search} handleSearchChange={handleSearchChange} />
      </div>

      <div className="sm:px-3 px-2 py-4 min-h-screen  grid xl:grid-cols-3  lg:grid-cols-2 grid-cols-1 gap-3  overflow-x-hidden my-4">
        {loading ? (
          <ClockLoader />
        ) : (
          usersData.results?.map((user, index) => (
            <UsersDisplay key={user.id} user={user} />
          ))
        )}
      </div>

        {usersData.results ?    <Pagination
        handlePageChange={handlePageChange}
        currentPage={currentPage}
        data={usersData}
      /> : null}
    </div>
  );
};

export default UsersPage;
