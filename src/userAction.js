export const newUser = ({
    firstName= "",
    lastName= "",
    birthday= "",
    age = null,
    hobby = ""
} = {}) => ({ 
        type: 'NEW_USER',
        users: {
        firstName,
         lastName, 
         birthday, 
         age, 
         hobby 
        }      
}); 

export const LOAD_USERS = 'LOAD_USERS';
export const RENDER_USERS = 'RENDER_USERS';

export function loadUsers() {
    return {
      type: LOAD_USERS
    };
  }