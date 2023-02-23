import React from 'react'
import ReactDOM from 'react-dom/client'

function Hello() {
  return (
    <div>
      <h1>Hello World</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel sequi
        placeat nesciunt impedit exercitationem? Placeat itaque laboriosam, sed
        accusantium consectetur ea nulla corrupti asperiores commodi repellendus
        rem voluptatem ex mollitia! Lorem ipsum, dolor sit amet consectetur
        adipisicing elit. Laudantium temporibus quia ratione ipsum in excepturi
        aliquam voluptatibus est laborum quaerat culpa, distinctio id illum
        veritatis nisi aut explicabo nobis! Eligendi?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe
        reprehenderit molestiae delectus, nostrum sint minus ea, dolorem ipsam
        dignissimos rerum iusto id. Similique aspernatur accusantium, tempore
        repellendus ducimus maiores adipisci! Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Quas adipisci est ipsam velit dolore illo,
        eveniet perferendis praesentium nisi, possimus nostrum dolores fugit
        deleniti quaerat error ea nulla doloribus molestiae. Lorem ipsum dolor
        sit amet consectetur adipisicing elit. Fugit possimus cumque labore eum
        laborum veritatis, fuga placeat, quod voluptatem porro odit aspernatur
        praesentium quae. Similique laborum fuga veniam commodi minima?
      </p>
      <h2>Subtitle</h2>
    </div>
  )
}

export default Hello

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<Hello />)
