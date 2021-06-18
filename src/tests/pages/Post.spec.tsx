import { render, screen } from '@testing-library/react';
import { mocked } from 'ts-jest/utils';
import Post, { getServerSideProps } from '../../pages/posts/[slug]';
import { getPrismicClient } from "../../services/prismic";

const post = {
  slug: 'my-new-post',
  title: 'My New Post',
  content: '<p>Post excerpt</p>',
  updatedAt: '10 de Abril'
};

jest.mock('../../services/prismic');

describe('Posts page', () => {
  it('renders correctly', () => {
    render(<Post post={post} />)

    expect(screen.getByText("My New Post")).toBeInTheDocument();
    expect(screen.getByText("Post excerpt")).toBeInTheDocument();
  });

  // it('loads initial data', async () => {
  //   const getPrismicClientMocked = mocked(getPrismicClient);

  //   getPrismicClientMocked.mockReturnValueOnce({
  //     query: jest.fn().mockResolvedValueOnce({
  //       results: [
  //         {
  //           uid: 'my-new-post',
  //           data: {
  //             title: [
  //               { type: 'heading', text: 'My new post' }
  //             ],
  //             content: [
  //               { type: 'paragraph', text: 'Post excerpt' }
  //             ]
  //           },
  //           last_publication_date: '04-01-2021'
  //         }
  //       ]
  //     })
  //   } as any);

  //   const response = await getStaticProps({})

  //   expect(response).toEqual(
  //     expect.objectContaining({
  //       props: {
  //         posts: [
  //           {
  //             slug: 'my-new-post',
  //             title: 'My new post',
  //             excerpt: 'Post excerpt',
  //             updatedAt: '01 de abril de 2021'
  //           }
  //         ]
  //       }
  //     })
  //   )
  // })
})