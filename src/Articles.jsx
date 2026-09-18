import article1 from './assets/article/article1.jpg'
import article2 from './assets/article/article2.jpg'
import article3 from './assets/article/article3.jpg'

function Articles() {
    return (
        <>
            <style>
                {`
                    .article-card{
                        display:grid;
                        grid-template-columns:1fr 1fr 1fr;
                        column-gap: 100px;
                        margin:70px 5% 0 5%;
                        width:90%;
                    }
                    .article img {
                        width: 100%;
                        height: 250px;
                        object-fit: cover;
                        border-radius: 20px;
                    }
                    h2{
                        margin-top: 50px;
                        color: hsl(190, 97%, 55%);
                        text-align:center;
                        font-weight:bold;
                    }
                    .text{
                        display:flex;
                        flex-direction:column;
                    }
                    .text .upper-text{
                        display:flex;
                        flex-direction:column;
                    }
                    .text .lower-text{
                        display:flex;
                        flex-direction:row;
                    }
                    .text .lower-text .rating{
                        width: 20%;
                    }
                    .text .lower-text .author{
                        width: 80%;
                        text-align:right;
                    }
                    .article{
                        border: 2px solid black;
                        padding: 10px;
                    }
                    button{
                        margin-top:15px;
                        width:200px;
                        padding:8px 10px;
                        border-radius:50px;
                        border:none;
                        background-color: hsl(0, 2%, 71%);
                        color: black;
                        font-weight:bold;
                        text-align:center;
                        transition: transform 0.15s;
                    }
                    .button-div{
                        text-align:center;
                    }
                    button:hover{
                        cursor:pointer;
                        transform: scale(1.1);
                    }
                     @media(max-width:800px){
                    .article-card{
                        grid-template-columns: 1fr 1fr 1fr;
                        gap:30px;
                    }
            }
                `}
            </style>

            <h2>Featured Articles</h2>

            <div className="article-card">
                <div className='article'>
                    <div>
                        <img src={article1} />
                    </div>

                    <div className='text'>
                        <div className='upper-text'>
                            <h4><b>Name: </b>The Future of Web Development</h4>
                            <p>Description: Explore the latest trends and technologies shaping modern web development.</p>
                        </div>

                        <div className='lower-text'>
                            <div className='rating'>
                                <p>⭐ 4.8</p>
                            </div>

                            <div className='author'>
                                <p>Pranav Khurana</p>
                            </div>
                        </div>
                    </div>

                </div>

                <div className='article'>
                    <div>
                        <img src={article2}/>
                    </div>

                    <div className='text'>
                        <div className='upper-text'>
                            <h4><b>Name: </b>Understanding Modern Web Design</h4>
                            <p>Description: Learn about the essential tools and formats used to create modern digital content.</p>
                        </div>

                        <div className='lower-text'>
                            <div className='rating'>
                                <p>⭐ 4.6</p>
                            </div>

                            <div className='author'>
                                <p>Pranav Khurana</p>
                            </div>
                        </div>
                    </div>

                </div>

                <div className='article'>
                    <div>
                        <img src={article3} />
                    </div>

                    <div className='text'>
                        <div className='upper-text'>
                            <h4><b>Name: </b>Getting Started with Programming</h4>
                            <p>Description: A beginner-friendly introduction to coding and the fundamentals of web development.</p>
                        </div>

                        <div className='lower-text'>
                            <div className='rating'>
                                <p>⭐ 4.9</p>
                            </div>

                            <div className='author'>
                                <p>Pranav Khurana</p>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
                
            <div className='button-div'>
                <button>See all articles</button>
            </div>
        </>
    )
}

export default Articles 