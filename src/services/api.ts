/**
 * Fake user data
 */
const fakeUserData:IUser = {
  id: '1234',
  name: "Leanne Graham",
  username: "Lili",
  email: "leanne@email.biz",
  avatar: "https://picsum.photos/200"
}

/**
 * REQUEST AUTHENTIFICATION
 * Simply return a fake User without checking login credentials
 */
export const requestAuthentification = (credentials:IUserCredentials):Promise<IUser> => (
  new Promise (resolve => {
    setTimeout(() => resolve(fakeUserData), 1000)
  })
)