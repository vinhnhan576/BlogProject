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
    </div>
  );
}

export default Home