// src/pages/profile.tsx
import PatientProfile from "./PatientProfile";
import DoctorProfile from "../components/DoctorProfile";
import { GetServerSideProps } from "next";

interface ProfileProps {
  userRole: "patient" | "doctor";
}

const Profile: React.FC<ProfileProps> = ({ userRole }) => {
  return (
    <div>
      {userRole === "patient" && <PatientProfile />}
      {userRole === "doctor" && <DoctorProfile />}
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  // Replace with your logic to determine the user role
  const userRole: "patient" | "doctor" = "patient"; // or 'doctor'

  return {
    props: {
      userRole,
    },
  };
};

export default Profile;
