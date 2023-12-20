function NavBar({loggedInUser, handleLogin}) {

    return (
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <a class="navbar-brand nav-logo-text" href="#">Nora's House</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="/">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/pitches">Pitches</a>
                    </li>
                    {!!loggedInUser && <li class="nav-item">
                         <a class="nav-link" href="/pitches/create">Create Pitch</a>
                    </li>}
                    {!!loggedInUser && <li class="nav-item">
                        <a class="nav-link disabled" aria-disabled="/recipient/dashboard">Dashboard</a>
                    </li>}
                    <li class="nav-item" >
                        <a class="nav-link active" aria-current="page" onClick={handleLogin} href="#">{!!loggedInUser ?"Logout":"Login"}</a>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar