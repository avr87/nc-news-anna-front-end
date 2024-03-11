// import { Link } from "react-router-dom";
// import { useState } from "react";

// export default function SortBy({ searchParams, setSearchParams }) {
//   const setOrder = (direction) => {
//     console.log(direction)
//     const newParams = new URLSearchParams(searchParams);
//     newParams.set("order", direction);
//     setSearchParams(newParams);
//   };

//   const setSort = (query) => {
//     console.log(query);
//     const newParams = new URLSearchParams(searchParams);
//     newParams.set("sort_by", query);
//     setSearchParams(newParams);
//   };

//   function handleSort(event) {
//     setSort(event.target.id);
//   }

//   function handleOrder(event) {
//     setOrder(event.target.id);
//   }
//   return (
//     <>
//       <div className="row justify-content-center">
//         <ul
//           className="nav nav-underline dark justify-content-center col-md-2"
//           style={{ width: 150 + "px" }}
//         >
//           <li className="nav-item dropdown">
//             <a
//               className="nav-link dropdown-toggle"
//               data-bs-toggle="dropdown"
//               href="#"
//               role="button"
//               aria-expanded="false"
//               //   value={searchParams.get("sort_by") || ""}
//             >
//               Sort by
//             </a>
//             <ul className="dropdown-menu">
//               <li>
//                 <p
//                   onClick={handleSort}
//                   className="dropdown-item"
//                   id="created_at"
//                 >
//                   Date
//                 </p>
//               </li>
//               <li>
//                 <p
//                   onClick={handleSort}
//                   className="dropdown-item"
//                   id="comment_count"
//                 >
//                   Comment Count
//                 </p>
//               </li>
//               <li>
//                 <p onClick={handleSort} className="dropdown-item" id="votes">
//                   Votes
//                 </p>
//               </li>
//             </ul>
//           </li>
//         </ul>
//         <ul
//           className="nav nav-underline dark justify-content-center col-md-2"
//           style={{ width: 150 + "px" }}
//         >
//           <li className="nav-item dropdown">
//             <a
//               className="nav-link dropdown-toggle"
//               data-bs-toggle="dropdown"
//               href="#"
//               role="button"
//               aria-expanded="false"
//               //   value={searchParams.get("order") || ""}
//             >
//               Order By
//             </a>
//             <ul className="dropdown-menu">
//               <li>
//                 <p onClick={handleOrder} className="dropdown-item" id="asc">
//                   Asc
//                 </p>
//               </li>
//               <li>
//                 <p onClick={handleOrder} className="dropdown-item" id="desc">
//                   Desc
//                 </p>
//               </li>
//             </ul>
//           </li>
//         </ul>
//       </div>
//     </>
//   );
// }
