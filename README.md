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

## Tanstack router

https://github.com/TanStack/router/discussions/92

authenticated login, kitchen sink example + search auth in discord

https://stackblitz.com/edit/tanstack-router-sjkunz?file=src%2Fmain.tsx

another exampleish:
https://stackoverflow.com/questions/72466016/how-to-check-if-user-is-logged-by-localstorage-and-redirect-according-to-it

## https://frontendmasters.com/courses/web-auth-apis/ do this after definitely
