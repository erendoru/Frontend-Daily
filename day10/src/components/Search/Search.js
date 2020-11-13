import React from 'react'
import './search.scss'
import { GrSearch } from 'react-icons/gr';

const Search = ({ search, setSearch }) => {
    return (
        <div>
            <form className='api-search-form'>
                <div className="icon">
                    <GrSearch />
                </div>
                <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder='Find development, games, images APIs' />
            </form>

        </div>
    )
}

export default Search
