import { useState, useEffect } from 'react';

interface EnrollmentData {
  enrolled: boolean;
  enrolledAt?: string;
  userData?: {
    firstName: string;
    lastName: string;
    email: string;
    countryCode: string;
    phoneNumber: string;
    country: string;
  };
}

export const useEnrollment = () => {
  const [enrollmentData, setEnrollmentData] = useState<EnrollmentData>({ enrolled: false });

  useEffect(() => {
    const stored = localStorage.getItem('userEnrollment');
    if (stored) {
      try {
        const data = JSON.parse(stored);
        setEnrollmentData(data);
      } catch (error) {
        console.error('Error parsing enrollment data:', error);
      }
    }
  }, []);

  const isEnrolled = enrollmentData.enrolled;

  const checkEnrollment = () => {
    const stored = localStorage.getItem('userEnrollment');
    if (stored) {
      try {
        const data = JSON.parse(stored);
        setEnrollmentData(data);
        return data.enrolled;
      } catch (error) {
        console.error('Error parsing enrollment data:', error);
        return false;
      }
    }
    return false;
  };

  return {
    isEnrolled,
    enrollmentData,
    checkEnrollment
  };
};