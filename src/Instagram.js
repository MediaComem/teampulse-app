import React, { Component } from 'react';
import Embedo from 'embedo';
import styled from 'styled-components';

const embedo = new Embedo({
    instagram: true
});

const Carousel = styled.div`
  width: ${props => props.width}px;
`;

class Instagram extends Component {

	constructor(props, context) {
    super(props, context);
    this.state = {
      postsId: [],
    };
  }

	componentDidMount() {
    fetch('http://localhost:3999/instaposts')
      .then(response => response.json())
      .then((data) => { this.setState({postsId:data.instaPosts});this.embed(data.instaPosts)});
  }

  embed(postsId){
  	for (var i = 0; i < postsId.length; i++){
  		embedo.load(
      document.getElementById(postsId[i].id),
        postsId[i].link,
        {maxWidth:this.props.postsWidth}
    	);
  	}
  }

  render() {
    return (
    	<Carousel id="carouselInstaControls" width={this.props.postsWidth} className="carousel slide" data-ride="carousel" data-interval="false">
				<div className="carousel-inner" role="listbox">
					{this.state.postsId.map(function(post,index){
						if(index === 0){
							return <div className="carousel-item active" id={post.id} key={post.id}></div>
						}else{
							return <div className="carousel-item" id={post.id} key={post.id}></div>
						}
    			})}
				</div>
				<a className="carousel-control-prev" href="#carouselInstaControls" role="button" data-slide="prev">
					<span className="carousel-control-prev-icon" aria-hidden="true"></span>
					<span className="sr-only">Previous</span>
				</a>
				<a className="carousel-control-next" href="#carouselInstaControls" role="button" data-slide="next">
					<span className="carousel-control-next-icon" aria-hidden="true"></span>
					<span className="sr-only">Next</span>
				</a>
			</Carousel>
    	)
  }
}

export default Instagram;