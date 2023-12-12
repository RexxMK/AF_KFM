import { Link, useLocation } from "react-router-dom"

//SD
export default function Breadcrumbs() {
    
    function mapPathToName(path, bookTitle) {
        console.log('Current path:', path);

        if (bookTitle) {
          return bookTitle;
        }

        switch (path) {
          case '/':
            return 'Køb bøger';
          case '/favoritside':
            return 'Favoritter';
          case '/mustread':
            return 'Must Read';
          case '/ugenstilbud':
            return 'Ugens tilbud';
          case '/nyegodeboeger':
            return 'Nye gode bøger';
          case '/signeredeboeger':
            return 'Signerede bøger';
          case '/laeseklubbenlaeser':
            return 'KFM læseklubberne læser';
          case '/skoenlitteratur':
            return 'Skønlitteratur';
          case '/biografier':
            return 'Biografier';
          case '/lyrik':
            return 'Lyrik';
          case '/spaending':
            return 'Spænding';
          case '/fagboeger':
            return 'Fagbøger';
          case '/boerneboeger':
            return 'Børnebøger';
          case '/gavekort':
            return 'Gavekort';
          case '/moleskine':
            return 'Moleskine';
          case '/mustread/seBog':
            return '/';
          case '/ugenstilbud/seBog':
            return '/';
          case '/nyegodeboeger/seBog':
            return '/';
          case '/signeredeboeger/seBog':
            return '/';
          case '/laeseklubbenlaeser/seBog':
            return '/';
          case '/skoenlitteratur/seBog':
            return '/';
          case '/biografier/seBog':
            return '/';
          case '/lyrik/seBog':
            return '/';
          case '/spaending/seBog':
            return '/';
          case '/fagboeger/seBog':
            return '/';
          case '/boerneboeger/seBog':
            return '/';
          case '/gavekort/seBog':
            return '/';
          case '/moleskine/seBog':
            return '/';

            
          default:
            return path;
        }
      }
    
      const location = useLocation();

      const crumbs = location.pathname.split('/').filter(crumb => crumb !== '');
    
      const breadcrumbElements = crumbs.map((crumb, index) => {
        const currentPath = `/${crumbs.slice(0, index + 1).join('/')}`;
        const crumbName = mapPathToName(currentPath);
    
        return (
          <div className="crumb" key={crumb}>
            <Link to={currentPath}>{crumbName}</Link>
          </div>
        );
      });
    
  return (
    <div className="breadcrumbs">
      <p>Forside</p>
      <p className="split">/</p>
      {breadcrumbElements}
    </div>
  );
}