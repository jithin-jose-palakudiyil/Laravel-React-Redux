import React, { Fragment, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Navbar from './layouts/Navbar';
import PostForm from './posts/PostForm';
import Posts from './posts/Posts';
import store from '../store';
import {Provider} from 'react-redux';
import {getPosts} from '../actions/post';


const Example = () => {
    useEffect(() => {
        store.dispatch(getPosts());
    }, []);
    return (
        <Provider store={store}>
            <Fragment>
                <Navbar/>
                <div className="container">
                    <PostForm/>
                    <Posts/>
                </div>
            </Fragment>
        </Provider>
    );
}

export default Example;

if (document.getElementById('app')) {
    ReactDOM.render(<Example />, document.getElementById('app'));
}