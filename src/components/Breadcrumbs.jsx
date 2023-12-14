import { Link, useLocation } from "react-router-dom"

//SD
//Breadcrumb ved hjælp af react-router-dom
export default function Breadcrumbs() {
    
    //Breadcrumbs som bliver vist er efter navnet på URL-stien
    //Eftersom man ikke kan bruge bokstaver som æ, ø og å på en URL
    //Så bruger vi denne funktion at returnere en streng, der repræsenterer navnet 
    //til brødkrummen baseret på den givne sti 
    function mapPathToName(path) {
        console.log('Current path:', path);

        switch (path) {
          case '':
            return 'Køb bøger';
          case '/favoritside':
            return 'Favoritter';
          case '/login':
            return 'Min Profil';
          case '/logout':
            return 'Min Profil';
          case '/LoginDialog':
            return 'Min Profil';
          case '/OpretDialog':
            return 'Min Profil';
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
    
      //Vi bruger useLocation til at få den actuelle placering
      const location = useLocation();

      //Derefter ekstraherer den de individuelle dele af stien
      //ved at bruge split('/') og filtrere tomme strenge
      const crumbs = location.pathname.split('/').filter(crumb => crumb !== '');
    
      //For hver breadcrumb mapper den over hver breadcrumb
      //og opretter et Link til hver breadcrumb
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