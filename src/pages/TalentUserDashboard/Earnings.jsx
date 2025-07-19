import React from "react";
import DashboardFooter from "./DashboardFooter";
import Navbar from "./Navbar";
import { HiOutlineDocumentText, HiDownload } from "react-icons/hi";

const Earnings = () => {
  const hireProjects = [
    {
      company: "World Studios",
      project: "Arabic Funny Movie",
      date: "20 April",
      payment: "AED 25000",
      receipt: "Receipt",
      invoice: "Invoice",
    },
    {
      company: "World Studios",
      project: "Arabic Funny Movie",
      date: "20 April",
      payment: "-AED 25000",
      receipt: "Pending",
      invoice: "Invoice",
    },
    {
      company: "World Studios",
      project: "Arabic Funny Movie",
      date: "20 April",
      payment: "AED 25000",
      receipt: "Receipt",
      invoice: "Invoice",
    },
    {
      company: "World Studios",
      project: "Arabic Funny Movie",
      date: "20 April",
      payment: "AED 25000",
      receipt: "Receipt",
      invoice: "Invoice",
    },
    {
      company: "World Studios",
      project: "Arabic Funny Movie",
      date: "20 April",
      payment: "-AED 25000",
      receipt: "Pending",
      invoice: "Invoice",
    },
    {
      company: "World Studios",
      project: "Arabic Funny Movie",
      date: "20 April",
      payment: "-AED 25000",
      receipt: "Pending",
      invoice: "Invoice",
    },
    {
      company: "World Studios",
      project: "Arabic Funny Movie",
      date: "20 April",
      payment: "-AED 25000",
      receipt: "Pending",
      invoice: "Invoice",
    },
    {
      company: "World Studios",
      project: "Arabic Funny Movie",
      date: "20 April",
      payment: "-AED 25000",
      receipt: "Pending",
      invoice: "Invoice",
    },
    {
      company: "World Studios",
      project: "Arabic Funny Movie",
      date: "20 April",
      payment: "AED 25000",
      receipt: "Receipt",
      invoice: "Invoice",
    },
    {
      company: "World Studios",
      project: "Arabic Funny Movie",
      date: "20 April",
      payment: "-AED 25000",
      receipt: "Pending",
      invoice: "Invoice",
    },
    {
      company: "World Studios",
      project: "Arabic Funny Movie",
      date: "20 April",
      payment: "AED 25000",
      receipt: "Receipt",
      invoice: "Invoice",
    },
    {
      company: "World Studios",
      project: "Arabic Funny Movie",
      date: "20 April",
      payment: "AED 25000",
      receipt: "Receipt",
      invoice: "Invoice",
    },
    {
      company: "World Studios",
      project: "Arabic Funny Movie",
      date: "20 April",
      payment: "-AED 25000",
      receipt: "Pending",
      invoice: "Invoice",
    },
    {
      company: "World Studios",
      project: "Arabic Funny Movie",
      date: "20 April",
      payment: "-AED 25000",
      receipt: "Pending",
      invoice: "Invoice",
    },
    {
      company: "World Studios",
      project: "Arabic Funny Movie",
      date: "20 April",
      payment: "-AED 25000",
      receipt: "Pending",
      invoice: "Invoice",
    },
    {
      company: "World Studios",
      project: "Arabic Funny Movie",
      date: "20 April",
      payment: "-AED 25000",
      receipt: "Pending",
      invoice: "Invoice",
    },
    {
      company: "World Studios",
      project: "Arabic Funny Movie",
      date: "20 April",
      payment: "AED 25000",
      receipt: "Receipt",
      invoice: "Invoice",
    },
    {
      company: "World Studios",
      project: "Arabic Funny Movie",
      date: "20 April",
      payment: "-AED 25000",
      receipt: "Pending",
      invoice: "Invoice",
    },
    {
      company: "World Studios",
      project: "Arabic Funny Movie",
      date: "20 April",
      payment: "AED 25000",
      receipt: "Receipt",
      invoice: "Invoice",
    },
    {
      company: "World Studios",
      project: "Arabic Funny Movie",
      date: "20 April",
      payment: "AED 25000",
      receipt: "Receipt",
      invoice: "Invoice",
    },
    {
      company: "World Studios",
      project: "Arabic Funny Movie",
      date: "20 April",
      payment: "-AED 25000",
      receipt: "Pending",
      invoice: "Invoice",
    },
    {
      company: "World Studios",
      project: "Arabic Funny Movie",
      date: "20 April",
      payment: "-AED 25000",
      receipt: "Pending",
      invoice: "Invoice",
    },
    {
      company: "World Studios",
      project: "Arabic Funny Movie",
      date: "20 April",
      payment: "-AED 25000",
      receipt: "Pending",
      invoice: "Invoice",
    },
    {
      company: "World Studios",
      project: "Arabic Funny Movie",
      date: "20 April",
      payment: "-AED 25000",
      receipt: "Pending",
      invoice: "Invoice",
    },
    {
      company: "World Studios",
      project: "Arabic Funny Movie",
      date: "20 April",
      payment: "AED 25000",
      receipt: "Receipt",
      invoice: "Invoice",
    },
    {
      company: "World Studios",
      project: "Arabic Funny Movie",
      date: "20 April",
      payment: "-AED 25000",
      receipt: "Pending",
      invoice: "Invoice",
    },
    {
      company: "World Studios",
      project: "Arabic Funny Movie",
      date: "20 April",
      payment: "AED 25000",
      receipt: "Receipt",
      invoice: "Invoice",
    },
    {
      company: "World Studios",
      project: "Arabic Funny Movie",
      date: "20 April",
      payment: "AED 25000",
      receipt: "Receipt",
      invoice: "Invoice",
    },
    {
      company: "World Studios",
      project: "Arabic Funny Movie",
      date: "20 April",
      payment: "-AED 25000",
      receipt: "Pending",
      invoice: "Invoice",
    },
    {
      company: "World Studios",
      project: "Arabic Funny Movie",
      date: "20 April",
      payment: "-AED 25000",
      receipt: "Pending",
      invoice: "Invoice",
    },
    {
      company: "World Studios",
      project: "Arabic Funny Movie",
      date: "20 April",
      payment: "-AED 25000",
      receipt: "Pending",
      invoice: "Invoice",
    },
    {
      company: "World Studios",
      project: "Arabic Funny Movie",
      date: "20 April",
      payment: "-AED 25000",
      receipt: "Pending",
      invoice: "Invoice",
    },
    {
      company: "World Studios",
      project: "Arabic Funny Movie",
      date: "20 April",
      payment: "AED 25000",
      receipt: "Receipt",
      invoice: "Invoice",
    },
    {
      company: "World Studios",
      project: "Arabic Funny Movie",
      date: "20 April",
      payment: "-AED 25000",
      receipt: "Pending",
      invoice: "Invoice",
    },
    {
      company: "World Studios",
      project: "Arabic Funny Movie",
      date: "20 April",
      payment: "AED 25000",
      receipt: "Receipt",
      invoice: "Invoice",
    },
    {
      company: "World Studios",
      project: "Arabic Funny Movie",
      date: "20 April",
      payment: "AED 25000",
      receipt: "Receipt",
      invoice: "Invoice",
    },
    {
      company: "World Studios",
      project: "Arabic Funny Movie",
      date: "20 April",
      payment: "-AED 25000",
      receipt: "Pending",
      invoice: "Invoice",
    },
    {
      company: "World Studios",
      project: "Arabic Funny Movie",
      date: "20 April",
      payment: "-AED 25000",
      receipt: "Pending",
      invoice: "Invoice",
    },
    {
      company: "World Studios",
      project: "Arabic Funny Movie",
      date: "20 April",
      payment: "-AED 25000",
      receipt: "Pending",
      invoice: "Invoice",
    },
    {
      company: "World Studios",
      project: "Arabic Funny Movie",
      date: "20 April",
      payment: "-AED 25000",
      receipt: "Pending",
      invoice: "Invoice",
    },
    {
      company: "World Studios",
      project: "Arabic Funny Movie",
      date: "20 April",
      payment: "AED 25000",
      receipt: "Receipt",
      invoice: "Invoice",
    },
    {
      company: "World Studios",
      project: "Arabic Funny Movie",
      date: "20 April",
      payment: "-AED 25000",
      receipt: "Pending",
      invoice: "Invoice",
    },
    {
      company: "World Studios",
      project: "Arabic Funny Movie",
      date: "20 April",
      payment: "AED 25000",
      receipt: "Receipt",
      invoice: "Invoice",
    },
    {
      company: "World Studios",
      project: "Arabic Funny Movie",
      date: "20 April",
      payment: "AED 25000",
      receipt: "Receipt",
      invoice: "Invoice",
    },
    {
      company: "World Studios",
      project: "Arabic Funny Movie",
      date: "20 April",
      payment: "-AED 25000",
      receipt: "Pending",
      invoice: "Invoice",
    },
    {
      company: "World Studios",
      project: "Arabic Funny Movie",
      date: "20 April",
      payment: "-AED 25000",
      receipt: "Pending",
      invoice: "Invoice",
    },
    {
      company: "World Studios",
      project: "Arabic Funny Movie",
      date: "20 April",
      payment: "-AED 25000",
      receipt: "Pending",
      invoice: "Invoice",
    },
    {
      company: "World Studios",
      project: "Arabic Funny Movie",
      date: "20 April",
      payment: "-AED 25000",
      receipt: "Pending",
      invoice: "Invoice",
    },
    {
      company: "World Studios",
      project: "Arabic Funny Movie",
      date: "20 April",
      payment: "AED 25000",
      receipt: "Receipt",
      invoice: "Invoice",
    },
    {
      company: "World Studios",
      project: "Arabic Funny Movie",
      date: "20 April",
      payment: "-AED 25000",
      receipt: "Pending",
      invoice: "Invoice",
    },
    {
      company: "World Studios",
      project: "Arabic Funny Movie",
      date: "20 April",
      payment: "AED 25000",
      receipt: "Receipt",
      invoice: "Invoice",
    },
    {
      company: "World Studios",
      project: "Arabic Funny Movie",
      date: "20 April",
      payment: "AED 25000",
      receipt: "Receipt",
      invoice: "Invoice",
    },
    {
      company: "World Studios",
      project: "Arabic Funny Movie",
      date: "20 April",
      payment: "-AED 25000",
      receipt: "Pending",
      invoice: "Invoice",
    },
    {
      company: "World Studios",
      project: "Arabic Funny Movie",
      date: "20 April",
      payment: "-AED 25000",
      receipt: "Pending",
      invoice: "Invoice",
    },
    {
      company: "World Studios",
      project: "Arabic Funny Movie",
      date: "20 April",
      payment: "-AED 25000",
      receipt: "Pending",
      invoice: "Invoice",
    },
    {
      company: "World Studios",
      project: "Arabic Funny Movie",
      date: "20 April",
      payment: "-AED 25000",
      receipt: "Pending",
      invoice: "Invoice",
    },
    {
      company: "World Studios",
      project: "Arabic Funny Movie",
      date: "20 April",
      payment: "AED 25000",
      receipt: "Receipt",
      invoice: "Invoice",
    },
    {
      company: "World Studios",
      project: "Arabic Funny Movie",
      date: "20 April",
      payment: "-AED 25000",
      receipt: "Pending",
      invoice: "Invoice",
    },
    {
      company: "World Studios",
      project: "Arabic Funny Movie",
      date: "20 April",
      payment: "AED 25000",
      receipt: "Receipt",
      invoice: "Invoice",
    },
    {
      company: "World Studios",
      project: "Arabic Funny Movie",
      date: "20 April",
      payment: "AED 25000",
      receipt: "Receipt",
      invoice: "Invoice",
    },
    {
      company: "World Studios",
      project: "Arabic Funny Movie",
      date: "20 April",
      payment: "-AED 25000",
      receipt: "Pending",
      invoice: "Invoice",
    },
    {
      company: "World Studios",
      project: "Arabic Funny Movie",
      date: "20 April",
      payment: "-AED 25000",
      receipt: "Pending",
      invoice: "Invoice",
    },
    {
      company: "World Studios",
      project: "Arabic Funny Movie",
      date: "20 April",
      payment: "-AED 25000",
      receipt: "Pending",
      invoice: "Invoice",
    },
    {
      company: "World Studios",
      project: "Arabic Funny Movie",
      date: "20 April",
      payment: "-AED 25000",
      receipt: "Pending",
      invoice: "Invoice",
    },
    {
      company: "World Studios",
      project: "Arabic Funny Movie",
      date: "20 April",
      payment: "AED 25000",
      receipt: "Receipt",
      invoice: "Invoice",
    },
    {
      company: "World Studios",
      project: "Arabic Funny Movie",
      date: "20 April",
      payment: "-AED 25000",
      receipt: "Pending",
      invoice: "Invoice",
    },
    {
      company: "World Studios",
      project: "Arabic Funny Movie",
      date: "20 April",
      payment: "AED 25000",
      receipt: "Receipt",
      invoice: "Invoice",
    },
    {
      company: "World Studios",
      project: "Arabic Funny Movie",
      date: "20 April",
      payment: "AED 25000",
      receipt: "Receipt",
      invoice: "Invoice",
    },
    {
      company: "World Studios",
      project: "Arabic Funny Movie",
      date: "20 April",
      payment: "-AED 25000",
      receipt: "Pending",
      invoice: "Invoice",
    },
    {
      company: "World Studios",
      project: "Arabic Funny Movie",
      date: "20 April",
      payment: "-AED 25000",
      receipt: "Pending",
      invoice: "Invoice",
    },
    {
      company: "World Studios",
      project: "Arabic Funny Movie",
      date: "20 April",
      payment: "-AED 25000",
      receipt: "Pending",
      invoice: "Invoice",
    },
    {
      company: "World Studios",
      project: "Arabic Funny Movie",
      date: "20 April",
      payment: "-AED 25000",
      receipt: "Pending",
      invoice: "Invoice",
    },
    {
      company: "World Studios",
      project: "Arabic Funny Movie",
      date: "20 April",
      payment: "AED 25000",
      receipt: "Receipt",
      invoice: "Invoice",
    },
    {
      company: "World Studios",
      project: "Arabic Funny Movie",
      date: "20 April",
      payment: "-AED 25000",
      receipt: "Pending",
      invoice: "Invoice",
    },
    {
      company: "World Studios",
      project: "Arabic Funny Movie",
      date: "20 April",
      payment: "AED 25000",
      receipt: "Receipt",
      invoice: "Invoice",
    },
    {
      company: "World Studios",
      project: "Arabic Funny Movie",
      date: "20 April",
      payment: "AED 25000",
      receipt: "Receipt",
      invoice: "Invoice",
    },
    {
      company: "World Studios",
      project: "Arabic Funny Movie",
      date: "20 April",
      payment: "-AED 25000",
      receipt: "Pending",
      invoice: "Invoice",
    },
    {
      company: "World Studios",
      project: "Arabic Funny Movie",
      date: "20 April",
      payment: "-AED 25000",
      receipt: "Pending",
      invoice: "Invoice",
    },
    {
      company: "World Studios",
      project: "Arabic Funny Movie",
      date: "20 April",
      payment: "-AED 25000",
      receipt: "Pending",
      invoice: "Invoice",
    },
    {
      company: "World Studios",
      project: "Arabic Funny Movie",
      date: "20 April",
      payment: "-AED 25000",
      receipt: "Pending",
      invoice: "Invoice",
    },
    {
      company: "World Studios",
      project: "Arabic Funny Movie",
      date: "20 April",
      payment: "AED 25000",
      receipt: "Receipt",
      invoice: "Invoice",
    },
    {
      company: "World Studios",
      project: "Arabic Funny Movie",
      date: "20 April",
      payment: "-AED 25000",
      receipt: "Pending",
      invoice: "Invoice",
    },
    {
      company: "World Studios",
      project: "Arabic Funny Movie",
      date: "20 April",
      payment: "AED 25000",
      receipt: "Receipt",
      invoice: "Invoice",
    },
    {
      company: "World Studios",
      project: "Arabic Funny Movie",
      date: "20 April",
      payment: "AED 25000",
      receipt: "Receipt",
      invoice: "Invoice",
    },
    {
      company: "World Studios",
      project: "Arabic Funny Movie",
      date: "20 April",
      payment: "-AED 25000",
      receipt: "Pending",
      invoice: "Invoice",
    },
    {
      company: "World Studios",
      project: "Arabic Funny Movie",
      date: "20 April",
      payment: "-AED 25000",
      receipt: "Pending",
      invoice: "Invoice",
    },
    {
      company: "World Studios",
      project: "Arabic Funny Movie",
      date: "20 April",
      payment: "-AED 25000",
      receipt: "Pending",
      invoice: "Invoice",
    },
    {
      company: "World Studios",
      project: "Arabic Funny Movie",
      date: "20 April",
      payment: "-AED 25000",
      receipt: "Pending",
      invoice: "Invoice",
    },
  ];

  const paginationStyle = `
    .pagination-custom {
      display: flex;
      gap: 10px;
      align-items: center;
      justify-content: center;
      margin-top: 20px;
      padding: 0;
      list-style: none;
    }

    .pagination-custom li {
      list-style: none;
    }

    .pagination-custom .page-btn {
      background-color: transparent;
      border: none;
      font-size: 16px;
      color: #333;
      width: 36px;
      height: 36px;
      border-radius: 50%;
      transition: 0.3s;
      cursor: pointer;
    }

    .pagination-custom .page-btn:hover {
      background-color: #f1f1f1;
    }

    .pagination-custom .page-btn.active {
      background-color: #e57c66;
      color: white;
      font-weight: bold;
    }

    .pagination-custom .page-ellipsis {
      font-size: 18px;
      color: #999;
      padding: 0 8px;
    }
  `;

  return (
    <div className="main-bg d-flex flex-column" style={{ height: "100vh" }}>
      <div
        className="bg-white rounded-3 m-5 d-flex flex-column shadow"
        style={{
          maxHeight: "640px",
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
        }}
      >
        <div className="py-3 ms-4">
          <h3 className="inter-font pb-1" style={{ fontSize: "20px" }}>
            My Earnings
          </h3>
        </div>

        <div
          className="py-3 ms-4"
          style={{ overflowY: "auto", flex: "1 1 auto" }}
        >
          <table className="table align-middle mb-0">
            <thead>
              <tr>
                <th style={{ fontSize: "16px", color: "#909090" }}>
                  Company Name
                </th>
                <th style={{ fontSize: "16px", color: "#909090" }}>Project</th>
                <th style={{ fontSize: "16px", color: "#909090" }}>Date</th>
                <th style={{ fontSize: "16px", color: "#909090" }}>Payments</th>
                <th style={{ fontSize: "16px", color: "#909090" }}>Receipt</th>
                <th style={{ fontSize: "16px", color: "#909090" }}>Invoice</th>
              </tr>
            </thead>
            <tbody>
              {hireProjects.map((item, index) => (
                <tr key={index}>
                  <td>
                    <div className="d-flex align-items-center gap-3 py-4">
                      <span className="inter-font" style={{ color: "#323232" }}>
                        {item.company}
                      </span>
                    </div>
                  </td>
                  <td style={{ color: "#959595" }}>{item.project}</td>
                  <td style={{ color: "#959595" }}>
                    {new Date(`${item.date} 2025`).toLocaleDateString("en-GB", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </td>
                  <td style={{ fontWeight: 500 }}>
                    <span
                      className="inter-font"
                      style={{
                        fontSize: "15px",
                        color: item.payment.startsWith("-")
                          ? "#DD4223"
                          : "rgba(54, 190, 92, 1)",
                      }}
                    >
                      {item.payment}
                    </span>
                  </td>
                  <td>
                    <button
                      className="btn border-0 inter-font d-flex justify-content-center align-items-center"
                      style={{
                        color:
                          item.receipt === "Pending" ? "#CD496D" : "#5F8D73",
                        backgroundColor:
                          item.receipt === "Pending" ? "#FCE1E8" : "#D3FDEA",
                        width: "85px",
                        height: "27px",
                        fontSize: "12px",
                      }}
                    >
                      <HiDownload className="me-1" /> {item.receipt}
                    </button>
                  </td>
                  <td>
                    <button className="btn border-0 inter-font d-flex justify-content-center align-items-center">
                      <HiOutlineDocumentText className="me-1" size={24} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="d-flex justify-content-center mt-4">
          <ul className="pagination-custom">
            <li>
              <button className="page-btn active">1</button>
            </li>
            <li>
              <button className="page-btn">2</button>
            </li>
            <li>
              <button className="page-btn">3</button>
            </li>
            <li>
              <button className="page-btn">4</button>
            </li>
            <li>
              <button className="page-btn">5</button>
            </li>
            <li>
              <span className="page-ellipsis">...</span>
            </li>
            <li>
              <button className="page-btn">26</button>
            </li>
            <li>
              <button className="page-btn">{`>`}</button>
            </li>
          </ul>
        </div>
      </div>

      <style>{paginationStyle}</style>
    </div>
  );
};

export default Earnings;
