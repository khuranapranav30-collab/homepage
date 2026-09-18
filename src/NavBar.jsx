function NavBar() {
    return (
        <>
            <style>
                {`
                .nav-bar-list{
                    list-style:none;
                    display:flex; 
                    margin:0px;
                    padding:0px;
                }
                .nav-bar{
                    background-color: hsl(0, 0%, 18%);
                    position:sticky;
                    top:0px;
                    z-index:10;
                }
                .nav-bar a{
                    color:white;
                    width:75px;
                    text-align:center;
                    padding:9px;
                    transition:background-color 0.2s;
                    text-decoration:none;
                }
                .nav-bar a:hover{
                    background-color:hsl(0, 0%, 10%);
                    cursor:pointer;
                }
            `}
            </style>

            <nav className="nav-bar">
                <ul className="nav-bar-list">
                    <a href="#banner-container">About</a>
                    <a href="#profile1">Work</a>
                    <a href="#footer">Contact</a>
                </ul>
            </nav>
        </>
    )
}

export default NavBar;