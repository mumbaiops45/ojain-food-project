// ✅ Full Name
export const validateName = (name) => {
  const value = name?.trim();

  if (!value) return "Name is required";

  if (value.length < 3) {
    return "Minimum 3 characters required";
  }

  if (!/^[A-Za-z\s]+$/.test(value)) {
    return "Only letters allowed";
  }

  return "";
};

// ✅ Email
export const validateEmail = (email) => {
  const value = email?.trim();

  if (!value) return "Email is required";

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
    return "Enter valid email";
  }

  return "";
};

// ✅ Mobile
export const validateMobile = (mobile) => {
  const value = mobile?.trim();

  if (!value) return "Mobile number required";

  if (!/^[6-9]\d{9}$/.test(value)) {
    return "Enter valid 10-digit Indian mobile number";
  }

  return "";
};

// ✅ Password
export const validatePassword = (password) => {
  if (!password) return "Password required";

  if (password.length < 6) {
    return "Minimum 6 characters required";
  }

  // strong password
  if (
    !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).+$/.test(password)
  ) {
    return "Password must contain uppercase, lowercase, number & special character";
  }

  return "";
};

// ✅ Bank Account Number
export const validateBankAccount = (accountNumber) => {
  const value = accountNumber?.trim();

  if (!value) return "Bank account number is required";

  if (!/^\d{9,18}$/.test(value)) {
    return "Enter valid account number";
  }

  return "";
};

// ✅ IFSC
export const validateIfsc = (ifsc) => {
  const value = ifsc?.trim().toUpperCase();

  if (!value) return "IFSC code is required";

  if (!/^[A-Z]{4}0[A-Z0-9]{6}$/.test(value)) {
    return "Invalid IFSC code";
  }

  return "";
};

// ✅ Description
export const validateDescription = (description) => {
  if (!description) return "";

  const value = description.trim();

  if (value.length > 500) {
    return "Maximum 500 characters allowed";
  }

  if (/\s{2,}/.test(value)) {
    return "Multiple spaces not allowed";
  }

  return "";
};