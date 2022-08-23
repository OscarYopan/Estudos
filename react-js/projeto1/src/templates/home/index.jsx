import { Component } from 'react'

import './styles.css'

import { Posts } from '../../components/Posts/index'
import { loadPosts } from '../../utils/load-posts'
import { Button } from '../../components/Button'

export class Home extends Component {
  state = {
    posts: [],
    allPosts: [],
    page: 0,
    postPerPage: 2
  }

  async componentDidMount() {
    await this.loadPosts();
  }

  loadPosts = async () => {
    const { page, postPerPage } = this.state
    const postsAndPhotos = await loadPosts();
    this.setState({ 
      posts: postsAndPhotos.slice(page, postPerPage), //'slice()' permite pegar uma fatia do array, sendo definido o começõ e o fim da fatia.
      AllPosts: postsAndPhotos,
     });
  }

  loadMorePosts = () => {
    const {
      page,
      postsPerPage,
      allPosts,
      posts
    } = this.state;
    const nextPage = page + postsPerPage;
    const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage);
    posts.push(...nextPosts);

    this.setState({ posts, page: nextPage });
    console.log(123);
  }

  render() {
    const { posts, page, postsPerPage, allPosts } = this.state;

    return (
      <section className="container">
        <Posts posts={posts} />
        <Button 
        text='Load More Posts' 
        onClick={this.loadMorePosts}
        />
      </section>
    );
  }
}