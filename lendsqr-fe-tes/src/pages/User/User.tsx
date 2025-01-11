import { useEffect, useState } from "react";
import Card from "../../components/Card/Card";
import DashboardLayout from "../../layout";
import styles from "./User.module.scss";
import Icon1 from "../../assets/icons/dashboard/icon (1).png";
import Icon2 from "../../assets/icons/dashboard/icon (2).png";
import Icon3 from "../../assets/icons/dashboard/icon (3).png";
import Icon4 from "../../assets/icons/dashboard/icon (4).png";
import FilterImg from "../../assets/icons/dashboard/Group.png";
import More from "../../assets/icons/dashboard/ic-more-vert-18px.png";
import Eye from "../../assets/icons/dashboard/np_view_1214519_000000 1.png";
import BlackList from "../../assets/icons/dashboard/np_delete-friend_3248001_000000 1.png";
import Activate from "../../assets/icons/dashboard/np_user_2995993_000000 1.png";
import statusStyles from "../../styles/components/statusStyle.module.scss";
import Filter, { Filters } from "../../components/Filter/Filter";
import { useNavigate } from "react-router-dom";
import Loader from "../../components/Loader/Loader";

const cards = [
  { icon: Icon1, title: "Users", amount: "2,453" },
  { icon: Icon2, title: "Active Users", amount: "2,453" },
  { icon: Icon3, title: "Users with Loans", amount: "12,453" },
  { icon: Icon4, title: "Users with Savings", amount: "102,453" },
];

interface DataItem {
  organization: string;
  username: string;
  email: string;
  date: string;
  phoneNumber: string;
  status: string;
}

