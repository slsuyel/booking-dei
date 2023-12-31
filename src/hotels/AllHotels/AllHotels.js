import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, CardBody, CardSubtitle, CardTitle, Table } from 'reactstrap';


const hotelData = [
  {
    id: "6hf54",
    name: "Hanna Gover",
    email: "hgover@gmail.com",
    location: "Flexy React",
    status: "pending",
    checkIn: "20/06/2023",
    checkOut: "20/06/2023",
  },
  {
    id: "654gd",
    name: "Hanna Gover",
    email: "hgover@gmail.com",
    location: "Lading pro React",
    status: "done",
    checkIn: "20/06/2023",
    checkOut: "20/06/2023",
  },
  {
    id: "65jkl4",
    name: "Hanna Gover",
    email: "hgover@gmail.com",
    location: "Elite React",
    status: "holt",
    checkIn: "20/06/2023",
    checkOut: "20/06/2023",
  },
  {
    id: "65ghgg4",
    name: "Hanna Gover",
    email: "hgover@gmail.com",
    location: "Flexy React",
    status: "pending",
    checkIn: "20/06/2023",
    checkOut: "20/06/2023",
  },
  {
    id: "654fdd",
    name: "Hanna Gover",
    email: "hgover@gmail.com",
    location: "Ample React",
    status: "done",
    checkIn: "20/06/2023",
    checkOut: "20/06/2023",
  },
];
const AllHotels = () => {
  return (

    <div>
      <Card>
        <CardBody>
          <CardTitle tag="h5">All Hotels</CardTitle>
          <Table className="no-wrap mt-3 align-middle" responsive borderless>
            <thead>
              <tr>
                <th>Hotel Name</th>
                <th>Location</th>
                <th>Status</th>
                <th>Check In</th>
                <th>Check Out</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              {hotelData.map((hotel, index) => (
                <tr key={index} className="border-top">
                   <td>{hotel.name}</td>
                  <td>{hotel.location}</td>
                  <td>
                    {hotel.status}
                  </td>
                  <td>  {hotel.checkIn}</td>
                  <td>  {hotel.checkOut}</td>
                  <td>
                    <Link to={`/hotel/${hotel.id}`}>
                      <Button className="btn" color="primary" size="sm">
                        see details
                      </Button></Link>

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

export default AllHotels;