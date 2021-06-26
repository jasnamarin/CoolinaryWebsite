import users from '../assets/data/users.json'

export const getUsers = () => {
    const lsUsers = window.localStorage.getItem('users')

    if (!lsUsers) {
        window.localStorage.setItem('users', JSON.stringify(users))
    }

    return JSON.parse(window.localStorage.getItem('users'))
}