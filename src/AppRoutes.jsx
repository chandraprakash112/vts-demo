import { Activity, Suspense, useEffect, useState } from 'react';
import { Routes, Route, useLocation, useNavigate, Navigate } from 'react-router-dom';
import Dashboard from './pages/Dashboard/Dashboard';
import HubDashboard from './pages/Content/HubDashboard';
import MainLayout from './layouts/MainLayout';
import YardDashboard from './pages/Yards/YardDashboard';
import YardDetails from './pages/Yards/YardDetails';
import SRNPage from './pages/SRN/SRNPage';
import EPODPage from './pages/Yards/EPODPage';
import EPODForm from './pages/Yards/EPODForm';
import AdvanceSearch from './pages/AdvanceSearch';
import TrackingDetail from './shared-components/TrackingDetail';
import Login from './pages/Auth/Login';
import { useCommon } from './context/CommonContext';
import UserHub from './pages/UserHub/UserHub';
import Javascript from './pages/Documentation/JavaScript/Javascript';
import JavascriptCode from './pages/Documentation/JavaScript/JavascriptCode';
import User from './pages/UserHub/User';
import Profile from './pages/UserHub/Profile';
import ReactCore from './pages/Documentation/React/ReactCore';
import Signup from './pages/Auth/Signup';
import Roles from './pages/UserHub/Roles';
import Permission from './pages/UserHub/Permission';
import Story from './pages/MediaHub/Story';
import StatusPage from './pages/MediaHub/StatusPage';
import MusicLayout from './pages/MediaHub/Music/MusicLayout';
import Discover from './pages/MediaHub/Music/Discover';
import Artists from './pages/MediaHub/Music/Artists';
import Library from './pages/MediaHub/Music/Library';
import PostHub from './pages/Content/PostHub';
import LikedSongs from './pages/MediaHub/Music/LikedSongs';
import AngularCore from './pages/Documentation/Angular/AngularCore';
import AngularSnippet from './pages/Documentation/Angular/AngularSniped';
import ReactSnippet from './pages/Documentation/React/ReactSniped';
import Categories from './pages/MediaHub/Categories';
import GeneralSetting from './pages/Settings/GeneralSetting';
import ProfileSetting from './pages/Settings/ProfileSetting';
import SecuritySetting from './pages/Settings/SecuritySetting';
import SettingsLayout from './pages/Settings/SettingsLayout';
import Overview from './pages/Analytics/Overview';

export default function AppRoutes() {
  const { user, detail } = useCommon();
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => detail, []);

  useEffect(() => {
    setIsLoading(false);
    console.log(isLoading, user);
  }, [user]);

  return (
    <Suspense fallback={'<Loading />'}>
      <Activity mode={isLoading ? 'hidden' : 'visible'}>
        <Routes>
          {user?.userRole?.toLowerCase() == 'user' ? (
            <Route path="" element={<MainLayout />}>
              <Route path="" element={<Dashboard />} />

              {/* Content */}
              <Route path="hub" element={<HubDashboard />} />
              <Route path="posts" element={<PostHub />} />

              {/* Documentation */}
              <Route path="angular" element={<AngularCore />} />
              <Route path="angular-sniped" element={<AngularSnippet />} />
              <Route path="react" element={<ReactCore />} />
              <Route path="react-sniped" element={<ReactSnippet />} />
              <Route path="javascript" element={<Javascript />} />
              <Route path="javascript-code" element={<JavascriptCode />} />
              <Route path="*" element={<Navigate to="/" replace />} />

              {/* users */}
              <Route path="users" element={<UserHub />} />
              <Route path="roles" element={<Roles />} />
              <Route path="permission" element={<Permission />} />
              <Route path="users/:id" element={<User />} />
              <Route path="profile/:id" element={<Profile />} />

              {/* Media */}
              <Route path="story" element={<Story />} />
              <Route path="status" element={<StatusPage />} />
              <Route path="music" element={<MusicLayout />}>
                <Route path="discover" element={<Discover />} />
                <Route path="artists" element={<Artists />} />
                <Route path="library" element={<Library />} />
                <Route path="liked" element={<LikedSongs />} />
              </Route>
              <Route path="categories" element={<Categories />} />

              {/* Settings */}
              <Route path="settings" element={<SettingsLayout />}>
                <Route path="general" element={<GeneralSetting />} />
                <Route path="profile" element={<ProfileSetting />} />
                <Route path="security" element={<SecuritySetting />} />
              </Route>

              {/* Analytics */}
              <Route path="analytics/overview" element={<Overview />} />

              {/* Others */}
              <Route path="yard" element={<YardDashboard />} />
              <Route path="yard/:id" element={<YardDetails />} />
              <Route path="vehicle-status/:id" element={<TrackingDetail />} />
              <Route path="srn" element={<SRNPage />} />
              <Route path="epod" element={<EPODPage />} />
              <Route path="epod/:id" element={<EPODForm />} />
              <Route path="advance-search" element={<AdvanceSearch />} />
            </Route>
          ) : user?.userRole?.toLowerCase() == 'admin' ? (
            <Route path="" element={<MainLayout />}>
              <Route path="" element={<Dashboard />} />

              {/* Content */}
              <Route path="hub" element={<HubDashboard />} />
              <Route path="posts" element={<PostHub />} />

              {/* Documentation */}
              <Route path="angular" element={<AngularCore />} />
              <Route path="angular-sniped" element={<AngularSnippet />} />
              <Route path="react" element={<ReactCore />} />
              <Route path="react-sniped" element={<ReactSnippet />} />
              <Route path="javascript" element={<Javascript />} />
              <Route path="javascript-code" element={<JavascriptCode />} />
              <Route path="*" element={<Navigate to="/" replace />} />

              {/* users */}
              <Route path="users" element={<UserHub />} />
              <Route path="roles" element={<Roles />} />
              <Route path="permission" element={<Permission />} />
              <Route path="users/:id" element={<User />} />
              <Route path="profile/:id" element={<Profile />} />

              {/* Media */}
              <Route path="story" element={<Story />} />
              <Route path="status" element={<StatusPage />} />
              <Route path="music" element={<MusicLayout />}>
                <Route path="discover" element={<Discover />} />
                <Route path="artists" element={<Artists />} />
                <Route path="library" element={<Library />} />
                <Route path="liked" element={<LikedSongs />} />
              </Route>
              <Route path="categories" element={<Categories />} />

              {/* Settings */}
              <Route path="settings" element={<SettingsLayout />}>
                <Route path="general" element={<GeneralSetting />} />
                <Route path="profile" element={<ProfileSetting />} />
                <Route path="security" element={<SecuritySetting />} />
              </Route>

              {/* Analytics */}
              <Route path="analytics/overview" element={<Overview />} />

              {/* Others */}
              <Route path="yard" element={<YardDashboard />} />
              <Route path="yard/:id" element={<YardDetails />} />
              <Route path="vehicle-status/:id" element={<TrackingDetail />} />
              <Route path="srn" element={<SRNPage />} />
              <Route path="epod" element={<EPODPage />} />
              <Route path="epod/:id" element={<EPODForm />} />
              <Route path="advance-search" element={<AdvanceSearch />} />
            </Route>
          ) : (
            <>
              <Route path="login" element={<Login />} />
              <Route path="signup" element={<Signup />} />
              <Route path="*" element={<Navigate to="/login" replace />} />
            </>
          )}
        </Routes>
      </Activity>
    </Suspense>
  );
}
