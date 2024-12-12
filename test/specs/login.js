import userdata from '../data/userData.json'
import { expect } from '@wdio/globals'
import { $ } from '@wdio/globals'
import MenuScreen from '../screen/menu.screen.js'
import LoginScreen from '../screen/login.screen.js'

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
       
        await MenuScreen.accessLoginScreen()
        await LoginScreen.fillLoginForm(userdata.userFail.username, userdata.userFail.password)
        await expect ($(LoginScreen.errorMessage)).toHaveText('Provided credentials do not match any user in this service.')

    })
})




