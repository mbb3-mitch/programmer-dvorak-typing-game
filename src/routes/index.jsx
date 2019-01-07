import Components from "views/Components/Components.jsx";
import LandingPage from "views/LandingPage/LandingPage.jsx";
import ProfilePage from "views/ProfilePage/ProfilePage.jsx";
import MenuPage from "views/MenuPage/MenuPage.jsx";
import TypingPage from "views/TypingPage/TypingPage.jsx";
import LoginPage from "views/LoginPage/LoginPage.jsx";

var indexRoutes = [
  { path : "/landing-page", name : "LandingPage", component : LandingPage },
  { path : "/profile-page", name : "ProfilePage", component : ProfilePage },
  { path : "/login-page", name : "LoginPage", component : LoginPage },
  { path : "/components", name : "Components", component : Components },
  { path : "/typing", name : "TypingPage", component : TypingPage },
  { path : "/", exact: true, name : "MenuPage", component : MenuPage },

];

export default indexRoutes;
