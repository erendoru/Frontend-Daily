import React from 'react'
import { BsBookmark, BsBookmarkFill, BsArrowBarRight } from 'react-icons/bs'
import './style.scss'

const index = ({ api, toggleBookmark }) => {
    return (
        <div className="api-item">
            <div className="itemicon">
                <img src={api.icon} alt="icon" />
            </div>
            <div className="item-detail">
                <h4>{api.name}</h4>
                <div className="item-category">{api.category}</div>
                <div className="item-description">{api.description}</div>
            </div>
            <div className="item-hover">
                <button onClick={() => toggleBookmark(api.id)}>
                    {api.bookmark ? <BsBookmarkFill /> : <BsBookmark />}
                    Bookmark
                </button>
                <a href="#">API Docs <BsArrowBarRight /></a>
            </div>
        </div>
    )
}

export default index
