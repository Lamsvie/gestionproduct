import { jwtDecode } from "jwt-decode"
export const getAuthenticated = () => {


    const token = localStorage.getItem('token')

    if (token) {
        const { exp } = jwtDecode(token)
        


        if ((exp * 1000) > new Date().getDate()) {
            return true;
        } else {
            return false
        }


    } else {
        return false
    }


}

export const setup = () => {
    const token = localStorage.getItem('token')

    if (token) {
        const { exp } = jwtDecode(token)
        
        if ((exp * 1000) < new Date().getDate()) {
            localStorage.removeItem('token');
        }

    } 
    
}