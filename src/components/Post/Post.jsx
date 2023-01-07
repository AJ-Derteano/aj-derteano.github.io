import styled from 'styled-components';

const Post = ({
  imgSrc,
  imgAlt,
  direction = 'ltr',
  title = 'Title section',
  description = 'Description',
}) => {
  return (
    <PostStyle direction={direction}>
      <article className='article-left'>
        <div />
        <img src={imgSrc} alt={imgAlt} />
      </article>
      <article className='article-right'>
        <div>
          <h3>{title}</h3>
          <p>{description}</p>
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
  text-align: left;
  direction: ${(props) => props.direction};

  @media screen and (max-width: 780px) {
    grid-template-columns: 1fr;
    text-align: center;
  }

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
