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
 * The usage of the credentials value is useless but this is to satisfy the linter and keep it as parameter
 */
export const requestAuthentification = (credentials:IUserCredentials):Promise<IUser> => (
  new Promise (resolve => {
    setTimeout(() => resolve(fakeUserData), credentials ? 1000 : 1001)
  })
)