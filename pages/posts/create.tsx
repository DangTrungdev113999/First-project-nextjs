import React from "react";
import { PostCreateForm } from "@/components/PostCreateForm";
import { PostCreateSidebar } from "@/components/PostCreateSidebar";

const Create = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-8">
          <PostCreateForm />
        </div>
        <div className="col-lg-4">
          <PostCreateSidebar />
        </div>
      </div>
    </div>
  );
};

export default Create;
