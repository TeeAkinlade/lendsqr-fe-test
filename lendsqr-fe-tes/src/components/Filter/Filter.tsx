import React, { useState } from 'react';
import styles from './Filter.module.scss';

interface FilterProps {
  onFilterSubmit: (filters: Filters) => void;
}

export interface Filters {
  organization: string;
  username: string;
  email: string;
  date: string;
  phoneNumber: string;
  status: string;
}

const Filter = ({ onFilterSubmit }: FilterProps) => {
  const [loading, setLoading] = useState(false);

  const [filters, setFilters] = useState<Filters>({
    organization: '',
    username: '',
    email: '',
    date: '',
    phoneNumber: '',
    status: '',
  });
  const [isVisible, setIsVisible] = useState(true);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const updatedFilters = { ...filters, [name]: value };
    setFilters(updatedFilters);
  };

  const handleReset = () => {
    setFilters({
      organization: "",
      username: "",
      email: "",
      date: "",
      phoneNumber: "",
      status: "",
    });
    setIsVisible(false);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); 
    onFilterSubmit(filters);
    setLoading(true);
    setLoading(false);
    setIsVisible(false);
  };
  
  if (!isVisible) return null;

  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.container}>
        <label>Organization</label>
        <input
          type="text"
          name="organization"
          value={filters.organization}
          onChange={handleChange}
        />

        <label>Username</label>
        <input
          type="text"
          name="username"
          value={filters.username}
          onChange={handleChange}
        />

        <label>Email</label>
        <input
          type="email"
          name="email"
          value={filters.email}
          onChange={handleChange}
        />

        <label>Date</label>
        <input
          type="date"
          name="date"
          id='date'
          value={filters.date}
          onChange={handleChange}
        />

        <label>Phone Number</label>
        <input
          type="text"
          name="phoneNumber"
          value={filters.phoneNumber}
          onChange={handleChange}
        />

        <label>Status</label>
        <input
          type="text"
          name="status"
          value={filters.status}
          onChange={handleChange}
        />
      </div>
      <div className={styles.buttons}>
        <button onClick={handleReset}>Cancel</button>
        <button
          className={styles.filter}
          type="submit"
          disabled={loading}
        >
          {loading ? 'Loading...'  : "Filter"}
        </button>
      </div>
    </form>
  );
};

export default Filter;
