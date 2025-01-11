import Card from "../../components/Card/Card";
import DashboardLayout from "../../layout";
import styles from "./Dashboard.module.scss";
import Icon1 from "../../assets/icons/dashboard/icon (1).png";
import Icon2 from "../../assets/icons/dashboard/icon (2).png";
import Icon3 from "../../assets/icons/dashboard/icon (3).png";
import Icon4 from "../../assets/icons/dashboard/icon (4).png";
import More from "../../assets/icons/dashboard/ic-more-vert-18px.png";
import Barchart from "../../components/Bar-chart";
import Piechart from "../../components/Pie-Chart";

const cards = [
  { icon: Icon1, title: "Users", amount: "2,453" },
  { icon: Icon2, title: "Active Users", amount: "2,453" },
  { icon: Icon3, title: "Users with Loans", amount: "12,453" },
  { icon: Icon4, title: "Users with Savings", amount: "102,453" },
];

const data = [
    { "organization": "Lendsqr", "username": "Adedeji", "email": "adedeji@lendsqr.com", "phoneNumber": "0807890372", "date": "May 15, 2020 10:00 AM", "amount": "20,000" },
    { "organization": "Irorun", "username": "Debby Ogana", "email": "debby2@irorun.com", "phoneNumber": "08160780928", "date": "Apr 30, 2020 10:00 AM", "amount": "53,000" },
    { "organization": "Lendstar", "username": "Grace Effiom", "email": "grace@lendstar.com", "phoneNumber": "07060780922", "date": "Apr 30, 2020 10:00 AM", "amount": "4,500" },
    { "organization": "Lendsqr", "username": "Tosin Dokunmu", "email": "tosin@lendsqr.com", "phoneNumber": "07003309226", "date": "May 15, 2020 10:00 AM", "amount": "250,000" },
    { "organization": "Lendsqr", "username": "Grace Effiom", "email": "adedeji@lendsqr.com", "phoneNumber": "07060780922", "date": "May 15, 2020 10:00 AM", "amount": "90,060" },
    { "organization": "Lendsqr", "username": "Adedeji", "email": "adedeji@lendsqr.com", "phoneNumber": "0807890372", "date": "May 15, 2020 10:00 AM", "amount": "64,000" },
    { "organization": "Lendsqr", "username": "Grace Effiom", "email": "adedeji@lendsqr.com", "phoneNumber": "0807890372", "date": "May 15, 2020 10:00 AM", "amount": "700,000" },
    { "organization": "Lendsqr", "username": "Adedeji", "email": "adedeji@lendsqr.com", "phoneNumber": "0807890372", "date": "May 15, 2020 10:00 AM", "amount": "30,000" },
    { "organization": "Lendsqr", "username": "Grace Effiom", "email": "adedeji@lendsqr.com", "phoneNumber": "0807890372", "date": "May 15, 2020 10:00 AM", "amount": "36,010" },
    { "organization": "Lendsqr", "username": "Grace Effiom", "email": "adedeji@lendsqr.com", "phoneNumber": "0807890372", "date": "May 15, 2020 10:00 AM", "amount": "70,700" },
    { "organization": "Lendsqr", "username": "Tosin Dokunmu", "email": "adedeji@lendsqr.com", "phoneNumber": "0807890372", "date": "May 15, 2020 10:00 AM", "amount": "45,785" },
    ]


const Dashboard = () => {

  return (
    <DashboardLayout>
        <div className={styles.dashboard}>
            <h1>Dashboard</h1>
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
            <div className={styles.chart}>
                <div className={styles.bar}>
                    <Barchart />
                </div>
                <div className={styles.bar}>
                    <Piechart />
                </div>
            </div>
            <div className={styles.root}>
          <div className={styles.overflow}>
            <div className={styles.inline}>
                <p className={styles.payment}>Recent Payment</p>
              <table>
                <thead>
                  <tr>
                    {["organization", "username", "amount", "phoneNumber", "email", "date", ""].map((key) => (
                      <th key={key} scope="col">
                        <span>{key.charAt(0).toUpperCase() + key.slice(1)}</span>                        
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {data.length > 0 ? (
                    data.map((item, index) => (
                      <tr key={index}>
                        <td>{item?.organization}</td>
                        <td>{item?.username}</td>
                        <td>₦{item?.amount.toLocaleString()}</td>
                        <td>{item?.phoneNumber}</td>
                        <td>{item?.email}</td>
                        <td>{item?.date}</td>
                        <td>
                        <img src={More} alt="more" />
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={7}>
                        No data found
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        </div>
    </DashboardLayout>
  );
};

export default Dashboard;
