0. Add React Context wrapper around app.
1. https://tanstack.com/router/v1/docs/api/react/createRouteConfig and authenticated

```
const router = createReactRouter({
  routeConfig,
  useContext: () => {
    return {
      auth: React.useContext(AuthContext),
    }
  },
})
```

```
const authenticatedRoute = rootRoute.createRoute({
  path: 'authenticated',
  component: Authenticated,
  beforeLoad: ({ context }) => {
    if (context.auth.status === 'loggedOut') {
      throw router.navigate({
        to: loginRoute.id,
        search: {
          redirect: router.location.href,
        },
      })
    }
  },
})
```
