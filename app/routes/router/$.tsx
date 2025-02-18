import { LoaderFunction, redirect } from '@remix-run/node'

export const loader: LoaderFunction = (context) => {
  handleRedirects(context)

  return redirect('/router/v4')
}

function handleRedirects(context: Parameters<LoaderFunction>[0]) {
  const url = new URL(context.request.url)
  // prettier-ignore
  const reactVirtualv2List = [
    {from: 'docs/overview',to: 'docs/guide/introduction',},
    {from: 'docs/installation',to: 'docs/guide/installation',},
    {from: 'docs/api',to: 'docs/api/virtualizer',},
    {from: 'examples/fixed',to: 'docs/examples/react/fixed',},
    {from: 'examples/variable',to: 'docs/examples/react/variable',},
    {from: 'examples/dynamic',to: 'docs/examples/react/dynamic',},
    {from: 'examples/infinite-scroll',to: 'docs/examples/react/infinite-scroll',},
    {from: 'examples/padding',to: 'docs/examples/react/padding',},
    {from: 'examples/smooth-scroll',to: 'docs/examples/react/smooth-scroll',},
    {from: 'examples/sticky',to: 'docs/examples/react/sticky',},
    {from: '',to: '',},
  ]

  reactVirtualv2List.forEach((item) => {
    if (url.pathname.startsWith(`/router/v3/${item.from}`)) {
      throw redirect(
        `/router/v3/${item.to}?from=reactVirtualV2&original=https://react-location-v2.tanstack.com/${item.from}`
      )
    }
  })
}
