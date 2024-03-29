/**
 * Next.js supports pages with dynamic routes.
 * For example, if you create a file called pages/posts/[id].js,
 * then it will be accessible at posts/1, posts/2, etc.
 *
 * [challengeId].tsx: This represents a single dynamic segment in the URL.
 *  It matches routes with a single segment after /challenges/.
 * /challenges/123 would match this route,
 *
 *[...challengeid].tsx: This represents one or more dynamic segments in the URL.
  It matches routes with one or more segments after /challenges/,
   and the segments are captured in an array. 
   For example, /challenges/123/edit would match this route
 */

import React from 'react';
import { useRouter } from 'next/router';
import { getRouteComponent } from '../../core/utils/routing';

function ChallengePage() {
  const router = useRouter();
  const { challengeId } = router.query;
  if (challengeId) {
    const Component = getRouteComponent(challengeId);

    return <Component />;
  }
}

export default ChallengePage;
