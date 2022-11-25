import useAutoLoad from "graphql-react/useAutoLoad";
import useCacheEntry from "graphql-react/useCacheEntry.mjs";
import useLoadGraphQL from "graphql-react/useLoadGraphQL.mjs";
import useWaterfallLoad from "graphql-react/useWaterfallLoad.mjs";
import React from "react";

// The query is just a string; no need to use `gql` from `graphql-tag`. The
// special comment before the string allows editor syntax highlighting, Prettier
// formatting and linting. The cache system doesn’t require `__typename` or `id`
// fields to be queried.
const query = /* GraphQL */ `{
  bannierePrincipales {
    id
    title
    paragraph
    banniereLink
    banniereImage {
      url
    }
  }
}`;

export default function GitHubRepoStars({ repoId }) {
  const cacheKey = `GitHubRepoStars-${repoId}`;
  const cacheValue = useCacheEntry(cacheKey);

  // A hook for loading GraphQL is available, but custom hooks for loading non
  // GraphQL (e.g. fetching from a REST API) can be made.
  const loadGraphQL = useLoadGraphQL();

  const load = React.useCallback(
    () =>
      // To be DRY, utilize a custom hook for each API your app loads from, e.g.
      // `useLoadGraphQLGitHub`.
      loadGraphQL(
        cacheKey,
        // Fetch URI.
        "https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clatofm2m14pz01us34t20r01/master",
        // Fetch options.
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: `Bearer ${process.env.GITHUB_ACCESS_TOKEN}`,
          },
          body: JSON.stringify({
            query,
            variables: {
              repoId,
            },
          }),
        }
      ),
    [cacheKey, loadGraphQL, repoId]
  );

  // This hook automatically keeps the cache entry loaded from when the
  // component mounts, reloading it if it’s staled or deleted. It also aborts
  // loading if the arguments change or the component unmounts; very handy for
  // auto-suggest components!
  useAutoLoad(cacheKey, load);

  // Waterfall loading can be used to load data when server side rendering,
  // enabled automagically by `next-graphql-react`. To learn how this works or
  // to set it up for a non-Next.js app, see:
  // https://github.com/jaydenseric/react-waterfall-render
  const isWaterfallLoading = useWaterfallLoad(cacheKey, load);

  // When waterfall loading it’s efficient to skip rendering, as the app will
  // re-render once this step of the waterfall has loaded. If more waterfall
  // loading happens in children, those steps of the waterfall are awaited and
  // the app re-renders again, and so forth until there’s no more loading for
  // the final server side render.
  return isWaterfallLoading
    ? null
    : cacheValue
    ? cacheValue.errors
      ? // Unlike many other GraphQL libraries, detailed loading errors are
        // cached and can be server side rendered without causing a
        // server/client HTML mismatch error.
        "Error!"
      : cacheValue.data.repo.stargazers.totalCount
    : // In this situation no cache value implies loading. Use the
      // `useLoadingEntry` hook to manage loading in detail.
      "Loading…";
}





`{
  bannierePrincipales {
    id
    title
    paragraph
    banniereLink
    banniereImage {
      url
    }
  }
}`