import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { createReview, deleteReview, editReview } from '../../actions/review_actions';

import SignUpForm from './signup_form';


const mapStateToProps = ({ session }) => {
    // 
    return {
        userId: session.id,
    };
};

const mapDispatchToProps = dispatch => {
    // 
    return {
        createReview: (review) => dispatch(createReview(review)),
        deleteReview: (review) => dispatch(deleteReview(review)),
        editReview: (review) => dispatch(editReview(review)),

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);
