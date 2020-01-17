import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

// Paginas do aplicativo
import Map from './pages/Map'
import ProfileGit from './pages/ProfileGit'

const Routes = createAppContainer(
    createStackNavigator({
        Map: {
            screen: Map,
            navigationOptions: {
                title: 'Dev Map'
            },
        },
        ProfileGit: {
            screen: ProfileGit,
            navigationOptions: {
                title: "Profiler"
            }
        },
    }, {
        defaultNavigationOptions: {
            headerTintColor: '#fff',
            headerBackTitleVisible: false,
            headerStyle: {
                backgroundColor: '#262626',
            },
        }
    })
)

export default Routes