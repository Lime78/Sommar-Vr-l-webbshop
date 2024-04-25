import { createHashRouter } from 'react-router-dom'
import Root from './root.jsx'
import LandingPage from './LandingPage.jsx'
import CartPage from './CartPage.jsx'
import AdminPage from './AdminPage.jsx'

const router = createHashRouter([
	{
		// Om URL i adressfältet matchar denna route '/'
		path: "/",

		// Så ska Root-komponenten renderas
		element: <Root />,

		// Lägg till ett element om du vill hantera felaktiga länkar
		// errorElement: <ErrorPage />,

		// Inuti Root ska vi klistra in den komponent vars route matchar URL bäst
		children: [
			{
                path: '/',
                element: <LandingPage />
            },
			{
				path: '/CartPage',
				element: <CartPage />
			},{
				path: '/AdminPage',
				element: <AdminPage />
			}
			
		]
	},
	
]);

export default router