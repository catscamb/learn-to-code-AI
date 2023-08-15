// for a client side component
'use client'

import styles from './styles.module.css'

import { FormEvent, useState } from 'react'

// a typescript interface to explain what is in a comment
interface CommentType {
  id: number
  name: string
  comment: string
}

// here's our component
export const Comments = () => {
  // here's our comments array
  // usually this would come from a database, but we're just
  // putting it in the front-end for now
  const [comments, setComments] = useState<CommentType[]>([
    {
      id: 1,
      name: 'Simon the cat',
      comment: 'This was a great article, thank you!',
    },
  ])

  // some states for our component
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)

  // for our user to fill in the textarea
  const [newComment, setNewComment] = useState<string>('')

  // user to submit!
  const submit = async (event: FormEvent) => {
    event.preventDefault()

    setError(null)

    try {
      // submit comment with newComment
      const response = await fetch('/api/post-comment', {
        method: 'POST',
        body: JSON.stringify({
          comment: newComment,
        }),
      })

      // convert the response to JSON
      const json = await response.json()

      // if an error for whatever reason...
      if (response.status === 422) {
        setError(json.message)
      } else {
        // if no error, add the response to
        // the comments array
        setComments((s) => {
          return [...s, json]
        })
      }
    } catch (e) {
      setError('There was an error posting your comment')
    } finally {
      setIsLoading(false)
      setNewComment('')
    }
  }

  return (
    <div className={'panel ' + styles.panel}>
      <div className="title">
        <h3>Comments</h3>
        <p>
          Have your say! Please stick to <a href="#">our community guidelines</a> or your comments
          will be flagged and removed.
        </p>
      </div>

      <div className={styles.comments}>
        {comments.map((comment) => {
          return (
            <div className={styles.comment} key={comment.id}>
              <p>{comment.comment}</p>
              <p>&mdash; {comment.name}</p>
            </div>
          )
        })}
      </div>

      {error && <div className={styles.error}>{error}</div>}

      <form onSubmit={submit}>
        <textarea value={newComment} onChange={(e) => setNewComment(e.target.value)} />
        <button type="submit" disabled={isLoading}>
          Post
        </button>
      </form>
    </div>
  )
}
