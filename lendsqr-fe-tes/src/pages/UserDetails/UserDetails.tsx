import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import DashboardLayout from "../../layout";
import styles from "./UserDetails.module.scss";
import Arrow from '../../assets/icons/dashboard/Vector (2).png';
import Avatar from '../../assets/icons/dashboard/avatar.png';
import Star from '../../assets/icons/dashboard/Vector (3).png';
import Star2 from '../../assets/icons/dashboard/np_star_1171151_000000 1.png';

const tabs = [
    { id: "general", label: "General Details" },
    { id: "documents", label: "Documents" },
    { id: "bank-details", label: "Bank Details" },
    { id: "loans", label: "Loans" },
    { id: "savings", label: "Savings" },
    { id: "app-and-system", label: "App and System" },
  ];

  
const UserDetails = () => {
    const [loading, setLoading] = useState(false)
    const [uniqueId, setUniqueId] = useState<string>("");
    const [activeTab, setActiveTab] = useState("general");
    const [accountNumber, setAccountNumber] = useState<string>("");
    const navigate = useNavigate();

    const selectedItem: UserDetails | null = JSON.parse(localStorage.getItem("selectedItem") || 'null');

    useEffect(() =>{
        const handleGenerateId = () => {
            const id = generateUniqueId(selectedItem?.organization, 10);
            setUniqueId(id);
          };
        
          const generateUniqueId = (organization: string | undefined, length: number = 10) => {
            let prefix = "LSR"
            if (organization === "Lendsqr") {
              prefix = "LSQ";
            } else if (organization === "Irorun") {
              prefix = "IRN";
            }
        
            const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
            let result = prefix;
            for (let i = 0; i < length - prefix.length; i++) {
              result += characters.charAt(Math.floor(Math.random() * characters.length));
            }
            return result;
        }

          handleGenerateId()
    }, [])

    useEffect(() => {
        const handleGenerateAccountNumber = () => {
            const newAccountNumber = generateAccountNumber();
            setAccountNumber(newAccountNumber);
            };
        
            const generateAccountNumber = (): string => {
            const organization = selectedItem?.organization;
        
            const digits = "0123456789";
            let accountNumber = "";
            for (let i = 0; i < 10; i++) {
                accountNumber += digits.charAt(Math.floor(Math.random() * digits.length));
            }
        
            const suffix =
                organization === "Lendsqr"
                ? "/Polaris"
                : organization === "Irorun"
                ? "/Providus"
                : "/Diamond";
        
            return `${accountNumber}${suffix}`;
            };
        
            handleGenerateAccountNumber();
    }, [])

    const handleGoBack = () => {
        navigate(-1);
      };

    if (!selectedItem) {
        return <p>No user selected</p>;
    }
  return (
    <DashboardLayout>
        <section className={styles.container}>
            <div className={styles.users}>
                <img src={Arrow} alt="arrow" onClick={handleGoBack} />
                <span>Back to Users</span>
            </div>
            <div className={styles.details}>
                <h1>User Details</h1>
                <div className={styles.buttons}>
                    <button className={styles.blackList}
                        disabled={loading}

                    >
                        {loading ? 'Blacklisting...'  : "Blacklist User"}
                    </button>
                    <button
                        className={styles.activate}
                        disabled={loading}
                    >
                        {loading ? 'Activating...'  : "Activate User"}
                    </button>
                </div>
            </div>
            <div className={styles.subContainer}>
                <div className={styles.info}>
                    <div className={styles.avatar}>
                        <img src={Avatar} alt="avatar" />
                        <div className={styles.avatarInfo}>
                            <h1>{selectedItem?.username}</h1>
                            <p>{uniqueId}</p>
                        </div>
                    </div>
                    <div className={styles.line}/>
                    <div className={styles.flex}>
                        <div className={styles.tier}>
                            <p>User’s Tier</p>
                            <div className={styles.stars}>
                                <img src={Star} alt="star" />
                                <img src={Star2} alt="star" />
                                <img src={Star2} alt="star" />
                            </div>
                        </div>
                        <div className={styles.line}/>
                        <div className={styles.account}>
                            <h3>₦200,000.00</h3>
                            <p>{accountNumber}</p>
                        </div>
                    </div>
                </div>
                <div className={styles.list}>
                    <div className={styles.tabs}>
                        {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            className={`${styles.tabItem} ${activeTab === tab.id ? styles.active : ""}`}
                            onClick={() => setActiveTab(tab.id)}
                        >
                            {tab.label}
                        </button>
                        ))}
                    </div>
                </div> 
            </div>
            <div className={styles.wrapper}>
                <div className={styles.personalInfo}>
                    <h3>Personal Information</h3>
                    <div className={styles.grid}>
                        {selectedItem?.personalInformation && selectedItem?.personalInformation?.map((item, index) => (
                            <div className="" key={index}>
                                <h4>{item?.title}</h4>
                                {item?.subItems.map((item, index) =>(
                                    <div className="" key={index}>
                                        <h2>{item?.title}</h2>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                    <div className={styles.line2}/>
                </div>
                <div className={styles.employment}>
                    <h3>Education and Employment</h3>
                    <div className={styles.grid}>
                        {selectedItem?.employment && selectedItem?.employment?.map((item, index) => (
                            <div className="" key={index}>
                                <h4>{item?.title}</h4>
                                {item?.subItems.map((item, index) =>(
                                    <div className="" key={index}>
                                        <h2>{item?.title}</h2>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                    <div className={styles.line2}/>
                </div>
                <div className={styles.social}>
                    <h3>Social</h3>
                    <div className={styles.grid}>
                        {selectedItem?.social && selectedItem?.social?.map((item, index) => (
                            <div className="" key={index}>
                                <h4>{item?.title}</h4>
                                {item?.subItems.map((item, index) =>(
                                    <div className="" key={index}>
                                        <h2>{item?.title}</h2>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                    <div className={styles.line2}/>
                </div>
                <div className={styles.guarantor}>
                    <h3>Guarantor</h3>
                    <div className={styles.grid}>
                        {selectedItem?.Guarantor && selectedItem?.Guarantor?.map((item, index) => (
                            <div key={index}>
                                <h4>{item?.title}</h4>
                                {item?.subItems.map((item, index) =>(
                                    <div className="" key={index}>
                                        <h2>{item?.title}</h2>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                    <div className={styles.line2}/>
                </div>
                <div className={styles.guarantor}>
                    <p className={styles.none}>.    </p>
                    <div className={styles.grid}>
                        {selectedItem?.Guarantor && selectedItem?.Guarantor?.map((item, index) => (
                            <div className="" key={index}>
                                <h4>{item?.title}</h4>
                                {item?.subItems.map((item, index) =>(
                                    <div className="" key={index}>
                                        <h2>{item?.title}</h2>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    </DashboardLayout>
  );
};

export default UserDetails;
