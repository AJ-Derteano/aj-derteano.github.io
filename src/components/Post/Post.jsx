import styled from 'styled-components';

const Post = ({ imgSrc, direction = 'ltr' }) => {
  return (
    <PostStyle direction={direction}>
      <article className='article-left'>
        <img src={imgSrc} />
      </article>
      <article className='article-right'>
        <div>
          <h3>Title section post</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores ut
            sint, nesciunt, aliquid, quibusdam impedit ipsam doloribus odio
            harum eligendi dignissimos accusamus commodi tenetur magnam! Commodi
            voluptatem voluptates porro minus.
          </p>
        </div>
      </article>
    </PostStyle>
  );
};

export const PostStyle = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;
  grid-auto-rows: minmax(200px, auto);
  margin: 4rem 0;
  direction: ${(props) => props.direction};

  .article-left img {
    width: 100%;
  }

  .article-right div {
    display: flex;
    height: 100%;
    flex-direction: column;
    justify-content: center;

    h3 {
      text-align: center;
      font-size: 2rem;
      font-weight: 700;
      margin-top: 1rem;
      margin-bottom: 2rem;
    }
  }
`;

export default Post;
