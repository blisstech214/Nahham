import React, { useEffect, useState } from "react";
import DashboardFooter from "./DashboardFooter";
import Navbar from "./Navbar";
import { HiOutlineDocumentText, HiDownload } from "react-icons/hi";
import { toast } from "react-toastify";
import ApiService from "../../services/ApiService";
import { Button, Col, Row } from "react-bootstrap";
import { ChevronLeft, ChevronRight } from "lucide-react";

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


  const [isLoading, setIsLoading] = useState(true);
  const [pagination, setPagination] = useState({
    total_pages: 1,
    current_page: 1,
  });
  const [earningsData, setEarningsData] = useState([]);

  const fetchEarningsData = async (page = 1) => {
    try {
      setIsLoading(true);
      const res = await ApiService.request({
        method: "GET",
        url: `getEarnings?page=${page}`,
      });

      const data = res.data;
      if (data.status) {
        console.log("data -", data.data.earnings);
        setEarningsData(data.data.earnings);
        setPagination(data.data.pagination);
      } else {
        toast.error(data.message);
      }
    } catch (err) {
      console.error("Fetch Job Error:", err);
      toast.error("Failed to fetch jobs.");
    } finally {
      setIsLoading(false);
    }
  };

  const handlePageChange = (newPage) => {
    if (
      newPage >= 1 &&
      newPage <= pagination.total_pages &&
      newPage !== pagination.current_page
    ) {
      fetchEarningsData(newPage);
    }
  };

  const { current_page, total_pages } = pagination;

  // Generate page numbers (for large datasets show 1,2,3,...,last)
  const getPages = () => {
    const pages = [];

    if (total_pages <= 5) {
      for (let i = 1; i <= total_pages; i++) {
        pages.push(i);
      }
    } else {
      pages.push(1);
      if (current_page > 3) {
        pages.push("...");
      }
      for (
        let i = Math.max(2, current_page - 1);
        i <= Math.min(total_pages - 1, current_page + 1);
        i++
      ) {
        pages.push(i);
      }
      if (current_page < total_pages - 2) {
        pages.push("...");
      }
      pages.push(total_pages);
    }

    return pages;
  };

  const pages = getPages();

  useEffect(() => {
    fetchEarningsData(1);
  }, []);

  function formatSingleDate(isoDate) {
    const date = new Date(isoDate);
    const day = date.getDate();
    const month = date.toLocaleString("default", { month: "short" }); // or "long" for full month name
    return `${day} ${month}`;
  }


  return (
    <div className="inter-font main-bg d-flex flex-column" style={{ height: "100vh" }}>
      <div
        className="inter-font bg-white rounded-3 m-5 d-flex flex-column shadow"
        style={{
          maxHeight: "640px",
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
        }}
      >
        <div className="inter-font py-3 ms-4">
          <h3 className="inter-font inter-font pb-1" style={{ fontSize: "20px" }}>
            My Earnings
          </h3>
        </div>

        <div
          className="inter-font py-3 ms-4"
          style={{ overflowY: "auto", flex: "1 1 auto" }}
        >
          {earningsData?.length === 0 ?
            <div className="inter-font text-center py-5">Data not found</div>
            :

            <table className="inter-font table align-middle mb-0">
              <thead>
                <tr>
                  <th style={{ fontSize: "16px", color: "#909090" }}>
                    Company Name
                  </th>
                  <th style={{ fontSize: "16px", color: "#909090", textAlign: 'center' }}>Project</th>
                  <th style={{ fontSize: "16px", color: "#909090" }}>Category Type</th>
                  <th style={{ fontSize: "16px", color: "#909090" }}>Date</th>
                  <th style={{ fontSize: "16px", color: "#909090" }}>Payments</th>
                  {/* <th style={{ fontSize: "16px", color: "#909090" }}>Receipt</th> */}
                  <th style={{ fontSize: "16px", color: "#909090" }}>Invoice</th>
                </tr>
              </thead>
              <tbody>
                {earningsData?.map((item, index) => (
                  <tr key={index}>
                    <td>
                      <div className="inter-font d-flex align-items-center gap-3 py-4">
                        <span className="inter-font inter-font" style={{ color: "#323232" }}>
                          {item?.project_id?.company_id?.company_name || "N/A"}
                        </span>
                      </div>
                    </td>
                    <td style={{ color: "#959595" }}>{item?.project_id?.title}</td>
                    <td style={{ color: "#959595" }}>{item?.job_type}</td>
                    <td style={{ color: "#959595" }}>
                      {formatSingleDate(item?.start_date)}
                    </td>
                    <td style={{ fontWeight: 500 }}>
                      <span
                        className="inter-font inter-font"
                        style={{
                          fontSize: "15px",
                          color: 'rgba(54, 190, 92, 1)'
                          //   ? "#DD4223"
                          //   : "rgba(54, 190, 92, 1)",
                        }}
                      >
                        {item.total_amount} AED
                      </span>
                    </td>
                    {/* <td>
                      <button
                        className="inter-font btn border-0 inter-font d-flex justify-content-center align-items-center"
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
                        <HiDownload className="inter-font me-1" /> {item.receipt}
                      </button>
                    </td> */}
                    <td>
                      <button className="inter-font btn border-0 inter-font d-flex justify-content-center align-items-center">
                        <HiOutlineDocumentText className="inter-font me-1" size={24} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          }
        </div>

        <div className="inter-font d-flex justify-content-center my-5">
          <Row className="inter-font mt-4">
            <Col className="inter-font d-flex justify-content-center align-items-center gap-5 flex-wrap inter-font">
              {/* Pagination Numbers */}
              <Button
                size="sm"
                variant="link"
                disabled={current_page === 1}
                onClick={() => handlePageChange(current_page - 1)}
                style={{
                  width: "36px",
                  height: "36px",
                  padding: 0,
                  borderRadius: "50%",
                  backgroundColor: "#E46D54",
                  color: "#fff",
                  border: "none",
                }}
              >
                <ChevronLeft size={18} />
              </Button>

              {pages.map((page, index) => (
                <Button
                  key={index}
                  size="sm"
                  variant={page === current_page ? "danger" : "link"}
                  style={{
                    borderRadius: "50%",
                    width: "36px",
                    height: "36px",
                    padding: 0,
                    backgroundColor:
                      page === current_page ? "#E46D54" : "transparent",
                    color: page === current_page ? "#fff" : "#666",
                    fontWeight: page === current_page ? "600" : "400",
                    border: "none",
                    fontSize: "14px",
                  }}
                  disabled={page === "..."}
                  onClick={() => page !== "..." && handlePageChange(page)}
                >
                  {page}
                </Button>
              ))}

              {/* Next Arrow */}
              <Button
                size="sm"
                variant="link"
                disabled={current_page === total_pages}
                onClick={() => handlePageChange(current_page + 1)}
                style={{
                  width: "36px",
                  height: "36px",
                  padding: 0,
                  borderRadius: "50%",
                  backgroundColor: "#E46D54",
                  color: "#fff",
                  border: "none",
                }}
              >
                <ChevronRight size={18} />
              </Button>

              {/* View All Button */}
              <Button
                size="sm"
                style={{
                  backgroundColor: "#E46D54",
                  border: "none",
                  padding: "6px 20px",
                  borderRadius: "10px",
                  color: "#fff",
                  marginLeft: "10px",
                }}
              // onClick={handleViewAll}
              >
                View All
              </Button>
            </Col>
          </Row>
        </div>
      </div>

    </div>
  );
};

export default Earnings;
