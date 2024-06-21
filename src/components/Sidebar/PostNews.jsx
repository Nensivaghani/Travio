import React from 'react'
import DesLatestnewsItem from '../Items/DesLatestnewsItem';

const PostNews = () => {
  const news = [
    {
      img: 'assets/img/post-1.png',
      date: 'April 18, 2020',
      info: 'Consequntur eos magni dolore.'

    },
    {
      img: 'assets/img/post-2.png',
      date: 'April 17, 2020',
      info: 'Magni dolore qui ratione seque.'

    },
    {
      img: 'assets/img/post-3.png',
      date: 'April 16, 2020',
      info: 'Ratone magni sed dolore eos.'

    }
  ]
  return (
    <>

      <div className="latestnews-main sidebar">
        <div className="title">
          <h3>Latest News</h3>
        </div>
        <div className="latestnews-inner">
          {
            news.map((i) => <DesLatestnewsItem value={i} />)

          }
        </div>
      </div>
    </>
  )
}

export default PostNews