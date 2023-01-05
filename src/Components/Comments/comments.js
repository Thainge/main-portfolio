import React, { useEffect, useState } from 'react';
import styles from './comments.module.css';
import { CommentSection } from 'react-comments-section'
import 'react-comments-section/dist/index.css'

function Comments() {

    // Existing comments from database
    let CommentsData = [
        {
            userId: '01a',
            comId: '012',
            fullName: 'Riya Negi',
            avatarUrl: 'https://ui-avatars.com/api/name=Riya&background=random',
            userProfile: 'https://www.linkedin.com/in/riya-negi-8879631a9/',
            text: 'Looks good.',
            replies: []
        },
    ]

    // Comments in current state
    const [comments, setComments] = useState(CommentsData);

    // Custom no comment data
    const customNoComment = () => <div className='no-com'>No comments. Be the first!</div>

    return (
        <div style={{ width: '100%' }} className={styles.commentsContainer}>
            <CommentSection
                currentUser={{
                    currentUserImg:
                        `https://ui-avatars.com/api/name=A&background=random`,
                    currentUserFullName: 'Anonymous 1'
                }}
                submitBtnStyle={{
                    border: '1px solid black', backgroundColor: '#0f141e'
                }}
                cancelBtnStyle={{
                    border: '1px solid #4e4e4e', backgroundColor: '#4e4e4e', color: 'white'
                }}
                removeEmoji={true}
                commentData={comments}
                customNoComment={customNoComment}
            />
        </div>
    )
}

export default Comments;