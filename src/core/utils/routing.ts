// routing.ts
import GridGame from '../../components/GridGame';
// import Page1 from './components/Page1';
// import Page2 from './components/Page2';
// import Page3 from './components/Page3';
// ... import other page components

interface RouteMap {
  [key: string]: React.ComponentType;
}

const routeMap: RouteMap = {
  'grid-game': GridGame,
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
