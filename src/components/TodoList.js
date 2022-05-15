import React from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { AuthContext } from '../contexts/AuthContext';

class TodoList extends React.Component{

    //static contextType = ThemeContext;
    render(){
        return(
            <ThemeContext.Consumer>{(themeContext)=>{
                const { darkTheme, lightTheme, isDarkTheme, changeTheme } = themeContext;
                const theme = isDarkTheme ? darkTheme : lightTheme;
                return(
                    <div>
                    <AuthContext.Consumer>{(authContext)=>{
                        const {isLoggedIn, changeAuth} = authContext;
                        return(
                            <div style={{ background: theme.background, color: theme.text, height:'120px' }}>
                            <p className="item" style={{textAlign: 'center'}} onClick={changeAuth}>{isLoggedIn ? 'Sign Out' : 'Sign In'}</p>
                            <p className="item">Plan the family trip</p>
                            <p className="item">Go for shoping</p>
                            <p className="item">Latet lehezroni kise</p>
                            <button className="ui primary button" onClick={changeTheme} >Change Theme</button>
                    </div>
                        )
                    }}
                    </AuthContext.Consumer>
                    </div>
                )
            }}
            </ThemeContext.Consumer>
        )
    }
}


export default TodoList;