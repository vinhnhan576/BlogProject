import React from 'react'

import Helmet from "../components/Helmet";
import Topic from '../components/Topic';

function Home() {
  return (
    <div>
      <Helmet title="Trang chủ">Trang chủ</Helmet>
      <Topic topicName="Đời sống"
      />
    </div>
  );
}

export default Home