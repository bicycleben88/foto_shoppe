![Landing Page to Foto Shoppe](https://i.imgur.com/pmpJTiO.png)

Full-Stack web-application for users to Create, Read, Update & Delete (CRUD) a photo album. User can upload image from computer and add & delete it to a photo album. For access to CRUD functions a user must login thru OAuth application hosted on GitHub using Next-Auth

## Links

> - [Live Site](https://cigarette-camus-cat.herokuapp.com/)
> - [Git Repo](https://github.com/bicycleben88/photo_album)
> - [Video Walkthru](https://www.youtube.com/playlist?list=PLjYC3ZkfhqCpkFUDCzs1MjbFvuSSRTHvL)

## Techonologies Used

> - Next.js
> - React.js
> - JavaScript
> - Prisma
> - React Query
> - PostgreSQL
> - Styled-Components
> - Next-Auth

## Next.js

Front-end JavaScript framework built w/ React using server-side rendering and built-in API paths to develop full stack applications

> - Files in Pages folder correlate to URL end points. e.g.
>   - pages/albums = baseurl.com/albums
>   - pages/API (built-in API end points) = baseurl.com/api/endpoint
> - API & Pre-rendering
>   - files in API don't compile at build time & are accessible via relative pathways
>   - ![api-call](https://i.imgur.com/NndfpFn.png)
>   - getServerSideProps() returns data from an API & passes it to component as Props
>   - ![server-props](https://i.imgur.com/o4gQvrW.png)

## Managing state w/ React.js & React Query

> - React Query hooks
>   - useQuery: query data with a callback function
>     - query is stored in cache & is accessed w/ QueryClient
>   - ![useQuery](https://i.imgur.com/qjMIYOv.png)
>   - useMutation: mutate data with callback function & object passed from .mutate method
>   - ![useMutation](https://i.imgur.com/2zRvyWY.png)
>   - ![.mutate](https://i.imgur.com/HZGSLOy.png)

## Prisma

Database tool (ORM) to define schema & query and mutate data

> - Schema defines models for database tables & contains DB configuration
> - ![model](https://i.imgur.com/FXtfFud.png)
> - Prisma Client
>   - uses schema to map DB
>   - runs queries & mutations on the backend
> - ![prisma-client](https://i.imgur.com/Rj2kUPL.png)

## Authenticate user w/ OAuth & Next-Auth.js

OAuth uses authorization tokens instead of passwords to permit access to user content on an application. Next-Auth is an npm package built for Next.js that stores sessions in a database

> - Install npm package
> - Create api/auth directory & [...nextauth].js file
>   - pass request & response to NextAuth()
>   - outline providers & environmental variables
>   - environmental variables provided by GitHub after creating OAuth application
>   - include Prisma adapter
> - ![next-auth](https://i.imgur.com/D8F4h1Y.png)
> - Use getSession in API to verify if session is in DB (i.e. user is authorized)
> - ![useSession](https://i.imgur.com/dEtPLUv.png)

## Upload image from computer

> - \<input type="file"> expects a file as input
> - Set up account on Cloudinary
>   - Cloudinary will host image & send back a URL via an API endpoint
> - Pass image URL along w/ other image data to state
> - ![upload-image](https://i.imgur.com/VQG0GL0.png)
> - Host image in database

## Image Panels

> - Add \<Panel> components to home page & pass as props the image url and text
>
>   ![panel component](https://i.imgur.com/wHfqOBZ.png)
>
> \<Panel> component
>
> - Css - Styled Components
>
>   - use flexbox to center & align content inside each panel and to evenly space panels across the screen
>
>   ![panel flex](https://i.imgur.com/Bb2KUSG.png)
>
> - use flexbox to center content of the child elements of the panel
> - use CSS propery flex to push top and bottom text towards the ends of the panel
>
>   ![child flex](https://i.imgur.com/gx4zWiL.png)
>
> - store boolean value in state to use as a toggle variable
>   ![flex state](https://i.imgur.com/s7T1OsO.png)
> - create object to hold CSS properties & use ternary operator to determine their values
>
>   ![flex css variables](https://i.imgur.com/hAhwux3.png)
>
> - add event listener to panel that will toggle state when the panel is clicked
> - pass the css object as inline styles to the elements
>
>   ![panel component](https://i.imgur.com/n8aGSXN.png)

## Resources

> - [Next.js](https://nextjs.org/)
> - [React.js](https://reactjs.org/)
> - [React Query](https://react-query.tanstack.com/)
> - [Prisma](https://www.prisma.io/)
> - [Next-Auth.js](https://next-auth.js.org/)
> - [Cloudinary](https://cloudinary.com/)

## Contact

> - [LinkedIn](https://www.linkedin.com/in/benjamin-alt-higginbotham/)
> - [Portfolio](https://higginbotham.fun/)
> - [Tweet @BenMichaelJord1](https://twitter.com/BenMichaelJord1)
