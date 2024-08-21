import React, { useEffect, useState } from "react";
import { getCarData } from "../data/carData";
import CarCard from "./CarCard";
import { Button } from "../components/ui/button";

const ITEMS_PER_PAGE = 9;

const PaginationControls = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className="flex mb-5 justify-center items-center space-x-2 mt-4">
      <Button
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Previous
      </Button>
      <span>
        Page {currentPage} of {totalPages}
      </span>
      <Button
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </Button>
    </div>
  );
};

const Cars = () => {
  const [allCars, setAllCars] = useState([]);
  const [filteredCars, setFilteredCars] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const data = await getCarData();
      setAllCars(data);
      setFilteredCars(data);
      setTotalPages(Math.ceil(data.length / ITEMS_PER_PAGE));
    };
    fetchData();
  }, []);

  useEffect(() => {
    const filtered = allCars.filter((car) =>
      car.NameMMT.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredCars(filtered);
    setTotalPages(Math.ceil(filtered.length / ITEMS_PER_PAGE));
    setCurrentPage(1);
  }, [searchTerm, allCars]);

  const getCurrentPageData = () => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    return filteredCars.slice(startIndex, endIndex);
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    window.scrollTo(0, 0); // Scroll to top when page changes
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div>
      <div className="justify-center text-right">
        <h1 className="text-3xl font-bold text-center text-red-500 mb-8">
          Browse Cars
        </h1>
        <input
          type="text"
          className="mr-10 bg-slate-100 rounded-lg w-64 h-7 text-center"
          placeholder="Search for a car"
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {getCurrentPageData().map((car) => (
          <CarCard key={car.Cid} car={car} />
        ))}
      </div>
      <PaginationControls
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default Cars;