const User = () => {
  const [data, setData] = useState<DataItem[] | null>(null);
  const [filteredData, setFilteredData] = useState<DataItem[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [selectedItem, setSelectedItem] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(11);  
  const navigate = useNavigate()

  const [openFilters, setOpenFilters] = useState<{ [key: string]: boolean }>({
    organization: false,
    username: false,
    email: false,
    date: false,
    phoneNumber: false,
    status: false,
  });

  const [openActionRow, setOpenActionRow] = useState<number | null>(null);

  useEffect(() => {
    const mockApiUrl =
      "https://run.mocky.io/v3/2e6eaa83-ada0-41ad-9dcd-f25d24c3e17a";
  
    const fetchData = async () => {
      try {
        const response = await fetch(mockApiUrl);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
  
        const res: DataItem[] = await response.json();
  
        const duplicatedData = Array.from({ length: 500 }, (_, i) => {
          const item = res[i % res.length];
          return {
            ...item,
            id: i + 1,
            username: `${item.username}${i + 1}`,
          };
        });
  
        setData(duplicatedData);
        setFilteredData(duplicatedData);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
  
    fetchData();
  }, []);
  

  if (loading) return <Loader />;

  const handleFilterSubmit = (filters: Filters) => {
    const filtered =
      data?.filter((item) => {
        return (
          (filters.organization
            ? item.organization
                .toLowerCase()
                .includes(filters.organization.toLowerCase())
            : true) &&
          (filters.username
            ? item.username
                .toLowerCase()
                .includes(filters.username.toLowerCase())
            : true) &&
          (filters.email
            ? item.email.toLowerCase().includes(filters.email.toLowerCase())
            : true) &&
          (filters.date ? item.date === filters.date : true) &&
          (filters.phoneNumber
            ? item.phoneNumber.includes(filters.phoneNumber)
            : true) &&
          (filters.status
            ? item.status.toLowerCase().includes(filters.status.toLowerCase())
            : true)
        );
      }) || [];
    setFilteredData(filtered);
  };

  const toggleFilter = (key: string) => {
    setOpenFilters((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const toggleActionRow = (index: number) => {
    setOpenActionRow((prev) => (prev === index ? null : index));
  };

  const handleViewDetails = (item: DataItem) => {
    localStorage.setItem('selectedItem', JSON.stringify(item));
    navigate('/user-details');
  };
  
  const handleBlackList = (item: any) =>{
    setSelectedItem(item)
  }

  //pagination
  const paginatedData = filteredData.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  const totalPages = Math.ceil(filteredData.length / rowsPerPage);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const handleRowsPerPageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setRowsPerPage(Number(e.target.value));
    setCurrentPage(1);
  };

  console.log(selectedItem);
  return (
    <DashboardLayout>
      <div className={styles.dashboard}>
        <h1>Users</h1>
        <div className={styles.grid}>
          {cards.map((card, index) => (
            <Card
              key={index}
              photo={card.icon}
              title={card.title}
              amount={card.amount}
            />
          ))}
        </div>
        <div className={styles.root}>
          <div className={styles.overflow}>
            <div className={styles.inline}>
              <table>
                <thead>
                  <tr>
                    {["organization", "username", "email", "phoneNumber", "date", "status"].map((key) => (
                      <th key={key} scope="col">
                        <span>{key.charAt(0).toUpperCase() + key.slice(1)}</span>
                        <img
                          src={FilterImg}
                          alt="filter"
                          onClick={() => toggleFilter(key)}
                        />
                        {openFilters[key] && (
                          <div className={styles.filterComponent}>
                            <Filter onFilterSubmit={handleFilterSubmit} />
                          </div>
                        )}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {paginatedData.length > 0 ? (
                    paginatedData.map((item, index) => (
                      <tr key={index}>
                        <td>{item?.organization}</td>
                        <td>{item?.username}</td>
                        <td>{item?.email}</td>
                        <td>{item?.phoneNumber}</td>
                        <td>{item?.date}</td>
                        <td>
                          <span
                            className={statusStyles.statusCell}
                            data-status={item.status}
                          >
                            {item?.status}
                          </span>
                        </td>
                        <td>
                          <div className={styles.action}>
                            <div onClick={() => toggleActionRow(index)}>
                              <img src={More} alt="more" />
                            </div>
                            {openActionRow === index && (
                              <div className={styles.dropdown}>
                                <div className={styles.item} onClick={() => handleViewDetails(item)}>
                                  <img src={Eye} alt="view details" />
                                  <span>View Details</span>
                                </div>
                                <div className={styles.item} onClick={() => handleBlackList(item?.status)}>
                                  <img src={BlackList} alt="blacklist" />
                                  <span>Blacklist User</span>
                                </div>
                                <div className={styles.item}>
                                  <img src={Activate} alt="activate" />
                                  <span>Activate User</span>
                                </div>
                              </div>
                            )}
                          </div>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={7}>
                        No data found
                        <p>Error: {error}</p>
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className={styles.paginationContainer}>
          <div className={styles.rowsInfo}>
              <span>Showing</span>
              <select value={rowsPerPage} onChange={handleRowsPerPageChange}>
                {[20, 50, 100].map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              <span>out of {filteredData.length}</span>
          </div>
          <div className={styles.paginationControls}>
          <button
              className={styles.prevButton}
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              &lt;
            </button>

            <div className={styles.pageNumbers}>
              {[...Array(totalPages).keys()].slice(0,3).map((page) => {
                if (page <= 2 || page >= totalPages - 2 || (page >= currentPage - 1 && page <= currentPage + 1)) {
                  return (
                    <button
                      key={page}
                      className={`${styles.pageButton} ${currentPage === page + 1 ? styles.active : ""}`}
                      onClick={() => handlePageChange(page + 1)}
                    >
                      {page + 1}
                    </button>
                  );
                }
                return null;
              })}

              {totalPages > 5 && <span>...</span>}

              <button
                className={`${styles.pageButton} ${currentPage === totalPages ? styles.active : ""}`}
                onClick={() => handlePageChange(totalPages)}
              >
                {totalPages}
              </button>
            </div>

            <button
              className={styles.nextButton}
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              &gt;
            </button>

          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default User;
