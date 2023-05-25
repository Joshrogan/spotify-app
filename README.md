# Spotify App to play around with

Learn about Tanstack Query, Table, Zod, Typescript, Tailwind

## TODO

- Get Spotify Token login set up properly for frontend react. do it from the docs tho

## DONE

- BASIC RQ
- BASIC ZOD
-

## zod

https://polvara.me/posts/effective-query-functions-for-react-query-with-zod
more advanced querying above?

https://www.youtube.com/watch?v=EBNAHDBj1dI james perkins stuff

## Auth

https://developer.spotify.com/documentation/web-api/howtos/web-app-profile

https://developer.spotify.com/documentation/web-api/concepts/authorization

https://developer.spotify.com/documentation/web-api/tutorials/code-pkce-flow
using PKCE flow. Spotify docs lists some good stuff on what type of oauth when

https://github.com/spotify/web-api-examples/blob/master/get_user_profile/src/script.ts

having issues with RQ/auth now. try focus JUST on auth

0. Basic spa AUTH with above example
1. Login, logout PKCE style
2. Login -> homepage -> fetch actual data

https://github.com/spotify/web-api-examples/blob/999766d548700de77f15b294df8b96587f313cd0/authentication/authorization_code/app.js#L62
got auth working ish for 0. just work on refresh then get it working well to step 1

refresh working once? https://community.spotify.com/t5/Spotify-for-Developers/Refreshing-tokens-for-PKCE-authorised-users/td-p/5023175  
https://auth0.com/docs/secure/tokens/refresh-tokens/refresh-token-rotation

https://software-factotum.medium.com/pkce-public-clients-and-refresh-token-d1faa4ef6965

https://www.youtube.com/watch?v=fYObrr3jf0w good vid on where to store stuff??

https://curity.io/resources/learn/spa-best-practices/

https://medium.com/lightrail/getting-token-authentication-right-in-a-stateless-single-page-application-57d0c6474e3

https://www.youtube.com/watch?v=-JJFQ9bkUbo // looks great
https://www.youtube.com/watch?v=3QaFEu-KkR8

https://indepth.dev/posts/1382/localstorage-vs-cookies
this too https://www.reddit.com/r/reactjs/comments/jk4vcq/how_to_safely_store_jwt_token_and_refresh_token/
// https://blog.iamstarcode.com/refresh-token-rotation-in-nextjs-using-authjs

https://stackoverflow.com/questions/65545590/jwt-access-token-in-memory

https://www.youtube.com/watch?v=7Bai8xDHDms

https://engineering.mercari.com/en/blog/entry/20220930-building-secure-apps-using-web-workers/

https://www.pingidentity.com/en/resources/blog/post/refresh-token-rotation-spa.html //bff stuff

https://levelup.gitconnected.com/best-oauth-security-practices-for-single-page-applications-2bb6b44d2890

https://frontendmasters.com/courses/service-workers/

https://mannharleen.github.io/2020-03-19-handling-jwt-securely-part-1/

https://blog.ropnop.com/storing-tokens-in-browser/ // real brilliant on service workers closeures etc

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures#emulating_private_methods_with_closures

https://auth0.com/docs/secure/security-guidance/data-security/token-storage

https://tkdodo.eu/blog/hooks-dependencies-and-stale-closures closure stuff too

https://community.auth0.com/t/securing-react-application-with-in-memory-jwt-token/79572
https://auth0.com/docs/secure/tokens/refresh-tokens/refresh-token-rotation
