import { render, screen } from '@testing-library/react';
import { mocked } from 'ts-jest/utils';
import Posts, { getStaticProps } from '../../pages/posts';

const posts = [
  { slug: 'my-new-post', title: 'My New Post', excerpt: 'Post excerpt', updatedAt: '10 de Abril' }
]

describe('Posts page', () => {
  it('renders correctly', () => {
    render(<Posts posts={posts} />)

    expect(screen.getByText("My New Post")).toBeInTheDocument();
  });

  // it('loads initial data', async () => {
  //   const retrieveStripePricesMocked = mocked(stripe.prices.retrieve)

  //   retrieveStripePricesMocked.mockResolvedValueOnce({
  //     id: 'fake-price-id',
  //     unit_amount: 1000,
  //   } as any);

  //   const response = await getStaticProps({})

  //   // console.log(response);

  //   expect(response).toEqual(
  //     expect.objectContaining({
  //       props: {
  //         product: {
  //           priceId: 'fake-price-id',
  //           amount: '$10.00'
  //         }
  //       },
  //       revalidate: 86400
  //     })
  //   )
  // })
})