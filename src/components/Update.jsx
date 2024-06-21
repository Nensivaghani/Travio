import React from 'react'
import UpdateItem from './Items/UpdateItem'

const Update = () => {
  const update = [
    {
      img: 'assets/img/news-1.jpg',
      date:' 5 Oct, 2020',
      title: 'Including animation in your design system'
    },
    {
      img: 'assets/img/news-2.jpg',
      date:' 4 Oct, 2020',
      title: 'Strategic & commercial with issues.'
    },
    {
      img: 'assets/img/news-3.jpg',
      date:' 3 Oct, 2020',
      title: 'Best interior design idea for your home.'
    }
  ]
  return (
    <>
      <div className="update-main">
        <div className="container">
          <div class="title">
            <p>News & Articles</p>
            <h2>Stay Update with Travio Tips</h2>
          </div>
          <div className="update-inner row">
            {
              update.map((i) => <UpdateItem value={i} />)
            }
          </div>
        </div>
      </div>



    </>
  )
}

export default Update