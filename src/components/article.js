import { useState, useEffect } from "react";
import axios from "axios";

export default function Article() {
  //*GET ARTICLES DATA FROM API////
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://minpro-blog.purwadhikabootcamp.com/api/blog?page=2")
      .then((res) => {
        console.log("Getting article from :::", res.data);
        setData(res.data);
        // console.log("PIC" + res.data.imageURL);
      })
      .catch((err) => console.log(err));
  }, []);

  //*RENDER ARTICLE CONTENT////
  const arr = data.result?.map((data, index) => {
    return (
      <div className="article shadow-xl w-[250px]">
        <div className="w-full h-[100px]" style={{ backgroundImage: "url(https://minpro-blog.purwadhikabootcamp.com/" + data.imageURL + ")", backgroundSize: "cover" }}></div>
        {/* <h4 className="text-slate-400 text-xs">{data.createdAt}</h4> */}
        <h1 className="text-xl hover:opacity-50 capitalize">
          <a href="">{data.title}</a>
        </h1>
        <h3 className="text-slate-400 font-extralight">{data.Category.name}</h3>
        <div className="truncate">{data.content}</div>
        {/* <p className="text-slate-400 text-xs text-right">likes : {data.total_fav}</p> */}
      </div>
    );
  });

  return (
    <>
      <div className="flex flex-col gap-5 mt-3 pl-8">
        <div>
          <h1 className="text-xl font-extralight">All Articles</h1>
          {/* <h1></h1> */}
        </div>
        <div className="flex flex-row flex-wrap justify-stretch gap-5">{arr}</div>
      </div>
      <div className="flex justify-center mt-8">
        <div className="join">
          <button className="join-item btn">1</button>
          <button className="join-item btn">2</button>
          <button className="join-item btn">3</button>
          <button className="join-item btn">4</button>
          <button className="join-item btn">5</button>
          <button className="join-item btn">6</button>
          <button className="join-item btn">7</button>
        </div>
      </div>
    </>
  );
}

// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// // import { getArticles } from "../../../store/slices/blog/slices";
// import { getArticles } from "../../store/slices/blog/slices";

// // import Navbar from "../../components/navbar";

// // @local component
// // import RenderBlogCards from "./component.card";
// import RenderBlogCards from "./component.card";
// // import Pagination from "./component.pagination";
// import Pagination from "./component.pagination";

// function BlogsPage() {
//   // @state and hooks
//   const dispatch = useDispatch();
//   const { loading, currentPage, totalPage, articles } = useSelector((state) => {
//     return {
//       loading: state.blogs.isLoading,
//       articles: state.blogs.articles,
//       currentPage: state.blogs.currentPage,
//       totalPage: state.blogs.totalPage,
//     };
//   });

//   // @side-effect
//   useEffect(() => {
//     dispatch(getArticles({ id_cat: 3, page: 1, sort: "ASC" }));
//   }, []);

//   // @event handler
//   const onChangePagination = (type) => {
//     dispatch(
//       getArticles({
//         id_cat: 3,
//         page: type === "prev" ? currentPage - 1 : currentPage + 1,
//         sort: "ASC",
//       })
//     );
//   };

//   // @render loading
//   if (loading)
//     return (
//       <div className="h-screen w-screen flex flex-row align-bottom justify-center">
//         <span className="loading loading-dots loading-lg"></span>
//       </div>
//     );

//   return (
//     <div className="w-full h-full px-40 py-10 flex flex-row flex-wrap gap-5 justify-between ">
//       {/* <Navbar /> */}
//       <RenderBlogCards articles={articles} />
//       <div className="flex flex-row w-full h-auto justify-end">
//         <Pagination onChangePagination={onChangePagination} disabledPrev={currentPage === 1} disabledNext={currentPage >= totalPage} />
//       </div>
//     </div>
//   );
// }

// export default BlogsPage;
