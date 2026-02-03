import { Suspense, useEffect } from 'react';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import Dashboard from '../pages/Dashboard/Dashboard';
import MainLayout from '../layouts/main/MainLayout';
import PlantDashboard from '../pages/Plants/PlantDashboard';
import PlantManagement from '../pages/Plants/PlantManagement';
import YardManagement from '../pages/Yards/YardManagement';
import YardDashboard from '../pages/Yards/YardDashboard';
import YardDetails from '../pages/Yards/YardDetails';
import PlantDetails from '../pages/Plants/PlantDetails';
import QCInspection from '../pages/QCInspection';
import RGPPage from '../pages/RGPPage';
import PRNPage from '../pages/PRNPage';
import SRNPage from '../pages/SRN/SRNPage';
import POPPage from '../pages/POPPage';
import EPODPage from '../pages/EPODPage';
import DefectiveVehicles from '../pages/DefectiveVehicles';
import EPODForm from '../pages/EPODForm';
import MarkNoMovement from '../pages/MarkNoMovement';
import SecondaryMovement from '../pages/SecondaryMovement';
import DeadVehicles from '../pages/DeadVehicles';
import VehicleAssignment from '../pages/VehicleAssignment';
import AdvanceVehicleSearch from '../pages/AdvanceVehicleSearch';
import TrackingDetail from '../shared-components/TrackingDetail';
import VehicleSearch from '../pages/VehicleSearch';
import AccidentManagement from '../pages/AccidentManagement';
import DashboardBilling from '../pages/Billings/DashboardBilling';
import BillingDetails from '../pages/Billings/BillingDetails';
import AccidentBreakdown from '../pages/Reports/AccidentBreakdown';
import BillingAllocation from '../pages/Reports/BillingAllocation';
import DailyPerformance from '../pages/Reports/DailyPerformance';
import AgeingReport from '../pages/Reports/AgeingReport';
import YardDelayReport from '../pages/Reports/YardDelayReport';
import SecondaryMovementVehicles from '../pages/Reports/SecondaryMovementVehicles';
import DispatchAgeingReport from '../pages/Reports/DispatchAgeingReport';
import LiveTracking from '../pages/Tracking-Monitoring/LiveTracking';
import GateEntry from '../pages/Tracking-Monitoring/GateEntry';
import FkrtBlankVehicles from '../pages/Tracking-Monitoring/FkrtBlankVehicles';
import UserManagement from '../pages/Admin/UserManagement';
import LoginLogs from '../pages/Admin/LoginLogs';
import OblHelpdesk from '../pages/Admin/OblHelpdesk';
import ChangePassword from '../pages/Admin/ChangePassword';
import InvoicedVehicles from '../pages/Billings/InvoicedVehicles';
import HoldVehicleUpdates from '../pages/Admin-Control/HoldVehicleUpdates';
import GateExitControl from '../pages/Admin-Control/GateExitControl';
import ManualIntransit from '../pages/Admin-Control/ManualTransit';
import MarkManualIntransit from '../pages/Admin-Control/MarkManualIntransit';
import PriorityVehicles from '../pages/PriorityVehicles';
import Dealers from '../pages/Master/Dealers';
import Transporters from '../pages/Master/Transporters';
import DriverMaster from '../pages/Master/DriverMaster';
import RoutePlayback from '../pages/RoutePlayback';

export default function AppRoutes() {
  return (
    <div>
      <Suspense fallback={'<Loading />'}>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/plants" element={<PlantDashboard />} />
            <Route path="/plants/:id" element={<PlantDetails />} />
            <Route path="/plant-management" element={<PlantManagement />} />
            <Route path="/yard" element={<YardDashboard />} />
            <Route path="/yard/:id" element={<YardDetails />} />
            <Route path="/yards-management" element={<YardManagement />} />
            <Route path="/vehicle-status/:id" element={<TrackingDetail />} />
            <Route path="/qc-inspection" element={<QCInspection />} />
            <Route path="/rgp" element={<RGPPage />} />
            <Route path="/prn" element={<PRNPage />} />
            <Route path="/srn" element={<SRNPage />} />
            <Route path="/pop" element={<POPPage />} />
            <Route path="/epod" element={<EPODPage />} />
            <Route path="/epod/:id" element={<EPODForm />} />
            <Route path="/defective-vehicles" element={<DefectiveVehicles />} />
            <Route path="/mark-no-movemenet" element={<MarkNoMovement />} />
            <Route path="/secondary-movemenet" element={<SecondaryMovement />} />
            <Route path="/dead-vehicles" element={<DeadVehicles />} />
            <Route path="/vehicle-assignment" element={<VehicleAssignment />} />
            <Route path="/advance-vehicle-search" element={<AdvanceVehicleSearch />} />
            <Route path="/vehicle-search" element={<VehicleSearch />} />
            <Route path="/accident-management" element={<AccidentManagement />} />
            <Route path="/dashboard-billing" element={<DashboardBilling />} />
            <Route path="/billing-detail" element={<BillingDetails />} />
            <Route path="/invoiced-vehicles" element={<InvoicedVehicles />} />
            <Route path="/secondary-movement-vehicles" element={<SecondaryMovementVehicles />} />
            <Route path="/daily-performance" element={<DailyPerformance />} />
            <Route path="/ageing-report" element={<AgeingReport />} />
            <Route path="/dispatch-ageing-report" element={<DispatchAgeingReport />} />
            <Route path="/yard-delay-report" element={<YardDelayReport />} />
            <Route path="/billing-allocation" element={<BillingAllocation />} />
            <Route path="/accident-breakdown" element={<AccidentBreakdown />} />
            <Route path="/live-tracking" element={<LiveTracking />} />
            <Route path="/gate-entry" element={<GateEntry />} />
            <Route path="/fkrt-blank-vehicles" element={<FkrtBlankVehicles />} />
            <Route path="/user-management" element={<UserManagement />} />
            <Route path="/login-logs" element={<LoginLogs />} />
            <Route path="/obl-helpdesk" element={<OblHelpdesk />} />
            <Route path="/change-password" element={<ChangePassword />} />
            <Route path="/hold-vehicle-updates" element={<HoldVehicleUpdates />} />
            <Route path="/gate-exit-control" element={<GateExitControl />} />
            <Route path="/manual-intransit" element={<ManualIntransit />} />
            <Route path="/mark-manual-intransit" element={<MarkManualIntransit />} />
            <Route path="/priority-vehicles" element={<PriorityVehicles />} />
            <Route path="/dealers" element={<Dealers />} />
            <Route path="/transporters" element={<Transporters />} />
            <Route path="/driver-master" element={<DriverMaster />} />
            <Route path="/route-playback" element={<RoutePlayback />} />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
}
