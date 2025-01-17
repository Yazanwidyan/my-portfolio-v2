import BreadCrumb from "@/components/breadCrumb/BreadCrumb";
import React from "react";
import BlogData from "@/assets/jsonData/blog/BlogData.json";
import LayoutStyle1 from "@/components/layouts/LayoutStyle1";
import BlogSinglePage from "@/components/blog-single/BlogSinglePage";

export const metadata = {
  title: "Yazan Widyan - Frontend Developer Portfolio",
};

const BlogSingle = ({ params }) => {
  const { id } = params;
  const data = BlogData.find((blog) => blog.id === parseInt(id));

  return (
    <>
      <LayoutStyle1>
        <BreadCrumb breadCrumb="blog-single" title="Blog Single" />
        <BlogSinglePage blogInfo={data} />
      </LayoutStyle1>
    </>
  );
};

export default BlogSingle;
