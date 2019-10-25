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