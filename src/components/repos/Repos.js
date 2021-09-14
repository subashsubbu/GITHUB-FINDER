import React from 'react'
import RepoItem from './RepoItem'
import PropTypes from 'prop-types'


const repos = ({repos}) => {
    return (
        repos.map(repo => 
            <RepoItem repo={repo} key={repo.id}/>)
    )
}
repos.propTypes ={
    repos: PropTypes.array.isRequired,
}

export default repos
