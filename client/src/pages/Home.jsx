import React from 'react'
import CategoryCard from '../components/CategoryCard'
import Helmet from "../components/Helmet";
import Topic from '../components/Topic';
import Category from './Category';

function Home() {
  return (
    <div>
      <Helmet title="Trang chủ">Trang chủ</Helmet>
      <Topic topicName="Đời sống" />
      <Topic topicName="Du lịch" />
      <CategoryCard
        //urlImage="https://cdn.pixabay.com/photo/2022/07/25/18/47/wat."
        date="22/7/2022"
        title="title1"
        content="content1"
      />
    </div>
  );
}

export default Home