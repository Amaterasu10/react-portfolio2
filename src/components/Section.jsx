import React from 'react'

export default function Section({ className="", title, children }) {
  return (
    <section className={ 'section ' + className }>
        { title && <h2> { title } </h2> }
        { children }
    </section>
  )
}