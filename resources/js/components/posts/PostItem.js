import React, { Fragment } from 'react'
 
const PostItem = () => { 
  return (
      <Fragment>
            <div>
                <ul className="collection mx-3">
                    <li className="collection-item avatar">
                        <i className="material-icons circle">person_outline</i>
                        <span className="title">username</span>
                        <p>post</p>
                        <a
                            className="secondary-content waves-effect waves-light  red darken-3 btn"
                         
                        >
                            <i className="material-icons left">
                                delete_forever
                            </i>
                            Delete
                        </a>
                    </li>
                </ul>
            </div>
        </Fragment>
  )
}
 
export default PostItem