// routing.ts
import GridGame from '../../components/GridGame';
import NavBar from '../../components/NavBar';
import Rating from '../../components/Rating';

interface RouteMap {
  [key: string]: React.ComponentType;
}

const routeMap: RouteMap = {
  'grid-game': GridGame,
  navbar: NavBar,
  rating: Rating,
  // ... add more routes
};

/**
 * @description - map each challenges route with its corresponding component
 * @param path
 * @returns
 */
export const getRouteComponent = (
  path: string | string[]
): React.ComponentType => {
  const pathString = Array.isArray(path) ? path.join('/') : path;
  const Component = routeMap[pathString];
  return Component;
};
