// import React, { useState } from 'react';
// import { Table, Button, Modal, FormGroup, Label, Input, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

// const Employees = () => {
//   const [showModal, setShowModal] = useState(false);
//   const [selectedEmployee, setSelectedEmployee] = useState(null);
//   const [showPassword, setShowPassword] = useState(false);

//   const employees = [
//     { id: 1, name: 'John Doe', hotel: 'Hotel A' },
//     { id: 2, name: 'Jane Smith', hotel: 'Hotel B' },
//     { id: 3, name: 'Mike Johnson', hotel: 'Hotel C' }
//   ];

//   const handleDelete = (employeeId) => {
//     // Logic to delete the employee with the given ID
//     console.log(`Delete employee with ID: ${employeeId}`);
//   };

//   const handleResetPassword = () => {
//     // Logic to reset the password for the selected employee
//     console.log(`Reset password for employee with ID: ${selectedEmployee}`);
//     setShowModal(false);
//   };

//   const handleShowModal = (employeeId) => {
//     setSelectedEmployee(employeeId);
//     setShowModal(true);
//   };

//   const handleCloseModal = () => {
//     setShowModal(false);
//   };

//   const togglePasswordVisibility = () => {
//     setShowPassword(!showPassword);
//   };

//   return (
//     <div>
//       <h1>
//         Employees
//       </h1>
//       <div className="table-responsive">
//         <Table className="no-wrap mt-3 align-middle" responsive borderless>
//           <thead>
//             <tr>
//               <th className="text-nowrap">Employee Name</th>
//               <th className="text-nowrap">Hotel Name</th>
//               <th>Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {employees.map((employee) => (
//               <tr key={employee.id}>
//                 <td>{employee.name}</td>
//                 <td>{employee.hotel}</td>
//                 <td className="d-flex gap-2">
//                   <Button color="danger" onClick={() => handleDelete(employee.id)}>
//                     Delete
//                   </Button>
//                   <Button color="primary" className="text-nowrap" onClick={() => handleShowModal(employee.id)}>
//                     Reset Password
//                   </Button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </Table>
//       </div>
//       {/* Modal for password reset */}
//       <Modal isOpen={showModal} toggle={handleCloseModal}>
//         <ModalHeader toggle={handleCloseModal}>Reset Password</ModalHeader>
//         <ModalBody>
//           <FormGroup>
//             <Label for="newPassword">New Password</Label>
//             <div className="d-flex align-items-center">
//               <Input type={showPassword ? 'text' : 'password'} id="newPassword" placeholder="Enter new password" />
//               <Button color="secondary" onClick={togglePasswordVisibility}>
//                 {showPassword ? 'Hide' : 'Show'}
//               </Button>
//             </div>
//           </FormGroup>
//         </ModalBody>
//         <ModalFooter>
//           <Button color="secondary" onClick={handleCloseModal}>
//             Cancel
//           </Button>
//           <Button color="primary" onClick={handleResetPassword}>
//             Reset
//           </Button>
//         </ModalFooter>
//       </Modal>
//     </div>
//   );
// };

// export default Employees;



import { Card, CardBody, CardTitle, CardSubtitle, Table } from "reactstrap";
import user1 from "../../assets/images/users/user1.jpg";
import user2 from "../../assets/images/users/user2.jpg";
import user3 from "../../assets/images/users/user3.jpg";
import user4 from "../../assets/images/users/user4.jpg";
import user5 from "../../assets/images/users/user5.jpg";

const employees = [
  {
    avatar: user1,
    name: "Hanna Gover",
    email: "hgover@gmail.com",
    hotel: "Flexy React",
    address: "pending",
   
   
  },
  {
    avatar: user2,
    name: "Hanna Gover",
    email: "hgover@gmail.com",
    hotel: "Lading pro React",
    address: "done",
   
   
  },
  {
    avatar: user3,
    name: "Hanna Gover",
    email: "hgover@gmail.com",
    hotel: "Elite React",
    address: "holt",
   
   
  },
  {
    avatar: user4,
    name: "Hanna Gover",
    email: "hgover@gmail.com",
    hotel: "Flexy React",
    address: "pending",
   
   
  },
  {
    avatar: user5,
    name: "Hanna Gover",
    email: "hgover@gmail.com",
    hotel: "Ample React",
    address: "done",
   
   
  },
];

const Employees = () => {
  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle tag="h5">Employees Listing</CardTitle>

          <Table className="no-wrap mt-3 align-middle" responsive borderless>
            <thead>
              <tr>
                <th>Employees </th>
                <th>Hotel Name</th>
                <th>Address</th>
             
              </tr>
            </thead>
            <tbody>
              {employees.map((tdata, index) => (
                <tr key={index} className="border-top">
                  <td>
                    <div className="d-flex align-items-center p-2">
                      <img
                        src={tdata.avatar}
                        className="rounded-circle"
                        alt="avatar"
                        width="45"
                        height="45"
                      />
                      <div className="ms-3">
                        <h6 className="mb-0">{tdata.name}</h6>
                        <span className="text-muted">{tdata.email}</span>
                      </div>
                    </div>
                  </td>
                  <td>{tdata.hotel}</td>
                  <td>
                    {tdata.address}
                  </td>
              
                </tr>
              ))}
            </tbody>
          </Table>
        </CardBody>
      </Card>
    </div>
  );
};

export default Employees;
