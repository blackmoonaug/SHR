<aside class="main-sidebar sidebar-dark-primary elevation-4">
    <!-- Brand Logo -->
    <a href="{{ url('/') }}" class="brand-link">
        <span class="brand-text">Skyline Hotel and <br>Restaurant</span>
    </a>

    <!-- Sidebar -->
    <div class="sidebar">
        <!-- Sidebar user panel (optional) -->
        <div class="user-panel mt-3 pb-3 mb-3 d-flex">
            <div class="info">
                <a href="#" class="d-block"><b>Welcome, {{ Auth::user()->name }}</b></a>
            </div>
        </div>

        <!-- Sidebar Menu -->
        <nav class="mt-2">
            <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                
                <li class="nav-item">
                    <router-link to="/home" class="nav-link ">
                        <i class="nav-icon fas fa-home"></i>
                        <p>
                            Home
                        </p>
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/billing" class="nav-link ">
                        <i class="nav-icon fas fa-tasks"></i>
                        <p>
                            Billing
                        </p>
                    </router-link>
                </li>

                <li class="nav-item">
                    <router-link to="/customer" class="nav-link ">
                        <i class="nav-icon fas fa-tasks"></i>
                        <p>
                            Guest Management
                        </p>
                    </router-link>
                </li>


                <li class="nav-item">
                    <router-link to="/reports" class="nav-link ">
                        <i class="nav-icon fas fa-tasks"></i>
                        <p>
                           Reports
                        </p>
                    </router-link>
                </li>
                
                
                
                <li class="nav-item has-treeview">
                    <a href="#" class="nav-link">
                        <i class="nav-icon fas fa-cogs"></i>
                        <p>
                            Settings
                            <i class="right fas fa-angle-left"></i>
                        </p>
                    </a>
                    <ul class="nav nav-treeview">
                        <li class="nav-item">
                            <router-link to="/password_reset" class="nav-link">
                                <i class="fas fa-exchange-alt nav-icon"></i>
                                <p>Change Password</p>
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <a href="#" class="nav-link" 
                            onclick="event.preventDefault();
                                                        document.getElementById('logout-form').submit();"
                                                        >
                                <i class="fas fa-sign-out-alt nav-icon"></i>
                                <p>Logout</p>
                            </a>
                            <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                                @csrf
                            </form>
                        </li>
                    </ul>
                </li>
            </ul>
        </nav>
        <!-- /.sidebar-menu -->
    </div>
    <!-- /.sidebar -->
</aside>
