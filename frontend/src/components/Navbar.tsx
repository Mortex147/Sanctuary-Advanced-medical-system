// src/components/Navbar.tsx
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Navbar = () => {
  const [showQueue, setShowQueue] = useState(false);

  const handleMouseEnter = () => {
    setShowQueue(true);
  };

  const handleMouseLeave = () => {
    setShowQueue(false);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <Image src="/site pics/logo.png" alt="Logo" width={150} height={32} />
      </div>
      <div className="nav-links">
        <Link href="/">Home</Link>
        <div
          className="appointments-dropdown"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <Link href="/appointments">
            Appointments <FontAwesomeIcon icon={faChevronDown} />
          </Link>
          {showQueue && (
            <div className="dropdown">
              <Link href="/QueuePage">View Queue</Link>
            </div>
          )}
        </div>
        <Link href="/billing">Billing</Link>
        <Link href="/aboutus">About Us</Link>
        <Link href="/login">
          Login <FontAwesomeIcon icon={faUser} />
        </Link>
        <Link href="/PatientProfile">Profile</Link>

        <div
          className="appointments-dropdown"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <Link href="/DoctorProfile">
            Profiledoc <FontAwesomeIcon icon={faChevronDown} />
          </Link>
          {showQueue && (
            <div className="dropdown">
              <Link href="/PatientListPage">Patients list</Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
