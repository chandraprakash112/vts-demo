import Table from '../shared-components/Table';
import { useState } from 'react';

export default function DeadVehicles() {
  const tableHead = [
    { key: 'id', value: 'S No' },
    { key: 'vin', value: 'VIN' },
    { key: 'imei', value: 'IMEI' },
    { key: 'reason', value: 'Reason Code' },
    { key: 'date', value: 'Date' },
  ];
  const rows = [
    {
      id: 1,
      vin: 'VIN001234567890',
      imei: '867459032145678',
      date: '2025-01-10 08:30 AM',
      reason: 'No record found',
    },
    {
      id: 2,
      vin: 'VIN001234567891',
      imei: '867459032145678',
      date: '2025-01-10 08:30 AM',
      reason: 'No record found',
    },
    {
      id: 3,
      vin: 'VIN001234567893',
      imei: '867459032145678',
      date: '2025-01-10 08:30 AM',
      reason: 'No record found',
    },
    {
      id: 4,
      vin: 'VIN001234567894',
      imei: '867459032145678',
      date: '2025-01-10 08:30 AM',
      reason: 'No record found',
    },
  ];


  return (
    <>

      <div className="bg-white shadow-md rounded-xl my-5 pt-3 pb-5 overflow-hidden">
        <Table tableHead={tableHead} rows={rows} searchable="true" checkBox="true" />
      </div>
    </>
  );
}
